// ─── DOM References ──────────────────────────────────────────────────────────
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playPauseBtn = document.getElementById('play-pause');
const randomizeBtn = document.getElementById('randomize');
const shapeNameEl = document.getElementById('shape-name');
const valLrpmEl = document.getElementById('val-lrpm');
const valRrpmEl = document.getElementById('val-rrpm');
const valSymmetryEl = document.getElementById('val-symmetry');

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
}

function clearCanvas() {
    if (!ctx) return;
    ctx.globalCompositeOperation = 'source-over';
    // Use semi-transparent fill to leave a faint ghost of the previous shape
    ctx.fillStyle = 'rgba(5, 5, 8, 0.92)'; 
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

    // ── RPM strategy: one fast arm + one slow arm ───────────────────────────
    // Broader ranges for more "magical" and intricate patterns.
    const fastRPM = rnd(0.5, 6);
    const slowRPM = 1 / rnd(10, 200);

    if (Math.random() > 0.5) {
        targetParams.lrota = sign() * fastRPM;
        targetParams.rrota = sign() * slowRPM;
    } else {
        targetParams.lrota = sign() * slowRPM;
        targetParams.rrota = sign() * fastRPM;
    }

    // Canvas rotation: often slow, but can be zero or moderate
    targetParams.crota = Math.random() > 0.2 ? sign() * rnd(0.01, 1.2) : 0;

    // ── Geometry ranges ─────────────────────────────────────────────────────
    targetParams.hbx      = rnd(-200, 200)  * mobileScale;
    targetParams.hby      = rnd(-550, -200) * mobileScale;  // keep pivot away from centre
    targetParams.hdist    = rnd(50,  600)   * mobileScale;
    targetParams.larm1    = rnd(20,  180)   * mobileScale;
    targetParams.rarm1    = rnd(20,  180)   * mobileScale;
    targetParams.larm2    = rnd(100, 600)   * mobileScale;
    targetParams.rarm2    = rnd(100, 600)   * mobileScale;
    targetParams.ext      = rnd(0,   120);
    targetParams.handlrot = rnd(0,   360);

    targetParams.growth   = 0;
    targetParams.volume   = 0; // Keep zero: volume oscillation causes broken geometry
    targetParams.driftL   = 0;
    targetParams.driftR   = 0;
    targetParams.driftC   = 0;
    targetParams.speed    = 400; // Super fast generation
    targetParams.colormode = 4;

    // Symmetry: 1 (none) to 12-fold for massive variety
    const symOpts = [1, 2, 3, 4, 5, 6, 8, 10, 12];
    targetParams.symmetry = symOpts[Math.floor(Math.random() * symOpts.length)];

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

    // Display name — picked from AMUSE-style flat list
    const names = isRu ? SHAPE_NAMES.ru : SHAPE_NAMES.en;
    const adjs  = isRu ? ['Хаотичный', 'Дикий', 'Свободный', 'Случайный', 'Бесконечный']
                       : ['Chaotic',   'Wild',   'Free',      'Random',    'Infinite'];
    if (shapeNameEl) {
        const n = names[Math.floor(Math.random() * names.length)];
        const a = adjs[Math.floor(Math.random()  * adjs.length)];
        shapeNameEl.innerHTML = `<span style="opacity:0.5;font-weight:200;">AMUSE B: </span>${a} ${n}`;
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
            }
            pen.x = fx;
            pen.y = fy;
        }
        // Constraint failed: keep pen position — path resumes from last valid point

        totalSteps++;
    }
}

// ─── Event Listeners ──────────────────────────────────────────────────────────
const returnBtn = document.querySelector('.link-btn');
if (returnBtn && window.self !== window.top) {
    returnBtn.addEventListener('click', (e) => {
        e.preventDefault();
        try {
            window.parent.exitSection();
        } catch(err) {
            window.location.href = 'index.html';
        }
    });
}

randomizeBtn.addEventListener('click', randomize);
if (colorBtn) {
    colorBtn.addEventListener('click', () => {
        currentScheme = (currentScheme + 1) % SCHEMES.length;
        updateColorUI();
    });
}
canvas.addEventListener('dblclick', randomize);
playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (playPauseBtn) {
        playPauseBtn.textContent = isPlaying ? (isRu ? 'Стоп' : 'Stop') : (isRu ? 'Старт' : 'Start');
    }
});

window.addEventListener('resize', resize);

// ─── Boot ─────────────────────────────────────────────────────────────────────
resize();
updateColorUI();
randomize();
draw();
