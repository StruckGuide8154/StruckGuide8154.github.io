(function () {
  var restrictedCountries = new Set([
    "AU",
    "DE",
    "FR",
    "GB",
    "LT",
    "NL",
    "SK",
    "AE",
    "US"
  ]);

  var countryNames = {
    AU: "Australia",
    DE: "Germany",
    FR: "France",
    GB: "United Kingdom",
    LT: "Lithuania",
    NL: "Netherlands",
    SK: "Slovakia",
    AE: "United Arab Emirates",
    US: "United States"
  };

  var ageCheck = document.querySelector("[data-age-check]");
  var locationSelect = document.querySelector("[data-country-select]");
  var termsCheck = document.querySelector("[data-terms-check]");
  var ctaButtons = document.querySelectorAll("[data-duel-cta]");
  var gateMessage = document.querySelector("[data-gate-message]");
  var modal = document.querySelector("[data-outbound-modal]");
  var modalContinue = document.querySelector("[data-modal-continue]");
  var modalCancel = document.querySelector("[data-modal-cancel]");
  var lastLink = null;

  function analytics(eventName, props) {
    var payload = Object.assign({
      page: location.pathname,
      countryStatus: getCountryStatus()
    }, props || {});

    if (typeof window.plausible === "function") {
      window.plausible(eventName, { props: payload });
    }

    if (window.ROOTED_ANALYTICS_ENDPOINT && navigator.sendBeacon) {
      navigator.sendBeacon(
        window.ROOTED_ANALYTICS_ENDPOINT,
        JSON.stringify({ event: eventName, props: payload })
      );
    }
  }

  function getCountryStatus() {
    if (!locationSelect) return "not-selected";
    var value = locationSelect.value;
    if (!value) return "not-selected";
    if (restrictedCountries.has(value)) return "restricted";
    if (value === "OTHER") return "requires-live-terms-check";
    return "not-restricted-example";
  }

  function setCtaEnabled(enabled) {
    ctaButtons.forEach(function (button) {
      button.classList.toggle("is-disabled", !enabled);
      button.setAttribute("aria-disabled", enabled ? "false" : "true");
    });
  }

  function updateGate() {
    if (!ageCheck || !locationSelect || !termsCheck || !gateMessage) return;

    var ageOk = ageCheck.checked;
    var termsOk = termsCheck.checked;
    var selected = locationSelect.value;
    var blocked = restrictedCountries.has(selected);
    var ready = ageOk && termsOk && selected && !blocked;

    setCtaEnabled(Boolean(ready));
    gateMessage.classList.remove("blocked", "ready");

    if (blocked) {
      gateMessage.classList.add("blocked");
      gateMessage.textContent = countryNames[selected] + " is listed here as a restricted example. Do not use the referral link from that location.";
      return;
    }

    if (!ageOk) {
      gateMessage.textContent = "Confirm that you are an adult before the referral CTA is available.";
      return;
    }

    if (!selected) {
      gateMessage.textContent = "Select your location status. This page only gives examples; Duel's live terms still control eligibility.";
      return;
    }

    if (!termsOk) {
      gateMessage.textContent = "Confirm you will check Duel's live terms before signing up, depositing, or playing.";
      return;
    }

    gateMessage.classList.add("ready");
    gateMessage.textContent = "CTA unlocked. Continue only if Duel's live terms and your local law allow access.";
  }

  function openModal(link) {
    if (!modal) return;
    lastLink = link;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (modalContinue) modalContinue.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  [ageCheck, locationSelect, termsCheck].forEach(function (field) {
    if (field) field.addEventListener("change", updateGate);
  });

  ctaButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      if (button.getAttribute("aria-disabled") === "true") {
        event.preventDefault();
        updateGate();
        return;
      }

      event.preventDefault();
      analytics("Duel referral CTA click", { destination: "https://duel.com/r/cromision" });
      openModal(button.href);
    });
  });

  document.querySelectorAll("details[data-faq]").forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        analytics("Duel FAQ open", { question: item.querySelector("summary").textContent.trim() });
      }
    });
  });

  if (modalContinue) {
    modalContinue.addEventListener("click", function () {
      analytics("Duel outbound confirmed", { destination: "https://duel.com/r/cromision" });
      if (lastLink) {
        window.location.href = lastLink;
      }
    });
  }

  if (modalCancel) {
    modalCancel.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeModal();
  });

  updateGate();
})();
