// ─── DOM References ──────────────────────────────────────────────────────────
const canvas       = document.getElementById('canvas');
const ctx          = canvas.getContext('2d');
const playPauseBtn = document.getElementById('play-pause');
const randomizeBtn = document.getElementById('randomize');
const shapeNameEl  = document.getElementById('shape-name');
const valLrpmEl    = document.getElementById('val-lrpm');
const valRrpmEl    = document.getElementById('val-rrpm');
const valSymmetryEl= document.getElementById('val-symmetry');

// ─── Constants ────────────────────────────────────────────────────────────────
const AM = Math.PI / 180;
const isRu = document.documentElement.lang === 'ru';

// ─── State ────────────────────────────────────────────────────────────────────
let width, height, cx, cy;
let isPlaying = true;
let isInfiniteMode = true; 
let totalSteps = 0;
let time = 0;

let rot = { l: 0, r: 0, c: 0 };
let pen = { x: null, y: null };
let startPoint = null;
let isFinished = false;

// SVG recording buffer — linear (no wrap), captures ALL drawing up to limit
const SVG_MAX = 500000; // 500k segments — enough for long dense figures (~8-15 sec)
let svgBuffer    = [];
let svgBufferPos = 0;  // circular write head

// Vignette gradient — rebuilt on resize, applied each frame to soften edge clipping
let vignetteGradient = null;


const SCHEMES = [
    { name: 'Rainbow', ruName: 'Радуга' },
    { name: 'Ethereal Gold', ruName: 'Эфирное Золото' },
    { name: 'Deep Ocean', ruName: 'Глубины Океана' },
    { name: 'Sacred Fire', ruName: 'Священный Огонь' },
    { name: 'Electric Neon', ruName: 'Электрик Неон' },
    { name: 'Monochrome', ruName: 'Монохром' },
    { name: 'Prism', ruName: 'Призма' },
    { name: 'Vibrant Rainbow', ruName: 'Яркая Радуга' },
    { name: 'Red-Blue Flow', ruName: 'Красно-Синий Поток' },
    { name: 'Eternal Vortex', ruName: 'Вечный Вихрь' }
];
let currentScheme = 0;
const colorBtn = document.getElementById('next-color');
const colorNameEl = document.getElementById('color-name');

// ─── Default params — AMUSE-style, viewport-safe ─────────────────────────────
let params = {
    speed: 200,      // Acceleration
    colormode: 4,
    brightness: 1,
    crota: 4,        // Canvas Rotation RPM
    hbx: 0,          // Offset X
    hby: -270,       // Offset Y
    hdist: 245,      // Hand Distance
    lrota: 2,        // Left Arm RPM
    larm1: 73,       // Left Arm 1 Length
    larm2: 221,      // Left Arm 2 Length
    rrota: -3,       // Right Arm RPM
    rarm1: 66,       // Right Arm 1 Length
    rarm2: 260,      // Right Arm 2 Length
    ext: 37,         // Extension
    handlrot: 0,     // Offset Angle
    growth: 0,
    volume: 0,
    symmetry: 1
};

let targetParams = { ...params };

// ─── Shape name lists for display only ───────────────────────────────────────
const SHAPE_NAMES = {
    en: ['Chaos', 'Vortex', 'Storm', 'Spiral', 'Pulse', 'Bloom', 'Flow', 'Burst', 'Wave', 'Drift'],
    ru: ['Хаос', 'Вихрь', 'Шторм', 'Спираль', 'Пульс', 'Расцвет', 'Поток', 'Взрыв', 'Волна', 'Дрейф']
};

// ─── Functions ────────────────────────────────────────────────────────────────
function resize() {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = width / 2;

    // On mobile: center between header and controls, not full-screen centre
    const isMobileLayout = width < 768;
    if (isMobileLayout) {
        const headerEl   = document.querySelector('header');
        const controlsEl = document.querySelector('.controls');
        const headerBottom  = headerEl   ? headerEl.getBoundingClientRect().bottom   : 90;
        const controlsTop   = controlsEl ? controlsEl.getBoundingClientRect().top    : height - 220;
        cy = headerBottom + (controlsTop - headerBottom) / 2;
    } else {
        cy = height / 2;
    }

    clearCanvas();

    // Rebuild vignette gradient to match new canvas size
    vignetteGradient = null;
}

function clearCanvas() {
    if (!ctx) return;
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#05050a';   // fully opaque — no ghost of previous figure
    ctx.fillRect(0, 0, width, height);
    pen.x = null;
    pen.y = null;
    startPoint = null;
    isFinished = false;
    rot.l = params.handlrot || 0;
    rot.r = 0;
    rot.c = 0;
    time = 0;
    totalSteps = 0;
    svgBuffer    = [];
    svgBufferPos = 0; // reset circular buffer for new figure
}

