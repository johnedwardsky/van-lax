/* ============================================================
   VAN LAX — GOTHIC GATE & INVITE CODE SYSTEM
   ============================================================ */

// ── 50 SHA-256 hashes (VANLAX_GATE_2026 + code) ─────────────
const GATE_HASHES = new Set([
  "39f4f7ee709b7c163df350c27380ddc1584ceba9fd3598aa346e1ea44be47eea",
  "8a1bf8be30b32c9ea79412f6676e0141e307d4b8fcf9ab5542807edd9e64ba46",
  "1fb4de35365be5b335eefb46d7b7d7d1f8e50db8390c068fbc8e3de89836a563",
  "f5e3e571251e17598487352d03a84f6ecf84012fce0df5e0efb57e8da399241a",
  "20e4f330446ce9343ba31242e4bf4bd7bd2f7020241dcba8faa36e223c0fb7c5",
  "c2068d5f71343a08c0b2311e2a51542bea48202b32da416835bbf5710fb97f86",
  "8c04101d58aa62aacdd4834a49bd2090b3efa1090efb72701d3bbe7df5ea004a",
  "000aa57a8189e1a473a31103b4f85a390fb7e2417d3777dca7d6a68106c0ff45",
  "1b75004d14b815ad796f5dd4aa075bccd3cd33a07a6ffc222682a36fa463367f",
  "18375c6a53c851c5d436c6c5936ffc387e08e5c9d9fd080264eddb261b66a1db",
  "16487837d95cdb8657cd23b2b2961d15f04af99633edc8f85559895e0e674c62",
  "fcfcda3c4674c321ceeb82425603a70cd833fbdfa7e4c9f03a5914b8ce2ab82e",
  "0b7a4144803ca75303b72d7b5e14c22f87ec7cb42d30c853edb819ba6d6d7af0",
  "caa15b9ee3c674de0bb79f2abbeee723c910f14fa0393aa551114ae5414e5650",
  "0645edb78776de577de51699e5a8a1167ba0a5c3999bbc3d865beac2f0b79591",
  "2b8db974e355f559872531498b4dfc7dc193d1bed066d04e2620ecb62f96d772",
  "8dc82f329f420909652204ecb80e57807214ff92ef3c408045b71609d333c1e4",
  "6bd71801ae78a74e3e23a2d2c18eff4c6f48f3bb3e5cf8d38efaebd01043d460",
  "2cf55835ee056e5fbd95a04be40ebadf67268b8f5f6a1e06507c818532c2972c",
  "fd916f3c21c31d5788cbde980b3d3981ccb4985065a8b933a40981bb12baf383",
  "000fd4c5e7577748437fbb6c31cb06955418728a3534c6bddb356b2c75102e38",
  "c41afa57dd498c290120bc21ddc8ce8d4d82f2077a394fba58ac56dbb477477e",
  "18e0f5d8784735409e25f6b5636796ec400887e5edfa15911986da41d6dd24ae",
  "f1ae51b9be6b2b0ff2e526db1fb5b20397ad7782c627cdbac15d33f8bd56f8e6",
  "d5cec035428886d3543b3424a2261860de7316a53c675a41c7e198fee9c85da2",
  "d1efb793e0cd243670e9a5247fac7c8436a23ad828b53b38358341de37a80158",
  "215bc05cd8e48a2a279d3cfdf3f0bd374e4e8d250f7e46649d10e69a51bd73ae",
  "cf58f147f1c8b24c741cf2eeb272af4fba8818e0adb9b6fd50f2dc47e953fe93",
  "3a7c2afe11a686d9f164ed0d28a01b013f08c1fa23e143fb4c84cba1d30f83dc",
  "f895282bcb2b1d099f5f55129f9117185c8a7aed6b16ffcbb089148cbdcbf3af",
  "52fbff2b35ba88b6b4d1c95b3c78512311b41aeff8a271976ae87a5e66c8194e",
  "f5dcbfd4d590c9ea37492660716a6ce0042b7dbbff8147015ccc34d786f9ca21",
  "45bbb98df42f3cbe3beb90023075e3171b9e5ec34cc813eac928d912e23c698d",
  "7053c9ca77de7d94316ec36399115e10056f108324ece8c867a467902bc50dab",
  "700a91e9171e7a66f1a7264910f1b8bb6b13fb7c3be6a07a793815bcc4e0e57d",
  "d7169b4b6d75ea706024df73fc08adf46eba8fae5775a59e5bf18461ef2ce844",
  "d7f25df1d2c74d7966e864ef24374242c7665ee1e2e44b29028b41b45de2ab68",
  "8609e8641f1286103a2dc0eab34a6e62762e767ac7d430c6ba81a07b66b4878d",
  "cc32fe11ed30be9f2ce16faa4c1b392c8e262e44eaf7bc4dcee9e3c767e21b22",
  "90b304a6a4a55c63d8b59db33298bcbd747c0176d0fdf25e97a2c4d1bb8520a0",
  "12599df30bb95f8c4c9b2b9edd40fad57534be0f1cb39714fd886b46cc710b2f",
  "bc9e7845747202e84919997ba2125c8f7607b140b438b6d9ceb81d20a052cd18",
  "eb0dadb4d6184b1f6cac0d1a0f4ced0eb320182cfde4267562fb00d0c8ebff5e",
  "99405d638071acc2ef159d2e9f0256bcec9853dd9ce1225df37e8de695690368",
  "a2deaca3c1b70c218bbb739f9b8a33f73a16d6c57e8246139ca4f4b9e27451d9",
  "59b646553350a63a3534c7de9885023bf2c46da687768629b79e1865d3c899e2",
  "b262d2dada7b2eac0efac141d62f38d274626b642d04557064691eebec5eaad1",
  "3099055ade21590a3d44bcb03af1d2060f278ba8c3436db2674251596ebb36af",
  "fc498f7994410f9061356537986ca88e4c949ab26c7b110c13e7c67a26443e32",
  "037df7e42ba6a3c31528c2f71fd4093b00795123e77bd38ccb6196d7ee748360"
]);

