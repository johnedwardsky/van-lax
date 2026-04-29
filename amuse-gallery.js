// ============================================================
// ABRAKADABRA — Multi-Mode Generative Engine v4
//  A: Spirograph  (Hypotrochoid / Epitrochoid)
//  B: Linkage     (Mechanical Arms — Amuse original)
//  C: Cymatics    (Chladni Plate particle sim — Amuse)
//  D: Lissajous + Rose curves
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

let W, H, cx, cy, isPlaying = true;
const k = Math.PI / 180;

// ── All presets ───────────────────────────────────────────────
const PRESETS = [
  // SPIROGRAPH  { type, R, r, d, hypo, name }
  { type:'spiro', R:160, r:120, d:80,  hypo:true,  name:'Star of Aries'    },
  { type:'spiro', R:200, r:130, d:130, hypo:true,  name:'Rose Mandala'     },
  { type:'spiro', R:180, r:60,  d:90,  hypo:true,  name:'Celestial Bloom'  },
  { type:'spiro', R:200, r:40,  d:160, hypo:true,  name:'Spiral Crown'     },
  { type:'spiro', R:180, r:45,  d:180, hypo:true,  name:'Sacred Lotus'     },
  { type:'spiro', R:200, r:80,  d:200, hypo:false, name:'Outer Vortex'     },
  { type:'spiro', R:180, r:120, d:180, hypo:false, name:'Galaxy Core'      },
  { type:'spiro', R:200, r:30,  d:200, hypo:true,  name:'Phoenix Star'     },

  // LINKAGE  { type, lrpm, rrpm, larm1, larm2, rarm1, rarm2, handdist, rarmext, name }
  { type:'link', lrpm:2,  rrpm:-3, larm1:100, larm2:200, rarm1:90,  rarm2:180, handdist:220, rarmext:30, name:'Cosmic Dance'  },
  { type:'link', lrpm:3,  rrpm:-5, larm1:80,  larm2:200, rarm1:80,  rarm2:180, handdist:200, rarmext:20, name:'Star Weave'    },
  { type:'link', lrpm:1,  rrpm:-3, larm1:100, larm2:220, rarm1:100, rarm2:200, handdist:220, rarmext:40, name:'Trefoil Gate'  },
  { type:'link', lrpm:4,  rrpm:-3, larm1:90,  larm2:190, rarm1:85,  rarm2:170, handdist:200, rarmext:25, name:'Seven Petals'  },
  { type:'link', lrpm:2,  rrpm:-5, larm1:100, larm2:200, rarm1:90,  rarm2:180, handdist:210, rarmext:30, name:'Seven Crown'   },
  { type:'link', lrpm:3,  rrpm:-4, larm1:80,  larm2:180, rarm1:80,  rarm2:160, handdist:190, rarmext:20, name:'Sacred Grid'   },

  // CYMATICS  { type, N, M, name }
  { type:'cymatics', N:1, M:2, name:'Chladni I·II'   },
  { type:'cymatics', N:2, M:3, name:'Chladni II·III'  },
  { type:'cymatics', N:3, M:4, name:'Chladni III·IV'  },
  { type:'cymatics', N:2, M:5, name:'Chladni II·V'    },
  { type:'cymatics', N:3, M:5, name:'Chladni III·V'   },
  { type:'cymatics', N:4, M:7, name:'Chladni IV·VII'  },

  // LISSAJOUS  { type, a, b, delta, name }
  { type:'liss', a:1, b:2, delta:Math.PI/2,   name:'Lissajous 1:2'  },
  { type:'liss', a:2, b:3, delta:Math.PI/4,   name:'Lissajous 2:3'  },
  { type:'liss', a:3, b:4, delta:Math.PI/6,   name:'Lissajous 3:4'  },
  { type:'liss', a:4, b:5, delta:Math.PI/3,   name:'Lissajous 4:5'  },
  { type:'liss', a:5, b:6, delta:Math.PI/4,   name:'Lissajous 5:6'  },

  // ROSE  { type, n, d, name }
  { type:'rose', n:3, d:1, name:'Rose 3'   },
  { type:'rose', n:5, d:2, name:'Rose 5/2' },
  { type:'rose', n:7, d:3, name:'Rose 7/3' },
  { type:'rose', n:4, d:1, name:'Rose 4'   },
  { type:'rose', n:5, d:1, name:'Rose 5'   },
];

