/* @ds-bundle: {"format":3,"namespace":"DuelDesignSystem_908732","components":[{"name":"BalancePill","sourcePath":"components/casino/BalancePill.jsx"},{"name":"GameTile","sourcePath":"components/casino/GameTile.jsx"},{"name":"GuestCard","sourcePath":"components/casino/GuestCard.jsx"},{"name":"LeaderboardRow","sourcePath":"components/casino/LeaderboardRow.jsx"},{"name":"MultiplierTag","sourcePath":"components/casino/MultiplierTag.jsx"},{"name":"ReferralCodeCard","sourcePath":"components/casino/ReferralCodeCard.jsx"},{"name":"StatTile","sourcePath":"components/casino/StatTile.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"}],"sourceHashes":{"components/casino/BalancePill.jsx":"05ac17a01589","components/casino/GameTile.jsx":"cf58229adb3b","components/casino/GuestCard.jsx":"509af7bae76e","components/casino/LeaderboardRow.jsx":"9118fccdcd2f","components/casino/MultiplierTag.jsx":"e98905c76f64","components/casino/ReferralCodeCard.jsx":"823aa90b605a","components/casino/StatTile.jsx":"f3086a1daa2d","components/core/Avatar.jsx":"673d80585cf7","components/core/Badge.jsx":"385b071f1636","components/core/Button.jsx":"4ae2d2ce5249","components/core/Card.jsx":"ffeb957b288b","components/core/Input.jsx":"bbacecc07f74","components/core/Switch.jsx":"46f764202c31","components/core/Tabs.jsx":"145aa770f367","ui_kits/duel-casino/app.jsx":"8bf9c2d0e22a","ui_kits/duel-casino/chrome.jsx":"4ea40db287a9","ui_kits/duel-casino/screens.jsx":"9b2bcdde71a1","ui_kits/rooted-referral/app.jsx":"ba831bcc14ac","ui_kits/rooted-referral/dashboard.jsx":"96ca1fa0d175","ui_kits/rooted-referral/landing.jsx":"04bc9ae8b8be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DuelDesignSystem_908732 = window.DuelDesignSystem_908732 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/casino/BalancePill.jsx
try { (() => {
/**
 * Crypto balance pill from the app header — coin glyph, mono amount, chevron.
 * `tone="money"` glows green for positive balances.
 */
