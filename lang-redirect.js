/* ============================================================
   VAN LAX — IP-BASED LANGUAGE REDIRECT
   Redirects Russian IP visitors to the -ru.html version
   unless the user has already manually selected a language.
   ============================================================ */

(function () {
  'use strict';

  // Map of EN page → RU page
  const RU_MAP = {
    'index.html':          'index-ru.html',
    'abrakadabra.html':    'abrakadabra-ru.html',
    'phi-geometry.html':   'phi-geometry-ru.html',
  };

  // Also handle root path (e.g. vanlax.com/ → vanlax.com/index-ru.html)
  const ROOT_REDIRECT = 'index-ru.html';

  // Don't redirect if the user already clicked a language switch
  if (localStorage.getItem('lang_selected') === 'true') return;

  // Don't redirect if we're already on a -ru page
  const path = window.location.pathname;
  const filename = path.split('/').pop() || '';
  if (filename.endsWith('-ru.html')) return;

  // Resolve which RU page to go to
  const target = RU_MAP[filename] || (filename === '' ? ROOT_REDIRECT : null);
  if (!target) return;

  // Fetch IP country via a fast, no-auth, CORS-friendly endpoint
  // cloudflare-trace is used as primary (no rate limit, returns country in plain text)
  // ipapi.co is fallback JSON
  async function getCountry() {
    try {
      // Cloudflare trace endpoint — returns plain text key=value pairs
      const res = await fetch('https://cloudflare.com/cdn-cgi/trace', { cache: 'force-cache' });
      const text = await res.text();
      const match = text.match(/^loc=([A-Z]{2})$/m);
      if (match) return match[1];
    } catch (_) {}

    try {
      const res = await fetch('https://ipapi.co/json/', { cache: 'force-cache' });
      const data = await res.json();
      return data.country_code || null;
    } catch (_) {}

    return null;
  }

  getCountry().then(function (country) {
    if (country === 'RU') {
      // Build redirect URL preserving origin and any hash
      const base = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
      window.location.replace(base + target + window.location.hash);
    }
  });
})();