let searchIndex = 0;
let preset = PRESETS[0];

// ── State per mode ────────────────────────────────────────────
let spiro  = {};
let link   = {};
let cym    = {};
let liss   = {};
let rose   = {};
let baseHue = 0;
let isComplete = false;
let modeTimer  = 0;

// ── Ghost overlay ─────────────────────────────────────────────
let ghostAngle = 0, ghostPhase = 0;
const GHOST_COUNT = 3, GHOST_STEPS = 280;

// ── Helpers ───────────────────────────────────────────────────
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return (a * b) / gcd(a, b); }

function resize() {
  const dpr = window.devicePixelRatio || 1;
  W = window.innerWidth; H = window.innerHeight;
  [canvas, overlay].forEach(c => { c.width = W*dpr; c.height = H*dpr; });
  ctx.scale(dpr, dpr); oCtx.scale(dpr, dpr);
  cx = W/2; cy = H/2;
  clearAll(); initMode();
}
window.addEventListener('resize', resize);

function clearAll() {
  ctx.fillStyle = '#06060f';
  ctx.fillRect(0, 0, W, H);
  oCtx.clearRect(0, 0, W, H);
}

// ── Mode init ─────────────────────────────────────────────────
function initMode() {
  isComplete = false; modeTimer = 0;
  baseHue = Math.random() * 360;
  ghostAngle = 0; ghostPhase = 0;
  const p = preset;

  if (p.type === 'spiro') {
    const maxR  = Math.min(W, H) * 0.42;
    const scale = maxR / (p.R + Math.abs(p.d));
    spiro = {
      _R: p.R*scale, _r: p.r*scale, _d: p.d*scale, hypo: p.hypo,
      t: 0, prevX: null, prevY: null,
      maxT: Math.PI * 2 * Math.round(p.R / gcd(Math.round(p.R), Math.round(p.r))),
      step: 0.008
    };
    updateStats(p.R, p.r, 1);
  }
  else if (p.type === 'link') {
    const scale = Math.min(W, H) / 900;
    link = {
      lrpm: p.lrpm, rrpm: p.rrpm,
      larm1: p.larm1*scale, larm2: p.larm2*scale,
      rarm1: p.rarm1*scale, rarm2: p.rarm2*scale,
      handdist: p.handdist*scale, rarmext: p.rarmext*scale,
      lrot: 0, rrot: 0, prevX: null, prevY: null,
      step: 0.3,
      maxSteps: lcm(Math.abs(p.lrpm), Math.abs(p.rrpm)) * Math.round(360 / 0.3) + 10
    };
    updateStats(p.lrpm, p.rrpm, 1);
  }
  else if (p.type === 'cymatics') {
    const count = 2500;
    const pts = [];
    for (let i = 0; i < count; i++) {
      pts.push({ x: Math.random()*W, y: Math.random()*H, vx:0, vy:0 });
    }
    cym = { N: p.N, M: p.M, pts, frame: 0, maxFrames: 320 };
    updateStats(p.N, p.M, 0);
  }
  else if (p.type === 'liss') {
    const R = Math.min(W, H) * 0.42;
    liss = {
      a: p.a, b: p.b, delta: p.delta, R,
      t: 0, step: 0.005,
      maxT: Math.PI * 2, prevX: null, prevY: null
    };
    updateStats(p.a, p.b, 0);
  }
  else if (p.type === 'rose') {
    const R = Math.min(W, H) * 0.42;
    const denom = p.d;
    const numer = p.n;
    const period = (numer * denom % 2 === 0) ? Math.PI * 2 * denom : Math.PI * denom;
    rose = {
      n: numer/denom, R,
      t: 0, step: 0.004,
      maxT: period, prevX: null, prevY: null
    };
    updateStats(p.n, p.d, 0);
  }
}

