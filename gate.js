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

// ── SVG Islamic Golden Gate Builder ──────────────────────────
function buildGateSVG() {

  function panel(side) {
    const W = 500, H = 1000, L = side === 'L';

    // Gold gradient stops (shared prefix avoids ID collision between panels)
    const pfx = L ? 'l' : 'r';

    // 8-pointed star polygon (cx,cy,outerR,innerR)
    function star8(cx, cy, ro, ri) {
      let p = '';
      for (let i = 0; i < 16; i++) {
        const a = i * Math.PI / 8 - Math.PI / 2;
        const r = i % 2 === 0 ? ro : ri;
        p += `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)} `;
      }
      return `<polygon points="${p}" fill="none" stroke="url(#g${pfx})" stroke-width="2.5" stroke-linejoin="round"/>`;
    }

    // Islamic star grid (lower 55%)
    let grid = '';
    const gs = 72, gy0 = H * 0.44;
    for (let y = gy0 + gs / 2; y < H + gs; y += gs) {
      for (let x = gs / 2; x < W + gs; x += gs) {
        grid += star8(x, y, gs * 0.38, gs * 0.17);
        // Centre dot
        grid += `<circle cx="${x}" cy="${y}" r="${gs * 0.08}" fill="url(#g${pfx})"/>`;
        // Cross connectors between stars
        grid += `<line x1="${x - gs * 0.38}" y1="${y}" x2="${x - gs * 0.5}" y2="${y}" stroke="url(#g${pfx})" stroke-width="2"/>`;
        grid += `<line x1="${x + gs * 0.38}" y1="${y}" x2="${x + gs * 0.5}" y2="${y}" stroke="url(#g${pfx})" stroke-width="2"/>`;
        grid += `<line x1="${x}" y1="${y - gs * 0.38}" x2="${x}" y2="${y - gs * 0.5}" stroke="url(#g${pfx})" stroke-width="2"/>`;
        grid += `<line x1="${x}" y1="${y + gs * 0.38}" x2="${x}" y2="${y + gs * 0.5}" stroke="url(#g${pfx})" stroke-width="2"/>`;
        // Diagonal connectors (corner stars)
        grid += `<line x1="${x - gs * 0.27}" y1="${y - gs * 0.27}" x2="${x - gs * 0.38}" y2="${y - gs * 0.38}" stroke="url(#g${pfx})" stroke-width="1.5" opacity="0.7"/>`;
        grid += `<line x1="${x + gs * 0.27}" y1="${y - gs * 0.27}" x2="${x + gs * 0.38}" y2="${y - gs * 0.38}" stroke="url(#g${pfx})" stroke-width="1.5" opacity="0.7"/>`;
        grid += `<line x1="${x + gs * 0.27}" y1="${y + gs * 0.27}" x2="${x + gs * 0.38}" y2="${y + gs * 0.38}" stroke="url(#g${pfx})" stroke-width="1.5" opacity="0.7"/>`;
        grid += `<line x1="${x - gs * 0.27}" y1="${y + gs * 0.27}" x2="${x - gs * 0.38}" y2="${y + gs * 0.38}" stroke="url(#g${pfx})" stroke-width="1.5" opacity="0.7"/>`;
        // Small octagon at each grid crossing
        let op = '';
        for (let i = 0; i < 8; i++) {
          const a = i * Math.PI / 4 + Math.PI / 8;
          op += `${x + gs * 0.12 * Math.cos(a)},${y + gs * 0.12 * Math.sin(a)} `;
        }
        grid += `<polygon points="${op}" fill="none" stroke="url(#g${pfx})" stroke-width="1.2" opacity="0.8"/>`;
      }
    }

    // Arabesque medallion (upper 44%)
    const mx = L ? W * 0.5 : W * 0.5, my = H * 0.24, mr = 155;
    let med = '';
    // Outer ring + inner rings
    med += `<circle cx="${mx}" cy="${my}" r="${mr}" fill="none" stroke="url(#g${pfx})" stroke-width="5"/>`;
    med += `<circle cx="${mx}" cy="${my}" r="${mr * 0.78}" fill="none" stroke="url(#g${pfx})" stroke-width="2"/>`;
    med += `<circle cx="${mx}" cy="${my}" r="${mr * 0.55}" fill="none" stroke="url(#g${pfx})" stroke-width="2"/>`;
    med += `<circle cx="${mx}" cy="${my}" r="${mr * 0.3}" fill="none" stroke="url(#g${pfx})" stroke-width="2"/>`;
    // 16 petals
    for (let i = 0; i < 16; i++) {
      const a = i * Math.PI / 8, a2 = a + Math.PI / 16;
      const x1 = mx + mr * 0.78 * Math.cos(a), y1 = my + mr * 0.78 * Math.sin(a);
      const x2 = mx + mr * 0.55 * Math.cos(a2), y2 = my + mr * 0.55 * Math.sin(a2);
      const xc = mx + mr * 0.65 * Math.cos(a + Math.PI / 32), yc = my + mr * 0.65 * Math.sin(a + Math.PI / 32);
      med += `<path d="M${mx},${my} Q${xc},${yc} ${x1},${y1}" fill="none" stroke="url(#g${pfx})" stroke-width="1.8"/>`;
    }
    // 8-pointed star in centre
    med += star8(mx, my, mr * 0.28, mr * 0.13);
    // Radiating spokes
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4;
      med += `<line x1="${mx + mr * 0.3 * Math.cos(a)}" y1="${my + mr * 0.3 * Math.sin(a)}" x2="${mx + mr * 0.78 * Math.cos(a)}" y2="${my + mr * 0.78 * Math.sin(a)}" stroke="url(#g${pfx})" stroke-width="1.5" opacity="0.6"/>`;
    }
    // Lotus tips at outer ring
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4 - Math.PI / 8;
      const tx = mx + mr * Math.cos(a), ty = my + mr * Math.sin(a);
      const bl = mx + (mr - 18) * Math.cos(a - 0.2), bly = my + (mr - 18) * Math.sin(a - 0.2);
      const br = mx + (mr - 18) * Math.cos(a + 0.2), bry = my + (mr - 18) * Math.sin(a + 0.2);
      med += `<path d="M${bl},${bly} Q${tx},${ty} ${br},${bry}" fill="none" stroke="url(#g${pfx})" stroke-width="2.5"/>`;
    }

    // Top frieze band
    let frieze = '';
    const fh = 70, fs = 28;
    frieze += `<rect x="0" y="0" width="${W}" height="${fh}" fill="rgba(40,15,0,0.45)"/>`;
    for (let x = 0; x < W; x += fs) {
      frieze += `<rect x="${x + 2}" y="4" width="${fs - 4}" height="${fh - 8}" rx="3" fill="none" stroke="url(#g${pfx})" stroke-width="1" opacity="0.8"/>`;
      frieze += `<circle cx="${x + fs / 2}" cy="${fh / 2}" r="${fs * 0.22}" fill="none" stroke="url(#g${pfx})" stroke-width="1.2"/>`;
      frieze += `<circle cx="${x + fs / 2}" cy="${fh / 2}" r="${fs * 0.1}" fill="url(#g${pfx})" opacity="0.7"/>`;
      frieze += `<line x1="${x + fs / 2}" y1="4" x2="${x + fs / 2}" y2="${fh - 4}" stroke="url(#g${pfx})" stroke-width="0.6" opacity="0.3"/>`;
    }

    // Pointed Moorish arch edge (inner edge of panel)
    const archEdge = L
      ? `M${W},0 C${W},150 ${W * 0.75},300 ${W * 0.6},450 C${W * 0.45},600 ${W},750 ${W},${H}`
      : `M0,0 C0,150 ${W * 0.25},300 ${W * 0.4},450 C${W * 0.55},600 0,750 0,${H}`;
    // Draw the arch edge with double gold lines
    const aw = 10;
    const archEdge2 = L
      ? `M${W - aw},0 C${W - aw},150 ${W * 0.75 - aw},300 ${W * 0.6 - aw},450 C${W * 0.45 - aw},600 ${W - aw},750 ${W - aw},${H}`
      : `M${aw},0 C${aw},150 ${W * 0.25 + aw},300 ${W * 0.4 + aw},450 C${W * 0.55 + aw},600 ${aw},750 ${aw},${H}`;

    // Clip: cut panel along arch edge so background shows through
    const clipId = `archClip${pfx}`;
    const clipPath = L
      ? `<clipPath id="${clipId}"><path d="M0,0 L${W},0 C${W},150 ${W*0.75},300 ${W*0.6},450 C${W*0.45},600 ${W},750 ${W},${H} L0,${H} Z"/></clipPath>`
      : `<clipPath id="${clipId}"><path d="M${W},0 L0,0 C0,150 ${W*0.25},300 ${W*0.4},450 C${W*0.55},600 0,750 0,${H} L${W},${H} Z"/></clipPath>`;

    // Seam bar (vertical gold bar along inner edge where doors meet)
    const seamBar = L
      ? `<rect x="${W - 14}" y="0" width="14" height="${H}" fill="url(#g${pfx})"/>`
      : `<rect x="0" y="0" width="14" height="${H}" fill="url(#g${pfx})"/>`;

    // Outer frame
    const frame = `
      <rect x="0" y="0" width="${W}" height="${H}" fill="none" stroke="url(#g${pfx})" stroke-width="14"/>
      <rect x="7" y="7" width="${W - 14}" height="${H - 14}" fill="none" stroke="url(#g${pfx})" stroke-width="2.5" opacity="0.5"/>`;

    const defs = `<defs>
      <linearGradient id="g${pfx}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stop-color="#5c2d00"/>
        <stop offset="20%"  stop-color="#b06010"/>
        <stop offset="48%"  stop-color="#ffd050"/>
        <stop offset="52%"  stop-color="#ffe878"/>
        <stop offset="80%"  stop-color="#b06010"/>
        <stop offset="100%" stop-color="#5c2d00"/>
      </linearGradient>
      <linearGradient id="g${pfx}v" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stop-color="#5c2d00"/>
        <stop offset="40%"  stop-color="#c07820"/>
        <stop offset="50%"  stop-color="#ffd050"/>
        <stop offset="60%"  stop-color="#c07820"/>
        <stop offset="100%" stop-color="#5c2d00"/>
      </linearGradient>
      <filter id="glow${pfx}">
        <feGaussianBlur stdDeviation="3.5" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      ${clipPath}
    </defs>`;

    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%">
      ${defs}
      <g clip-path="url(#${clipId})">
        <g filter="url(#glow${pfx})">
          ${grid}
          ${med}
          ${frieze}
          ${frame}
          ${seamBar}
          <path d="${archEdge}" fill="none" stroke="url(#g${pfx})" stroke-width="14"/>
          <path d="${archEdge2}" fill="none" stroke="url(#g${pfx})" stroke-width="3" opacity="0.5"/>
        </g>
      </g>
    </svg>`;
  }

  return { left: panel('L'), right: panel('R') };
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

// Close popup without entering code (user stays on main hub)
function closeGatePopup() {
  const overlay = document.getElementById('welcome-popup-overlay');
  const gate    = document.getElementById('gothic-gate-container');
  if (overlay) { overlay.style.transition = 'opacity 0.4s ease'; overlay.style.opacity = '0'; setTimeout(() => { overlay.style.display = 'none'; overlay.style.opacity = '1'; overlay.style.transition = ''; }, 420); }
  if (gate)    gate.style.display = 'none';
  window._vanlaxPendingNav = null;
}

// Show invite popup when user clicks a restricted section
function showGatePopup() {
  const gateEl  = document.getElementById('gothic-gate-container');
  const overlay = document.getElementById('welcome-popup-overlay');
  if (gateEl)  { gateEl.style.display = 'block'; gateEl.classList.remove('gate-opening'); }
  if (overlay) { overlay.style.display = 'flex'; overlay.style.opacity = '1'; overlay.style.transition = ''; }
  const form    = document.getElementById('gate-form');
  const success = document.getElementById('gate-success');
  const err     = document.getElementById('gate-error');
  const btn     = document.getElementById('invite-submit-btn');
  const inp     = document.getElementById('invite-code-input');
  if (form)    { form.style.display = ''; form.style.opacity = '1'; }
  if (success) success.style.display = 'none';
  if (err)     err.textContent = '';
  if (btn)     { btn.textContent = 'VERIFY ACCESS'; btn.disabled = false; }
  if (inp)     { inp.value = ''; setTimeout(() => inp.focus(), 100); }
}

function openGate() {
  const gate    = document.getElementById('gothic-gate-container');
  const overlay = document.getElementById('welcome-popup-overlay');

  if (gate) gate.classList.add('gate-opening');

  setTimeout(() => {
    if (overlay) { overlay.style.transition = 'opacity 0.9s ease'; overlay.style.opacity = '0'; }
  }, 1200);

  setTimeout(() => {
    if (overlay) overlay.style.display = 'none';
    if (gate)    gate.style.display    = 'none';
    // Proceed to the section user originally clicked
    if (window._vanlaxPendingNav) {
      const nav = window._vanlaxPendingNav;
      window._vanlaxPendingNav = null;
      nav();
    }
  }, 2400);
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
  // Build two-panel baroque gate (hidden by default)
  const gateEl = document.getElementById('gothic-gate-container');
  if (gateEl) {
    const panels = buildGateSVG();
    const left = document.createElement('div');
    left.className = 'gate-panel-left';
    left.innerHTML = panels.left;
    const right = document.createElement('div');
    right.className = 'gate-panel-right';
    right.innerHTML = panels.right;
    gateEl.appendChild(left);
    gateEl.appendChild(right);
    gateEl.style.display = 'none';
  }

  // Overlay always hidden on load — shown only when entering restricted section
  const overlay = document.getElementById('welcome-popup-overlay');
  if (overlay) overlay.style.display = 'none';

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

  // Sections that require an invite code
  const RESTRICTED = new Set([1, 2, 3, 4, 9, 11]);

  // Wrap flyThrough
  if (typeof window.flyThrough === 'function') {
    const _orig = window.flyThrough;
    window.flyThrough = function(n, ...args) {
      if (RESTRICTED.has(n) && !GATE.isValid()) {
        window._vanlaxPendingNav = () => _orig.call(window, n, ...args);
        showGatePopup();
        return;
      }
      _orig.call(window, n, ...args);
    };
  }

  // Wrap enterSection
  if (typeof window.enterSection === 'function') {
    const _orig = window.enterSection;
    window.enterSection = function(n, ...args) {
      if (RESTRICTED.has(n) && !GATE.isValid()) {
        window._vanlaxPendingNav = () => _orig.call(window, n, ...args);
        showGatePopup();
        return;
      }
      _orig.call(window, n, ...args);
    };
  }
});
