// ============================================================
// ABRAKADABRA — Generative Gallery Engine
// Pure Spirograph math: Hypotrochoid & Epitrochoid
// x(t) = (R - r) * cos(t) + d * cos((R-r)/r * t)  [hypotrochoid]
// x(t) = (R + r) * cos(t) - d * cos((R+r)/r * t)  [epitrochoid]
// ============================================================

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playPauseBtn = document.getElementById('play-pause');
const randomizeBtn = document.getElementById('randomize');
const shapeNameEl = document.getElementById('shape-name');

const valLrpmEl = document.getElementById('val-lrpm');
const valRrpmEl = document.getElementById('val-rrpm');
const valSymmetryEl = document.getElementById('val-symmetry');

let width, height, centerX, centerY;
let isPlaying = true;
let animFrame;

// ── Current curve parameters ─────────────────────────────────
let p = {
    R: 180,      // outer circle radius
    r: 60,       // inner/rolling circle radius
    d: 90,       // pen distance from centre of rolling circle
    mode: 0,     // 0 = hypotrochoid, 1 = epitrochoid
    symmetry: 1, // rotational copies
    speed: 0.008 // angle increment per frame (t step)
};

// ── Drawing state ────────────────────────────────────────────
let t = 0;           // parametric angle
let prevX = null, prevY = null;
let totalPoints = 0; // how many points drawn this curve
let maxPoints = 0;   // total points for one full closed cycle
let isComplete = false;
let hue = 0;

// ── Preset library — mathematically curated ──────────────────
const PRESETS = [
    // [R,   r,    d,   mode, symmetry, name]
    [160, 120,  80, 0, 1,  'Star of Aries'],
    [200, 130, 130, 0, 1,  'Rose Mandala'],
    [180,  60,  90, 0, 1,  'Celestial Bloom'],
    [200,  40, 160, 0, 1,  'Spiral Crown'],
    [180,  45, 180, 0, 1,  'Sacred Lotus'],
    [200,  60, 200, 0, 1,  'Solar Cross'],
    [160,  50, 130, 0, 1,  'Inner Star'],
    [200,  75, 150, 0, 1,  'Harmonic Ring'],
    [180,  36, 100, 0, 1,  'Fibonacci Echo'],
    [200,  80, 200, 1, 1,  'Outer Vortex'],
    [160, 100, 160, 1, 1,  'Cosmic Petal'],
    [200, 130, 150, 1, 1,  'Eternal Spiral'],
    [180, 120, 180, 1, 1,  'Galaxy Core'],
    [200, 150, 200, 1, 1,  'Quantum Ring'],
    [160, 110, 130, 1, 1,  'Aurora Pattern'],
    [200, 170, 160, 1, 1,  'Sacred Helix'],
    [180, 140, 120, 0, 1,  'Vesica Piscis'],
    [200,  30, 200, 0, 1,  'Phoenix Star'],
    [180,  90, 180, 0, 1,  'Diamond Pulse'],
    [160,  80, 140, 1, 1,  'Infinity Wave']
];

let presetIndex = 0;

// ── Compute how many full steps to close the curve ───────────
function computeMaxPoints(R, r) {
    // LCM(R, r) / r full rotations of outer wheel
    const g = gcd(Math.round(R), Math.round(r));
    const periods = Math.round(R) / g;
    // Full cycle length: 2π * periods, divided by speed
    return Math.ceil((Math.PI * 2 * periods) / p.speed) + 10;
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

// ── Resize canvas ────────────────────────────────────────────
function resize() {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width  = width  * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    centerX = width  / 2;
    centerY = height / 2;
    clearCanvas();
    resetDrawing();
}
window.addEventListener('resize', resize);

function clearCanvas() {
    ctx.fillStyle = '#06060f';
    ctx.fillRect(0, 0, width, height);
}

function resetDrawing() {
    t = 0;
    prevX = null;
    prevY = null;
    totalPoints = 0;
    isComplete = false;
    hue = Math.random() * 360;

    // Scale R so the pattern always fits the screen
    const maxRadius = Math.min(width, height) * 0.44;
    const scale = maxRadius / (p.R + Math.abs(p.d));
    p._R = p.R * scale;
    p._r = p.r * scale;
    p._d = p.d * scale;

    maxPoints = computeMaxPoints(p.R, p.r);
}

// ── Apply a preset ───────────────────────────────────────────
function applyPreset(idx) {
    const [R, r, d, mode, sym, name] = PRESETS[idx];
    p.R = R; p.r = r; p.d = d; p.mode = mode; p.symmetry = sym;

    if (valLrpmEl) valLrpmEl.textContent = R;
    if (valRrpmEl) valRrpmEl.textContent = r;
    if (valSymmetryEl) valSymmetryEl.textContent = sym;
    if (shapeNameEl)  shapeNameEl.textContent = name;

    clearCanvas();
    resetDrawing();
}

// ── "Search" button — cycle through presets ──────────────────
let searchIndex = 0;
randomizeBtn.addEventListener('click', () => {
    searchIndex = (searchIndex + 1) % PRESETS.length;
    applyPreset(searchIndex);
});

// ── Play / Pause ─────────────────────────────────────────────
playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? 'Pause' : 'Play';
});