function updateStats(a, b, s) {
  if (valLrpmEl)    valLrpmEl.textContent    = a;
  if (valRrpmEl)    valRrpmEl.textContent    = b;
  if (valSymmetryEl)valSymmetryEl.textContent = s;
  if (shapeNameEl)  shapeNameEl.textContent  = preset.name;
}

// ── Spirograph point ──────────────────────────────────────────
function spiroPoint(t) {
  const {_R:R, _r:r, _d:d, hypo} = spiro;
  let x, y;
  if (hypo) {
    x = (R-r)*Math.cos(t) + d*Math.cos(((R-r)/r)*t);
    y = (R-r)*Math.sin(t) - d*Math.sin(((R-r)/r)*t);
  } else {
    x = (R+r)*Math.cos(t) - d*Math.cos(((R+r)/r)*t);
    y = (R+r)*Math.sin(t) - d*Math.sin(((R+r)/r)*t);
  }
  return { x: cx+x, y: cy+y };
}

// ── Draw step: Spirograph ─────────────────────────────────────
function stepSpiro() {
  const s = spiro;
  for (let i = 0; i < 10; i++) {
    if (s.t >= s.maxT) { isComplete = true; return; }
    const pt = spiroPoint(s.t);
    baseHue = (baseHue + 0.07) % 360;
    ctx.strokeStyle = `hsla(${baseHue},85%,65%,0.75)`;
    ctx.lineWidth = 1.2;
    if (s.prevX !== null) {
      ctx.beginPath(); ctx.moveTo(s.prevX, s.prevY); ctx.lineTo(pt.x, pt.y); ctx.stroke();
    }
    s.prevX = pt.x; s.prevY = pt.y;
    s.t += s.step;
  }
}

// ── Draw step: Linkage ────────────────────────────────────────
function stepLink() {
  const l = link;
  for (let i = 0; i < 8; i++) {
    if (modeTimer++ >= l.maxSteps) { isComplete = true; return; }
    l.lrot += l.lrpm * l.step;
    l.rrot += l.rrpm * l.step;

    const h1x = cx - l.handdist/2, h2x = cx + l.handdist/2;
    const a1x = h1x + Math.cos(l.lrot*k)*l.larm1;
    const a1y = cy  + Math.sin(l.lrot*k)*l.larm1;
    const a2x = h2x + Math.cos(l.rrot*k)*l.rarm1;
    const a2y = cy  + Math.sin(l.rrot*k)*l.rarm1;

    const dx = a2x-a1x, dy = a2y-a1y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const L2 = l.larm2, R2 = l.rarm2;

    if (dist > 0.1 && dist < L2+R2 && dist > Math.abs(L2-R2)) {
      const cosA = (L2*L2 + dist*dist - R2*R2) / (2*L2*dist);
      const alpha = Math.acos(Math.max(-1, Math.min(1, cosA)));
      const ang = Math.atan2(dy, dx);
      const penX = a1x + Math.cos(ang - alpha) * (L2 + l.rarmext);
      const penY = a1y + Math.sin(ang - alpha) * (L2 + l.rarmext);

      // Rainbow from Amuse source
      const r = Math.floor((Math.sin(k*l.lrot+Math.PI*.666)*127+127 + Math.sin(k*l.rrot+Math.PI*.666)*127+127) / 2);
      const g = Math.floor((Math.sin(k*l.lrot+Math.PI*.333)*127+127 + Math.sin(k*l.rrot+Math.PI*.333)*127+127) / 2);
      const b = Math.floor((Math.sin(k*l.lrot)*127+127 + Math.sin(k*l.rrot)*127+127) / 2);
      ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
      ctx.lineWidth = 1.0;

      if (l.prevX !== null) {
        ctx.beginPath(); ctx.moveTo(l.prevX, l.prevY); ctx.lineTo(penX, penY); ctx.stroke();
      }
      l.prevX = penX; l.prevY = penY;
    } else {
      l.prevX = null;
    }
  }
}

