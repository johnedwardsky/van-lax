// ============================================================
// ABRAKADABRA — Generative Gallery Engine v3
// Layer 1: Static spirograph (Hypotrochoid / Epitrochoid)
// Layer 2: Ghost duplicates — rotating transparent copies
// Layer 3: Particle riders — travel along curve, geometric trails
// ============================================================

// ── Canvases ─────────────────────────────────────────────────
const canvas  = document.getElementById('canvas');
const ctx     = canvas.getContext('2d');

// Overlay canvas for ghost + particle dynamics
const overlay = document.createElement('canvas');
overlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
canvas.parentNode.insertBefore(overlay, canvas.nextSibling);
const oCtx = overlay.getContext('2d');

const playPauseBtn = document.getElementById('play-pause');
const randomizeBtn = document.getElementById('randomize');
const shapeNameEl  = document.getElementById('shape-name');
const valLrpmEl    = document.getElementById('val-lrpm');
const valRrpmEl    = document.getElementById('val-rrpm');
const valSymmetryEl= document.getElementById('val-symmetry');

let width, height, centerX, centerY;
let isPlaying = true;

// ── Current curve parameters ──────────────────────────────────
let p = {
    R: 180, r: 60, d: 90,
    mode: 0,     // 0 = hypotrochoid, 1 = epitrochoid
    symmetry: 1,
    speed: 0.008
};

// ── Drawing state (Layer 1) ───────────────────────────────────
let t = 0, prevX = null, prevY = null;
let totalPoints = 0, maxPoints = 0;
let isComplete = false;
let baseHue = 0;

// ── Ghost layer state (Layer 2) ───────────────────────────────
const GHOST_COUNT  = 4;
const GHOST_STEPS  = 300;  // points per ghost render
let   ghostAngle   = 0;    // master rotation angle
let   ghostPhase   = 0;    // slow oscillation for scale pulse

// ── Particle riders (Layer 3) ─────────────────────────────────
const PARTICLE_COUNT = 6;
let particles = [];

// Each particle: { t, trailLen, trailShape, speed, hue, size }
const TRAIL_SHAPES = ['triangle', 'square', 'diamond', 'hexagon'];

function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            t:          (i / PARTICLE_COUNT) * Math.PI * 2,
            speed:      p.speed * (0.4 + Math.random() * 0.6),
            trailLen:   4 + Math.floor(Math.random() * 6),
            trailShape: TRAIL_SHAPES[Math.floor(Math.random() * TRAIL_SHAPES.length)],
            hue:        (baseHue + i * 60) % 360,
            size:       3 + Math.random() * 4,
            history:    []
        });
    }
}

// ── Preset library ────────────────────────────────────────────
const PRESETS = [
    [160, 120,  80, 0, 1, 'Star of Aries'],
    [200, 130, 130, 0, 1, 'Rose Mandala'],
    [180,  60,  90, 0, 1, 'Celestial Bloom'],
    [200,  40, 160, 0, 1, 'Spiral Crown'],
    [180,  45, 180, 0, 1, 'Sacred Lotus'],
    [200,  60, 200, 0, 1, 'Solar Cross'],
    [160,  50, 130, 0, 1, 'Inner Star'],
    [200,  75, 150, 0, 1, 'Harmonic Ring'],
    [180,  36, 100, 0, 1, 'Fibonacci Echo'],
    [200,  80, 200, 1, 1, 'Outer Vortex'],
    [160, 100, 160, 1, 1, 'Cosmic Petal'],
    [200, 130, 150, 1, 1, 'Eternal Spiral'],
    [180, 120, 180, 1, 1, 'Galaxy Core'],
    [200, 150, 200, 1, 1, 'Quantum Ring'],
    [160, 110, 130, 1, 1, 'Aurora Pattern'],
    [200, 170, 160, 1, 1, 'Sacred Helix'],
    [180, 140, 120, 0, 1, 'Vesica Piscis'],
    [200,  30, 200, 0, 1, 'Phoenix Star'],
    [180,  90, 180, 0, 1, 'Diamond Pulse'],
    [160,  80, 140, 1, 1, 'Infinity Wave']
];

let searchIndex = 0;

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

function computeMaxPoints(R, r) {
    const g = gcd(Math.round(R), Math.round(r));
    const periods = Math.round(R) / g;
    return Math.ceil((Math.PI * 2 * periods) / p.speed) + 10;
}