function BalancePill({
  amount = '0.89',
  symbol = '$',
  tone = 'default',
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--control-md)',
      padding: '0 8px 0 12px',
      background: hover ? 'var(--surface-hover)' : 'var(--surface-card-2)',
      border: 'var(--hairline)',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'background var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      flex: 'none',
      background: 'var(--green-500)',
      color: 'var(--navy-950)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 900,
      fontSize: 11,
      fontFamily: 'var(--font-ui)',
      boxShadow: tone === 'money' ? 'var(--glow-money)' : 'none'
    }
  }, symbol), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--mono-md)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, symbol, amount), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontSize: 11
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { BalancePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/casino/BalancePill.jsx", error: String((e && e.message) || e) }); }

// components/casino/GameTile.jsx
try { (() => {
const CAT = {
  purple: 'var(--cat-purple)',
  gold: 'var(--cat-gold)',
  teal: 'var(--cat-teal)',
  pink: 'var(--cat-pink)',
  blue: 'var(--cat-blue)',
  red: 'var(--cat-red)'
};

/**
 * Duel Originals tile. Each game owns a vivid hue; the tile is a glossy
 * colored panel with the game name and an RTP chip. Lifts on hover.
 * Pass `art` for cover imagery, otherwise a tinted gradient is shown.
 */
function GameTile({
  name = 'Crash',
  color = 'purple',
  rtp = '100%',
  art = null,
  tag = 'Original',
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const c = CAT[color] || color;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '3 / 4',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: 'pointer',
      background: art ? `center/cover no-repeat url(${art})` : `radial-gradient(120% 80% at 50% 0%, ${c} 0%, color-mix(in oklab, ${c} 55%, var(--navy-950)) 70%, var(--navy-900) 100%)`,
      boxShadow: hover ? `0 16px 40px color-mix(in oklab, ${c} 40%, transparent)` : 'var(--shadow-md)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      border: '1px solid rgba(255,255,255,0.1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'rgba(0,0,0,0.28)',
      padding: '3px 8px',
      borderRadius: 'var(--radius-pill)',
      backdropFilter: 'blur(4px)'
    }
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-sm)',
      color: 'var(--navy-950)',
      background: 'var(--green-500)',
      padding: '3px 8px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 800
    }
  }, rtp, " RTP")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--display-sm)',
      color: '#fff',
      letterSpacing: '-0.02em',
      textShadow: '0 2px 12px rgba(0,0,0,0.5)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(7,11,35,0.35)',
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: '#fff',
      color: 'var(--navy-950)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      paddingLeft: 4,
      boxShadow: 'var(--shadow-lg)'
    }
  }, "\u25B6")));
}
Object.assign(__ds_scope, { GameTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/casino/GameTile.jsx", error: String((e && e.message) || e) }); }

// components/casino/MultiplierTag.jsx
try { (() => {
/**
 * Mono multiplier readout for Crash/limbo — e.g. 12.84×. Color ramps with
 * magnitude unless an explicit `tone` is given. `live` pulses.
 */
function MultiplierTag({
  value = 2.0,
  tone = null,
  size = 'md',
  live = false,
  style = {}
}) {
  const v = typeof value === 'number' ? value : parseFloat(value);
  const auto = v >= 10 ? 'gold' : v >= 2 ? 'money' : 'default';
  const t = tone || auto;
  const colors = {
    default: 'var(--text-strong)',
    money: 'var(--green-400)',
    gold: 'var(--amber-500)',
    danger: 'var(--red-500)'
  };
  const sizes = {
    sm: 'var(--mono-sm)',
    md: 'var(--mono-md)',
    lg: 'var(--mono-lg)',
    xl: '700 32px/1 var(--font-mono)'
  };
  const txt = (typeof value === 'number' ? value.toFixed(2) : value) + '\u00d7';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      font: sizes[size] || sizes.md,
      fontWeight: 700,
      color: colors[t] || colors.default,
      background: 'var(--surface-card)',
      border: '1px solid ' + (t === 'money' ? 'rgba(47,216,122,0.35)' : t === 'gold' ? 'rgba(255,200,61,0.35)' : 'var(--border-strong)'),
      padding: size === 'xl' ? '6px 14px' : '3px 10px',
      borderRadius: 'var(--radius-sm)',
      animation: live ? 'duel-pulse 1s var(--ease-in-out) infinite' : 'none',
      ...style
    }
  }, txt);
}
Object.assign(__ds_scope, { MultiplierTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/casino/MultiplierTag.jsx", error: String((e && e.message) || e) }); }

// components/casino/StatTile.jsx
try { (() => {
/**
 * The big headline stat used in the "by the numbers" strip — a large mono
 * value over a muted label. `accent` tints the value.
 */
function StatTile({
  value = '100%',
  label = 'RTP on Originals',
  sub = null,
  accent = 'money',
  align = 'left',
  style = {}
}) {
  const accents = {
    money: 'var(--green-500)',
    primary: 'var(--indigo-400)',
    gold: 'var(--amber-500)',
    white: 'var(--text-strong)',
    violet: 'var(--violet-500)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(34px, 5vw, 56px)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: accents[accent] || accent
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label-md)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-faint)'
    }
  }, sub));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/casino/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
/**
 * User avatar. Initials on a deterministic accent when no image. Optional
 * online dot and ring (used for live streamers / featured guests).
 */
function Avatar({
  src,
  name = '',
  size = 40,
  ring = false,
  online = false,
  square = false,
  style = {}
}) {
  const accents = ['var(--violet-500)', 'var(--indigo-500)', 'var(--cat-pink)', 'var(--cat-teal)', 'var(--amber-500)', 'var(--green-500)'];
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() || '?';
  let h = 0;
  for (let i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) >>> 0;
  const bg = accents[h % accents.length];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: square ? 'var(--radius-md)' : '50%',
      background: src ? `center/cover no-repeat url(${src})` : bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      font: 'var(--font-ui)',
      fontWeight: 800,
      fontSize: Math.round(size * 0.38),
      letterSpacing: '-0.02em',
      border: ring ? '2px solid var(--indigo-400)' : 'none',
      boxShadow: ring ? 'var(--glow-primary)' : 'none'
    }
  }, !src && initials), online && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: Math.max(8, size * 0.28),
      height: Math.max(8, size * 0.28),
      borderRadius: '50%',
      background: 'var(--green-500)',
      border: '2px solid var(--navy-950)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/casino/LeaderboardRow.jsx
try { (() => {
/**
 * Leaderboard / referral row — rank, player, wagered (mono), prize. Top 3
 * get a gold/silver/bronze rank token. `highlight` marks the viewer.
 */
function LeaderboardRow({
  rank = 1,
  name = 'Player',
  avatar = null,
  wagered = '$0',
  prize = '$0',
  highlight = false,
  style = {}
}) {
  const medal = {
    1: 'var(--amber-500)',
    2: '#c7cde0',
    3: '#cd8a52'
  }[rank];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr auto auto',
      alignItems: 'center',
      gap: 14,
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      background: highlight ? 'rgba(69,88,255,0.12)' : 'transparent',
      border: highlight ? '1px solid var(--border-accent)' : '1px solid transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 13,
      background: medal ? medal : 'var(--surface-card-2)',
      color: medal ? 'var(--navy-950)' : 'var(--text-muted)',
      boxShadow: rank === 1 ? 'var(--glow-gold)' : 'none'
    }
  }, rank), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: avatar,
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--heading-sm)',
      color: 'var(--text-strong)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--mono-sm)',
      color: 'var(--text-muted)'
    }
  }, wagered), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--mono-md)',
      fontWeight: 600,
      color: 'var(--green-400)',
      minWidth: 64,
      textAlign: 'right'
    }
  }, prize));
}
Object.assign(__ds_scope, { LeaderboardRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/casino/LeaderboardRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact status/label chip. Tones map to the brand's semantic colors.
 * Use `solid` for loud callouts (NEW, 100% RTP), `soft` for quiet meta.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  size = 'md',
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      solid: ['var(--navy-700)', '#fff'],
      soft: ['rgba(255,255,255,0.08)', 'var(--text-muted)']
    },
    primary: {
      solid: ['var(--indigo-500)', '#fff'],
      soft: ['rgba(69,88,255,0.16)', 'var(--indigo-300)']
    },
    money: {
      solid: ['var(--green-500)', 'var(--navy-950)'],
      soft: ['var(--green-bg)', 'var(--green-400)']
    },
    danger: {
      solid: ['var(--red-500)', '#fff'],
      soft: ['var(--red-bg)', 'var(--red-500)']
    },
    gold: {
      solid: ['var(--amber-500)', 'var(--navy-950)'],
      soft: ['var(--amber-bg)', 'var(--amber-500)']
    },
    violet: {
      solid: ['var(--violet-500)', '#fff'],
      soft: ['rgba(167,110,255,0.16)', 'var(--violet-400)']
    }
  };
  const [bg, color] = (tones[tone] || tones.neutral)[variant] || tones.neutral.soft;
  const sizes = {
    sm: {
      font: 'var(--label-sm)',
      padding: '2px 8px',
      gap: 4
    },
    md: {
      font: 'var(--label-md)',
      padding: '4px 10px',
      gap: 5
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      font: s.font,
      letterSpacing: 'var(--tracking-snug)',
      padding: s.padding,
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color,
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/casino/GuestCard.jsx
try { (() => {
/**
 * Featured guest / creator card — the streamers and names that have played
 * on Duel. Portrait photo via `photo`; falls back to a tinted panel + big
 * initials so it never renders a fake face.
 */
function GuestCard({
  name = 'Guest',
  handle = '',
  photo = null,
  status = null,
  color = 'violet',
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const tints = {
    violet: 'var(--violet-500)',
    purple: 'var(--cat-purple)',
    pink: 'var(--cat-pink)',
    teal: 'var(--cat-teal)',
    gold: 'var(--amber-500)',
    blue: 'var(--cat-blue)'
  };
  const c = tints[color] || color;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      background: photo ? `center/cover no-repeat url(${photo})` : `linear-gradient(180deg, color-mix(in oklab, ${c} 40%, var(--navy-850)) 0%, var(--navy-900) 100%)`,
      border: '1px solid var(--border)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, !photo && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    size: 96,
    square: true,
    style: {
      background: 'transparent'
    }
  })), status && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "danger",
    variant: "solid",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: '#fff',
        display: 'inline-block'
      }
    })
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '28px 14px 12px',
      background: 'linear-gradient(180deg, transparent, rgba(7,11,35,0.92))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--heading-md)',
      color: '#fff',
      letterSpacing: '-0.01em'
    }
  }, name), handle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--mono-sm)',
      color: 'var(--text-muted)'
    }
  }, handle)));
}
Object.assign(__ds_scope, { GuestCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/casino/GuestCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Duel primary button. Heavy label, friendly 14px radius, indigo glow on
 * the primary action. Hover brightens + lifts; press scales down.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      height: 'var(--control-sm)',
      padding: '0 14px',
      font: 'var(--label-sm)',
      gap: 6,
      radius: 'var(--radius-sm)'
    },
    md: {
      height: 'var(--control-md)',
      padding: '0 18px',
      font: 'var(--label-md)',
      gap: 8,
      radius: 'var(--radius-md)'
    },
    lg: {
      height: 'var(--control-lg)',
      padding: '0 26px',
      font: 'var(--heading-sm)',
      gap: 10,
      radius: 'var(--radius-md)'
    }
  };
  const variants = {
    primary: {
      bg: 'var(--action-primary)',
      color: '#fff',
      border: '1px solid transparent',
      glow: 'var(--glow-primary)',
      hoverBg: 'var(--action-primary-hover)'
    },
    secondary: {
      bg: 'var(--surface-card-2)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)',
      glow: 'none',
      hoverBg: 'var(--surface-hover)'
    },
    ghost: {
      bg: 'transparent',
      color: 'var(--text-default)',
      border: '1px solid transparent',
      glow: 'none',
      hoverBg: 'rgba(255,255,255,0.06)'
    },
    success: {
      bg: 'var(--green-500)',
      color: 'var(--navy-950)',
      border: '1px solid transparent',
      glow: 'var(--glow-money)',
      hoverBg: 'var(--green-400)'
    },
    danger: {
      bg: 'var(--red-500)',
      color: '#fff',
      border: '1px solid transparent',
      glow: 'none',
      hoverBg: '#ff6675'
    },
    gold: {
      bg: 'var(--amber-500)',
      color: 'var(--navy-950)',
      border: '1px solid transparent',
      glow: 'var(--glow-gold)',
      hoverBg: '#ffd45f'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const isDisabled = disabled || loading;
  const css = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    font: s.font,
    letterSpacing: 'var(--tracking-snug)',
    borderRadius: s.radius,
    background: hover && !isDisabled ? v.hoverBg : v.bg,
    color: v.color,
    border: v.border,
    boxShadow: variant === 'primary' || variant === 'success' || variant === 'gold' ? hover && !isDisabled ? v.glow : 'none' : 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.45 : 1,
    transform: press && !isDisabled ? 'scale(var(--press-scale))' : hover && !isDisabled ? 'translateY(var(--hover-lift))' : 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: css
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, null) : iconLeft, children, !loading && iconRight);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      borderRadius: '50%',
      border: '2px solid rgba(255,255,255,0.35)',
      borderTopColor: '#fff',
      display: 'inline-block',
      animation: 'duel-spin 0.7s linear infinite'
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/casino/ReferralCodeCard.jsx
try { (() => {
/**
 * Referral-code claim block — the core of the Rooted referral experience.
 * Shows the code with a copy button and the perks it unlocks.
 */
function ReferralCodeCard({
  code = 'HELLAGOOD',
  perks = ['The best entertainment', '100% RTP Originals', '$10M monthly leaderboards'],
  onClaim,
  style = {}
}) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard && navigator.clipboard.writeText(code);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-accent)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--glow-soft)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--green-400)',
      marginBottom: 10
    }
  }, "Your referral code"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'stretch',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      background: 'var(--navy-950)',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      font: 'var(--mono-lg)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      letterSpacing: '0.08em'
    }
  }, code), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: copied ? 'success' : 'primary',
    onClick: copy
  }, copied ? 'Copied ✓' : 'Copy')), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '0 0 18px',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, perks.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: 'var(--body-md)',
      color: 'var(--text-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--green-bg)',
      color: 'var(--green-400)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 900,
      flex: 'none'
    }
  }, "\u2713"), p))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "success",
    fullWidth: true,
    size: "lg",
    onClick: onClaim
  }, "Claim & start playing"));
}
Object.assign(__ds_scope, { ReferralCodeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/casino/ReferralCodeCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. The default dark card with a hairline; `glow` for
 * the hero/featured panel, `interactive` to lift on hover.
 */
function Card({
  children,
  variant = 'default',
  interactive = false,
  padding = 'md',
  style = {},
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: 'var(--hairline)',
      boxShadow: 'none'
    },
    raised: {
      background: 'var(--surface-card-2)',
      border: 'var(--hairline)',
      boxShadow: 'var(--shadow-md)'
    },
    glow: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-accent)',
      boxShadow: 'var(--glow-soft)'
    },
    ghost: {
      background: 'transparent',
      border: 'var(--hairline)',
      boxShadow: 'none'
    }
  };
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] ?? pads.md,
      background: v.background,
      border: v.border,
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : v.boxShadow,
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text / number input on the dark canvas. Filled navy well, indigo focus
 * ring. Supports leading/trailing adornments (e.g. a crypto ticker).
 */