// ── Compute a single point on the curve ─────────────────────
function curvePoint(t) {
    const { _R: R, _r: r, _d: d, mode } = p;
    let x, y;
    if (mode === 0) {
        // Hypotrochoid
        x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
        y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
    } else {
        // Epitrochoid
        x = (R + r) * Math.cos(t) - d * Math.cos(((R + r) / r) * t);
        y = (R + r) * Math.sin(t) - d * Math.sin(((R + r) / r) * t);
    }
    return { x: centerX + x, y: centerY + y };
}

// ── Main draw loop ───────────────────────────────────────────
const STEPS_PER_FRAME = 8; // points drawn per frame — controls smoothness/speed

function draw() {
    animFrame = requestAnimationFrame(draw);
    if (!isPlaying) return;

    // If pattern is complete, hold a beat then start a new one
    if (isComplete) return;

    for (let i = 0; i < STEPS_PER_FRAME; i++) {
        const sym = Math.max(1, Math.round(p.symmetry));
        const pt  = curvePoint(t);

        // Rainbow colour — shifts gently with t
        hue = (hue + 0.08) % 360;
        const alpha = 0.7;
        ctx.strokeStyle = `hsla(${hue}, 90%, 65%, ${alpha})`;
        ctx.lineWidth   = 1.2;

        for (let s = 0; s < sym; s++) {
            const angle = (s / sym) * Math.PI * 2;
            // Rotate each symmetry copy around centre
            const dx = pt.x - centerX;
            const dy = pt.y - centerY;
            const rx = centerX + dx * Math.cos(angle) - dy * Math.sin(angle);
            const ry = centerY + dx * Math.sin(angle) + dy * Math.cos(angle);

            if (prevX !== null && s === 0) {
                // For first copy use prevX/prevY
                const pdx = prevX - centerX;
                const pdy = prevY - centerY;
                const prx = centerX + pdx * Math.cos(angle) - pdy * Math.sin(angle);
                const pry = centerY + pdx * Math.sin(angle) + pdy * Math.cos(angle);
                ctx.beginPath();
                ctx.moveTo(prx, pry);
                ctx.lineTo(rx,  ry);
                ctx.stroke();
            } else if (prevX !== null) {
                // Subsequent copies
                const pdx = prevX - centerX;
                const pdy = prevY - centerY;
                const prx = centerX + pdx * Math.cos(angle) - pdy * Math.sin(angle);
                const pry = centerY + pdx * Math.sin(angle) + pdy * Math.cos(angle);
                ctx.beginPath();
                ctx.moveTo(prx, pry);
                ctx.lineTo(rx,  ry);
                ctx.stroke();
            }
        }

        prevX = pt.x;
        prevY = pt.y;
        t += p.speed;
        totalPoints++;

        if (totalPoints >= maxPoints) {
            isComplete = true;
            // Auto-advance to next preset after a pause
            setTimeout(() => {
                searchIndex = (searchIndex + 1) % PRESETS.length;
                applyPreset(searchIndex);
            }, 3000);
            break;
        }
    }
}

// ── Boot ─────────────────────────────────────────────────────
resize();
applyPreset(0);
draw();