// ── SVG Gothic Portcullis Builder ────────────────────────────
function buildGateSVG() {
  const barCX  = [152, 276, 400, 524, 648, 792, 916, 1040, 1164, 1288];
  const BW = 22, BODY = 1150;
  const crossYs = [70, 250, 430, 610, 790];
  const CH = 18;

  const bars = barCX.map(cx => {
    const x = cx - BW / 2;
    return `
      <rect x="${x}" y="-350" width="${BW}" height="${BODY + 350}" fill="url(#bG)" filter="url(#ms)"/>
      <rect x="${cx - 4}" y="-350" width="8" height="${BODY + 350}" fill="rgba(255,255,255,0.055)"/>
      <polygon points="${x},${BODY} ${cx},${BODY + 65} ${x + BW},${BODY}" fill="url(#bG)" filter="url(#ms)"/>`;
  }).join('');

  const crosses = crossYs.map(cy =>
    `<rect x="108" y="${cy}" width="1224" height="${CH}" fill="url(#hG)" rx="5"/>` +
    barCX.map(cx =>
      `<circle cx="${cx}" cy="${cy + CH / 2}" r="8" fill="#1c1c1c" stroke="#555" stroke-width="1.5"/>
       <circle cx="${cx}" cy="${cy + CH / 2}" r="3.5" fill="#777"/>`
    ).join('')
  ).join('');

  // Gothic arch: two pointed arcs meeting at top center
  const archPath = `M108,120 C108,0 440,0 720,0 C1000,0 1332,0 1332,120`;

  // Gothic trefoils along top band (decorative)
  const trefoils = [240,400,560,720,880,1040,1200].map(tx =>
    `<circle cx="${tx}" cy="25" r="10" fill="none" stroke="rgba(229,178,54,0.2)" stroke-width="1"/>
     <circle cx="${tx - 10}" cy="32" r="8" fill="none" stroke="rgba(229,178,54,0.15)" stroke-width="1"/>
     <circle cx="${tx + 10}" cy="32" r="8" fill="none" stroke="rgba(229,178,54,0.15)" stroke-width="1"/>`
  ).join('');

  return `<svg viewBox="0 0 1440 1200" preserveAspectRatio="xMidYMid slice"
      width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bG" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stop-color="#060606"/>
        <stop offset="20%"  stop-color="#2c2c2c"/>
        <stop offset="48%"  stop-color="#5c5c5c"/>
        <stop offset="52%"  stop-color="#686868"/>
        <stop offset="80%"  stop-color="#2a2a2a"/>
        <stop offset="100%" stop-color="#060606"/>
      </linearGradient>
      <linearGradient id="hG" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stop-color="#0a0a0a"/>
        <stop offset="30%"  stop-color="#424242"/>
        <stop offset="50%"  stop-color="#5e5e5e"/>
        <stop offset="70%"  stop-color="#3e3e3e"/>
        <stop offset="100%" stop-color="#0a0a0a"/>
      </linearGradient>
      <linearGradient id="stG" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stop-color="#0c0a08"/>
        <stop offset="40%"  stop-color="#201c16"/>
        <stop offset="100%" stop-color="#0c0a08"/>
      </linearGradient>
      <linearGradient id="stGR" x1="100%" y1="0%" x2="0%" y2="0%">
        <stop offset="0%"   stop-color="#0c0a08"/>
        <stop offset="40%"  stop-color="#201c16"/>
        <stop offset="100%" stop-color="#0c0a08"/>
      </linearGradient>
      <linearGradient id="gldG" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stop-color="#3d2b00"/>
        <stop offset="40%"  stop-color="#c9901a"/>
        <stop offset="60%"  stop-color="#e5b236"/>
        <stop offset="100%" stop-color="#3d2b00"/>
      </linearGradient>
      <filter id="ms" x="-10%" y="-5%" width="120%" height="110%">
        <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#000" flood-opacity="0.95"/>
      </filter>
      <filter id="stShadow">
        <feDropShadow dx="4" dy="0" stdDeviation="6" flood-color="#000" flood-opacity="0.7"/>
      </filter>
      <filter id="stShadowR">
        <feDropShadow dx="-4" dy="0" stdDeviation="6" flood-color="#000" flood-opacity="0.7"/>
      </filter>
    </defs>

    <!-- Deep background -->
    <rect width="1440" height="1200" fill="#04030a"/>

    <!-- Gate fill (space between bars, subtle dark tone) -->
    <rect x="108" y="-350" width="1224" height="1550" fill="rgba(0,0,0,0.45)"/>

    <!-- Crossbars (behind bars) -->
    ${crosses}

    <!-- Vertical iron bars -->
    ${bars}

    <!-- ── Stone pillars ── -->
    <rect x="0" y="0" width="110" height="1200" fill="url(#stG)" filter="url(#stShadow)"/>
    <rect x="1330" y="0" width="110" height="1200" fill="url(#stGR)" filter="url(#stShadowR)"/>

    <!-- Pillar inner edge highlight -->
    <line x1="110" y1="0" x2="110" y2="1200" stroke="rgba(229,178,54,0.12)" stroke-width="1.5"/>
    <line x1="1330" y1="0" x2="1330" y2="1200" stroke="rgba(229,178,54,0.12)" stroke-width="1.5"/>

    <!-- Pillar carved grooves (gothic columns) -->
    <line x1="30" y1="0" x2="30" y2="1200" stroke="rgba(0,0,0,0.5)" stroke-width="2"/>
    <line x1="60" y1="0" x2="60" y2="1200" stroke="rgba(0,0,0,0.4)" stroke-width="1.5"/>
    <line x1="80" y1="0" x2="80" y2="1200" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    <line x1="1360" y1="0" x2="1360" y2="1200" stroke="rgba(0,0,0,0.5)" stroke-width="2"/>
    <line x1="1380" y1="0" x2="1380" y2="1200" stroke="rgba(0,0,0,0.4)" stroke-width="1.5"/>
    <line x1="1410" y1="0" x2="1410" y2="1200" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

    <!-- Gothic arch (top stone lintel) -->
    <path d="${archPath}" stroke="rgba(229,178,54,0.25)" stroke-width="2" fill="none"/>

    <!-- Top stone band -->
    <rect x="0" y="0" width="1440" height="52" fill="url(#stG)"/>
    <!-- Gold accent line under top band -->
    <rect x="0" y="50" width="1440" height="3" fill="url(#gldG)" opacity="0.7"/>
    <!-- Second thin line -->
    <rect x="0" y="55" width="1440" height="1" fill="url(#gldG)" opacity="0.3"/>

    <!-- Gothic trefoil decorations in top band -->
    ${trefoils}

    <!-- VAN LAX monogram hint in top center of band -->
    <text x="720" y="36" text-anchor="middle" font-family="serif" font-size="14"
          fill="rgba(229,178,54,0.3)" letter-spacing="8">V A N   L A X</text>

    <!-- Bottom stone sill -->
    <rect x="0" y="1140" width="1440" height="60" fill="url(#stG)"/>
    <rect x="0" y="1138" width="1440" height="3" fill="url(#gldG)" opacity="0.5"/>
  </svg>`;
}

