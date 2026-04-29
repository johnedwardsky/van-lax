const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playPauseBtn = document.getElementById('play-pause');

// Mode Buttons
const randA = document.getElementById('rand-a');
const randB = document.getElementById('rand-b');
const randC = document.getElementById('rand-c');
const randD = document.getElementById('rand-d');

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
    autoEvolve: false
};

let targetParams = { ...params };

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    centerX = width / 2;
    centerY = height / 2;
    
    ctx.fillStyle = '#050508';
    ctx.fillRect(0, 0, width, height);
    rotors.lx = null;
    rotors.ly = null;
    rotors.prevPoints = [];
}

window.addEventListener('resize', resize);
resize();

function randomize(mode = 'A') {
    const y = (min, max) => Math.random() * (max - min) + min;
    const M = () => (Math.random() > 0.5 ? 1 : -1) * y(0.01, 50);
    const nearInteger = (val) => Math.round(val) + (Math.random() - 0.5) * 0.03;

    // Reset some defaults
    targetParams.autoEvolve = false;
    targetParams.zoom = 1.0;
    
    switch(mode) {
        case 'A': // Symmetry & Harmony (Amuse Rand A)
            targetParams.symmetry = [4, 6, 8, 12][Math.floor(Math.random() * 4)];
            targetParams.rotorRPM = (Math.random() - 0.5) * 4;
            targetParams.lrpm = Math.floor(y(1, 15)) * (Math.random() > 0.5 ? 1 : -1);
            targetParams.rrpm = Math.floor(y(1, 15)) * (Math.random() > 0.5 ? 1 : -1);
            targetParams.handdist = y(100, 400);
            targetParams.larm1 = y(50, 150);
            targetParams.rarm1 = y(50, 150);
            targetParams.larm2 = y(200, 350);
            targetParams.rarm2 = y(200, 350);
            targetParams.rarmext = y(0, 100);
            targetParams.acceleration = 250;
            break;

        case 'B': // Chaos (Amuse Rand B)
            targetParams.symmetry = 1;
            targetParams.rotorRPM = M() / 4;
            targetParams.lrpm = M();
            targetParams.rrpm = M();
            targetParams.handdist = y(50, 500);
            targetParams.larm1 = y(20, 200);
            targetParams.rarm1 = y(20, 200);
            targetParams.larm2 = y(100, 400);
            targetParams.rarm2 = y(100, 400);
            targetParams.rarmext = y(-50, 150);
            targetParams.acceleration = 350;
            break;

        case 'C': // Flow (Amuse Rand C - Inferred)
            targetParams.symmetry = Math.random() > 0.5 ? 2 : 1;
            targetParams.autoEvolve = true;
            targetParams.rotorRPM = y(-2, 2);
            targetParams.lrpm = y(-15, 15);
            targetParams.rrpm = y(-15, 15);
            targetParams.handdist = y(200, 450);
            targetParams.larm1 = y(80, 180);
            targetParams.rarm1 = y(80, 180);
            targetParams.larm2 = y(250, 450);
            targetParams.rarm2 = y(250, 450);
            targetParams.rarmext = y(40, 150);
            targetParams.acceleration = 200;
            break;

        case 'D': // Deep (Amuse Rand D - Inferred)
            targetParams.symmetry = [3, 5, 7, 9, 11][Math.floor(Math.random() * 5)];
            targetParams.lrpm = nearInteger(y(2, 40));
            targetParams.rrpm = nearInteger(y(2, 40));
            targetParams.rotorRPM = (Math.random() - 0.5) * 12;
            targetParams.handdist = y(-300, 300); // Experimental base offset
            targetParams.larm1 = y(100, 300);
            targetParams.rarm1 = y(100, 300);
            targetParams.larm2 = y(150, 400);
            targetParams.rarm2 = y(150, 400);
            targetParams.rarmext = y(50, 250);
            targetParams.acceleration = 400;
            break;
    }

    targetParams.larma = y(0, 360);
    targetParams.baseoffsy = y(-200, 200);

    const adjs = ['Infinite', 'Eternal', 'Celestial', 'Quantum', 'Sacred', 'Harmonic', 'Ethereal', 'Cosmic'];
    const names = ['Spiral', 'Vortex', 'Flow', 'Geometry', 'Manifestation', 'Universe', 'Symmetry', 'Pattern'];
    shapeNameEl.innerHTML = `<span style="opacity: 0.5; font-weight: 200;">Mode ${mode}: </span> ${adjs[Math.floor(Math.random()*adjs.length)]} ${names[Math.floor(Math.random()*names.length)]}`;
    
    // Clear and reset
    ctx.fillStyle = '#050508';
    ctx.fillRect(0, 0, width, height);
    rotors.lx = null;
    rotors.ly = null;
    rotors.prevPoints = [];
    
    // Apply immediately
    for (let key in params) {
        if (typeof params[key] === 'number') params[key] = targetParams[key];
    }
}

function updateParams() {
    const lerp = 0.01;
    for (let key in params) {
        if (typeof params[key] === 'number') {
            params[key] += (targetParams[key] - params[key]) * lerp;
        }
    }
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

    let { acceleration, rotorRPM, handdist, lrpm, larma, larm1, larm2, rrpm, rarm1, rarm2, rarmext, symmetry, zoom, baseoffsy, autoEvolve } = params;
    const baseScale = (Math.min(width, height) / 1200) * zoom;

    if (autoEvolve) {
        autoEvolveTime += 0.0001;
        larm2 += Math.sin(autoEvolveTime * 300) * 50 * baseScale;
        rarm2 += Math.cos(autoEvolveTime * 200) * 50 * baseScale;
        handdist += Math.sin(autoEvolveTime * 150) * 30 * baseScale;
    }

    for (let i = 0; i < acceleration; i++) {
        rotors.lrot += lrpm * 0.1;
        rotors.rrot += rrpm * 0.1;
        rotors.crot += rotorRPM * 0.1;

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
        const L2 = larm2 * baseScale;
        const R2 = rarm2 * baseScale;
        
        if (dist > 0.1 && dist < L2 + R2 && dist > Math.abs(L2 - R2)) {
            const cosAlpha = (L2 * L2 + distSq - R2 * R2) / (2 * L2 * dist);
            const alpha = Math.acos(Math.max(-1, Math.min(1, cosAlpha)));
            const angleToR = Math.atan2(dy, dx);
            
            const penX = l1x + Math.cos(angleToR - alpha) * (L2 + rarmext * baseScale);
            const penY = l1y + Math.sin(angleToR - alpha) * (L2 + rarmext * baseScale);

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

                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.45)`;
                ctx.lineWidth = 0.75;
                
                if (rotors.lx !== null) {
                    if (!rotors.prevPoints[s]) rotors.prevPoints[s] = {x: finalX, y: finalY};
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

// Button Listeners
randA.addEventListener('click', () => randomize('A'));
randB.addEventListener('click', () => randomize('B'));
randC.addEventListener('click', () => randomize('C'));
randD.addEventListener('click', () => randomize('D'));

playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? 'Pause' : 'Play';
});

canvas.addEventListener('dblclick', () => {
    ctx.fillStyle = '#050508';
    ctx.fillRect(0, 0, width, height);
});

// Initial Setup
randomize('A');
requestAnimationFrame(draw);
