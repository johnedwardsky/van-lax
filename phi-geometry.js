const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const randomizeBtn = document.getElementById('randomize');
const togglePointsBtn = document.getElementById('toggle-points');
const shapeNameEl = document.getElementById('shape-name');

const PHI = (1 + Math.sqrt(5)) / 2;
const SQRT2 = Math.sqrt(2);
const SQRT3 = Math.sqrt(3);

let width, height, centerX, centerY, baseR;
let circles = [];
let intersections = [];
let showPoints = true;
let frame = 0;
let baseHue = 40;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    centerX = width / 2;
    
    if (width < 768) {
        // Shift center up to avoid UI controls on mobile
        centerY = height * 0.4;
        baseR = Math.min(width, height) * 0.18;
    } else {
        // Center normally on desktop
        centerY = height / 2;
        baseR = Math.min(width, height) * 0.2;
    }
}

window.addEventListener('resize', resize);
resize();

class Circle {
    constructor(x, y, r, opacity = 0.5) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.opacity = opacity;
        this.currX = x;
        this.currY = y;
        this.currR = r;
    }

    update() {
        this.currX += (this.x - this.currX) * 0.06;
        this.currY += (this.y - this.currY) * 0.06;
        this.currR += (this.r - this.currR) * 0.06;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.currX, this.currY, this.currR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(212, 175, 55, ${this.opacity * 0.45})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
    }
}

function getIntersections(c1, c2) {
    const dx = c2.currX - c1.currX;
    const dy = c2.currY - c1.currY;
    const d = Math.sqrt(dx * dx + dy * dy);

    if (d > c1.currR + c2.currR || d < Math.abs(c1.currR - c2.currR) || d === 0) return [];

    const a = (c1.currR * c1.currR - c2.currR * c2.currR + d * d) / (2 * d);
    const h = Math.sqrt(Math.max(0, c1.currR * c1.currR - a * a));

    const x2 = c1.currX + (a * dx) / d;
    const y2 = c1.currY + (a * dy) / d;

    const rx = -dy * (h / d);
    const ry = dx * (h / d);

    return [{ x: x2 + rx, y: y2 + ry }, { x: x2 - rx, y: y2 - ry }];
}

const translations = {
    ru: {
        adjectives: ['Сияющий', 'Вечный', 'Сакральный', 'Гармоничный', 'Бесконечный', 'Тайный', 'Золотой', 'Эфирный', 'Кристаллический', 'Звездный'],
        nouns: ['Кристалл', 'Цветок', 'Портал', 'Чертеж', 'Орнамент', 'Источник', 'Сгусток', 'Фрактал', 'Вихрь', 'Свет'],
        projection: 'Текущая проекция: '
    },
    en: {
        adjectives: ['Radiant', 'Eternal', 'Sacred', 'Harmonic', 'Infinite', 'Secret', 'Golden', 'Ethereal', 'Crystalline', 'Stellar'],
        nouns: ['Crystal', 'Flower', 'Portal', 'Blueprint', 'Ornament', 'Source', 'Clump', 'Fractal', 'Vortex', 'Light'],
        projection: 'Current projection: '
    }
};

const currentLang = document.documentElement.lang || 'en';
const t = translations[currentLang] || translations.en;

function generateInfiniteGeometry() {
    const config = [];
    const symmetry = [3, 4, 5, 6, 8, 12][Math.floor(Math.random() * 6)];
    const layers = 2 + Math.floor(Math.random() * 3);
    const ratios = [PHI, SQRT2, SQRT3, 1, 0.5, PHI*PHI, 1/PHI];
    
    // Central Anchor
    config.push({ x: centerX, y: centerY, r: baseR * ratios[Math.floor(Math.random() * ratios.length)] });

    for (let l = 0; l < layers; l++) {
        const distRatio = ratios[Math.floor(Math.random() * ratios.length)];
        const sizeRatio = ratios[Math.floor(Math.random() * ratios.length)];
        const rotationOffset = Math.random() * Math.PI;

        for (let i = 0; i < symmetry; i++) {
            const angle = (i * Math.PI * 2 / symmetry) + rotationOffset;
            const dist = baseR * distRatio;
            config.push({
                x: centerX + Math.cos(angle) * dist,
                y: centerY + Math.sin(angle) * dist,
                r: baseR * sizeRatio
            });
        }
    }

    // Morph existing circles or add new ones
    while (circles.length < config.length) {
        circles.push(new Circle(centerX, centerY, 0));
    }
    while (circles.length > config.length) {
        circles.pop();
    }

    config.forEach((c, i) => {
        circles[i].x = c.x;
        circles[i].y = c.y;
        circles[i].r = c.r;
    });

    // Generate Poetic Name
    const adj = t.adjectives[Math.floor(Math.random() * t.adjectives.length)];
    const noun = t.nouns[Math.floor(Math.random() * t.nouns.length)];
    const ratioName = ['φ', '√2', '√3'][Math.floor(Math.random() * 3)];
    shapeNameEl.innerHTML = `<span style="opacity: 0.5; font-weight: 200;">${t.projection}</span> ${adj} ${noun} ${ratioName}`;
    
    document.getElementById('val-phi').textContent = PHI.toFixed(3);
    document.getElementById('val-sqrt2').textContent = SQRT2.toFixed(3);
    document.getElementById('val-sqrt3').textContent = SQRT3.toFixed(3);
}

