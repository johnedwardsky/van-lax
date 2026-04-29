// ============================================================
// ABRAKADABRA — Amuse Linkage Engine v6
// Exact Amuse source math:
//   crot += rotorRPM * step  (global ring rotation)
//   baseoffsy offsets arm center → creates ring when rotated
//   Rainbow: sin(lrot/rrot * phase offsets) * 127+127
//   Rand A/B/C/D: exact parameter ranges from Amuse source
// ============================================================

const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

const overlay = document.createElement('canvas');
overlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
canvas.parentNode.insertBefore(overlay, canvas.nextSibling);
const oCtx = overlay.getContext('2d');

const playPauseBtn  = document.getElementById('play-pause');
const randomizeBtn  = document.getElementById('randomize');
const shapeNameEl   = document.getElementById('shape-name');
const valLrpmEl     = document.getElementById('val-lrpm');
const valRrpmEl     = document.getElementById('val-rrpm');
const valSymmetryEl = document.getElementById('val-symmetry');

let W, H, CX, CY;
let isPlaying = true;
const DEG = Math.PI / 180;

// ── Rotor state ───────────────────────────────────────────────
let lrot = 0, rrot = 0, crot = 0;
let prevPts = [];   // previous pen positions per symmetry branch
let nt = 0;         // autoEvolve time
let frame = 0;

// ── Current live params (interpolate toward target) ───────────
let cur = {}, tgt = {};

// ── Amuse reference viewport scale ───────────────────────────
// Original Amuse designed for ~900px canvas
let SC = 1;

function getScale() { return Math.min(W, H) / 900; }

// ── Preset library ────────────────────────────────────────────
// Based on exact Amuse defaults + curated presets
const PRESETS = [
  // { lrpm, rrpm, rotorRPM, handdist, larm1, larm2, rarm1, rarm2,
  //   rarmext, larma, baseoffsx, baseoffsy, symmetry, autoEvolve, name }

  // ── Amuse Classic Default ─────────────────────────────────
  { lrpm:2,  rrpm:-3,  rotorRPM:4,  handdist:351, larm1:105, larm2:316,
    rarm1:95, rarm2:371, rarmext:53, larma:0, baseoffsx:0, baseoffsy:-385,
    symmetry:1, autoEvolve:true,  name:'Amuse Classic'   },

  // ── Curated Linkage patterns ──────────────────────────────
  { lrpm:3,  rrpm:-5,  rotorRPM:3,  handdist:300, larm1:100, larm2:280,
    rarm1:90, rarm2:340, rarmext:40, larma:0, baseoffsx:0, baseoffsy:-320,
    symmetry:1, autoEvolve:true,  name:'Star Weave'      },

  { lrpm:1,  rrpm:-4,  rotorRPM:5,  handdist:380, larm1:90,  larm2:300,
    rarm1:85, rarm2:360, rarmext:60, larma:0, baseoffsx:0, baseoffsy:-400,
    symmetry:1, autoEvolve:true,  name:'Solar Crown'     },

  { lrpm:4,  rrpm:-3,  rotorRPM:2,  handdist:330, larm1:110, larm2:290,
    rarm1:100,rarm2:350, rarmext:45, larma:0, baseoffsx:0, baseoffsy:-360,
    symmetry:1, autoEvolve:true,  name:'Seven Spiral'    },

  { lrpm:2,  rrpm:-5,  rotorRPM:6,  handdist:280, larm1:95,  larm2:260,
    rarm1:88, rarm2:310, rarmext:35, larma:0, baseoffsx:0, baseoffsy:-300,
    symmetry:1, autoEvolve:true,  name:'Celestial Ring'  },

  { lrpm:5,  rrpm:-3,  rotorRPM:3,  handdist:310, larm1:120, larm2:300,
    rarm1:95, rarm2:360, rarmext:50, larma:0, baseoffsx:0, baseoffsy:-340,
    symmetry:1, autoEvolve:true,  name:'Phoenix Bloom'   },

  { lrpm:3,  rrpm:-7,  rotorRPM:4,  handdist:350, larm1:100, larm2:310,
    rarm1:92, rarm2:370, rarmext:55, larma:0, baseoffsx:0, baseoffsy:-380,
    symmetry:1, autoEvolve:true,  name:'Harmonic Web'    },

  { lrpm:2,  rrpm:-3,  rotorRPM:4,  handdist:351, larm1:105, larm2:316,
    rarm1:95, rarm2:371, rarmext:53, larma:0, baseoffsx:0, baseoffsy:-385,
    symmetry:6, autoEvolve:true,  name:'Mandala Six'     },

  // ── Chaos Rand A (sym=6) — exact Amuse source ─────────────
  { type:'randA', name:'Chaos Rand A' },
  { type:'randA', name:'Chaos Rand A' },

  // ── Chaos Rand B (sym=1) — exact Amuse source ─────────────
  { type:'randB', name:'Chaos Rand B' },
  { type:'randB', name:'Chaos Rand B' },

  // ── Chaos Rand C (flow, sym=3) ────────────────────────────
  { type:'randC', name:'Chaos Rand C — Flow' },
  { type:'randC', name:'Chaos Rand C — Flow' },

  // ── Chaos Rand D (deep) ───────────────────────────────────
  { type:'randD', name:'Chaos Rand D — Deep' },
  { type:'randD', name:'Chaos Rand D — Deep' },
];

