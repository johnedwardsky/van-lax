const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playPauseBtn = document.getElementById('play-pause');
const randomizeBtn = document.getElementById('randomize');
const shapeNameEl = document.getElementById('shape-name');

// DOM elements for stats (ω₁, ω₂, S)
const valLrpmEl = document.getElementById('val-lrpm');
const valRrpmEl = document.getElementById('val-rrpm');
const valSymmetryEl = document.getElementById('val-symmetry');

let width, height, centerX, centerY;
let isPlaying = true;
const k = Math.PI / 180;
let autoEvolveTime = 0;

// Internal state for the rotors
let rotors = {
    lrot: 0,
    rrot: 0,
    crot: 0,
    lx: null,
    ly: null,
    prevPoints: []
};

// Current parameters
let params = {
    mode: 'linkage', // 'linkage', 'knot', 'harmonic'
    acceleration: 80,
    rotorRPM: 4,
    handdist: 350,
    lrpm: 2,
    larma: 0,
    larm1: 100,
    larm2: 300,
    rrpm: -3,
    rarm1: 90,
    rarm2: 350,
    rarmext: 50,
    symmetry: 1,
    zoom: 1.0,
    baseoffsy: 0,
    autoEvolve: true,
    // Chaos / Knot Parameters
    knotP: 3,
    knotQ: 2,
    lfoFreq: 0.1,
    lfoAmp: 50,
    thickness: 0.8
};

// Target parameters for smooth interpolation
let targetParams = { ...params };

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    centerX = width / 2;
    centerY = height / 2;
    
    // Clear and reset on resize
    ctx.fillStyle = '#050508';
    ctx.fillRect(0, 0, width, height);
    rotors.lx = null;
    rotors.ly = null;
    rotors.prevPoints = [];
}

window.addEventListener('resize', resize);
resize();

function randomize() {
    const y = (min, max) => Math.random() * (max - min) + min;
    const M = () => (Math.random() > 0.5 ? 1 : -1) * y(0.01, 50);

    // Pick a mode
    const modeRoll = Math.random();
    if (modeRoll < 0.6) targetParams.mode = 'linkage';
    else if (modeRoll < 0.85) targetParams.mode = 'knot';
    else targetParams.mode = 'harmonic';

    // Base parameters
    targetParams.symmetry = Math.random() > 0.7 ? Math.floor(y(2, 8)) : 1;
    targetParams.rotorRPM = M() / 10;
    targetParams.lrpm = M();
    targetParams.rrpm = M();
    
    targetParams.baseoffsx = y(-50, 50);
    targetParams.baseoffsy = y(-100, 100);
    targetParams.handdist = y(50, 400);
    
    targetParams.larm1 = y(20, 200);
    targetParams.rarm1 = y(20, 200);
    targetParams.larm2 = y(100, 400);
    targetParams.rarm2 = y(100, 400);
    targetParams.rarmext = y(0, 150);
    targetParams.larma = y(0, 360);
    
    // Knot/LFO specific
    targetParams.knotP = Math.floor(y(2, 12));
    targetParams.knotQ = Math.floor(y(2, 12));
    targetParams.lfoFreq = y(0.01, 0.5);
    targetParams.lfoAmp = y(0, 150);
    targetParams.thickness = y(0.3, 1.2);
    
    targetParams.acceleration = Math.floor(y(150, 350));
    
    const adjs = ['Infinite', 'Eternal', 'Celestial', 'Quantum', 'Sacred', 'Harmonic', 'Ethereal', 'Cosmic', 'Abyssal', 'Primordial'];
    const names = ['Spiral', 'Vortex', 'Flow', 'Geometry', 'Manifestation', 'Universe', 'Symmetry', 'Pattern', 'Abrakadabra', 'Echo'];
    shapeNameEl.innerHTML = `<span style="opacity: 0.5; font-weight: 200;">Flow: </span> ${adjs[Math.floor(Math.random()*adjs.length)]} ${names[Math.floor(Math.random()*names.length)]}`;
}

function updateParams() {
    const lerp = 0.02; // Slightly faster transitions
    for (let key in params) {
        if (typeof params[key] === 'number') {
            params[key] += (targetParams[key] - params[key]) * lerp;
        } else {
            params[key] = targetParams[key]; // Instant for strings like 'mode'
        }
    }
    
    // Update stats UI
    if (valLrpmEl) valLrpmEl.textContent = params.lrpm.toFixed(3);
    if (valRrpmEl) valRrpmEl.textContent = params.rrpm.toFixed(3);
    if (valSymmetryEl) valSymmetryEl.textContent = Math.round(params.symmetry);
}

