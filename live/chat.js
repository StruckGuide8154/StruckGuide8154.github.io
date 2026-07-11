// Live-dealer chat for the stream-viewer (classic <script>).
//
// Auth: aggregate.html exchanges the single-use launch token for a durable
// authenticated player session (window.AGG.userSid()). Each chat mints a
// per-table guest session for the controller name + a fallback bearer, then
// tries to enter that table under the shared account session — succeeding →
// you post as your real account (window.AGG.userNick()); failing → guest.
// The returned sid IS the bearer for chat calls. It keeps that token alive
// (TryRefreshToken every 45s) and, on any session error, transparently
// re-mints and retries. All proxy access is via window.AGG.
(function () {
  'use strict';

  // INVALID_SESSION_TOKEN(23), PLAYER_SESSION_EXPIRED(63) → re-mint triggers.
  var SESSION_ERRORS = [23, 63];

  // Chat always talks under this partner id — for reading + sending messages,
  // and for the session it mints — regardless of the viewer's partner box.
  var CHAT_PARTNER_ID = 18772737;
  function chatPartnerId() {
    return Number(window.AGG && window.AGG.chatPartnerId && window.AGG.chatPartnerId()) || CHAT_PARTNER_ID;
  }

  // One guest nickname per page load, reused so the dealer/others see it stable.
  var nick = 'Guest' + Math.floor(1000 + Math.random() * 9000);

  function errText(e) {
    if (!e) return 'error';
    return e.ErrorMessage || e.message || (e.responseInfo && e.responseInfo.ErrorMessage) ||
      (typeof e === 'string' ? e : 'error');
  }
  function isSessionErr(e) {
    if (!e) return false;
    if (e.ErrorCode != null && SESSION_ERRORS.indexOf(e.ErrorCode) >= 0) return true;
    return /INVALID_SESSION|INVALID_TOKEN|SESSION_EXPIRED|EXPIRED|NOT.?AUTHENTICAT/i.test(errText(e));
  }
  function P(v) { try { return Promise.resolve(v); } catch (e) { return Promise.reject(e); } }

  function mount(containerEl, opts) {
    opts = opts || {};
    var tableId = opts.tableId;
    var title = opts.title || ('table ' + tableId);
    var destroyed = false;

    // --- DOM ---------------------------------------------------------------
    containerEl.innerHTML = '';
    var head = document.createElement('div');
    head.className = 'head';
    var titleSpan = document.createElement('span');
    titleSpan.textContent = title;
    var tok = document.createElement('span');
    tok.style.fontWeight = '400';
    tok.style.fontSize = '11px';
    tok.style.color = '#9a9';
    head.appendChild(titleSpan);
    head.appendChild(tok);

    var msgs = document.createElement('div');
    msgs.className = 'msgs';

    var row = document.createElement('div');
    row.className = 'row';
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'message…';
    input.autocomplete = 'off';
    var sendBtn = document.createElement('button');
    sendBtn.textContent = 'Send';
    row.appendChild(input);
    row.appendChild(sendBtn);

    containerEl.appendChild(head);
    containerEl.appendChild(msgs);
    containerEl.appendChild(row);

    function setTok(t) { tok.textContent = t; }

    // --- message list ------------------------------------------------------
    var byId = {}, order = [];
    function nearBottom() { return msgs.scrollHeight - msgs.scrollTop - msgs.clientHeight < 40; }
    function scrollDown() { msgs.scrollTop = msgs.scrollHeight; }

    function renderMsg(m) {
      var div = document.createElement('div');
      div.className = 'msg';
      var who = document.createElement('span');
      who.className = 'who';
      who.textContent = m.NickName || 'Guest';
      div.appendChild(who);
      div.appendChild(document.createTextNode(m.Body == null ? '' : String(m.Body)));
      return div;
    }
    function sysLine(text) {
      var div = document.createElement('div');
      div.className = 'msg';
      div.style.color = '#888';
      div.style.fontStyle = 'italic';
      div.textContent = text;
      return div;
    }
    function repaint() {
      var stick = nearBottom();
      msgs.innerHTML = '';
      for (var i = 0; i < order.length; i++) {
        var m = byId[order[i]];
        if (m && m.__sys) msgs.appendChild(sysLine(m.Body));
        else if (m) msgs.appendChild(renderMsg(m));
      }
      if (stick) scrollDown();
    }
    var sysSeq = 0;
    function addSystem(text) {
      var id = 'sys:' + (++sysSeq);
      byId[id] = { Id: id, Body: text, __sys: true };
      order.push(id);
      repaint();
    }
    function merge(list) {
      if (!list || !list.length) return;
      for (var i = 0; i < list.length; i++) {
        var m = list[i];
        if (!m) continue;
        var id = m.Id != null ? m.Id : ('k:' + (m.NickName || '') + ':' + (m.Date || ''));
        if (byId[id] == null) order.push(id);
        byId[id] = m;
      }
      repaint();
    }

    // --- session ----------------------------------------------------------
    var sid = '';            // per-table GUEST session (fallback bearer)
    var useUser = false;     // true once the authenticated session is active here
    var minting = null;      // in-flight mint (dedupe concurrent re-mints)

    // The authenticated player session (window.AGG.userSid) is the real-account
    // bearer, shared across all tables. Prefer it when this table accepted it.
    function currentSid() {
      var us = (window.AGG.userSid && window.AGG.userSid()) || '';
      return (useUser && us) ? us : sid;
    }
    function hdr() { var s = currentSid(); return s ? window.AGG.headers({ sid: s }) : window.AGG.headers(); }

    // 1) Mint a per-table GUEST session (yields this table's GameControllerName
    //    and a fallback sid). 2) Activate the table for the guest session.
    // 3) If we have an authenticated player session, try to activate THIS table
    //    under it too — on success chat posts as you; otherwise stay guest.
    function mint() {
      if (minting) return minting;
      var userSid = (window.AGG.userSid && window.AGG.userSid()) || '';
      setTok(userSid ? '· entering as you…' : '· minting guest session…');
      var initData = { Table: { TableId: tableId }, PlatformType: '0', PartnerDomain: 'https://duel.com', PlayerIp: '127.0.0.1' };
      var p = P(window.AGG.command(
        'post',
        { langId: 'en', partnerId: chatPartnerId(), controller: 'Application', method: 'InitSession' },
        null,
        initData,
        window.AGG.headers()))
        .then(function (res) {
          var gsid = res && res.Token;
          var ctrl = res && res.Table && res.Table.GameControllerName;
          if (!gsid) { minting = null; setTok('· no token returned'); return ''; }
          sid = gsid; useUser = false;
          setTok('· entering table…');
          if (!ctrl) { minting = null; setTok('· guest ✓ ' + gsid.slice(0, 8) + '…'); return sid; }
          // Activate the table for the guest session (Player methods need this).
          return P(window.AGG.command(
            'get',
            { langId: 'en', partnerId: chatPartnerId(), controller: ctrl, method: 'GetStartupInfo' },
            { tableId: tableId }, null, window.AGG.headers({ sid: gsid })))['catch'](function () {})
            .then(function () {
              if (!userSid) { minting = null; setTok('· guest ✓ ' + gsid.slice(0, 8) + '…'); return sid; }
              // Enter this table under the authenticated player session. This is
              // best-effort, exactly like blast.js's enterTable: some tables
              // reject the enter but still accept a post under your account, so
              // we post as YOU whenever we have an account session — that's what
              // makes Multi-send able to write to any table.
              return P(window.AGG.command(
                'get',
                { langId: 'en', partnerId: chatPartnerId(), controller: ctrl, method: 'GetStartupInfo' },
                { tableId: tableId }, null, window.AGG.headers({ sid: userSid })))['catch'](function () {})
                .then(function () {
                  useUser = true;
                  minting = null;
                  setTok('· you ✓ ' + userSid.slice(0, 8) + '…');
                  return userSid;
                });
            });
        }, function (e) {
          minting = null;
          setTok('· mint failed: ' + errText(e));
          throw e;
        });
      minting = p;
      return p;          // always return the promise (don't rely on the nulled var)
    }

    // Run a Player-controller chat command; re-mint + retry once on session error.
    function call(method, query, data) {
      var verb = data ? 'post' : 'get';
      function once() {
        return P(window.AGG.command(
          verb,
          { langId: 'en', partnerId: chatPartnerId(), controller: 'Player', method: method },
          query, data || null, hdr()));
      }
      return once()['catch'](function (e) {
        if (isSessionErr(e)) return mint().then(once);
        throw e;
      });
    }

    // Keep the GUEST session alive. When posting under the authenticated player
    // session, aggregate.html refreshes it centrally — nothing to do here.
    function refresh() {
      if (destroyed || useUser || !sid) return;
      P(window.AGG.command(
        'get',
        { langId: 'en', partnerId: chatPartnerId(), controller: 'Player', method: 'TryRefreshToken' },
        { tableId: tableId, mode: 0 }, null, window.AGG.headers({ sid: sid })))
        .then(function (res) {
          if (res && res.Token) { sid = res.Token; setTok('· guest ✓ ' + sid.slice(0, 8) + '…'); }
        }, function () { return mint(); })['catch'](function () {});
    }

    // --- read (poll) -------------------------------------------------------
    var pollTimer = null, refreshTimer = null, polledOnce = false;
    function poll() {
      if (destroyed) return;
      call('GetChatMessageList', { lastMessageId: 0, tableId: tableId }, null)
        .then(function (res) {
          if (destroyed) return;
          var list = Array.isArray(res) ? res
            : (res && (res.MessageList || res.Messages || res.ChatMessageList || res.Body));
          if (Array.isArray(list)) merge(list);
        }, function (e) {
          if (!destroyed && !polledOnce) addSystem('chat read: ' + errText(e));
        })['catch'](function () {}).then(function () { polledOnce = true; });
    }

    // --- send --------------------------------------------------------------
    var sending = false;
    function send() {
      if (sending) return;
      var text = input.value.trim();
      if (!text) return;
      var un = (useUser && window.AGG.userNick && window.AGG.userNick()) || '';
      var data = {
        NickName: un || nick,
        Date: new Date().toISOString(),
        Body: text,
        ToSupport: false,
        Censored: false
      };
      sending = true;
      sendBtn.disabled = true;
      call('WriteMessageToChat', { tableId: tableId }, data)
        .then(function () {
          if (!destroyed) input.value = '';        // clear only on success
        }, function (e) {
          if (!destroyed) addSystem('send failed: ' + errText(e));
        })['catch'](function () {})
        .then(function () { sending = false; sendBtn.disabled = false; });
    }
    sendBtn.addEventListener('click', send);
    input.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.keyCode === 13) { ev.preventDefault(); send(); }
    });

    // --- start: mint our token, then read on an interval + keep it alive ----
    (function start() {
      mint()['catch'](function () { /* still try, poll will re-mint on session error */ })
        .then(function () {
          if (destroyed) return;
          poll();
          pollTimer = setInterval(poll, 3000);
          refreshTimer = setInterval(refresh, 45000);
        });
    })();

    return {
      destroy: function () {
        destroyed = true;
        if (pollTimer != null) { try { clearInterval(pollTimer); } catch (_) {} pollTimer = null; }
        if (refreshTimer != null) { try { clearInterval(refreshTimer); } catch (_) {} refreshTimer = null; }
        try { containerEl.innerHTML = ''; } catch (_) {}
      }
    };
  }

  window.StreamChat = { mount: mount };
})();