function drawMarker(x, y, isStart) {
    const scaleBase = Math.min(width, height) / 1800;
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath();
    ctx.arc(x, y, 5 * scaleBase, 0, Math.PI * 2);
    ctx.fillStyle = isStart ? '#fff' : '#ff3366';
    ctx.shadowBlur = 15;
    ctx.shadowColor = isStart ? '#fff' : '#ff3366';
    ctx.fill();
    
    // Add inner white core for end point to make it pop
    if (!isStart) {
        ctx.beginPath();
        ctx.arc(x, y, 2 * scaleBase, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
    ctx.restore();
}

function getStrokeColor(phase) {
    let r, g, b;
    switch(currentScheme) {
        case 1: // Gold
            r = 210 + Math.sin(phase * 0.5) * 45;
            g = 170 + Math.sin(phase * 0.5 + 2) * 30;
            b = 80 + Math.sin(phase * 0.5 + 4) * 40;
            break;
        case 2: // Ocean
            r = 20 + Math.sin(phase) * 20;
            g = 140 + Math.sin(phase + 1) * 115;
            b = 200 + Math.sin(phase + 2) * 55;
            break;
        case 3: // Fire
            r = 220 + Math.sin(phase) * 35;
            g = 70 + Math.sin(phase + 1) * 60;
            b = 20 + Math.sin(phase + 2) * 20;
            break;
        case 4: // Electric
            r = 150 + Math.sin(phase) * 105;
            g = 30 + Math.sin(phase + 1) * 30;
            b = 220 + Math.sin(phase + 2) * 35;
            break;
        case 5: // Monochrome
            const v = 180 + Math.sin(phase) * 75;
            r = g = b = v;
            break;
        case 6: // Prism (HSL)
            const hue = (phase * 60) % 360;
            return `hsla(${hue}, 80%, 60%, 0.85)`;
        case 7: // Vibrant Rainbow
            const vHue = ((phase * 180 / Math.PI) % 360);
            return `hsla(${vHue}, 100%, 50%, 0.85)`;
        case 8: // Red to Blue
            const hueRB = (Math.sin(phase * 0.5) * 0.5 + 0.5) * 240; // 0 (Red) to 240 (Blue)
            return `hsla(${hueRB}, 100%, 50%, 0.85)`;
        case 9: // Eternal Vortex (from screenshot)
            const p = (phase % (Math.PI * 2)) / (Math.PI * 2);
            // Palette: Orange -> Gold -> Teal -> Blue -> Purple
            if (p < 0.2) return `rgba(255, 77, 0, 0.85)`;
            if (p < 0.4) return `rgba(255, 184, 0, 0.85)`;
            if (p < 0.6) return `rgba(0, 209, 255, 0.85)`;
            if (p < 0.8) return `rgba(0, 56, 255, 0.85)`;
            return `rgba(128, 0, 255, 0.85)`;
        default: // Rainbow (0) - Sine Spectrum
            r = Math.sin(phase) * 127 + 127;
            g = Math.sin(phase + 2.094) * 127 + 127;  // 2π/3 offset
            b = Math.sin(phase + 4.189) * 127 + 127;  // 4π/3 offset
    }
    return `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},0.85)`;
}

function updateColorUI() {
    if (colorNameEl) {
        const s = SCHEMES[currentScheme];
        colorNameEl.textContent = isRu ? s.ruName : s.name;
    }
}

function randomize() {
    const rnd  = (a, b) => Math.random() * (b - a) + a;
    const sign = ()     => Math.random() > 0.5 ? 1 : -1;

    const isMobile  = window.innerWidth < 768;
    const mobileScale = isMobile ? 0.7 : 1;

    // Reset dynamic drift parameters by default
    targetParams.growth   = 0;
    targetParams.driftL   = 0;
    targetParams.driftR   = 0;
    targetParams.driftC   = 0;
    targetParams.volume   = 0;
    targetParams.speed    = 400; // Super fast generation
    targetParams.colormode = 4;

    // ── Select Generative Archetype ──
    const archetype = Math.floor(Math.random() * 5);

    if (archetype === 0) {
        // Archetype 0: "Sacred Seals & Mandalas" (Clean integer ratios, 100% closed, zero canvas rotation)
        const resonantPairs = [
            [2, -3], [3, -4], [3, -5], [4, -5], [5, -6], [3, 5], [2, 5], [4, 7], [3, 8], [5, -8], [7, -8], [5, 9]
        ];
        const pair = resonantPairs[Math.floor(Math.random() * resonantPairs.length)];
        targetParams.lrota = pair[0];
        targetParams.rrota = pair[1];
        targetParams.crota = 0; // perfectly static to close the shape perfectly

        const symOpts = [3, 4, 5, 6, 8, 10, 12];
        targetParams.symmetry = symOpts[Math.floor(Math.random() * symOpts.length)];
    }
    else if (archetype === 1) {
        // Archetype 1: "Silky Cosmos & Cocoons" (Fast + very slow RPM, slow canvas rotation)
        const fastRPM = rnd(1.5, 7);
        const slowRPM = 1 / rnd(15, 180);
        if (Math.random() > 0.5) {
            targetParams.lrota = sign() * fastRPM;
            targetParams.rrota = sign() * slowRPM;
        } else {
            targetParams.lrota = sign() * slowRPM;
            targetParams.rrota = sign() * fastRPM;
        }
        targetParams.crota = sign() * rnd(0.02, 0.15);

        const symOpts = [1, 2, 3, 4, 5, 6, 8];
        targetParams.symmetry = symOpts[Math.floor(Math.random() * symOpts.length)];
    }
    else if (archetype === 2) {
        // Archetype 2: "Stellar Orbits & Rosettes" (One integer speed, one slow fractional speed)
        const baseSpeed = Math.floor(rnd(2, 8));
        const fraction = rnd(0.1, 0.9) * sign();
        if (Math.random() > 0.5) {
            targetParams.lrota = sign() * baseSpeed;
            targetParams.rrota = fraction;
        } else {
            targetParams.lrota = fraction;
            targetParams.rrota = sign() * baseSpeed;
        }
        targetParams.crota = sign() * rnd(0.01, 0.25);

        const symOpts = [2, 3, 4, 5, 6, 8, 10];
        targetParams.symmetry = symOpts[Math.floor(Math.random() * symOpts.length)];
    }
    else if (archetype === 3) {
        // Archetype 3: "Chaotic Nebulae & Waves" (Asynchronous speeds, moderate canvas rotation)
        targetParams.lrota = rnd(2.2, 6.8) * sign();
        targetParams.rrota = rnd(2.2, 6.8) * sign();
        targetParams.crota = sign() * rnd(0.2, 0.8);

        const symOpts = [1, 2, 3, 4, 5, 6];
        targetParams.symmetry = symOpts[Math.floor(Math.random() * symOpts.length)];
    }
    else {
        // Archetype 4: "Harmonic Breathing & Drift" (Slow expansion and speed fluctuations)
        const baseSpeed = Math.floor(rnd(1, 6));
        const secondSpeed = Math.floor(rnd(1, 6));
        targetParams.lrota = sign() * baseSpeed;
        targetParams.rrota = sign() * (secondSpeed === baseSpeed ? secondSpeed + 1 : secondSpeed);
        targetParams.crota = Math.random() > 0.5 ? sign() * rnd(0.01, 0.15) : 0;

        targetParams.growth   = rnd(0.00003, 0.00015);
        targetParams.driftL   = rnd(0.02, 0.12);
        targetParams.driftR   = rnd(0.02, 0.12);
        targetParams.driftC   = Math.random() > 0.5 ? rnd(0.01, 0.05) : 0;

        const symOpts = [3, 4, 5, 6, 8, 10, 12];
        targetParams.symmetry = symOpts[Math.floor(Math.random() * symOpts.length)];
    }

    // ── Geometry ranges with Strict Reach Constraints (Ensuring smooth, unbroken curves) ──
    targetParams.hbx      = rnd(-150, 150)  * mobileScale;
    targetParams.hby      = rnd(-480, -250) * mobileScale;  // keep pivot away from centre
    targetParams.hdist    = rnd(120,  450)  * mobileScale;
    
    // Joint arms 1 (inner rotating segments)
    targetParams.larm1    = rnd(40,  160)   * mobileScale;
    targetParams.rarm1    = rnd(40,  160)   * mobileScale;
    
    // Joint arms 2 (outer bridging segments)
    // To ensure a valid triangle can ALWAYS close under all rotation angles (eliminating broken/jagged jumps):
    // 1) larm2 + rarm2 > maxReach = hdist + larm1 + rarm1 (so they can always bridge the gap)
    // 2) |larm2 - rarm2| < minReach = |hdist - larm1 - rarm1| (so they never collide when fully folded)
    const maxReach = targetParams.hdist + targetParams.larm1 + targetParams.rarm1;
    const outerBase = maxReach * rnd(0.55, 0.72); 
    
    targetParams.larm2 = outerBase;
    // Keep rarm2 very close to larm2 so their difference is tiny, satisfying the minReach inequality
    targetParams.rarm2 = outerBase + rnd(-15, 15) * mobileScale;
    
    targetParams.ext      = rnd(20,  100)   * mobileScale;
    targetParams.handlrot = rnd(0,   360);

    // ── Viewport safety: scale DOWN if too large, scale UP if too small ─────
    const SAFE   = 900;  // max reach in AMUSE units (maps to ~90% of half-screen)
    const TARGET = 650;  // minimum reach — figures always fill at least 65% of screen

    const maxH = Math.abs(targetParams.hbx) + targetParams.hdist / 2
               + targetParams.larm1 + targetParams.larm2 + targetParams.ext;
    const maxV = Math.abs(targetParams.hby)
               + targetParams.larm1 + targetParams.larm2 + targetParams.ext;
    const reach = Math.max(maxH, maxV);

    // Determine scale factor: clamp to [TARGET, SAFE]
    let sizeScale = 1;
    if (reach > SAFE)   sizeScale = SAFE / reach;    // too big → shrink
    else if (reach < TARGET) sizeScale = TARGET / reach; // too small → grow

    if (Math.abs(sizeScale - 1) > 0.01) {
        targetParams.hbx   *= sizeScale;  targetParams.hby   *= sizeScale;
        targetParams.hdist *= sizeScale;  targetParams.larm1 *= sizeScale;
        targetParams.rarm1 *= sizeScale;  targetParams.larm2 *= sizeScale;
        targetParams.rarm2 *= sizeScale;  targetParams.ext   *= sizeScale;
    }

    if (shapeNameEl) {
        shapeNameEl.innerHTML = isRu
            ? '<span style="opacity:0.5;font-weight:200;">ABRAKADABRA</span> GENERATIVE GALLERY'
            : '<span style="opacity:0.5;font-weight:200;">ABRAKADABRA</span> GENERATIVE GALLERY';
    }

    params = { ...targetParams };
    clearCanvas();
    isPlaying = true;
}

function updateDisplay() {
    if (valLrpmEl) valLrpmEl.textContent = params.lrota.toFixed(2);
    if (valRrpmEl) valRrpmEl.textContent = params.rrota.toFixed(2);
    // Determine symmetry text based on ratio
    let symTxt = "ASYM";
    if (params.rrota % params.lrota === 0 || params.lrota % params.rrota === 0) symTxt = "SYM";
    if (valSymmetryEl) valSymmetryEl.textContent = symTxt;
}

function draw() {
    requestAnimationFrame(draw);
    if (!isPlaying || !ctx) return;

    updateDisplay();

    const isMobile = width < 768;
    const scaleBase = Math.min(width, height) / (isMobile ? 1200 : 2000);
    const { speed, hbx, hby, hdist, lrota, larm1, larm2, rrota, rarm1, rarm2, ext, crota, colormode, brightness, growth, volume } = params;

    ctx.lineCap = 'round';
    // Use screen blend mode for brighter overlapping lines on dark background
    ctx.globalCompositeOperation = 'screen'; 

    for (let i = 0; i < speed; i++) {
        time += 0.0001;

        // Slight drift for organic feel
        const currentLrota = lrota + (params.driftL || 0) * Math.sin(time * 10);
        const currentRrota = rrota + (params.driftR || 0) * Math.cos(time * 10);
        const currentCrota = crota + (params.driftC || 0);

        const gScale = 1 + (time * 80 * growth);
        const sL1 = larm1 * gScale;
        const sR1 = rarm1 * gScale;
        const sL2 = larm2 * gScale;
        const sR2 = rarm2 * gScale;
        const sExt = ext * gScale;
        const sDist = hdist * gScale;

        const zShift = volume === 0 ? 0 : Math.cos(time * 8 * volume) * 100;
        const vDist  = sDist + zShift;

        rot.l = (rot.l + currentLrota / 10 + 360) % 360;
        rot.r = (rot.r + currentRrota / 10 + 360) % 360;
        rot.c = (rot.c + currentCrota  / 10 + 360) % 360;

        const hx  = cx + (hbx + (volume === 0 ? 0 : Math.cos(time * 4) * 50)) * scaleBase;
        const hy  = cy + (hby + (volume === 0 ? 0 : Math.sin(time * 4) * 50)) * scaleBase;

        const h1x = hx - (vDist / 2) * scaleBase;
        const h1y = hy;
        const h2x = hx + (vDist / 2) * scaleBase;
        const h2y = hy;

        const l1x = Math.cos(rot.l * AM) * sL1 * scaleBase + h1x;
        const l1y = Math.sin(rot.l * AM) * sL1 * scaleBase + h1y;
        const r1x = Math.cos(rot.r * AM) * sR1 * scaleBase + h2x;
        const r1y = Math.sin(rot.r * AM) * sR1 * scaleBase + h2y;

        const dx = r1x - l1x;
        const dy = r1y - l1y;
        const D  = Math.sqrt(dx * dx + dy * dy);
        const L2 = sL2 * scaleBase;
        const R2 = sR2 * scaleBase;

        if (D > 0.1 && D < (L2 + R2) && D > Math.abs(L2 - R2)) {
            const cosGamma    = Math.max(-1, Math.min(1, (R2*R2 + L2*L2 - D*D) / (2*R2*L2)));
            const gamma       = Math.acos(cosGamma);
            const sinAlphaRaw = Math.max(-1, Math.min(1, R2 * Math.sin(gamma) / D));
            const sinBetaRaw  = Math.max(-1, Math.min(1, L2 * Math.sin(gamma) / D));
            let alpha = Math.asin(sinAlphaRaw);
            let beta  = Math.asin(sinBetaRaw);
            const delta = Math.asin(Math.max(-1, Math.min(1, dy / D)));

            if (L2 > R2) beta  = Math.PI - alpha - gamma;
            if (R2 > L2) alpha = Math.PI - beta  - gamma;

            const h2a = Math.PI - (beta - delta);
            const drx = r1x + Math.cos(h2a) * (R2 + sExt * scaleBase);
            const dry = r1y + Math.sin(h2a) * (R2 + sExt * scaleBase);

            const nx = drx - cx;
            const ny = dry - cy;
            const nd = Math.sqrt(nx * nx + ny * ny);
            let   na = nd === 0 ? 0 : Math.asin(Math.max(-1, Math.min(1, ny / nd)));
            if (nx < 0) na = Math.PI - na;
            na += rot.c * AM;

            const fx = cx + Math.cos(na) * nd;
            const fy = cy + Math.sin(na) * nd;

            if (startPoint === null) startPoint = { x: fx, y: fy };

            // Optimized drawing: batch symmetry segments + avoid shadowBlur
            if (pen.x !== null) {
                const phase  = AM * rot.l;
                const stroke = getStrokeColor(phase);
                const sym    = params.symmetry || 1;
                const px = pen.x - cx,  py = pen.y - cy;
                const qx = fx - cx,     qy = fy - cy;
                const d  = Math.sqrt((qx - px)**2 + (qy - py)**2);
                
                const speedFactor = Math.max(0.1, Math.min(1.0, 10 / (d + 0.1)));
                const baseWidth   = 0.5 * scaleBase;
                
                ctx.strokeStyle = stroke;

                // 1. Draw "Glow" pass (thicker, transparent) - only if not too fast
                if (speedFactor > 0.3) {
                    ctx.lineWidth = baseWidth * 4;
                    ctx.globalAlpha = 0.15 * speedFactor;
                    ctx.beginPath();
                    for (let s = 0; s < sym; s++) {
                        const ang = (2 * Math.PI * s) / sym;
                        const ca  = Math.cos(ang), sa = Math.sin(ang);
                        ctx.moveTo(cx + px * ca - py * sa,  cy + px * sa + py * ca);
                        ctx.lineTo(cx + qx * ca - qy * sa,  cy + qx * sa + qy * ca);
                    }
                    ctx.stroke();
                }

                // 2. Draw "Core" pass (thin, bright)
                ctx.lineWidth = (0.3 + 0.5 * speedFactor) * scaleBase;
                ctx.globalAlpha = 0.5 + 0.5 * speedFactor;
                ctx.beginPath();
                for (let s = 0; s < sym; s++) {
                    const ang = (2 * Math.PI * s) / sym;
                    const ca  = Math.cos(ang), sa = Math.sin(ang);
                    ctx.moveTo(cx + px * ca - py * sa,  cy + px * sa + py * ca);
                    ctx.lineTo(cx + qx * ca - qy * sa,  cy + qx * sa + qy * ca);
                }
                ctx.stroke();
                ctx.globalAlpha = 1.0;

                // Record for SVG — linear buffer, stop when full
                if (svgBuffer.length < SVG_MAX) {
                    svgBuffer.push({ px, py, qx, qy, color: stroke });
                }
            }
            pen.x = fx;
            pen.y = fy;
        }
        // Constraint failed: keep pen position — path resumes from last valid point

        totalSteps++;
    }

    // ── Vignette: fade figure edges gracefully to background ─────────────────
    // Rebuild gradient if canvas was resized or not yet created
    if (!vignetteGradient) {
        const cx2 = width  / 2;
        const cy2 = height / 2;
        const r   = Math.max(width, height) * 0.72; // gradient radius
        vignetteGradient = ctx.createRadialGradient(cx2, cy2, r * 0.42, cx2, cy2, r);
        vignetteGradient.addColorStop(0,   'rgba(5,5,10,0)');
        vignetteGradient.addColorStop(0.65, 'rgba(5,5,10,0)');
        vignetteGradient.addColorStop(1,   'rgba(5,5,10,1)');
    }
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle   = vignetteGradient;
    ctx.fillRect(0, 0, width, height);
    // ─────────────────────────────────────────────────────────────────────────
}

// ─── Event Listeners ──────────────────────────────────────────────────────────
// "Return to Main" — guard against accidental tap during generation
const returnBtn = document.querySelector('a.link-btn[href*="index"]');
if (returnBtn) {
    returnBtn.addEventListener('click', (e) => {
        // Ask confirmation only while figure is actively drawing
        if (isPlaying) {
            const msg = isRu
                ? 'Фигура ещё генерируется. Прервать и выйти?'
                : 'Figure is still generating. Leave anyway?';
            if (!confirm(msg)) {
                e.preventDefault();
                return;
            }
        }
        // If inside iframe — delegate exit to parent
        if (window.self !== window.top) {
            e.preventDefault();
            try { window.parent.exitSection(); }
            catch(err) { window.location.href = returnBtn.href; }
        }
    });
}

randomizeBtn.addEventListener('click', randomize);
canvas.addEventListener('dblclick', randomize);

// ── Redraw — same figure, fresh canvas ──────────────────────────────────────
const redrawBtn = document.getElementById('redraw');
if (redrawBtn) {
    redrawBtn.addEventListener('click', function() {
        // Keep current params exactly as-is — just reset drawing state
        clearCanvas();
        isPlaying = true;
        playPauseBtn.textContent = isRu ? 'Стоп' : 'Stop';
        // Dim download button again
        if (downloadBtn) {
            downloadBtn.classList.add('secondary');
            downloadBtn.disabled = true;
        }
    });
}


// ── SVG Export ────────────────────────────────────────────────────────────────
function generateSVG(figName) {
    if (svgBuffer.length < 2) return null;
    const sym = params.symmetry || 1;

    // Full linear buffer (no wrap)
    const buf = svgBuffer;

    // Bounding radius → scale to fill 90% of 1000×1000
    let maxR = 0;
    for (const s of buf) maxR = Math.max(maxR, Math.sqrt(s.px*s.px+s.py*s.py), Math.sqrt(s.qx*s.qx+s.qy*s.qy));
    if (maxR < 1) maxR = 1;
    const SIZE = 1000;
    const OX = SIZE/2, OY = SIZE/2;
    const scale = (SIZE * 0.45) / maxR;

    // Colour-grouped paths (one per colour run)
    let paths = [], cur = '', prevColor = null;
    for (const s of buf) {
        const x1 = Math.round(OX + s.px * scale);
        const y1 = Math.round(OY + s.py * scale);
        const x2 = Math.round(OX + s.qx * scale);
        const y2 = Math.round(OY + s.qy * scale);
        if (s.color !== prevColor) {
            if (cur) paths.push({ color: prevColor, d: cur });
            cur = `M${x1},${y1}`;
            prevColor = s.color;
        }
        cur += ` L${x2},${y2}`;
    }
    if (cur) paths.push({ color: prevColor, d: cur });

    // ── Two passes replicating the canvas dual draw ─────────────────────────
    // Pass 1 (Glow): thick, very transparent — matches ctx.lineWidth*4, alpha 0.15
    const glowPaths = paths.map(p =>
        `<path d="${p.d}" stroke="${p.color}" stroke-opacity="0.07" stroke-width="3" fill="none" stroke-linecap="round"/>`
    ).join('\n      ');

    // Pass 2 (Core): thin, semi-transparent — matches ctx.lineWidth*0.7, alpha 0.5-1
    const corePaths = paths.map(p =>
        `<path d="${p.d}" stroke="${p.color}" stroke-opacity="0.5" stroke-width="0.5" fill="none" stroke-linecap="round"/>`
    ).join('\n      ');

    // Symmetry <use> tags for each pass
    let useGlow = '', useCore = '';
    for (let s = 1; s < sym; s++) {
        const deg = (360 * s / sym).toFixed(4);
        useGlow += `<use href="#arm-glow" transform="rotate(${deg},${OX},${OY})"/>\n    `;
        useCore += `<use href="#arm-core" transform="rotate(${deg},${OX},${OY})"/>\n    `;
    }

    // Physical size: 1000px at 300 DPI = 84.667mm
    const mmSize = (1000 / 300 * 25.4).toFixed(3);

    return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Van Lax Abrakadabra | ${figName} | 1000×1000 px | 300 DPI | Transparent -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="${mmSize}mm" height="${mmSize}mm"
     viewBox="0 0 ${SIZE} ${SIZE}">
  <title>${figName}</title>
  <desc>Van Lax Abrakadabra | S=${params.symmetry||1}</desc>
  <defs>
    <!-- Glow blur — softens the thick halo pass without a background -->
    <filter id="gf" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="2.5"/>
    </filter>
    <!-- Pass 1: thick, blurred glow -->
    <g id="arm-glow">
      ${glowPaths}
    </g>
    <!-- Pass 2: thin, sharp core -->
    <g id="arm-core">
      ${corePaths}
    </g>
  </defs>
  <!-- No background — fully transparent, works on white, black or any colour -->
  <!-- Glow pass (blurred halo) -->
  <g filter="url(#gf)">
    <use href="#arm-glow"/>
    ${useGlow}
  </g>
  <!-- Core pass (crisp lines on top) -->
  <g>
    <use href="#arm-core"/>
    ${useCore}
  </g>
</svg>`;
}



// ── Play / Pause ─────────────────────────────────────────────────────────────
var downloadBtn = document.getElementById('download');

playPauseBtn.addEventListener('click', function() {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying
        ? (isRu ? 'Стоп' : 'Stop')
        : (isRu ? 'Старт' : 'Start');
    if (downloadBtn) {
        if (!isPlaying) {
            downloadBtn.classList.remove('secondary');
            downloadBtn.disabled = false;
        } else {
            downloadBtn.classList.add('secondary');
            downloadBtn.disabled = true;
        }
    }
});

// ── Download PNG — pixel-perfect 3000x3000 capture of the canvas ────────────────
if (downloadBtn) {
    downloadBtn.classList.add('secondary');
    downloadBtn.disabled = true;
    downloadBtn.addEventListener('click', function() {
        if (isPlaying) return;
        try {
            var p  = params;
            var fv = function(n) { return typeof n === 'number' ? (Math.abs(n) < 1 ? n.toFixed(3) : n.toFixed(2)) : '0'; };
            var safeName = ('Abrakadabra_' + fv(p.lrota) + '_' + fv(p.rrota) + '_S' + (p.symmetry || 1))
                           .replace(/[^A-Za-z0-9._-]/g, '_');

            // ── Canvas layout: 3000×3000 — figure area + formula band ────────
            var OUT   = 3000;
            var BAND  = 240;  // bottom metadata strip height
            var FIG_H = OUT - BAND; // 2760px for the figure

            var off = document.createElement('canvas');
            off.width  = OUT;
            off.height = OUT;
            var oc = off.getContext('2d');

            // Fill entire canvas with dark background
            oc.fillStyle = '#05050a';
            oc.fillRect(0, 0, OUT, OUT);

            // ── Auto-crop: find tight bounding box of the figure ─────────────
            var PROXY = 150;
            var px = document.createElement('canvas');
            px.width = px.height = PROXY;
            var pc = px.getContext('2d');
            pc.drawImage(canvas, 0, 0, PROXY, PROXY);
            var id = pc.getImageData(0, 0, PROXY, PROXY).data;
            var minX = PROXY, minY = PROXY, maxX = 0, maxY = 0;
            for (var row = 0; row < PROXY; row++) {
                for (var col = 0; col < PROXY; col++) {
                    var i = (row * PROXY + col) * 4;
                    if (id[i] > 12 || id[i+1] > 12 || id[i+2] > 12) {
                        if (col < minX) minX = col;
                        if (col > maxX) maxX = col;
                        if (row < minY) minY = row;
                        if (row > maxY) maxY = row;
                    }
                }
            }
            if (maxX <= minX || maxY <= minY) { minX = 0; minY = 0; maxX = PROXY-1; maxY = PROXY-1; }
            var bw = maxX - minX, bh = maxY - minY;
            var padX = Math.max(bw * 0.08, 4), padY = Math.max(bh * 0.08, 4);
            minX = Math.max(0, minX - padX);
            minY = Math.max(0, minY - padY);
            maxX = Math.min(PROXY-1, maxX + padX);
            maxY = Math.min(PROXY-1, maxY + padY);

            var srcW = canvas.width, srcH = canvas.height;
            var cropX = Math.floor(minX * srcW / PROXY);
            var cropY = Math.floor(minY * srcH / PROXY);
            var cropW = Math.ceil((maxX - minX) * srcW / PROXY);
            var cropH = Math.ceil((maxY - minY) * srcH / PROXY);

            // Draw figure into top portion (letterbox-fit within FIG_H)
            var figRatio = Math.min(OUT / cropW, FIG_H / cropH);
            var figW = cropW * figRatio, figH = cropH * figRatio;
            oc.drawImage(canvas, cropX, cropY, cropW, cropH,
                         (OUT - figW) / 2, (FIG_H - figH) / 2, figW, figH);
            // ─────────────────────────────────────────────────────────────────

            // ── Separator line ────────────────────────────────────────────────
            oc.strokeStyle = 'rgba(229,178,54,0.18)';
            oc.lineWidth   = 1;
            oc.beginPath();
            oc.moveTo(60, FIG_H);
            oc.lineTo(OUT - 60, FIG_H);
            oc.stroke();

            // ── Formula band ─────────────────────────────────────────────────
            // Build the unique parameter string for this figure
            var n  = function(v, d) { return typeof v === 'number' ? v.toFixed(d) : '—'; };
            var formulaLine1 =
                '\u03c9\u2081 = ' + n(p.lrota, 4) + '   \u00b7   ' +
                '\u03c9\u2082 = ' + n(p.rrota, 4) + '   \u00b7   ' +
                '\u03c9c = ' + n(p.crota, 3)  + '   \u00b7   ' +
                'S = '  + (p.symmetry || 1);

            var formulaLine2 =
                'Hub (' + n(p.hbx, 1) + ', ' + n(p.hby, 1) + ')   \u00b7   ' +
                'Dist ' + n(p.hdist, 1) + '   \u00b7   ' +
                'L\u2081 ' + n(p.larm1, 1) + '  L\u2082 ' + n(p.larm2, 1) + '   \u00b7   ' +
                'R\u2081 ' + n(p.rarm1, 1) + '  R\u2082 ' + n(p.rarm2, 1) + '   \u00b7   ' +
                'Ext ' + n(p.ext, 1) + '   \u00b7   ' +
                '\u03b8 = ' + n(p.handlrot, 1) + '\u00b0';

            oc.textAlign    = 'center';
            oc.textBaseline = 'middle';

            // Formula line 1 — gold
            oc.font        = '400 30px "Helvetica Neue", Helvetica, Arial, sans-serif';
            oc.globalAlpha = 0.65;
            oc.fillStyle   = '#e5b236';
            oc.fillText(formulaLine1, OUT / 2, FIG_H + 68);

            // Formula line 2 — silver
            oc.font        = '300 24px "Helvetica Neue", Helvetica, Arial, sans-serif';
            oc.globalAlpha = 0.45;
            oc.fillStyle   = '#b0b8c8';
            oc.fillText(formulaLine2, OUT / 2, FIG_H + 122);

            // ── Gallery name + copyright (bottom-right) ───────────────────────
            oc.textAlign    = 'right';
            oc.textBaseline = 'alphabetic';

            oc.font        = '500 22px "Helvetica Neue", Helvetica, Arial, sans-serif';
            oc.globalAlpha = 0.3;
            oc.fillStyle   = '#e5b236';
            oc.fillText('ABRAKADABRA  GENERATIVE  GALLERY', OUT - 54, FIG_H + 186);

            oc.font        = '300 18px "Helvetica Neue", Helvetica, Arial, sans-serif';
            oc.globalAlpha = 0.22;
            oc.fillStyle   = '#c0c0c0';
            oc.fillText('\u00a9  Inspired by Van Lax', OUT - 54, FIG_H + 214);

            oc.globalAlpha = 1.0;
            // ─────────────────────────────────────────────────────────────────



            off.toBlob(function(blob) {
                var url = URL.createObjectURL(blob);
                var a   = document.createElement('a');
                a.href  = url;
                a.setAttribute('download', safeName + '.png');
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                setTimeout(function() { document.body.removeChild(a); URL.revokeObjectURL(url); }, 3000);
            }, 'image/png');

            var prev = downloadBtn.textContent;
            downloadBtn.textContent = isRu ? '✓ Скачан!' : '✓ Downloaded!';
            setTimeout(function() { downloadBtn.textContent = prev; }, 2500);
        } catch(err) {
            alert('Download failed: ' + err.message);
            console.error(err);
        }
    });
}

window.addEventListener('resize', resize);

// ─── Boot ───────────────────────────────────────────────────────────────────────
resize();
updateColorUI();
randomize();
draw();
