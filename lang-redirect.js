/* ============================================================
   VAN LAX — IP-BASED LANGUAGE REDIRECT
   Redirects Russian visitors to the -ru.html version
   unless the user has already manually selected a language.

   Strategy (two-pass, non-blocking):
   1. Instant: browser language check (navigator.language)
   2. Async: IP country via Cloudflare trace → ipapi.co fallback
   ============================================================ */

(function () {
  'use strict';

  // Map of EN page → RU page
  const RU_MAP = {
    'index.html':         'index-ru.html',
    'abrakadabra.html':   'abrakadabra-ru.html',
    'phi-geometry.html':  'phi-geometry-ru.html',
  };
  const ROOT_REDIRECT = 'index-ru.html';

  // Don't redirect if the user already explicitly chose a language
  if (localStorage.getItem('lang_selected') === 'true') return;

  // Don't redirect if already on a -ru page
  const path     = window.location.pathname;
  const filename = path.split('/').pop() || '';
  if (filename.endsWith('-ru.html')) return;

  // Resolve target RU page
  const target = RU_MAP[filename] || (filename === '' ? ROOT_REDIRECT : null);
  if (!target) return;

  function doRedirect() {
    const base = window.location.origin + path.replace(/[^/]*$/, '');
    window.location.replace(base + target + window.location.hash);
  }

  // ── Pass 1: instant browser-language check ──────────────────────────────────
  // Russian users almost always have 'ru' as their primary browser language.
  // This fires synchronously, with zero network latency.
  const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (lang.startsWith('ru')) {
    doRedirect();
    return;
  }

  // ── Pass 2: async IP geolocation ────────────────────────────────────────────
  // Covers Russian-IP visitors whose browser language is not Russian (e.g. expats,
  // VPN users with RU IP, etc.)
  async function getCountry() {
    // Primary: Cloudflare trace — no auth, no rate-limit, returns plain text
    try {
      const res  = await fetch('https://cloudflare.com/cdn-cgi/trace', { cache: 'force-cache' });
      const text = await res.text();
      const m    = text.match(/^loc=([A-Z]{2})$/m);
      if (m) return m[1];
    } catch (_) {}

    // Fallback: ipapi.co free JSON API (1000 req/day)
    try {
      const res  = await fetch('https://ipapi.co/json/', { cache: 'force-cache' });
      const data = await res.json();
      return data.country_code || null;
    } catch (_) {}

    return null;
  }

  getCountry().then(function (country) {
    if (country === 'RU' && localStorage.getItem('lang_selected') !== 'true') {
      doRedirect();
    }
  });
})();
