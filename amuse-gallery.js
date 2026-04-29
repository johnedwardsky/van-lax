// ============================================================
// ABRAKADABRA — Pure Amuse Engine
// Faithful port of the exact Amuse source math:
//
// Pen from right arm end (qt/Mt = a2):
//   rl = qt + cos(Me)*(Wt+rarmext)
//   bl = Mt + sin(Me)*(Wt+rarmext)
//
// Me via Law of Cosines + Law of Sines:
//   oe  = acos((Wt²+Ht²-dist²)/(2*Wt*Ht))
//   De  = asin(Wt*sin(oe)/dist)
//   cn  = asin(Ht*sin(oe)/dist)
//   $l  = asin(dy/dist)
//   Me  = (Ht>Wt) ? De+oe+$l : PI-cn+$l
//
// Global rotation via polar coords:
//   fa  = atan2-style from center, then += crot*k
//   It  = cx+cos(fa)*Sl, we = cy+sin(fa)*Sl
//
// Rand A/B/C/D — exact Amuse source parameter ranges
// ============================================================

const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');
const playPauseBtn  = document.getElementById('play-pause');
const randomizeBtn  = document.getElementById('randomize');
const shapeNameEl   = document.getElementById('shape-name');
const valLrpmEl     = document.getElementById('val-lrpm');
const valRrpmEl     = document.getElementById('val-rrpm');
const valSymmetryEl = document.getElementById('val-symmetry');

let W, H, CX, CY;
let isPlaying = true;
const k = Math.PI / 180;

// ── Rotor state ───────────────────────────────────────────────
let lrot = 0, rrot = 0, crot = 0, nt = 0;
let prevX = null, prevY = null;
let frame = 0, maxFrames = 1200;

// ── Current params ────────────────────────────────────────────
let X = {};