function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  type = 'text',
  size = 'md',
  prefix = null,
  suffix = null,
  invalid = false,
  disabled = false,
  mono = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      height: 'var(--control-sm)',
      font: 'var(--body-sm)',
      px: 12
    },
    md: {
      height: 'var(--control-md)',
      font: 'var(--body-md)',
      px: 14
    },
    lg: {
      height: 'var(--control-lg)',
      font: 'var(--body-lg)',
      px: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = invalid ? 'var(--red-500)' : focus ? 'var(--indigo-500)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: s.height,
      padding: `0 ${s.px}px`,
      background: 'var(--surface-input)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? invalid ? 'var(--ring-danger)' : 'var(--ring)' : 'none',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      font: s.font,
      display: 'flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-strong)',
      font: mono ? 'var(--mono-md)' : s.font,
      letterSpacing: mono ? '0' : 'var(--tracking-snug)'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      font: s.font,
      display: 'flex'
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** On/off switch — blurple when on. */
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 'md',
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    onChange && onChange(!on);
  };
  const dims = {
    sm: {
      w: 34,
      h: 20,
      k: 14
    },
    md: {
      w: 44,
      h: 26,
      k: 20
    }
  }[size] || {
    w: 44,
    h: 26,
    k: 20
  };
  return /*#__PURE__*/React.createElement("button", {
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: dims.w,
      height: dims.h,
      padding: 3,
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--indigo-500)' : 'var(--navy-700)',
      boxShadow: on ? 'var(--glow-primary)' : 'var(--inner-well)',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-out)',
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: '#fff',
      transform: on ? `translateX(${dims.w - dims.k - 6}px)` : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-pop)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.4)'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * Segmented tab control. Sliding indicator is implied by the filled active
 * pill (the product uses pill-style nav tabs). Controlled or uncontrolled.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  const sizes = {
    sm: {
      h: 'var(--control-sm)',
      font: 'var(--label-sm)',
      px: 12
    },
    md: {
      h: 'var(--control-md)',
      font: 'var(--label-md)',
      px: 16
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--surface-card)',
      border: 'var(--hairline)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => !t.disabled && select(t.id),
      disabled: t.disabled,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: s.h,
        padding: `0 ${s.px}px`,
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        cursor: t.disabled ? 'not-allowed' : 'pointer',
        font: s.font,
        letterSpacing: 'var(--tracking-snug)',
        background: on ? 'var(--indigo-500)' : 'transparent',
        color: on ? '#fff' : 'var(--text-muted)',
        boxShadow: on ? 'var(--glow-primary)' : 'none',
        opacity: t.disabled ? 0.4 : 1,
        transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
        whiteSpace: 'nowrap'
      }
    }, t.icon, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--mono-sm)',
        opacity: 0.7
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/duel-casino/app.jsx
try { (() => {
// Duel casino — app shell + simple router.
function App() {
  const [route, setRoute] = React.useState('home');
  const [game, setGame] = React.useState(null);
  const go = r => {
    setGame(null);
    setRoute(r);
  };
  const openGame = g => {
    setGame(g);
    setRoute('game');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--navy-950)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    route: route === 'game' ? 'originals' : route,
    go: go,
    balance: "1,284.50"
  }), route === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    openGame: openGame
  }), (route === 'originals' || route === 'casino' || route === 'sports') && /*#__PURE__*/React.createElement(OriginalsScreen, {
    openGame: openGame
  }), route === 'scores' && /*#__PURE__*/React.createElement(LeaderboardScreen, null), route === 'game' && game && /*#__PURE__*/React.createElement(CrashScreen, {
    game: game,
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/duel-casino/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/duel-casino/chrome.jsx
try { (() => {
// Duel casino — shared chrome (top header + nav). Composes DS primitives.
const {
  Button,
  BalancePill,
  Avatar,
  Badge,
  Tabs
} = window.DuelDesignSystem_908732;
function Logo({
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '3px solid #fff',
      borderRadius: 11,
      padding: '4px 12px',
      background: 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: '#fff',
      letterSpacing: '-0.03em',
      lineHeight: 1
    }
  }, "Duel"));
}
const NAV = [{
  id: 'originals',
  label: 'Originals',
  icon: '⚔'
}, {
  id: 'casino',
  label: 'Casino',
  icon: '♠'
}, {
  id: 'sports',
  label: 'Sports',
  icon: '◎'
}, {
  id: 'scores',
  label: 'High Scores',
  icon: '🏆'
}];
function Header({
  route,
  go,
  balance
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: 68,
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '0 24px',
      background: 'rgba(7,11,35,0.82)',
      backdropFilter: 'var(--blur-chrome)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: () => go('home')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, NAV.map(n => {
    const on = route === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => go(n.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        height: 40,
        padding: '0 14px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        font: 'var(--label-md)',
        color: on ? '#fff' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        opacity: 0.9
      }
    }, n.icon), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(BalancePill, {
    amount: balance,
    tone: "money"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC5B")
  }, "Wallet"), /*#__PURE__*/React.createElement(Avatar, {
    name: "HS",
    size: 40,
    style: {
      background: 'var(--violet-500)'
    }
  }));
}
Object.assign(window, {
  Header,
  Logo,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/duel-casino/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/duel-casino/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Duel casino — screens. Each composes DS primitives from the bundle.
const DS = window.DuelDesignSystem_908732;
const {
  Button,
  Badge,
  Card,
  GameTile,
  StatTile,
  LeaderboardRow,
  MultiplierTag,
  Tabs,
  Input,
  GuestCard
} = DS;
const ORIGINALS = [{
  name: 'Crash',
  color: 'purple'
}, {
  name: 'Mines',
  color: 'gold',
  rtp: '99.2%'
}, {
  name: 'Dice',
  color: 'teal'
}, {
  name: 'Plinko',
  color: 'pink'
}, {
  name: 'Blackjack',
  color: 'blue'
}, {
  name: 'Keno',
  color: 'teal'
}, {
  name: 'Beef',
  color: 'red',
  rtp: '99.2%'
}, {
  name: 'Limbo',
  color: 'purple'
}, {
  name: 'Video Poker',
  color: 'blue'
}, {
  name: "Groomer's Van",
  color: 'pink'
}];
const LB = [{
  rank: 1,
  name: 'degenking',
  wagered: '$184,200',
  prize: '$25,000'
}, {
  rank: 2,
  name: 'snailmaxxer',
  wagered: '$120,400',
  prize: '$12,000'
}, {
  rank: 3,
  name: 'rakeback_andy',
  wagered: '$98,100',
  prize: '$6,000'
}, {
  rank: 4,
  name: 'no_kyc_nina',
  wagered: '$71,540',
  prize: '$3,000'
}, {
  rank: 5,
  name: 'provably_phil',
  wagered: '$66,900',
  prize: '$1,500'
}];
function HeroBg() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 50% -10%, #122a4a 0%, #0a1330 45%, var(--navy-950) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-10%',
      top: '10%',
      width: 520,
      height: 520,
      background: 'radial-gradient(circle, rgba(157,92,255,0.45), transparent 60%)',
      filter: 'blur(40px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-8%',
      bottom: '-10%',
      width: 560,
      height: 560,
      background: 'radial-gradient(circle, rgba(31,212,196,0.4), transparent 60%)',
      filter: 'blur(40px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '40%',
      top: '-5%',
      width: 420,
      height: 420,
      background: 'radial-gradient(circle, rgba(69,88,255,0.35), transparent 60%)',
      filter: 'blur(50px)'
    }
  }));
}
function HomeScreen({
  go,
  openGame
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '72px 24px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(HeroBg, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "money",
    variant: "solid",
    style: {
      marginBottom: 20
    }
  }, "100% RTP \xB7 PROVABLY FAIR \xB7 NO KYC"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--display-2xl)',
      fontSize: 'clamp(40px,6vw,72px)',
      color: '#fff',
      letterSpacing: '-0.03em',
      margin: '0 0 16px'
    }
  }, "The First Casino", /*#__PURE__*/React.createElement("br", null), "That Gives a Fuck."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--body-lg)',
      color: 'var(--text-muted)',
      margin: '0 0 28px',
      fontWeight: 700
    }
  }, "Just the purest form of gambling \u2014 the way it should be."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "success",
    iconLeft: /*#__PURE__*/React.createElement("span", null, "\u2694")
  }, "Join the Resistance"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('originals')
  }, "Browse Originals")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      margin: '6px 0 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-brush)',
      fontSize: 34,
      color: '#fff',
      display: 'inline-block',
      transform: 'rotate(-2deg)'
    }
  }, "Duel Originals")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '0 24px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 14
    }
  }, ORIGINALS.slice(0, 6).map(g => /*#__PURE__*/React.createElement(GameTile, {
    key: g.name,
    name: g.name,
    color: g.color,
    rtp: g.rtp || '100%',
    onClick: () => openGame(g)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '36px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: 24,
      padding: '28px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    align: "center",
    value: "100%",
    label: "RTP on Originals",
    accent: "money"
  }), /*#__PURE__*/React.createElement(StatTile, {
    align: "center",
    value: "Best",
    label: "Entertainment",
    accent: "primary"
  }), /*#__PURE__*/React.createElement(StatTile, {
    align: "center",
    value: "$10M",
    label: "Monthly leaderboards",
    accent: "gold"
  }), /*#__PURE__*/React.createElement(StatTile, {
    align: "center",
    value: "0",
    label: "Fake bets",
    accent: "white"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '36px auto 60px',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--heading-lg)',
      color: '#fff',
      margin: 0
    }
  }, "$25,000 Daily Leaderboard"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => go('scores')
  }, "View all \u2192")), /*#__PURE__*/React.createElement(Card, {
    padding: "sm"
  }, LB.map(r => /*#__PURE__*/React.createElement(LeaderboardRow, _extends({
    key: r.rank
  }, r))))));
}
function OriginalsScreen({
  openGame
}) {
  const [tab, setTab] = React.useState('all');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '32px 24px 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--display-md)',
      color: '#fff',
      margin: 0
    }
  }, "Originals"), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'fav',
      label: 'Favorites'
    }, {
      id: 'new',
      label: 'New',
      count: 2
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 16
    }
  }, ORIGINALS.map(g => /*#__PURE__*/React.createElement(GameTile, {
    key: g.name,
    name: g.name,
    color: g.color,
    rtp: g.rtp || '100%',
    onClick: () => openGame(g)
  }))));
}
const CAT = {
  purple: 'var(--cat-purple)',
  gold: 'var(--cat-gold)',
  teal: 'var(--cat-teal)',
  pink: 'var(--cat-pink)',
  blue: 'var(--cat-blue)',
  red: 'var(--cat-red)'
};
function CrashScreen({
  game,
  go
}) {
  const [mult, setMult] = React.useState(1.0);
  const [running, setRunning] = React.useState(false);
  const [history, setHistory] = React.useState([1.42, 3.7, 1.08, 24.18, 2.05, 1.91]);
  const raf = React.useRef(0);
  const start = () => {
    if (running) {
      setRunning(false);
      setHistory(h => [Number(mult.toFixed(2)), ...h].slice(0, 8));
      setMult(1.0);
      cancelAnimationFrame(raf.current);
      return;
    }
    setRunning(true);
    setMult(1.0);
    const t0 = performance.now();
    const tick = t => {
      const m = 1 + (t - t0) / 1000 * 0.8;
      setMult(m);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };
  React.useEffect(() => () => cancelAnimationFrame(raf.current), []);
  const c = CAT[game.color] || 'var(--cat-purple)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '24px 24px 60px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('originals'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      font: 'var(--label-md)',
      marginBottom: 16
    }
  }, "\u2190 Originals"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--heading-lg)',
      color: '#fff'
    }
  }, game.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "money",
    variant: "solid",
    size: "sm"
  }, "100% RTP")), /*#__PURE__*/React.createElement("label", {
    style: {
      font: 'var(--label-sm)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, "Bet amount"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '8px 0 14px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    defaultValue: "10.00",
    prefix: "$",
    suffix: /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      size: "sm"
    }, "MAX")
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      font: 'var(--label-sm)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, "Auto cashout"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '8px 0 18px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    defaultValue: "2.00",
    suffix: "\xD7"
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    variant: running ? 'danger' : 'success',
    onClick: start
  }, running ? `Cash out · ${mult.toFixed(2)}×` : 'Place bet'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 12,
      borderRadius: 'var(--radius-md)',
      background: 'var(--green-bg)',
      font: 'var(--body-sm)',
      color: 'var(--green-400)',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u26A1"), " The best entertainment is ready instantly.")), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 380,
      background: `radial-gradient(120% 100% at 50% 100%, color-mix(in oklab, ${c} 22%, var(--navy-900)) 0%, var(--navy-950) 70%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(MultiplierTag, {
    value: mult,
    size: "xl",
    live: running,
    tone: running ? null : 'default',
    style: {
      fontSize: 56,
      padding: '14px 28px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      maxWidth: '70%'
    }
  }, history.map((h, i) => /*#__PURE__*/React.createElement(MultiplierTag, {
    key: i,
    value: h,
    size: "sm"
  })))))));
}
function LeaderboardScreen() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '32px 24px 60px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--display-md)',
      color: '#fff',
      margin: '0 0 4px'
    }
  }, "High Scores"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--body-md)',
      color: 'var(--text-muted)',
      margin: '0 0 24px'
    }
  }, "$25,000 daily \xB7 $500,000 monthly. Every wager earns points \u2014 win or lose."), /*#__PURE__*/React.createElement(Card, {
    padding: "sm"
  }, LB.concat([{
    rank: 6,
    name: 'crashout_cory',
    wagered: '$54,200',
    prize: '$1,000'
  }, {
    rank: 7,
    name: 'minesweeper',
    wagered: '$48,900',
    prize: '$800'
  }, {
    rank: 47,
    name: 'you',
    wagered: '$3,100',
    prize: '$420',
    highlight: true
  }]).map(r => /*#__PURE__*/React.createElement(LeaderboardRow, _extends({
    key: r.rank
  }, r)))));
}
Object.assign(window, {
  HomeScreen,
  OriginalsScreen,
  CrashScreen,
  LeaderboardScreen,
  ORIGINALS,
  LB
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/duel-casino/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rooted-referral/app.jsx
try { (() => {
// Rooted referral — shell with header + landing/dashboard switch.
const {
  Button: RBtn,
  Badge: RBadge
} = window.DuelDesignSystem_908732;
function RootedHeader({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      background: 'rgba(7,11,35,0.82)',
      backdropFilter: 'var(--blur-chrome)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('landing'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(RootedMark, null), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--caption)',
      color: 'var(--text-faint)'
    }
  }, "\xD7 Duel")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(RBadge, {
    tone: "money",
    size: "sm"
  }, "100% RTP"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('dashboard'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--label-md)',
      color: route === 'dashboard' ? '#fff' : 'var(--text-muted)'
    }
  }, "Dashboard"), /*#__PURE__*/React.createElement(RBtn, {
    variant: "primary"
  }, "Sign up"));
}
function RootedApp() {
  const [route, setRoute] = React.useState('landing');
  const go = r => {
    setRoute(r);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--navy-950)'
    }
  }, /*#__PURE__*/React.createElement(RootedHeader, {
    route: route,
    go: go
  }), route === 'landing' ? /*#__PURE__*/React.createElement(ReferralLanding, {
    go: go
  }) : /*#__PURE__*/React.createElement(ReferralDashboard, {
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(RootedApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rooted-referral/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rooted-referral/dashboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Rooted referral — partner dashboard (earnings from referred players).
const DDS = window.DuelDesignSystem_908732;
const {
  Button,
  Badge,
  Card,
  StatTile,
  LeaderboardRow,
  Input,
  Avatar,
  Switch
} = DDS;
const REFERRED = [{
  rank: 1,
  name: 'whale_wendy',
  wagered: '$284,000',
  prize: '$4,120'
}, {
  rank: 2,
  name: 'tilt_tcommander',
  wagered: '$96,500',
  prize: '$1,440'
}, {
  rank: 3,
  name: 'cashout_carl',
  wagered: '$61,200',
  prize: '$910'
}, {
  rank: 4,
  name: 'plinko_pete',
  wagered: '$38,900',
  prize: '$520'
}, {
  rank: 5,
  name: 'dice_dana',
  wagered: '$22,400',
  prize: '$310'
}];
function MiniSpark({
  color = 'var(--green-500)'
}) {
  const pts = [8, 12, 9, 16, 14, 22, 19, 28, 24, 33, 30, 40];
  const w = 200,
    h = 48,
    max = 44;
  const d = pts.map((v, i) => `${i / (pts.length - 1) * w},${h - v / max * h}`).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: h,
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: d,
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function ReferralDashboard({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '28px 24px 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 22,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--display-md)',
      color: '#fff',
      margin: '0 0 2px'
    }
  }, "Referral dashboard"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--body-md)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Transparent, real-time. Leaderboard prizes are deducted from referral income.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('landing')
  }, "\u2190 Landing")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "glow",
    padding: "md"
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "$252,568",
    label: "Paid to you",
    accent: "money"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(MiniSpark, null))), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "1,284",
    label: "Players referred",
    accent: "primary"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(MiniSpark, {
    color: "var(--indigo-400)"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "$1.13M",
    label: "Total volume",
    accent: "white"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(MiniSpark, {
    color: "var(--text-faint)"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "80%",
    label: "Beef edge share",
    accent: "gold"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 16,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '6px 10px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--heading-md)',
      color: '#fff'
    }
  }, "Top referred players"), /*#__PURE__*/React.createElement(Badge, {
    tone: "money",
    size: "sm"
  }, "live")), REFERRED.map(r => /*#__PURE__*/React.createElement(LeaderboardRow, _extends({
    key: r.rank
  }, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--green-400)',
      marginBottom: 10
    }
  }, "Your link"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    defaultValue: "duel.com/r/HELLAGOOD",
    suffix: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Copy")
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "primary"
  }, "Share link")), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--heading-sm)',
      color: '#fff'
    }
  }, "Auto-payout"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--caption)',
      color: 'var(--text-faint)'
    }
  }, "Sweep to wallet daily")), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true
  }))))));
}
Object.assign(window, {
  ReferralDashboard,
  MiniSpark,
  REFERRED
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rooted-referral/dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rooted-referral/landing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Rooted referral — landing page. Rooted is the referral experience into Duel.
const RDS = window.DuelDesignSystem_908732;
const {
  Button,
  Badge,
  Card,
  StatTile,
  GuestCard,
  ReferralCodeCard,
  LeaderboardRow
} = RDS;

// Rooted is the user's referral brand. No logo asset yet → styled text lockup.
function RootedMark({
  size = 26
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-display)',
      fontWeight: 900,
      fontSize: size,
      color: '#fff',
      letterSpacing: '-0.04em'
    }
  }, "Rooted", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-500)'
    }
  }, ".")));
}
const GUESTS = [{
  name: 'Mike Tyson',
  handle: '@miketyson',
  color: 'gold',
  status: 'LIVE'
}, {
  name: '50 Cent',
  handle: '@50cent',
  color: 'violet'
}, {
  name: 'Nelly',
  handle: '@nelly',
  color: 'teal'
}, {
  name: 'Bonnie Blue',
  handle: '@bonnieblue',
  color: 'pink'
}, {
  name: 'Andrew Tate',
  handle: '@cobratate',
  color: 'red'
}, {
  name: 'Monarch',
  handle: 'founder',
  color: 'purple'
}];
function RootedHero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '64px 24px 48px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(110% 90% at 50% -20%, #14224a 0%, var(--navy-950) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: -60,
      width: 600,
      height: 600,
      transform: 'translateX(-50%)',
      background: 'radial-gradient(circle, rgba(47,216,122,0.22), transparent 60%)',
      filter: 'blur(50px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1040,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "money",
    variant: "solid",
    style: {
      marginBottom: 18
    }
  }, "THE FAIREST CASINO ON EARTH"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--display-xl)',
      fontSize: 'clamp(36px,5vw,60px)',
      color: '#fff',
      letterSpacing: '-0.03em',
      margin: '0 0 16px'
    }
  }, "100% RTP.", /*#__PURE__*/React.createElement("br", null), "Zero house edge.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-500)'
    }
  }, "The best entertainment.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--body-lg)',
      color: 'var(--text-muted)',
      margin: '0 0 26px',
      maxWidth: 460
    }
  }, "Rooted gets you into Duel \u2014 the only casino that gives a fuck. No wagering, no tiers, no soul-draining KYC. Just real math you can verify yourself."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "100%",
    label: "RTP",
    accent: "money"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "Best",
    label: "Entertainment",
    accent: "primary"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "$10M",
    label: "Leaderboards",
    accent: "gold"
  }))), /*#__PURE__*/React.createElement(ReferralCodeCard, {
    onClaim: () => go('dashboard')
  })));
}
function HowItWorks() {
  const steps = [{
    n: '01',
    t: 'Enter the code',
    d: 'Drop HELLAGOOD in the referral field at sign-up. Takes ten seconds.'
  }, {
    n: '02',
    t: 'Play 100% RTP',
    d: 'Crash, Mines, Dice, Blackjack — Duel Originals with zero house edge.'
  }, {
    n: '03',
    t: 'Get the best entertainment',
    d: 'Duel puts the action first with Originals, live guests, and zero house edge.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1040,
      margin: '40px auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--display-sm)',
      color: '#fff',
      margin: '0 0 20px'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, steps.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--indigo-400)',
      marginBottom: 10
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--heading-md)',
      color: '#fff',
      marginBottom: 6
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-muted)'
    }
  }, s.d)))));
}
function GuestShowcase() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1040,
      margin: '40px auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--display-sm)',
      color: '#fff',
      margin: 0
    }
  }, "Who's already in"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-faint)'
    }
  }, "Recent guests on the stream")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 12
    }
  }, GUESTS.map(g => /*#__PURE__*/React.createElement(GuestCard, _extends({
    key: g.name
  }, g)))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--caption)',
      color: 'var(--text-faint)',
      marginTop: 12
    }
  }, "Drop real portraits via the ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "photo"), " prop \u2014 placeholders never fake a face."));
}
function RootedFooterCTA({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1040,
      margin: '48px auto 64px',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "glow",
    padding: "lg",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--display-md)',
      color: '#fff',
      margin: '0 0 10px'
    }
  }, "Stop feeding the house."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--body-lg)',
      color: 'var(--text-muted)',
      margin: '0 0 22px'
    }
  }, "Code ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--green-400)'
    }
  }, "HELLAGOOD"), " \xB7 The best entertainment \xB7 100% RTP."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "success",
    onClick: () => go('dashboard')
  }, "Claim & start playing")));
}
function ReferralLanding({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RootedHero, {
    go: go
  }), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(GuestShowcase, null), /*#__PURE__*/React.createElement(RootedFooterCTA, {
    go: go
  }));
}
Object.assign(window, {
  ReferralLanding,
  RootedMark,
  GUESTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rooted-referral/landing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BalancePill = __ds_scope.BalancePill;

__ds_ns.GameTile = __ds_scope.GameTile;

__ds_ns.GuestCard = __ds_scope.GuestCard;

__ds_ns.LeaderboardRow = __ds_scope.LeaderboardRow;

__ds_ns.MultiplierTag = __ds_scope.MultiplierTag;

__ds_ns.ReferralCodeCard = __ds_scope.ReferralCodeCard;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