let searchIndex = 0;
let isComplete  = false;
let maxFrames   = 0;
let chaosMode   = false;
let chaosRerandom = 0;  // frame counter for chaos re-randomize

// ── Exact Amuse Rand functions from source ────────────────────
// y = (O, Y) => Math.random() * (Y - O) + O
// M = () => (Math.random() > .5 ? 1 : -1) * y(.01, 50)
function randRange(lo, hi) { return Math.random() * (hi - lo) + lo; }
function randM()           { return (Math.random() > .5 ? 1 : -1) * randRange(0.01, 50); }

function generateChaosParams(mode) {
  const p = {
    rotorRPM:   randM() / 4,
    lrpm:       randM(),
    rrpm:       randM(),
    baseoffsx:  randRange(-200, 200),
    baseoffsy:  randRange(-500, -100),   // Always upward offset!
    handdist:   randRange(50, 500),
    larm1:      randRange(20, 200),
    rarm1:      randRange(20, 200),
    larm2:      randRange(100, 400),
    rarm2:      randRange(100, 400),
    rarmext:    randRange(0, 150),
    larma:      randRange(0, 360),
    autoEvolve: true,
  };
  // Symmetry by mode (exact from Amuse source)
  if      (mode === 'A') p.symmetry = 6;
  else if (mode === 'B') p.symmetry = 1;
  else if (mode === 'C') p.symmetry = 3;
  else                   p.symmetry = Math.floor(randRange(1, 8));  // D: random deep
  return p;
}

// ── Resize ────────────────────────────────────────────────────
function resize() {
  const dpr = window.devicePixelRatio || 1;
  W = window.innerWidth; H = window.innerHeight;
  [canvas, overlay].forEach(c => {
    c.width = W * dpr; c.height = H * dpr;
  });
  ctx.scale(dpr, dpr); oCtx.scale(dpr, dpr);
  CX = W / 2; CY = H / 2;
  SC = getScale();
  clearCanvas();
  resetDrawing();
}
window.addEventListener('resize', resize);

function clearCanvas() {
  ctx.fillStyle = '#06060f';
  ctx.fillRect(0, 0, W, H);
  oCtx.clearRect(0, 0, W, H);
}

// ── Apply preset ──────────────────────────────────────────────
function applyPreset(idx) {
  const p = PRESETS[idx];
  chaosMode = !!(p.type);

  if (chaosMode) {
    const mode = p.type.slice(-1).toUpperCase(); // 'A','B','C','D'
    const cp = generateChaosParams(mode);
    setTarget(cp);
    snapToCurrent();
    if (shapeNameEl) shapeNameEl.textContent = p.name;
    if (valLrpmEl)   valLrpmEl.textContent   = cp.lrpm.toFixed(2);
    if (valRrpmEl)   valRrpmEl.textContent   = cp.rrpm.toFixed(2);
    if (valSymmetryEl) valSymmetryEl.textContent = cp.symmetry;
  } else {
    setTarget(p);
    snapToCurrent();
    if (shapeNameEl) shapeNameEl.textContent = p.name;
    if (valLrpmEl)   valLrpmEl.textContent   = p.lrpm;
    if (valRrpmEl)   valRrpmEl.textContent   = p.rrpm;
    if (valSymmetryEl) valSymmetryEl.textContent = p.symmetry;
  }

  clearCanvas();
  resetDrawing();
}

function setTarget(p) {
  tgt = { ...p };
}

function snapToCurrent() {
  cur = { ...tgt };
}