// φ = 1.618... — all arm ratios use adjacent Fibonacci numbers
// larm2/larm1 = 144/89 = 1.618 = φ
// rarm2/rarm1 = 144/55 = 2.618 = φ²
// |baseoffsy|/larm2 = 233/144 = 1.618 = φ  (ring radius = φ × arm)
// lrpm/rrpm from Fibonacci pairs: (2,3), (3,5), (5,8)
// Symmetry: 5 and 10 (pentagon, most φ-native), 3, 6 (triangular/hexagonal)
const PRESETS = [
  // ── FIXED GEOMETRIC — rotorRPM=0, centered, pure φ proportions ──

  // Pentagon (5-fold) — most native to φ
  { lrpm:2,  rrpm:-3, rotorRPM:0, handdist:233, larm1:89, larm2:144,
    rarm1:55, rarm2:144, rarmext:55,  larma:0, baseoffsx:0, baseoffsy:0,
    symmetry:5, autoEvolve:false, name:'φ Pentagon — 2:3' },

  // Decagon (10-fold) — double pentagon
  { lrpm:3,  rrpm:-5, rotorRPM:0, handdist:233, larm1:89, larm2:144,
    rarm1:55, rarm2:144, rarmext:55,  larma:0, baseoffsx:0, baseoffsy:0,
    symmetry:10, autoEvolve:false, name:'φ Decagon — 3:5' },

  // Pentagram star (5-fold, longer spike arm)
  { lrpm:5,  rrpm:-8, rotorRPM:0, handdist:233, larm1:55, larm2:144,
    rarm1:34, rarm2:89,  rarmext:144, larma:0, baseoffsx:0, baseoffsy:0,
    symmetry:5, autoEvolve:false, name:'φ Pentagram — 5:8' },

  // Trefoil (3-fold)
  { lrpm:2,  rrpm:-3, rotorRPM:0, handdist:233, larm1:89, larm2:144,
    rarm1:55, rarm2:144, rarmext:89,  larma:0, baseoffsx:0, baseoffsy:0,
    symmetry:3, autoEvolve:false, name:'φ Trefoil — 2:3' },

  // Hexagon (6-fold)
  { lrpm:3,  rrpm:-5, rotorRPM:0, handdist:233, larm1:89, larm2:144,
    rarm1:55, rarm2:144, rarmext:55,  larma:0, baseoffsx:0, baseoffsy:0,
    symmetry:6, autoEvolve:false, name:'φ Hexagon — 3:5' },

  // 5-fold deep mesh (5:8 ratio, dense lines)
  { lrpm:5,  rrpm:-8, rotorRPM:0, handdist:377, larm1:89, larm2:233,
    rarm1:55, rarm2:233, rarmext:89,  larma:0, baseoffsx:0, baseoffsy:0,
    symmetry:5, autoEvolve:false, name:'φ Mesh — 5:8' },

  // 10-fold lace (Fibonacci 5:8, double pentagon)
  { lrpm:5,  rrpm:-8, rotorRPM:0, handdist:233, larm1:89, larm2:144,
    rarm1:55, rarm2:144, rarmext:89,  larma:0, baseoffsx:0, baseoffsy:0,
    symmetry:10, autoEvolve:false, name:'φ Lace — 10-fold' },

  // ── RING PATTERNS — rotorRPM>0, |baseoffsy| = larm2 × φ ──────────

  // Pentagon ring (ring radius = 144 × 1.618 = 233)
  { lrpm:2,  rrpm:-3, rotorRPM:3, handdist:233, larm1:89, larm2:144,
    rarm1:55, rarm2:144, rarmext:55,  larma:0, baseoffsx:0, baseoffsy:-233,
    symmetry:5, autoEvolve:true, name:'φ Ring Pentagon' },

  // Amuse Classic (exact defaults, kept for reference)
  { lrpm:2,  rrpm:-3, rotorRPM:4, handdist:351, larm1:105, larm2:316,
    rarm1:95, rarm2:371, rarmext:53, larma:0, baseoffsx:0, baseoffsy:-385,
    symmetry:1, autoEvolve:true, name:'Amuse Classic' },

  // Hexagonal ring
  { lrpm:3,  rrpm:-5, rotorRPM:2, handdist:233, larm1:89, larm2:144,
    rarm1:55, rarm2:144, rarmext:55,  larma:0, baseoffsx:0, baseoffsy:-233,
    symmetry:6, autoEvolve:true, name:'φ Ring Hexagon' },

  // Decagon ring
  { lrpm:5,  rrpm:-8, rotorRPM:2, handdist:233, larm1:89, larm2:144,
    rarm1:55, rarm2:144, rarmext:89,  larma:0, baseoffsx:0, baseoffsy:-233,
    symmetry:10, autoEvolve:true, name:'φ Ring Decagon' },

  // ── CHAOS Rand A/B/C/D — exact Amuse Rand source ───────────────
  { type:'A', name:'Chaos — Rand A (Sym)' },
  { type:'B', name:'Chaos — Rand B (Pure)' },
  { type:'C', name:'Chaos — Rand C' },
  { type:'D', name:'Chaos — Rand D' },
];

let searchIndex = 0;

// ── Amuse Rand functions — exact source ───────────────────────
function rnd(lo, hi) { return Math.random() * (hi - lo) + lo; }
function rndM()      { return (Math.random() > .5 ? 1 : -1) * rnd(.01, 50); }

function genChaos(mode) {
  const p = {
    rotorRPM:  rndM() / 4,
    lrpm:      rndM(),
    rrpm:      rndM(),
    baseoffsx: rnd(-200, 200),
    baseoffsy: rnd(-500, -100),
    handdist:  rnd(50, 500),
    larm1:     rnd(20, 200),
    rarm1:     rnd(20, 200),
    larm2:     rnd(100, 400),
    rarm2:     rnd(100, 400),
    rarmext:   rnd(0, 150),
    larma:     rnd(0, 360),
    autoEvolve: true,
  };
  if      (mode === 'A') p.symmetry = 6;
  else if (mode === 'B') p.symmetry = 1;
  else if (mode === 'C') p.symmetry = 3;
  else                   p.symmetry = Math.floor(rnd(1, 9));
  p.name = 'Chaos Rand ' + mode;
  return p;
}