// ── Draw step: Cymatics (Chladni plate) ───────────────────────
function stepCymatics() {
  const c = cym;
  if (c.frame++ >= c.maxFrames) { isComplete = true; return; }

  // Ghost trail
  ctx.fillStyle = 'rgba(6,6,15,0.08)';
  ctx.fillRect(0, 0, W, H);

  const N = c.N, M = c.M;
  const fw = W, fh = H;

  for (const pt of c.pts) {
    // Chladni equation: f(x,y) = cos(N*π*x)*cos(M*π*y) − cos(M*π*x)*cos(N*π*y)
    const nx = pt.x / fw, ny = pt.y / fh;
    const f  = Math.cos(N*Math.PI*nx)*Math.cos(M*Math.PI*ny) - Math.cos(M*Math.PI*nx)*Math.cos(N*Math.PI*ny);

    // Gradient (finite difference)
    const eps = 0.002;
    const fx2 = Math.cos(N*Math.PI*(nx+eps))*Math.cos(M*Math.PI*ny) - Math.cos(M*Math.PI*(nx+eps))*Math.cos(N*Math.PI*ny);
    const fy2 = Math.cos(N*Math.PI*nx)*Math.cos(M*Math.PI*(ny+eps)) - Math.cos(M*Math.PI*nx)*Math.cos(N*Math.PI*(ny+eps));
    const gx  = (fx2-f)/eps, gy = (fy2-f)/eps;

    // Move toward zero crossing (nodal line)
    const force = 0.0004;
    pt.vx += -Math.sign(f)*gx*force;
    pt.vy += -Math.sign(f)*gy*force;
    pt.vx *= 0.92; pt.vy *= 0.92;
    pt.x  += pt.vx; pt.y += pt.vy;

    // Wrap edges
    if (pt.x < 0) pt.x = W; if (pt.x > W) pt.x = 0;
    if (pt.y < 0) pt.y = H; if (pt.y > H) pt.y = 0;

    // Color by f value
    const hue = (baseHue + Math.abs(f)*180) % 360;
    const alpha = 0.5 + Math.abs(f)*0.4;
    ctx.fillStyle = `hsla(${hue},90%,65%,${alpha})`;
    ctx.beginPath(); ctx.arc(pt.x, pt.y, 1.2, 0, Math.PI*2); ctx.fill();
  }
}

// ── Draw step: Lissajous ──────────────────────────────────────
function stepLiss() {
  const l = liss;
  for (let i = 0; i < 12; i++) {
    if (l.t >= l.maxT) { isComplete = true; return; }
    const x = cx + l.R * Math.sin(l.a*l.t + l.delta);
    const y = cy + l.R * Math.sin(l.b*l.t);
    baseHue = (baseHue + 0.15) % 360;
    ctx.strokeStyle = `hsla(${baseHue},85%,65%,0.75)`;
    ctx.lineWidth = 1.5;
    if (l.prevX !== null) {
      ctx.beginPath(); ctx.moveTo(l.prevX, l.prevY); ctx.lineTo(x, y); ctx.stroke();
    }
    l.prevX = x; l.prevY = y;
    l.t += l.step;
  }
}