// ── Reset drawing state ───────────────────────────────────────
function resetDrawing() {
  lrot = 0; rrot = 0; crot = 0;
  prevPts = [];
  nt = 0; frame = 0;
  isComplete = false;
  chaosRerandom = 0;

  // For curated presets: compute approximate frame count for one pattern cycle
  // LCM of |lrpm| and |rrpm| determines when it closes
  if (!chaosMode) {
    const lr = Math.abs(Math.round(cur.lrpm));
    const rr = Math.abs(Math.round(cur.rrpm));
    if (lr > 0 && rr > 0) {
      const g = gcd(lr, rr);
      const periods = (lr * rr) / g;
      maxFrames = Math.ceil(periods * 360 / (Math.abs(cur.lrpm) * 0.3) / 73) + 60;
    } else {
      maxFrames = 800;
    }
  } else {
    maxFrames = 600; // chaos runs for 600 frames then re-randomizes
  }
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

// ── Core Linkage draw (exact Amuse math) ─────────────────────
const STEP = 0.3;  // angle increment per iteration (Amuse uses ~0.3°)
const ACCEL = 73;  // iterations per frame (Amuse default acceleration)

function drawLinkageFrame() {
  SC = getScale();
  const c = cur;
  const sym = Math.max(1, Math.round(c.symmetry));

  // AutoEvolve: subtle arm length oscillation (exact from Amuse source)
  let larm2_e = c.larm2, rarm2_e = c.rarm2, hand_e = c.handdist;
  if (c.autoEvolve) {
    larm2_e += Math.sin(nt * 3) * 50;
    rarm2_e += Math.cos(nt * 2) * 50;
    hand_e  += Math.sin(nt * 1.5) * 30;
    nt += 0.0001;
  }

  for (let i = 0; i < ACCEL; i++) {
    // Advance rotors
    lrot += c.lrpm  * STEP;
    rrot += c.rrpm  * STEP;
    crot += c.rotorRPM * STEP;

    // Pivot points (scaled, offset from screen center)
    const ox = CX + c.baseoffsx * SC;
    const oy = CY + c.baseoffsy * SC;
    const h1x = ox - (hand_e  * SC) / 2;
    const h1y = oy;
    const h2x = ox + (hand_e  * SC) / 2;
    const h2y = oy;

    // End of first arms
    const a1x = h1x + Math.cos((lrot + c.larma) * DEG) * c.larm1 * SC;
    const a1y = h1y + Math.sin((lrot + c.larma) * DEG) * c.larm1 * SC;
    const a2x = h2x + Math.cos( rrot            * DEG) * c.rarm1 * SC;
    const a2y = h2y + Math.sin( rrot            * DEG) * c.rarm1 * SC;

    // Law of Cosines intersection
    const dx = a2x - a1x, dy = a2y - a1y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const L2 = larm2_e * SC;
    const R2 = rarm2_e * SC;

    if (dist < 0.1 || dist >= L2 + R2 || dist <= Math.abs(L2 - R2)) {
      // Linkage impossible — reset prev points to avoid streaks
      prevPts = [];
      continue;
    }

    const cosA   = (L2*L2 + dist*dist - R2*R2) / (2 * L2 * dist);
    const alpha  = Math.acos(Math.max(-1, Math.min(1, cosA)));
    const angToR = Math.atan2(dy, dx);
    const penX   = a1x + Math.cos(angToR - alpha) * (L2 + c.rarmext * SC);
    const penY   = a1y + Math.sin(angToR - alpha) * (L2 + c.rarmext * SC);

    // Exact Amuse rainbow color from rotor positions
    const n1 = Math.sin(DEG * lrot + Math.PI * 0.666) * 127 + 127;
    const n2 = Math.sin(DEG * lrot + Math.PI * 0.333) * 127 + 127;
    const n3 = Math.sin(DEG * lrot)                   * 127 + 127;
    const e1 = Math.sin(DEG * rrot + Math.PI * 0.666) * 127 + 127;
    const e2 = Math.sin(DEG * rrot + Math.PI * 0.333) * 127 + 127;
    const e3 = Math.sin(DEG * rrot)                   * 127 + 127;
    const r  = Math.floor((n1 + e1) / 2);
    const g  = Math.floor((n2 + e2) / 2);
    const b  = Math.floor((n3 + e3) / 2);

    ctx.strokeStyle = `rgba(${r},${g},${b},0.35)`;
    ctx.lineWidth   = 0.6;

    // Draw each symmetry branch (global rotation by crot)
    for (let s = 0; s < sym; s++) {
      const sAngle = (s / sym) * Math.PI * 2 + crot * DEG;
      const rx = penX - CX, ry = penY - CY;
      const fx = CX + rx * Math.cos(sAngle) - ry * Math.sin(sAngle);
      const fy = CY + rx * Math.sin(sAngle) + ry * Math.cos(sAngle);

      if (!prevPts[s]) { prevPts[s] = { x: fx, y: fy }; continue; }

      ctx.beginPath();
      ctx.moveTo(prevPts[s].x, prevPts[s].y);
      ctx.lineTo(fx, fy);
      ctx.stroke();
      prevPts[s] = { x: fx, y: fy };
    }
  }
}

// ── Ghost overlay (rotating transparent copy) ─────────────────
let ghostAngle = 0;
function renderGhosts() {
  ghostAngle += 0.004;
  const c = cur;
  const sym = Math.max(1, Math.round(c.symmetry));
  const steps = 200;

  for (let g = 0; g < 2; g++) {
    const phase   = (g / 2) * Math.PI * 2;
    const angle   = ghostAngle + phase;
    const scale   = 1.0 + Math.sin(ghostAngle * 1.5 + phase) * 0.04;
    const opacity = 0.05 - g * 0.02;

    oCtx.strokeStyle = `rgba(120,180,255,${opacity})`;
    oCtx.lineWidth = 0.6;
    oCtx.beginPath();

    let firstGhost = true;
    for (let i = 0; i <= steps; i++) {
      const lt = (i / steps) * Math.PI * 2 * 6;
      const rt = lt * (c.rrpm / c.lrpm || -1.5);
      const ct = lt * (c.rotorRPM / Math.abs(c.lrpm || 1));

      const ox = CX + (c.baseoffsx||0) * SC;
      const oy = CY + (c.baseoffsy||0) * SC;
      const h1x = ox - (c.handdist * SC) / 2;
      const h1y = oy;
      const h2x = ox + (c.handdist * SC) / 2;

      const a1x = h1x + Math.cos(lt * DEG * 120) * c.larm1 * SC;
      const a1y = h1y + Math.sin(lt * DEG * 120) * c.larm1 * SC;
      const a2x = h2x + Math.cos(rt * DEG * 120) * c.rarm1 * SC;
      const a2y = h1y + Math.sin(rt * DEG * 120) * c.rarm1 * SC;

      const dx = a2x - a1x, dy = a2y - a1y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const L2 = c.larm2 * SC, R2 = c.rarm2 * SC;
      if (dist < 0.1 || dist >= L2+R2 || dist <= Math.abs(L2-R2)) continue;

      const cosA = (L2*L2 + dist*dist - R2*R2) / (2*L2*dist);
      const alpha = Math.acos(Math.max(-1, Math.min(1, cosA)));
      const angToR = Math.atan2(dy, dx);
      let px = a1x + Math.cos(angToR - alpha) * L2;
      let py = a1y + Math.sin(angToR - alpha) * L2;

      const sAngle = ct * DEG * 120 + angle;
      const rx = (px - CX) * scale, ry = (py - CY) * scale;
      const gx = CX + rx * Math.cos(sAngle) - ry * Math.sin(sAngle);
      const gy = CY + rx * Math.sin(sAngle) + ry * Math.cos(sAngle);

      firstGhost ? (oCtx.moveTo(gx, gy), firstGhost = false) : oCtx.lineTo(gx, gy);
    }
    oCtx.stroke();
  }
}

// ── Main loop ─────────────────────────────────────────────────
function draw() {
  requestAnimationFrame(draw);
  if (!isPlaying) return;

  drawLinkageFrame();
  frame++;

  // Ghost overlay
  oCtx.clearRect(0, 0, W, H);
  renderGhosts();

  // Auto-advance
  if (frame >= maxFrames) {
    if (chaosMode) {
      // Re-randomize with new params, keep drawing on same canvas
      const p = PRESETS[searchIndex];
      const mode = p.type.slice(-1).toUpperCase();
      const cp = generateChaosParams(mode);
      setTarget(cp); snapToCurrent();
      lrot = 0; rrot = 0; crot = 0;
      prevPts = []; frame = 0;
      if (shapeNameEl) shapeNameEl.textContent = p.name;
      if (valLrpmEl)   valLrpmEl.textContent   = cp.lrpm.toFixed(2);
      if (valRrpmEl)   valRrpmEl.textContent   = cp.rrpm.toFixed(2);
      if (valSymmetryEl) valSymmetryEl.textContent = cp.symmetry;
    } else {
      isComplete = true;
      setTimeout(() => {
        searchIndex = (searchIndex + 1) % PRESETS.length;
        applyPreset(searchIndex);
      }, 3000);
    }
  }
}

// ── Search button ─────────────────────────────────────────────
randomizeBtn.addEventListener('click', () => {
  searchIndex = (searchIndex + 1) % PRESETS.length;
  applyPreset(searchIndex);
});

// ── Play / Pause ──────────────────────────────────────────────
playPauseBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playPauseBtn.textContent = isPlaying ? 'Pause' : 'Play';
});

// ── Boot ──────────────────────────────────────────────────────
resize();
applyPreset(0);
draw();
