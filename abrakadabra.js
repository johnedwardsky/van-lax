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
const PHI = (1 + Math.sqrt(5)) / 2; 
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

// Start with standard Sprirograph parameters from the screenshot
let params = {
    speed: 50,       // Acceleration
    colormode: 4,
    brightness: 1,
    crota: -14.4,    // Canvas Rotation RPM
    hbx: 30,         // Offset X
    hby: -700,       // Offset Y
    hdist: 1174,     // Hand Distance
    lrota: 25,       // Left Arm 1 RPM
    larm1: 120,      // Left Arm 1 Length
    larm2: 860,      // Left Arm 2 Length
    rrota: -36,      // Right Arm 1 RPM
    rarm1: 100,      // Right Arm 1 Length
    rarm2: 1050,     // Right Arm 2 Length
    ext: 75,         // Extension
    handlrot: 0,     // Offset Angle
    growth: 0.0001,
    volume: 0.5
};

let targetParams = { ...params };

// ─── Sacred Geometry Archetypes (Scaled up to Pro Spirograph levels) ─────────
const ARCHETYPES = [
    {
        name: 'Harmonic Flow', ruName: 'Гармоничный Поток',
        p: {
            crota: [-2, 2], 
            hdist: [600, 1100],
            speedRatio: true, 
            lrotaBase: [10, 40],
            rrotaRatio: [-3, -1.5, -0.5, 0.5, 1.5, 3], 
            larm2: [600, 900],
            rarm2: [600, 900],
            ext: [0, 100],
            growth: [0.00005, 0.0001], 
            volume: [0.1, 0.3], 
            hby: [-700, -300]
        }
    },
    {
        name: 'Sacred Dance', ruName: 'Сакральный Танец',
        p: {
            crota: [-5, 5],
            hdist: [400, 1200],
            speedRatio: true,
            lrotaBase: [15, 35],
            rrotaRatio: [-2, -1, 2],
            larm2: [500, 1000],
            rarm2: [500, 1000],
            ext: [50, 200],
            growth: [0.0001, 0.0002],
            volume: [0.2, 0.5],
            hby: [-500, 0]
        }
    },
    {
        name: 'Phi Spiral', ruName: 'Спираль Фи',
        p: {
            crota: [-8, 8],
            hdist: [800, 1300],
            speedRatio: false,
            lrota: [10, 30],
            rrota: [-40, -10],
            larm2: [700, 1000],
            rarm2: [900, 1200],
            ext: [0, 150],
            growth: [0.0001, 0.0003],
            volume: [0.3, 0.7],
            hby: [-800, -400]
        }
    },
    {
        name: 'Grand Vortex', ruName: 'Великий Вихрь',
        p: {
            crota: [10, 40],
            hdist: [300, 700],
            speedRatio: false,
            lrota: [PHI * 10, PHI * 20],
            rrota: [-PHI * 20, -PHI * 5],
            larm2: [400, 800],
            rarm2: [600, 1000],
            ext: [150, 300],
            growth: [-0.0002, 0.0002],
            volume: [0.5, 1.5],
            hby: [-300, 100]
        }
    },
    {
        name: 'Golden Ratio Pulse', ruName: 'Пульс Золотого Сечения',
        p: {
            crota: [-PHI, PHI],
            hdist: [500, 1000],
            speedRatio: false,
            lrota: [10 * PHI, 25 * PHI],
            rrota: [-30 / PHI, -10 / PHI],
            larm2: [600, 900],
            rarm2: [700, 1100],
            ext: [50, 200],
            growth: [0.0001, 0.0002],
            volume: [0.4, 0.8],
            hby: [-500, -200]
        }
    },
    {
        name: 'Cosine Harmonic', ruName: 'Косинусная Гармоника',
        p: {
            crota: [2, 12],
            hdist: [400, 900],
            speedRatio: true,
            lrotaBase: [25, 55],
            rrotaRatio: [-Math.cos(1)*2, -Math.cos(2)*3, PHI/2], 
            larm2: [800, 1200],
            rarm2: [800, 1200],
            ext: [100, 400],
            growth: [0.0002, 0.0006],
            volume: [0.6, 1.4],
            hby: [-700, -400]
        }
    },
    {
        name: 'Phi Vortex', ruName: 'Вихрь Фи',
        p: {
            crota: [PHI * 5, PHI * 15],
            hdist: [300, 600],
            speedRatio: false,
            lrota: [15, 45],
            rrota: [-45, -15],
            larm2: [900, 1300],
            rarm2: [900, 1300],
            ext: [200, 500],
            growth: [0.0001 * PHI, 0.0003 * PHI],
            volume: [0.8, 1.8],
            hby: [-200, 100]
        }
    }
];

