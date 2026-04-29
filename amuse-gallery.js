// ─── AMUSE Generative Gallery ───────────────────────────────────────────────
// Inspired by Phi Gallery Generative and the AMUSE Spirograph engine.
// Features smooth parameter morphing for continuous spiral evolution.

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playBtn = document.getElementById('play-pause');
const randomizeBtn = document.getElementById('randomize');
const shapeNameEl = document.getElementById('shape-name');

// ─── Constants & State ────────────────────────────────────────────────────────
const PHI = (1 + Math.sqrt(5)) / 2;
const AM = Math.PI / 180;
const dpr = window.devicePixelRatio || 1;

let width, height, cx, cy;
let isPlaying = true;
let time = 0;
let frame = 0;

// Current state of the spirograph
let params = {
    hdist: 1000,
    lrota: 20,
    rrota: -40,
    larm1: 150,
    rarm1: 150,
    larm2: 800,
    rarm2: 800,
    ext: 100,
    hbx: 0,
    hby: -400,
    crota: 0,
    speed: 120,
    hue: 40,
    opacity: 0.6
};

// Target state for morphing
let targetParams = { ...params };
let rot = { l: 0, r: 0, c: 0 };
let pen = { x: null, y: null };

// ─── Archetypes (Inspired by AMUSE Web) ──────────────────────────────────────
const ARCHETYPES = [
    { name: 'Sacred Bloom', lrota: 25, rrota: -36, hdist: 1100, ext: 75, larm2: 860, rarm2: 1050, hby: -700, hue: 45 },
    { name: 'Crystal Vortex', lrota: 13.7, rrota: -41.1, hdist: 800, ext: 150, larm2: 700, rarm2: 1100, hby: -400, hue: 190 },
    { name: 'Phi Resonance', lrota: 36, rrota: -12, hdist: 1200, ext: 20, larm2: 1000, rarm2: 800, hby: -500, hue: 280 },
    { name: 'Ethereal Flow', lrota: 15, rrota: 15, hdist: 600, ext: 200, larm2: 1100, rarm2: 1100, hby: -200, hue: 320 },
    { name: 'Golden Ratio', lrota: 10 * PHI, rrota: -20 * PHI, hdist: 1000, ext: 80, larm2: 850, rarm2: 850, hby: -300, hue: 40 }
];

// ─── Initialization ──────────────────────────────────────────────────────────
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = width / 2;
    cy = height / 2;
    
    // Fill background initially
    ctx.fillStyle = '#05070a';
    ctx.fillRect(0, 0, width, height);
}

window.addEventListener('resize', resize);
resize();

// ─── Logic ───────────────────────────────────────────────────────────────────
function lerp(a, b, t) {
    return a + (b - a) * t;
}

function randomize() {
    const rnd = (a, b) => Math.random() * (b - a) + a;
    const arc = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];
    
    // Pick a new set of target parameters
    targetParams.hdist = rnd(600, 1300);
    targetParams.lrota = rnd(5, 60) * (Math.random() > 0.5 ? 1 : -1);
    targetParams.rrota = rnd(5, 60) * (Math.random() > 0.5 ? 1 : -1);
    targetParams.larm1 = rnd(80, 200);
    targetParams.rarm1 = rnd(80, 200);
    targetParams.larm2 = rnd(600, 1200);
    targetParams.rarm2 = rnd(600, 1200);
    targetParams.ext = rnd(0, 300);
    targetParams.hbx = rnd(-150, 150);
    targetParams.hby = rnd(-800, 100);
    targetParams.crota = rnd(-10, 10);
    targetParams.hue = Math.random() * 360;
    targetParams.opacity = rnd(0.4, 0.8);
    
    // Sometimes force integer ratios for perfect symmetry
    if (Math.random() > 0.6) {
        const base = Math.floor(rnd(10, 30));
        targetParams.lrota = base;
        targetParams.rrota = base * [-3, -2, -1, 1, 2, 3][Math.floor(Math.random() * 6)];
    }

    // Update UI
    if (shapeNameEl) {
        shapeNameEl.innerHTML = `<span style="opacity:0.5;">Projection:</span> ${arc.name}`;
    }
}