function draw() {
    if (!isPlaying) {
        requestAnimationFrame(draw);
        return;
    }

    updateParams();

    // Local copies
    let { mode, acceleration, rotorRPM, handdist, lrpm, larma, larm1, larm2, rrpm, rarm1, rarm2, rarmext, symmetry, zoom, baseoffsy, autoEvolve, knotP, knotQ, lfoFreq, lfoAmp, thickness } = params;
    const baseScale = (Math.min(width, height) / 1200) * zoom;

    if (autoEvolve) {
        autoEvolveTime += 0.0001;
    }

    for (let i = 0; i < acceleration; i++) {
        // Update rotor angles
        rotors.lrot += lrpm * 0.1;
        rotors.rrot += rrpm * 0.1;
        rotors.crot += rotorRPM * 0.1;

        let penX, penY, valid = false;

        // Apply LFO modulation to arm length
        const currentLfo = Math.sin(autoEvolveTime * 1000 + rotors.lrot * k * lfoFreq) * lfoAmp * baseScale;
        const modLarm2 = larm2 * baseScale + currentLfo;
        const modRarm2 = rarm2 * baseScale + currentLfo;

        if (mode === 'linkage') {
            const h1x = centerX - (handdist / 2) * baseScale;
            const h1y = centerY + baseoffsy * baseScale;
            const h2x = centerX + (handdist / 2) * baseScale;
            const h2y = centerY + baseoffsy * baseScale;

            const l1x = h1x + Math.cos((rotors.lrot + larma) * k) * larm1 * baseScale;
            const l1y = h1y + Math.sin((rotors.lrot + larma) * k) * larm1 * baseScale;
            
            const r1x = h2x + Math.cos(rotors.rrot * k) * rarm1 * baseScale;
            const r1y = h2y + Math.sin(rotors.rrot * k) * rarm1 * baseScale;

            const dx = r1x - l1x;
            const dy = r1y - l1y;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);

            const L2 = modLarm2;
            const R2 = modRarm2;
            
            if (dist > 0.1 && dist < L2 + R2 && dist > Math.abs(L2 - R2)) {
                const cosAlpha = (L2 * L2 + distSq - R2 * R2) / (2 * L2 * dist);
                const alpha = Math.acos(Math.max(-1, Math.min(1, cosAlpha)));
                const angleToR = Math.atan2(dy, dx);
                
                penX = l1x + Math.cos(angleToR - alpha) * (L2 + rarmext * baseScale);
                penY = l1y + Math.sin(angleToR - alpha) * (L2 + rarmext * baseScale);
                valid = true;
            }
        } else if (mode === 'knot') {
            // Torus Knot Logic
            const theta = rotors.lrot * k;
            const r = (larm1 + larm2 * Math.cos(knotP * theta)) * baseScale;
            penX = centerX + r * Math.cos(knotQ * theta);
            penY = centerY + r * Math.sin(knotQ * theta);
            valid = true;
        } else if (mode === 'harmonic') {
            // Summation of 3 Harmonics (Triple Linkage Simulation)
            penX = centerX + (Math.cos(rotors.lrot * k) * larm1 + Math.cos(rotors.rrot * k) * rarm1 + Math.cos(rotors.lrot * k * 0.5) * rarmext) * baseScale;
            penY = centerY + (Math.sin(rotors.lrot * k) * larm1 + Math.sin(rotors.rrot * k) * rarm1 + Math.sin(rotors.rrot * k * 0.5) * rarmext) * baseScale;
            valid = true;
        }

        if (valid) {
            const symCount = Math.round(symmetry);
            for (let s = 0; s < symCount; s++) {
                const sAngle = (s / symCount) * Math.PI * 2 + rotors.crot * k;
                const rx = penX - centerX;
                const ry = penY - centerY;
                
                const finalX = centerX + rx * Math.cos(sAngle) - ry * Math.sin(sAngle);
                const finalY = centerY + rx * Math.sin(sAngle) + ry * Math.cos(sAngle);

                const n1 = Math.sin(k * rotors.lrot + Math.PI * 0.666) * 127 + 127;
                const n2 = Math.sin(k * rotors.lrot + Math.PI * 0.333) * 127 + 127;
                const n3 = Math.sin(k * rotors.lrot) * 127 + 127;
                const e1 = Math.sin(k * rotors.rrot + Math.PI * 0.666) * 127 + 127;
                const e2 = Math.sin(k * rotors.rrot + Math.PI * 0.333) * 127 + 127;
                const e3 = Math.sin(k * rotors.rrot) * 127 + 127;
                
                const r = Math.floor((n1 + e1) / 2);
                const g = Math.floor((n2 + e2) / 2);
                const b = Math.floor((n3 + e3) / 2);

                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
                ctx.lineWidth = thickness;
                
                if (rotors.lx !== null) {
                    if (!rotors.prevPoints[s]) {
                        rotors.prevPoints[s] = {x: finalX, y: finalY};
                    }
                    ctx.beginPath();
                    ctx.moveTo(rotors.prevPoints[s].x, rotors.prevPoints[s].y);
                    ctx.lineTo(finalX, finalY);
                    ctx.stroke();
                    rotors.prevPoints[s] = {x: finalX, y: finalY};
                } else {
                    rotors.prevPoints[s] = {x: finalX, y: finalY};
                }
            }
            rotors.lx = penX;
            rotors.ly = penY;
        } else {
            rotors.lx = null;
            rotors.prevPoints = [];
        }
    }

    requestAnimationFrame(draw);
}

randomizeBtn.addEventListener('click', () => {
    // Clear the canvas and start from scratch
    ctx.fillStyle = '#050508';
    ctx.fillRect(0, 0, width, height);
    
    // Reset rotor previous points to avoid connecting to the old pattern
    rotors.lx = null;
    rotors.prevPoints = [];
    
    randomize();
    // Snap parameters immediately for a clean start from scratch
    for (let key in params) {
        if (typeof params[key] === 'number') params[key] = targetParams[key];
    }
});

playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? 'Pause' : 'Play';
});

// Double click to clear (hidden feature for maintenance)
canvas.addEventListener('dblclick', () => {
    ctx.fillStyle = '#050508';
    ctx.fillRect(0, 0, width, height);
});

// Initial Setup
randomize();
// Immediate application for first frame
for (let key in params) {
    if (typeof params[key] === 'number') params[key] = targetParams[key];
}
requestAnimationFrame(draw);
