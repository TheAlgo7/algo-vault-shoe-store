/**
 * Cookie Consent Manager — thealgothrim.com
 * Uses GA4 Consent Mode v2. Blocks analytics until user accepts.
 */
(function () {
  const CONSENT_KEY = 'algothrim_consent';
  const GA_ID = 'G-374FTMDS8T';

  // Set default consent denied BEFORE GA4 loads
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    wait_for_update: 2000
  });

  function loadGA() {
    if (document.querySelector('script[src*="googletagmanager.com/gtag"]')) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    s.onload = function () {
      gtag('js', new Date());
      gtag('config', GA_ID);
    };
  }

  function grantConsent() {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    localStorage.setItem(CONSENT_KEY, 'granted');
    loadGA();
    hideBanner();
  }

  function denyConsent() {
    gtag('consent', 'update', { analytics_storage: 'denied' });
    localStorage.setItem(CONSENT_KEY, 'denied');
    hideBanner();
  }

  function hideBanner() {
    const b = document.getElementById('cookie-consent-banner');
    if (b) {
      b.classList.remove('cookie-banner--show');
      setTimeout(() => b.remove(), 650);
    }
  }

  function showBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = `
      <div class="cookie-banner__content">
        <i class="ri-cookie-line cookie-banner__icon" aria-hidden="true"></i>
        <p class="cookie-banner__text">
          This site uses Google Analytics to understand visitor traffic.
          No personal data is sold or shared.
          <a href="/privacy-policy" class="cookie-banner__link">Privacy Policy</a>
        </p>
        <div class="cookie-banner__buttons">
          <button id="consent-deny" class="cookie-banner__btn cookie-banner__btn--reject">Decline</button>
          <button id="consent-accept" class="cookie-banner__btn cookie-banner__btn--accept">Accept</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    // Trigger CSS transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => banner.classList.add('cookie-banner--show'));
    });

    document.getElementById('consent-accept').addEventListener('click', grantConsent);
    document.getElementById('consent-deny').addEventListener('click', denyConsent);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'granted') {
      loadGA();
    } else if (!stored) {
      // Small delay so it doesn't flash immediately on load
      setTimeout(showBanner, 1500);
    }
    // If 'denied': GA never loads
  });
})();