// ── GATE Logic ───────────────────────────────────────────────
const GATE = {
  SALT: 'VANLAX_GATE_2026',
  EXPIRY: 3 * 24 * 60 * 60 * 1000,

  deviceId() {
    const s = [navigator.userAgent, navigator.language,
      screen.width+'x'+screen.height+'x'+screen.colorDepth,
      new Date().getTimezoneOffset(),
      navigator.hardwareConcurrency||0, navigator.platform].join('|');
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
    return (h >>> 0).toString(36);
  },

  async hashCode(raw) {
    const str = this.SALT + raw.trim().toUpperCase().replace(/[\s-]/g,'');
    // re-add expected dashes: first 3 chars, then 4, then 4
    const norm = this.SALT + raw.trim().toUpperCase();
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(norm));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
  },

  async getIP() {
    try { return (await (await fetch('https://api.ipify.org?format=json')).json()).ip; }
    catch { return 'unknown'; }
  },

  load() {
    try { return JSON.parse(localStorage.getItem('vanlax_gate') || 'null'); }
    catch { return null; }
  },

  save(hash, ip) {
    const now = Date.now();
    const d = { h: hash, dev: this.deviceId(), t: now, exp: now + this.EXPIRY, ip };
    localStorage.setItem('vanlax_gate', JSON.stringify(d));
    document.cookie = `vlg=${btoa(hash+':'+d.dev)};max-age=${this.EXPIRY/1000};path=/;SameSite=Strict`;
  },

  isValid() {
    const d = this.load();
    if (!d) return false;
    if (Date.now() > d.exp) { localStorage.removeItem('vanlax_gate'); return false; }
    if (d.dev !== this.deviceId()) return false;
    if (!GATE_HASHES.has(d.h)) return false;
    return true;
  },

  async validate(code) {
    const h = await this.hashCode(code);
    return GATE_HASHES.has(h) ? h : null;
  }
};