// ── Resize ────────────────────────────────────────────────────
function resize() {
    const dpr = window.devicePixelRatio || 1;
    width  = window.innerWidth;
    height = window.innerHeight;

    [canvas, overlay].forEach(c => {
        c.width  = width  * dpr;
        c.height = height * dpr;
    });
    ctx.scale(dpr, dpr);
    oCtx.scale(dpr, dpr);

    centerX = width  / 2;
    centerY = height / 2;

    clearCanvas();
    resetDrawing();
}
window.addEventListener('resize', resize);

function clearCanvas() {
    ctx.fillStyle = '#06060f';
    ctx.fillRect(0, 0, width, height);
    oCtx.clearRect(0, 0, width, height);
}

function resetDrawing() {
    t = 0; prevX = null; prevY = null;
    totalPoints = 0; isComplete = false;
    baseHue = Math.random() * 360;
    ghostAngle = 0;

    const maxR  = Math.min(width, height) * 0.42;
    const scale = maxR / (p.R + Math.abs(p.d));
    p._R = p.R * scale;
    p._r = p.r * scale;
    p._d = p.d * scale;

    maxPoints = computeMaxPoints(p.R, p.r);
    initParticles();
}

// ── Core curve math ───────────────────────────────────────────
function curvePoint(tVal, cx, cy) {
    const { _R: R, _r: r, _d: d, mode } = p;
    let x, y;
    if (mode === 0) {
        x = (R - r) * Math.cos(tVal) + d * Math.cos(((R - r) / r) * tVal);
        y = (R - r) * Math.sin(tVal) - d * Math.sin(((R - r) / r) * tVal);
    } else {
        x = (R + r) * Math.cos(tVal) - d * Math.cos(((R + r) / r) * tVal);
        y = (R + r) * Math.sin(tVal) - d * Math.sin(((R + r) / r) * tVal);
    }
    return { x: cx + x, y: cy + y };
}

// ── Apply a preset ────────────────────────────────────────────
function applyPreset(idx) {
    const [R, r, d, mode, sym, name] = PRESETS[idx];
    p.R = R; p.r = r; p.d = d; p.mode = mode; p.symmetry = sym;

    if (valLrpmEl)   valLrpmEl.textContent   = R;
    if (valRrpmEl)   valRrpmEl.textContent   = r;
    if (valSymmetryEl) valSymmetryEl.textContent = sym;
    if (shapeNameEl) shapeNameEl.textContent = name;

    clearCanvas();
    resetDrawing();
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

// ── Draw a geometric shape at a point ─────────────────────────
function drawShape(ctx, shape, x, y, size, hue, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = `hsla(${hue}, 90%, 70%, ${alpha})`;
    ctx.fillStyle   = `hsla(${hue}, 90%, 70%, ${alpha * 0.3})`;
    ctx.lineWidth   = 1;
    ctx.beginPath();

    if (shape === 'triangle') {
        for (let i = 0; i < 3; i++) {
            const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
            i === 0 ? ctx.moveTo(Math.cos(a) * size, Math.sin(a) * size)
                    : ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size);
        }
    } else if (shape === 'square') {
        ctx.rect(-size, -size, size * 2, size * 2);
    } else if (shape === 'diamond') {
        ctx.moveTo(0, -size); ctx.lineTo(size, 0);
        ctx.lineTo(0,  size); ctx.lineTo(-size, 0);
    } else { // hexagon
        for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            i === 0 ? ctx.moveTo(Math.cos(a) * size, Math.sin(a) * size)
                    : ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size);
        }
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}

