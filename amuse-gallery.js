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

// Current parameters (Linkage / ORIGINAL mode from Amuse)
let params = {
    acceleration: 40,
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
    autoEvolve: true // Enabled by default for "continuously generate"
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

    // Chaos Mode (Rand B) Logic:
    targetParams.symmetry = 1; // Chaos usually starts with 1 branch
    targetParams.rotorRPM = M() / 4;
    targetParams.lrpm = M();
    targetParams.rrpm = M();
    
    targetParams.baseoffsx = y(-100, 100);
    targetParams.baseoffsy = y(-200, 200);
    targetParams.handdist = y(50, 300); // Reduced from 500
    
    targetParams.larm1 = y(20, 150); // Reduced from 200
    targetParams.rarm1 = y(20, 150); // Reduced from 200
    targetParams.larm2 = y(100, 300); // Reduced from 400
    targetParams.rarm2 = y(100, 300); // Reduced from 400
    targetParams.rarmext = y(0, 100); // Reduced from 150
    targetParams.larma = y(0, 360);
    
    targetParams.acceleration = Math.floor(y(40, 120)); // Reduced for slower drawing
    
    const adjs = ['Infinite', 'Eternal', 'Celestial', 'Quantum', 'Sacred', 'Harmonic', 'Ethereal', 'Cosmic'];
    const names = ['Spiral', 'Vortex', 'Flow', 'Geometry', 'Manifestation', 'Universe', 'Symmetry', 'Pattern'];
    shapeNameEl.innerHTML = `<span style="opacity: 0.5; font-weight: 200;">Flow: </span> ${adjs[Math.floor(Math.random()*adjs.length)]} ${names[Math.floor(Math.random()*names.length)]}`;
}

function updateParams() {
    const lerp = 0.01; // Smooth transitions
    for (let key in params) {
        if (typeof params[key] === 'number') {
            params[key] += (targetParams[key] - params[key]) * lerp;
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

    // Local copies for the loop
    let { acceleration, rotorRPM, handdist, lrpm, larma, larm1, larm2, rrpm, rarm1, rarm2, rarmext, symmetry, zoom, baseoffsy, autoEvolve } = params;
    const baseScale = (Math.min(width, height) / 1200) * zoom; // Increased divisor for more padding

    // Apply autoEvolve logic from Amuse (smooth micro-changes over time)
    if (autoEvolve) {
        autoEvolveTime += 0.0001;
        larm2 += Math.sin(autoEvolveTime * 300) * 50 * baseScale;
        rarm2 += Math.cos(autoEvolveTime * 200) * 50 * baseScale;
        handdist += Math.sin(autoEvolveTime * 150) * 30 * baseScale;
    }

    for (let i = 0; i < acceleration; i++) {
        // Update rotor angles
        rotors.lrot += lrpm * 0.02;
        rotors.rrot += rrpm * 0.02;
        rotors.crot += rotorRPM * 0.02;

        // Base points for the two main arms (Linkage System)
        const h1x = centerX - (handdist / 2) * baseScale;
        const h1y = centerY + baseoffsy * baseScale;
        const h2x = centerX + (handdist / 2) * baseScale;
        const h2y = centerY + baseoffsy * baseScale;

        // Ends of the first arms
        const l1x = h1x + Math.cos((rotors.lrot + larma) * k) * larm1 * baseScale;
        const l1y = h1y + Math.sin((rotors.lrot + larma) * k) * larm1 * baseScale;
        
        const r1x = h2x + Math.cos(rotors.rrot * k) * rarm1 * baseScale;
        const r1y = h2y + Math.sin(rotors.rrot * k) * rarm1 * baseScale;

        // Intersection of the second arms (Law of Cosines)
        const dx = r1x - l1x;
        const dy = r1y - l1y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        const L2 = larm2 * baseScale;
        const R2 = rarm2 * baseScale;
        
        // Only draw if the linkage is mathematically possible (arms can reach)
        if (dist > 0.1 && dist < L2 + R2 && dist > Math.abs(L2 - R2)) {
            const cosAlpha = (L2 * L2 + distSq - R2 * R2) / (2 * L2 * dist);
            const alpha = Math.acos(Math.max(-1, Math.min(1, cosAlpha)));
            const angleToR = Math.atan2(dy, dx);
            
            // Intersection point (the "pen")
            const penX = l1x + Math.cos(angleToR - alpha) * (L2 + rarmext * baseScale);
            const penY = l1y + Math.sin(angleToR - alpha) * (L2 + rarmext * baseScale);

            // Apply global rotation and symmetry branches
            const symCount = Math.round(symmetry);
            for (let s = 0; s < symCount; s++) {
                const sAngle = (s / symCount) * Math.PI * 2 + rotors.crot * k;
                
                const rx = penX - centerX;
                const ry = penY - centerY;
                
                const finalX = centerX + rx * Math.cos(sAngle) - ry * Math.sin(sAngle);
                const finalY = centerY + rx * Math.sin(sAngle) + ry * Math.cos(sAngle);

                // Rainbow color algorithm based on rotor positions (from Amuse)
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
                ctx.lineWidth = 0.8;
                
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
            // Linkage broken, reset previous point to avoid long streaks across screen
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