// ── Draw step: Rose curve ─────────────────────────────────────
function stepRose() {
  const r = rose;
  for (let i = 0; i < 12; i++) {
    if (r.t >= r.maxT) { isComplete = true; return; }
    const rad = r.R * Math.cos(r.n * r.t);
    const x = cx + rad * Math.cos(r.t);
    const y = cy + rad * Math.sin(r.t);
    baseHue = (baseHue + 0.12) % 360;
    ctx.strokeStyle = `hsla(${baseHue},85%,65%,0.75)`;
    ctx.lineWidth = 1.5;
    if (r.prevX !== null) {
      ctx.beginPath(); ctx.moveTo(r.prevX, r.prevY); ctx.lineTo(x, y); ctx.stroke();
    }
    r.prevX = x; r.prevY = y;
    r.t += r.step;
  }
}

// ── Ghost overlay (Spirograph only — skip for Cymatics) ───────
function renderGhosts() {
  const p = preset;
  if (p.type === 'cymatics') return; // Cymatics has its own trail

  ghostAngle += 0.003; ghostPhase += 0.007;
  const period = p.type === 'spiro'
    ? Math.PI * 2 * Math.round(p.R / gcd(Math.round(p.R), Math.round(p.r)))
    : Math.PI * 2;

  for (let g = 0; g < GHOST_COUNT; g++) {
    const phase   = (g / GHOST_COUNT) * Math.PI * 2;
    const angle   = ghostAngle + phase;
    const scale   = 1.0 + Math.sin(ghostPhase + phase) * 0.05;
    const opacity = 0.07 - g * 0.02;
    const gHue    = (baseHue + g*50) % 360;

    oCtx.strokeStyle = `hsla(${gHue},80%,65%,${opacity})`;
    oCtx.lineWidth = 0.8;
    oCtx.beginPath();

    for (let i = 0; i <= GHOST_STEPS; i++) {
      const t = (i / GHOST_STEPS) * period;
      let x, y;

      if (p.type === 'spiro') {
        const {_R:R, _r:r, _d:d, hypo} = spiro;
        if (hypo) {
          x = (R-r)*Math.cos(t) + d*Math.cos(((R-r)/r)*t);
          y = (R-r)*Math.sin(t) - d*Math.sin(((R-r)/r)*t);
        } else {
          x = (R+r)*Math.cos(t) - d*Math.cos(((R+r)/r)*t);
          y = (R+r)*Math.sin(t) - d*Math.sin(((R+r)/r)*t);
        }
      } else if (p.type === 'liss') {
        x = liss.R * Math.sin(liss.a*t + liss.delta);
        y = liss.R * Math.sin(liss.b*t);
      } else if (p.type === 'rose') {
        const rad = rose.R * Math.cos(rose.n * t);
        x = rad * Math.cos(t); y = rad * Math.sin(t);
      } else { continue; }

      const dx = x*scale, dy = y*scale;
      const rx = cx + dx*Math.cos(angle) - dy*Math.sin(angle);
      const ry = cy + dx*Math.sin(angle) + dy*Math.cos(angle);
      i === 0 ? oCtx.moveTo(rx, ry) : oCtx.lineTo(rx, ry);
    }
    oCtx.stroke();
  }
}

// ── Main loop ─────────────────────────────────────────────────
function draw() {
  requestAnimationFrame(draw);
  if (!isPlaying) return;

  if (!isComplete) {
    const t = preset.type;
    if (t === 'spiro')    stepSpiro();
    else if (t === 'link')     stepLink();
    else if (t === 'cymatics') stepCymatics();
    else if (t === 'liss')     stepLiss();
    else if (t === 'rose')     stepRose();

    if (isComplete) {
      setTimeout(() => {
        searchIndex = (searchIndex + 1) % PRESETS.length;
        applyPreset(searchIndex);
      }, 3500);
    }
  }

  if (preset.type !== 'cymatics') {
    oCtx.clearRect(0, 0, W, H);
    renderGhosts();
  }
}

// ── Apply preset ──────────────────────────────────────────────
function applyPreset(idx) {
  preset = PRESETS[idx];
  clearAll();
  initMode();
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