function morph() {
    // Smoothly transition all params towards target
    const ease = 0.015;
    for (let key in params) {
        params[key] = lerp(params[key], targetParams[key], ease);
    }
}

function draw() {
    if (isPlaying) {
        frame++;
        morph();
        
        // Slight trail effect (Classic AMUSE "Silk" feel)
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = 'rgba(5, 7, 10, 0.025)';
        ctx.fillRect(0, 0, width, height);
        
        // Spirograph Draw
        ctx.globalCompositeOperation = 'screen';
        ctx.lineCap = 'round';
        
        const scaleBase = Math.min(width, height) / 1800;
        const p = params;
        
        // Draw multiple points per frame for smoother lines
        for (let i = 0; i < p.speed; i++) {
            time += 0.0001;
            
            // Increment rotations
            rot.l = (rot.l + p.lrota / 10 + 360) % 360;
            rot.r = (rot.r + p.rrota / 10 + 360) % 360;
            rot.c = (rot.c + p.crota / 10 + 360) % 360;
            
            // Pivot Points
            const hx = cx + p.hbx * scaleBase;
            const hy = cy + p.hby * scaleBase;
            
            const h1x = hx - (p.hdist / 2) * scaleBase;
            const h2x = hx + (p.hdist / 2) * scaleBase;
            
            // Arm 1 Positions
            const l1x = Math.cos(rot.l * AM) * p.larm1 * scaleBase + h1x;
            const l1y = Math.sin(rot.l * AM) * p.larm1 * scaleBase + hy;
            const r1x = Math.cos(rot.r * AM) * p.rarm1 * scaleBase + h2x;
            const r1y = Math.sin(rot.r * AM) * p.rarm1 * scaleBase + hy;
            
            // Distance between Arm 1 tips
            const dx = r1x - l1x;
            const dy = r1y - l1y;
            const D = Math.sqrt(dx * dx + dy * dy);
            const L2 = p.larm2 * scaleBase;
            const R2 = p.rarm2 * scaleBase;
            
            if (D > 0.1 && D < (L2 + R2) && D > Math.abs(L2 - R2)) {
                // Law of Cosines for intersection
                const a = (L2 * L2 - R2 * R2 + D * D) / (2 * D);
                const h = Math.sqrt(Math.max(0, L2 * L2 - a * a));
                
                const x2 = l1x + a * dx / D;
                const y2 = l1y + a * dy / D;
                
                // Intersection point
                const ix = x2 + h * dy / D;
                const iy = y2 - h * dx / D;
                
                // Extension (Pen position)
                const ex = ix + (ix - r1x) * (p.ext / 100);
                const ey = iy + (iy - r1y) * (p.ext / 100);

                // Global Canvas Rotation
                const nx = ex - cx;
                const ny = ey - cy;
                const nd = Math.sqrt(nx * nx + ny * ny);
                const na = Math.atan2(ny, nx) + rot.c * AM;
                
                const fx = cx + Math.cos(na) * nd;
                const fy = cy + Math.sin(na) * nd;
                
                if (pen.x !== null) {
                    const dist = Math.hypot(fx - pen.x, fy - pen.y);
                    if (dist < 200 * scaleBase) {
                        ctx.lineWidth = Math.max(0.3, 1.5 - dist / 5) * scaleBase;
                        
                        // Dynamic color based on rotation
                        const hue = (p.hue + rot.l * 0.1) % 360;
                        ctx.strokeStyle = `hsla(${hue}, 80%, 65%, ${p.opacity})`;
                        
                        ctx.beginPath();
                        ctx.moveTo(pen.x, pen.y);
                        ctx.lineTo(fx, fy);
                        ctx.stroke();
                    }
                }
                pen.x = fx;
                pen.y = fy;
            } else {
                pen.x = null;
            }
        }
    }
    requestAnimationFrame(draw);
}

// ─── Interaction ─────────────────────────────────────────────────────────────
playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? 'PAUSE' : 'PLAY';
    playBtn.classList.toggle('active', isPlaying);
});

randomizeBtn.addEventListener('click', () => {
    randomize();
});

// Auto-evolution every 15 seconds
setInterval(() => {
    if (isPlaying) randomize();
}, 15000);

// Boot
randomize();
draw();