// ── UI Functions ─────────────────────────────────────────────
async function submitInviteCode() {
  const inp  = document.getElementById('invite-code-input');
  const btn  = document.getElementById('invite-submit-btn');
  const err  = document.getElementById('gate-error');
  const code = inp.value.trim();
  if (!code) { inp.focus(); return; }

  btn.textContent = 'VERIFYING…';
  btn.disabled = true;
  err.textContent = '';

  const hash = await GATE.validate(code);
  if (hash) {
    const ip = await GATE.getIP();
    GATE.save(hash, ip);

    // Show success state
    document.getElementById('gate-form').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('gate-form').style.display = 'none';
      document.getElementById('gate-success').style.display = 'block';
    }, 300);

    // Rise gate after 0.9s
    setTimeout(openGate, 900);
  } else {
    err.textContent = 'Invalid invite code. Please try again.';
    inp.classList.add('shake');
    inp.addEventListener('animationend', () => inp.classList.remove('shake'), { once: true });
    btn.textContent = 'VERIFY ACCESS';
    btn.disabled = false;
    inp.focus();
  }
}

function openGate() {
  const gate    = document.getElementById('gothic-gate-container');
  const overlay = document.getElementById('welcome-popup-overlay');

  gate.classList.add('gate-rising');

  // Start fading overlay while gate is rising
  setTimeout(() => {
    overlay.style.transition = 'opacity 0.9s ease';
    overlay.style.opacity = '0';
  }, 1400);

  // Hide everything after animation
  setTimeout(() => {
    overlay.style.display = 'none';
    gate.style.display    = 'none';
  }, 2600);
}

function acceptCookies() {
  const b = document.getElementById('cookie-banner');
  b.classList.add('hidden');
  b.addEventListener('animationend', () => b.style.display = 'none', { once: true });
  localStorage.setItem('vanlax_cookies', '1');
}

// ── Auto-format input ────────────────────────────────────────
function formatCodeInput(e) {
  let v = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (v.length > 3) v = v.slice(0,3) + '-' + v.slice(3);
  if (v.length > 8) v = v.slice(0,8) + '-' + v.slice(8);
  e.target.value = v.slice(0, 13);
}

// ── Init ─────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Build SVG gate
  const gateEl = document.getElementById('gothic-gate-container');
  if (gateEl) gateEl.innerHTML = buildGateSVG();

  // Check stored access
  if (GATE.isValid()) {
    if (gateEl) gateEl.style.display = 'none';
    const overlay = document.getElementById('welcome-popup-overlay');
    if (overlay) overlay.style.display = 'none';
  }

  // Cookie banner
  if (localStorage.getItem('vanlax_cookies') === '1') {
    const cb = document.getElementById('cookie-banner');
    if (cb) cb.style.display = 'none';
  }

  // Input events
  const inp = document.getElementById('invite-code-input');
  if (inp) {
    inp.addEventListener('input', formatCodeInput);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') submitInviteCode(); });
  }
});