function updateIntersections() {
    intersections = [];
    // To keep performance high with many circles, we only calculate a subset or use spatial pruning
    // But for 15-30 circles it should be fine.
    for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
            const pts = getIntersections(circles[i], circles[j]);
            intersections.push(...pts);
        }
    }
    // Filter points out of view
    intersections = intersections.filter(p => p.x > -50 && p.x < width+50 && p.y > -50 && p.y < height+50);
    
    // Performance optimization: limit total points
    if (intersections.length > 400) {
        intersections = intersections.slice(0, 400);
    }
}

function drawConnections() {
    if (intersections.length < 2) return;

    // Connect points using a distance-based web to reveal the hidden geometry
    ctx.lineWidth = 0.5;
    
    // Use a subset of points for connections to maintain performance and visual clarity
    const step = intersections.length > 200 ? 2 : 1;
    
    for (let i = 0; i < intersections.length; i += step) {
        const p1 = intersections[i];
        
        // Connect to a few following points
        for (let j = 1; j <= 4; j++) {
            const p2 = intersections[(i + j) % intersections.length];
            const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            
            if (d < width * 0.25) {
                const alpha = Math.max(0, 0.35 - (d / (width * 0.25)));
                ctx.strokeStyle = `hsla(${baseHue + (d * 0.1)}, 75%, 60%, ${alpha})`;
                
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                
                // Subtle curves based on frame to feel "alive"
                const midX = (p1.x + p2.x) / 2 + Math.cos(frame * 0.02 + i) * 5;
                const midY = (p1.y + p2.y) / 2 + Math.sin(frame * 0.02 + i) * 5;
                
                ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
                ctx.stroke();
            }
        }
    }
}

function drawPoints() {
    if (!showPoints) return;
    
    intersections.forEach((p, i) => {
        if (i % 2 !== 0) return; // Optimization: draw half the points
        const pulse = Math.sin(frame * 0.04 + i * 0.1) * 2 + 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1 + pulse * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + pulse * 0.1})`;
        ctx.fill();
        
        if (pulse > 3) {
            ctx.shadowBlur = 12;
            ctx.shadowColor = `hsla(${baseHue}, 70%, 50%, 0.5)`;
            ctx.stroke();
            ctx.shadowBlur = 0;
        }
    });
}

function animate() {
    frame++;
    ctx.clearRect(0, 0, width, height);
    
    // Slow rotation
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(frame * 0.0003);
    ctx.translate(-centerX, -centerY);
    
    circles.forEach(c => {
        c.update();
        c.draw();
    });
    
    updateIntersections();
    drawConnections();
    drawPoints();
    
    ctx.restore();
    
    requestAnimationFrame(animate);
}

randomizeBtn.addEventListener('click', () => {
    baseHue = Math.random() * 360;
    generateInfiniteGeometry();
});

togglePointsBtn.addEventListener('click', () => {
    showPoints = !showPoints;
});

// Initial state
generateInfiniteGeometry();
animate();

// Interactive Parallax
window.addEventListener('mousemove', (e) => {
    const mx = (e.clientX - centerX) * 0.02;
    const my = (e.clientY - centerY) * 0.02;
    circles.forEach((c, i) => {
        c.currX += mx * (i % 2 === 0 ? 1 : -1) * 0.05;
        c.currY += my * (i % 3 === 0 ? 1 : -1) * 0.05;
    });
});