// ── Dynamic scale — fills viewport per preset ────────────────
// maxReach = |baseoffsy| + max(larm2,rarm2) + rarmext
// scale so figure fills 88% of shorter screen dimension
let S = 1;

function computeScale(p) {
  const reach = Math.abs(p.baseoffsy) + Math.max(p.larm2, p.rarm2) + p.rarmext;
  return (Math.min(W, H) * 0.44) / Math.max(reach, 1);
}

// ── Resize ────────────────────────────────────────────────────
function resize() {
  const dpr = window.devicePixelRatio || 1;
  W = window.innerWidth; H = window.innerHeight;
  canvas.width  = W * dpr; canvas.height = H * dpr;
  ctx.scale(dpr, dpr);
  CX = W / 2; CY = H / 2;
  if (Object.keys(X).length) S = computeScale(X);
  clearCanvas(); resetState();
}
window.addEventListener('resize', resize);

function clearCanvas() {
  ctx.fillStyle = '#06060f';
  ctx.fillRect(0, 0, W, H);
}

function resetState() {
  lrot = 0; rrot = 0; crot = 0; nt = 0;
  prevX = null; prevY = null;
  frame = 0;
}

function applyPreset(idx) {
  const p = PRESETS[idx];
  X = p.type ? genChaos(p.type) : { ...p };
  S = computeScale(X);
  clearCanvas(); resetState();
  if (shapeNameEl)   shapeNameEl.textContent   = X.name || p.name;
  if (valLrpmEl)     valLrpmEl.textContent     = (+X.lrpm).toFixed(2);
  if (valRrpmEl)     valRrpmEl.textContent     = (+X.rrpm).toFixed(2);
  if (valSymmetryEl) valSymmetryEl.textContent = X.symmetry;

  // Compute frame budget: enough for the pattern to complete
  const lr = Math.abs(X.lrpm), rr = Math.abs(X.rrpm);
  const liRnd = Math.round(lr * 10), riRnd = Math.round(rr * 10);
  if (liRnd > 0 && riRnd > 0) {
    const g = gcd(liRnd, riRnd);
    maxFrames = Math.min(3000, Math.ceil((liRnd * riRnd / g) / 73) + 200);
  } else {
    maxFrames = p.type ? 700 : 1200;
  }
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

// ── Core Amuse draw — exact port ──────────────────────────────
function drawFrame() {
  // S is pre-computed per preset via computeScale()
  const sym = Math.max(1, Math.round(X.symmetry));

  // AutoEvolve (exact from Amuse source)
  let larm2 = X.larm2, rarm2 = X.rarm2, handdist = X.handdist;
  if (X.autoEvolve) {
    larm2    += Math.sin(nt * 3) * 50;
    rarm2    += Math.cos(nt * 2) * 50;
    handdist += Math.sin(nt * 1.5) * 30;
    nt += 0.0001;
  }

  // acceleration = 73 (Amuse default)
  for (let D = 0; D < 73; D++) {
    lrot += X.lrpm   * 1;   // Amuse increments by step (≈1 degree)
    rrot += X.rrpm   * 1;
    crot += X.rotorRPM * 1;

    // Pivot centres (exact Amuse variable names mapped here)
    const ce = CX + X.baseoffsx * S;   // Y in Amuse
    const Dt = CY + X.baseoffsy * S;   // P in Amuse
    const Kt = ce - (handdist * S) / 2; // h1x
    const ie = Dt;                      // h1y
    const $p = ce + (handdist * S) / 2; // h2x
    const tt = Dt;                      // h2y

    // End of first arms (ft=a1x, at=a1y, qt=a2x, Mt=a2y)
    const ft = Math.cos((lrot + X.larma) * k) * X.larm1 * S + Kt;
    const at = Math.sin((lrot + X.larma) * k) * X.larm1 * S + ie;
    const qt = Math.cos(rrot * k) * X.rarm1 * S + $p;
    const Mt = Math.sin(rrot * k) * X.rarm1 * S + tt;

    // Distances
    const rt = qt - ft;   // dx
    const yt = Mt - at;   // dy
    const $t = Math.max(0.1, Math.sqrt(rt * rt + yt * yt));

    const Wt = Math.max(1, rarm2 * S);   // R2
    const Ht = Math.max(1, larm2 * S);   // L2
    const _t = 2 * Wt * Ht;

    // Law of Cosines (exact Amuse)
    const I  = (Wt*Wt + Ht*Ht - $t*$t) / _t;
    const oe = Math.acos(Math.max(-1, Math.min(1, I)));

    // Law of Sines (exact Amuse)
    const Ol = Wt / ($t / Math.sin(oe || 0.001));
    const De = Math.asin(Math.max(-1, Math.min(1, Ol)));
    const _e = Ht / ($t / Math.sin(oe || 0.001));
    const cn = Math.asin(Math.max(-1, Math.min(1, _e)));
    const $l = Math.asin(Math.max(-1, Math.min(1, yt / $t)));

    // Intersection angle (exact Amuse branch logic)
    let Me;
    if (Ht > Wt) {
      Me = Math.PI - (Math.PI - De - oe - $l);  // = De + oe + $l
    } else {
      Me = Math.PI - (cn - $l);                  // = PI - cn + $l
    }

    // Pen position from right arm end (exact Amuse: qt, Mt = a2)
    const rl = qt + Math.cos(Me) * (Wt + X.rarmext * S);
    const bl = Mt + Math.sin(Me) * (Wt + X.rarmext * S);

    // Global rotation via polar coords (exact Amuse)
    const Rl = rl - CX;
    const Wl = bl - CY;
    const Sl = Math.sqrt(Rl * Rl + Wl * Wl);
    let fa = (Sl === 0) ? 0 : Math.asin(Math.max(-1, Math.min(1, Wl / Sl)));
    if (Rl < 0) fa = Math.PI - fa;
    fa += crot * k;

    // Rainbow color (exact Amuse source)
    const n1 = Math.sin(k * lrot + Math.PI * 0.666) * 127 + 127;
    const n2 = Math.sin(k * lrot + Math.PI * 0.333) * 127 + 127;
    const n3 = Math.sin(k * lrot)                   * 127 + 127;
    const e1 = Math.sin(k * rrot + Math.PI * 0.666) * 127 + 127;
    const e2 = Math.sin(k * rrot + Math.PI * 0.333) * 127 + 127;
    const e3 = Math.sin(k * rrot)                   * 127 + 127;
    const r  = Math.floor((n1 + e1) / 2);
    const g  = Math.floor((n2 + e2) / 2);
    const b  = Math.floor((n3 + e3) / 2);
    ctx.strokeStyle = `rgba(${r},${g},${b},0.5)`;
    ctx.lineWidth   = 1;

    // Draw symmetry copies
    for (let s = 0; s < sym; s++) {
      const sfa = fa + (s / sym) * Math.PI * 2;
      const It  = CX + Math.cos(sfa) * Sl;
      const we  = CY + Math.sin(sfa) * Sl;

      if (prevX !== null && s < prevX.length) {
        ctx.beginPath();
        ctx.moveTo(prevX[s], prevY[s]);
        ctx.lineTo(It, we);
        ctx.stroke();
      }
      if (!prevX) { prevX = []; prevY = []; }
      prevX[s] = It; prevY[s] = we;
    }
  }

  frame++;
}

// ── Main loop ─────────────────────────────────────────────────
function draw() {
  requestAnimationFrame(draw);
  if (!isPlaying) return;

  drawFrame();

  if (frame >= maxFrames) {
    setTimeout(() => {
      searchIndex = (searchIndex + 1) % PRESETS.length;
      applyPreset(searchIndex);
    }, 3000);
    isPlaying = false;
    setTimeout(() => { isPlaying = true; }, 3000);
  }
}

// ── Buttons ───────────────────────────────────────────────────
randomizeBtn.addEventListener('click', () => {
  searchIndex = (searchIndex + 1) % PRESETS.length;
  applyPreset(searchIndex);
});

playPauseBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playPauseBtn.textContent = isPlaying ? 'Pause' : 'Play';
});

// ── Boot ──────────────────────────────────────────────────────
resize();
applyPreset(0);
draw();