// ── Layer 2: Render ghost copies ──────────────────────────────
function renderGhosts() {
    oCtx.save();

    ghostAngle += 0.003;
    ghostPhase += 0.007;

    for (let g = 0; g < GHOST_COUNT; g++) {
        const phase   = (g / GHOST_COUNT) * Math.PI * 2;
        const angle   = ghostAngle + phase;
        const scale   = 1.0 + Math.sin(ghostPhase + phase) * 0.06;
        const opacity = 0.08 - g * 0.015;
        const gHue    = (baseHue + g * 45) % 360;

        // Offset center travels along a small polygon path
        const polyR  = 6 + g * 4;
        const sides  = 3 + g;           // triangle, square, pentagon, hexagon
        const polyA  = ghostAngle * (1 + g * 0.3);
        const snapA  = Math.round(polyA / (Math.PI * 2 / sides)) * (Math.PI * 2 / sides);
        const lerpA  = polyA + (snapA - polyA) * 0.08; // soft snap to polygon vertices
        const offX   = Math.cos(lerpA) * polyR;
        const offY   = Math.sin(lerpA) * polyR;

        const gcx = centerX + offX;
        const gcy = centerY + offY;

        oCtx.strokeStyle = `hsla(${gHue}, 80%, 65%, ${opacity})`;
        oCtx.lineWidth   = 0.8;
        oCtx.beginPath();

        let first = true;
        for (let i = 0; i <= GHOST_STEPS; i++) {
            const tg = (i / GHOST_STEPS) * Math.PI * 2 * Math.round(p.R / gcd(Math.round(p.R), Math.round(p.r)));
            const pt = curvePoint(tg, gcx, gcy);

            // Rotate copy around centre by `angle`, scale from centre
            const dx = (pt.x - gcx) * scale;
            const dy = (pt.y - gcy) * scale;
            const rx = gcx + dx * Math.cos(angle) - dy * Math.sin(angle);
            const ry = gcy + dx * Math.sin(angle) + dy * Math.cos(angle);

            if (first) { oCtx.moveTo(rx, ry); first = false; }
            else oCtx.lineTo(rx, ry);
        }
        oCtx.stroke();
    }
    oCtx.restore();
}

// ── Layer 3: Render particle riders ──────────────────────────
function renderParticles() {
    for (const part of particles) {
        const pt = curvePoint(part.t, centerX, centerY);

        // Store history
        part.history.push({ x: pt.x, y: pt.y });
        if (part.history.length > part.trailLen) part.history.shift();

        // Draw geometric trail (lines connecting history points)
        if (part.history.length > 1) {
            oCtx.beginPath();
            oCtx.strokeStyle = `hsla(${part.hue}, 90%, 70%, 0.5)`;
            oCtx.lineWidth = 1;
            oCtx.moveTo(part.history[0].x, part.history[0].y);
            for (let i = 1; i < part.history.length; i++) {
                oCtx.lineTo(part.history[i].x, part.history[i].y);
            }
            oCtx.stroke();

            // Connect first to last for geometric (closed) shape feel
            if (part.history.length >= 3) {
                oCtx.beginPath();
                oCtx.setLineDash([2, 4]);
                oCtx.strokeStyle = `hsla(${part.hue}, 90%, 80%, 0.2)`;
                oCtx.moveTo(part.history[0].x, part.history[0].y);
                oCtx.lineTo(part.history[part.history.length - 1].x, part.history[part.history.length - 1].y);
                oCtx.stroke();
                oCtx.setLineDash([]);
            }
        }

        // Draw shape at current position
        drawShape(oCtx, part.trailShape, pt.x, pt.y, part.size, part.hue, 0.8);

        // Advance particle along curve
        part.t  += part.speed;
        part.hue = (part.hue + 0.3) % 360;
    }
}

// ── Main loop ─────────────────────────────────────────────────
const STEPS_PER_FRAME = 8;

function draw() {
    requestAnimationFrame(draw);
    if (!isPlaying) return;

    // ── Layer 1: Draw main spirograph incrementally ────────────
    if (!isComplete) {
        for (let i = 0; i < STEPS_PER_FRAME; i++) {
            const pt  = curvePoint(t, centerX, centerY);
            baseHue   = (baseHue + 0.06) % 360;

            ctx.strokeStyle = `hsla(${baseHue}, 85%, 65%, 0.7)`;
            ctx.lineWidth   = 1.2;

            if (prevX !== null) {
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);
                ctx.lineTo(pt.x,  pt.y);
                ctx.stroke();
            }

            prevX = pt.x; prevY = pt.y;
            t += p.speed;
            totalPoints++;

            if (totalPoints >= maxPoints) {
                isComplete = true;
                setTimeout(() => {
                    searchIndex = (searchIndex + 1) % PRESETS.length;
                    applyPreset(searchIndex);
                }, 4000);
                break;
            }
        }
    }

    // ── Layer 2+3: Always animate overlays ────────────────────
    oCtx.clearRect(0, 0, width, height);
    renderGhosts();
    renderParticles();
}

// ── Boot ──────────────────────────────────────────────────────
resize();
applyPreset(0);
draw();