// ─── Functions ────────────────────────────────────────────────────────────────
function resize() {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = width / 2;
    cy = height / 2;
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
        default: // Rainbow (0) - Original Sine Spectrum
            r = Math.sin(phase) * 127 + 127;
            g = Math.sin(phase + PHI) * 127 + 127;
            b = Math.sin(phase + PHI * 2) * 127 + 127;
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
    // ── AMUSE "Rand B (Chaos)" algorithm ───────────────────────────────────
    // Exactly mirrors the AMUSE app: Ql("B") → symmetry=1, fully-free params
    const rnd  = (a, b) => Math.random() * (b - a) + a;
    const rpm  = ()     => (Math.random() > 0.5 ? 1 : -1) * rnd(0.01, 50);

    const isMobile = window.innerWidth < 768;
    const mobileScale = isMobile ? 0.7 : 1;

    // Canvas rotor (= AMUSE rotorRPM / 4)
    targetParams.crota      = rpm() / 4;

    // Left & right arm RPMs — fully random chaos
    targetParams.lrota      = rpm();
    targetParams.rrota      = rpm();

    // Offsets (AMUSE: baseoffsx, baseoffsy)
    targetParams.hbx        = rnd(-200, 200)  * mobileScale;
    targetParams.hby        = rnd(-500, -100) * mobileScale;

    // Hand distance
    targetParams.hdist      = rnd(50, 500)    * mobileScale;

    // Arm 1 lengths (AMUSE: larm1, rarm1 — range 20–200)
    targetParams.larm1      = rnd(20, 200)    * mobileScale;
    targetParams.rarm1      = rnd(20, 200)    * mobileScale;

    // Arm 2 lengths (AMUSE: larm2, rarm2 — range 100–400)
    targetParams.larm2      = rnd(100, 400)   * mobileScale;
    targetParams.rarm2      = rnd(100, 400)   * mobileScale;

    // Extension (AMUSE: rarmext — range 0–150)
    targetParams.ext        = rnd(0, 150);

    // Left arm offset angle (AMUSE: larma — range 0–360)
    targetParams.handlrot   = rnd(0, 360);

    // Slight growth & volume for depth — kept minimal for pure Rand B feel
    targetParams.growth     = rnd(0.00005, 0.0001);
    targetParams.volume     = rnd(0.1, 0.4);

    // Speed (acceleration — higher = more lines per frame)
    targetParams.speed      = Math.floor(rnd(60, 150));
    targetParams.colormode  = 4;

    // Subtle drift so lines stay alive
    targetParams.driftL     = rnd(-0.02, 0.02);
    targetParams.driftR     = rnd(-0.02, 0.02);
    targetParams.driftC     = rnd(-0.01, 0.01);

    // Pick a random archetype name for display only
    const arc   = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];
    const adjs  = isRu ? ['Хаотичный', 'Дикий', 'Свободный', 'Случайный', 'Бесконечный']
                       : ['Chaotic',   'Wild',   'Free',      'Random',    'Infinite'];
    const nouns = isRu ? ['Вихрь', 'Поток', 'Фрактал', 'Взрыв', 'Резонанс']
                       : ['Vortex','Flow',  'Fractal', 'Burst', 'Resonance'];
    const label = isRu ? arc.ruName : arc.name;
    if (shapeNameEl) {
        shapeNameEl.innerHTML = `<span style="opacity:0.5;font-weight:200;">${label}: </span>${adjs[Math.floor(Math.random()*adjs.length)]} ${nouns[Math.floor(Math.random()*nouns.length)]}`;
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
    const scaleBase = Math.min(width, height) / (isMobile ? 2600 : 2000);
    const { speed, hbx, hby, hdist, lrota, larm1, larm2, rrota, rarm1, rarm2, ext, crota, colormode, brightness, growth, volume } = params;

    ctx.lineCap = 'round';
    // Use screen blend mode for brighter overlapping lines on dark background
    ctx.globalCompositeOperation = 'screen'; 

    for (let i = 0; i < speed; i++) {
        time += 0.0001; 
        
        // Apply slight drift for dynamic lines
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
        const vDist = sDist + zShift;

        rot.l = (rot.l + currentLrota / 10 + 360) % 360; 
        rot.r = (rot.r + currentRrota / 10 + 360) % 360;
        rot.c = (rot.c + currentCrota / 10 + 360) % 360;

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
            const cosGamma = Math.max(-1, Math.min(1, (R2*R2 + L2*L2 - D*D) / (2*R2*L2)));
            const gamma    = Math.acos(cosGamma);

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

            if (startPoint === null) {
                startPoint = { x: fx, y: fy };
            }

            if (pen.x !== null) {
                const distDraw = Math.sqrt(Math.pow(fx - pen.x, 2) + Math.pow(fy - pen.y, 2));
                if (distDraw < 800 * scaleBase) {
                    // Thinner lines as requested
                    let lw = Math.max(0.1, Math.min(0.6, 12 / Math.min(10, distDraw*2)));
                    ctx.lineWidth = lw * scaleBase;

                    const phase = AM * rot.l;
                    ctx.strokeStyle = getStrokeColor(phase);
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

        totalSteps++;
        // Reset earlier if it's a closed symmetric shape
        const stepLimit = growth === 0 ? 300000 : 500000;
        if (totalSteps > stepLimit) { 
            isPlaying = false;
            isFinished = true;
            drawMarker(pen.x, pen.y, false);
            setTimeout(() => { randomize(); }, 1500);
            break;
        }
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
        playPauseBtn.textContent = isPlaying ? (isRu ? 'Пауза' : 'Pause') : (isRu ? 'Играть' : 'Play');
    }
});

window.addEventListener('resize', resize);

// ─── Boot ─────────────────────────────────────────────────────────────────────
resize();
updateColorUI();
randomize();
draw();
