// ==========================================
// 1. GRAND HUB PARALLAX LOGIC
// ==========================================
const hubWrapper = document.getElementById('hub-wrapper');
const parallaxLayer = document.getElementById('hub-parallax-layer');

// Parallax tracking disabled by request
// The background remains perfectly static, while CSS ghosts continue to animate.

// ==========================================
// 3. SHATTER TRANSITION SCRIPT
// ==========================================
const webGLContainer = document.getElementById('webgl-container');
let is3DActive = false;
let isGallery1 = false;
let scrollPercent = 0;
let targetCameraZ = 0;

// Shift these up so they are ready for any function calls
const nodeSpacing = 200; 
const totalNodes = 9; 
const spiralLength = nodeSpacing * (totalNodes - 1);
const nodes = document.querySelectorAll('.gallery-node');

// ==========================================
// TALES MODAL LOGIC
// ==========================================
const tales = {
  en: {
    vira: `
      <h3>Sealed Tales: The Fruits of VIRA</h3>
      <p>At the very edge of the Universe, where the fabric of reality touches the realm of the Gods, lived two brothers. Their home was a primordial world, untouched by fear or sorrow. Their mother and mentor was Argo—the Great Firebird, Guardian of the Borders, known in the world of men as the Phoenix. Wielding fire, she tamed the waters, teaching the brothers the highest law of existence: the Law of Balance.</p>
      
      <p>Yet the brothers were as different as light and shadow. The elder, Aronarth, loved life in all its spontaneous diversity; he rejoiced in every nascent sprout and miracles that required no explanation. The younger, Volodarth, was consumed by an unquenchable thirst for knowledge. His mind eternally sought perfect forms and the hidden mechanics of creation.</p>
      
      <p>One day, Volodarth heard an enchanting, ethereal song calling from the depths of the dark ocean. Yielding to its pull, he plunged into the abyss of cold matter and beheld a marvel: a flower of absolute perfection, emanating a soft, primordial light.</p>
      
      <p>“At last, I have found the pinnacle of creation!” cried Volodarth, and in blind rapture, his hands tore the glowing bud from its unseen stem.</p>
      
      <p>In that very heartbeat, the ocean boiled. The waters receded, turning the living sea into a dead white desert. An ancient voice, resonant as thunder, pierced the void:</p>
      
      <p style="font-style: italic; color: var(--gold);">“Oh, Volodarth… By plucking VIRA, the Flower of the Genesis of Light, you have shattered the Balance. This flower was the axis of sixteen worlds woven by the Great Creator Maatree. Now, these worlds will plunge into endless night and deep slumber, deaf to one another's cries.”</p>
      
      <p>The terrified youth realized the flower’s light was now flowing through his own veins.</p>
      
      <p style="font-style: italic; color: var(--gold);">“Henceforth, you bear the burden of Creation,” the voice continued. “You have two hundred and eighty-two nights until a new VIRA can bloom. You must face thirty-three trials—sixteen in the light, and sixteen in the dark. The final dawn will either restore the ocean of balance or bury the Universe in chaos forever.”</p>
      
      <p>Thus began the long journey of the brothers across the white desert of the vanished sea, walking blindly into the unknown.</p>
      
      <p>Ever since, Aronarth sealed these chronicles to serve as an eternal reminder. All the seals bear two colors—black and white—for only in the union of opposites, the marriage of a searching mind and a loving heart, is true cosmic harmony born. He who shatters the balance shall wear these seals upon himself, until he remembers that even in absolute chaos, a higher order lies concealed.</p>
    `
  },
  ru: {
    vira: `
      <h3>Запечатанные Сказки: Плоды Виры</h3>
      <p>На самом краю Вселенной, там, где ткань мироздания соприкасается с обителью Богов, жили два брата. Их домом был первозданный мир, не ведавший ни страха, ни боли. Их матерью и наставницей стала Арго — Великая Огненная Птица, Хранительница Рубежей, которую в мире людей прозвали птицей Феникс. Управляя огнем, она покоряла воды, обучая братьев высшему закону — закону Баланса.</p>
      
      <p>Но братья были столь же различны, сколь непохожи свет и тень. Старший, Аронар (Aronarth), любил жизнь в ее стихийном многообразии: он радовался каждому ростку, пению невидимых птиц и чудесам, не требующим объяснений. Младший же, Володар (Volodarth), томился неутолимой жаждой познания. Его разум всегда искал идеальную форму и скрытые механизмы бытия.</p>
      
      <p>Однажды Володар услышал чарующее, неземное пение, доносившееся из пучины темного океана. Поддавшись зову, он погрузился в бездну холодной материи и увидел там чудо: цветок абсолютного совершенства, испускающий мягкий, первородный свет.</p>
      
      <p>— Наконец-то я нашел эталон творения! — воскликнул Володар, и руки его в слепом упоении сорвали светящийся бутон с его незримого стебля.</p>
      
      <p>Но в это же мгновение океан закипел. Воды отступили, обратив живое море в мертвую белую пустыню. И древний голос, подобный грому, пронзил пустоту:</p>
      
      <p style="font-style: italic; color: var(--gold);">«О, Володар… Сорвав Виру, Цветок Рождения Света, ты нарушил Равновесие. Этот цветок — ось шестнадцати миров, созданных Великим Творцом Маатрии. Теперь миры погрузятся в вечную ночь и долгий сон, перестав слышать друг друга».</p>
      
      <p>Испуганный юноша осознал, что свет цветка теперь течет в его собственных венах.</p>
      
      <p style="font-style: italic; color: var(--gold);">«Отныне ты несешь бремя Творения,» — продолжил голос. «У тебя есть двести восемьдесят две ночи, пока не взойдет новая Вира. Тебе предстоит пройти тридцать три испытания — шестнадцать во свете и шестнадцать во тьме. Последнее испытание либо вернет океан баланса, либо навсегда похоронит Вселенную в хаосе».</p>
      
      <p>Так начался долгий путь братьев через белую пустыню иссохшего моря в неизведанную тьму.</p>
      
      <p>С тех пор Аронар запечатал эти истории, чтобы они служили вечным напоминанием. Все печати несут в себе два цвета — черный и белый. Ибо только в единстве противоположностей, в союзе пытливого разума и любящего сердца рождается истинная гармония мироздания. Разрушивший баланс будет носить их на себе до тех пор, пока не вспомнит, что даже в абсолютном хаосе скрыт высший порядок.</p>
    `
  }
};

window.openTaleModal = (taleId) => {
  const isRu = window.location.pathname.includes('-ru');
  const lang = isRu ? 'ru' : 'en';
  const content = tales[lang][taleId];
  const modalText = document.getElementById('tale-modal-text');
  const modal = document.getElementById('tale-modal');
  
  if (content && modalText && modal) {
    modalText.innerHTML = content;
    modal.classList.add('active');
  }
};

window.closeTaleModal = (e) => {
  if(!e || e.target.classList.contains('tale-modal') || e.target.classList.contains('close-tale-btn')) {
    const modal = document.getElementById('tale-modal');
    if (modal) modal.classList.remove('active');
  }
};

window.flyThrough = (targetNode, isInstant = false) => {
  if (is3DActive) return;
  is3DActive = true;
  document.getElementById('hub-wrapper').style.pointerEvents = 'none';

  if (isInstant) {
      document.getElementById('hub-wrapper').style.opacity = '0';
      document.getElementById('hub-wrapper').style.display = 'none';
      
      scrollPercent = targetNode / (totalNodes - 1);
      const trueTargetZ = scrollPercent * -spiralLength;
      
      camera.position.z = trueTargetZ + 250; 
      targetCameraZ = trueTargetZ; 
      
      webGLContainer.style.display = 'block';
      webGLContainer.style.zIndex = '100'; 
      webGLContainer.style.opacity = '1';
      
      const ui = document.getElementById('ui-container');
      ui.style.display = 'block';
      ui.style.opacity = 1;
      
      updateNodes(scrollPercent);
  } else {
      // Smoothly fade out everything in the hub
      gsap.to('#hub-wrapper', {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          document.getElementById('hub-wrapper').style.display = 'none';
          
          // Calculate true target for node
          scrollPercent = targetNode / (totalNodes - 1);
          const trueTargetZ = scrollPercent * -spiralLength;
          
          camera.position.z = trueTargetZ + 250; 
          targetCameraZ = trueTargetZ; 
          
          // Reveal 3D World Scene
          webGLContainer.style.display = 'block';
          webGLContainer.style.zIndex = '100'; // Bring to front
          gsap.to(webGLContainer, { opacity: 1, duration: 1 });
          
          // Show node UI explicitly
          const ui = document.getElementById('ui-container');
          ui.style.display = 'block';
          ui.style.opacity = 1;
          
          // Trigger node update logic manually once
          updateNodes(scrollPercent);
        }
      });
  }
};

// ==========================================
// SCROLLTRIGGER INITIALIZATION
// ==========================================
let g1Initialized = false;

function initGallery1Scroll() {
  if (g1Initialized) return;
  g1Initialized = true;

  gsap.utils.toArray('.g1-card').forEach((card) => {
    const isLeft = card.classList.contains('left');
    
    // Cards fly in from deep Z-space, slightly rotated, and fading in
    gsap.fromTo(card, 
      { 
        z: -2000, 
        opacity: 0,
        x: isLeft ? -400 : 400,
        rotationY: isLeft ? -25 : 25,
        rotationZ: isLeft ? -5 : 5
      },
      {
        scrollTrigger: {
          scroller: '#gallery-1-container',
          trigger: card,
          start: 'top 130%', // starts when card top is below viewport
          end: 'top 30%',    // ends when it hits 30% from top
          scrub: 2,          // very smooth scrubbing
        },
        z: 0,
        opacity: 1,
        x: 0,
        rotationY: 0,
        rotationZ: 0,
        ease: 'power2.out'
      }
    );
  });
}

// ==========================================
// DONATION MODAL LOGIC
// ==========================================
let pendingNodeIndex = null;
let pendingIsInstant = false;

window.enterSection = (nodeIndex, isInstant = false) => {
  // Skip donation popup for Store, About, Contacts — enter directly
  if (nodeIndex >= 6) {
    executeEnterSection(nodeIndex, isInstant);
    return;
  }
  
  // For galleries 1-5, show donation popup first
  pendingNodeIndex = nodeIndex;
  pendingIsInstant = isInstant;
  
  const modal = document.getElementById('donation-modal');
  if (modal) {
    modal.classList.add('active');
  } else {
    executeEnterSection(nodeIndex, isInstant);
  }
};

window.openDonationModal = () => {
  // Used from the bottom of galleries to just donate
  pendingNodeIndex = null;
  const modal = document.getElementById('donation-modal');
  if (modal) modal.classList.add('active');
};

window.closeDonationModal = () => {
  const modal = document.getElementById('donation-modal');
  if (modal) modal.classList.remove('active');
  // If they closed without clicking proceed, they stay where they are
};

window.proceedToGallery = () => {
  closeDonationModal();
  if (pendingNodeIndex !== null) {
    executeEnterSection(pendingNodeIndex, pendingIsInstant);
  }
};

window.copyCryptoAddress = (elementId) => {
  const addressText = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(addressText).then(() => {
    alert('Address copied: ' + addressText);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
};

function executeEnterSection(nodeIndex, isInstant = false) {
  // 1. Fade out the 3D node UI
  const ui = document.getElementById('ui-container');
  if (isInstant) {
    ui.style.opacity = '0';
    ui.style.display = 'none';
  } else {
    gsap.to(ui, { opacity: 0, duration: 1, onComplete: () => ui.style.display = 'none' });
  }
  
  // 2. Dim DNA but don't completely mute it
  if (isInstant) {
    particles.material.opacity = 0.15;
  } else {
    gsap.to(particles.material, { opacity: 0.15, duration: 1.5 });
  }
  
  // 3. Show target gallery fullscreen container
  const containerId = `gallery-${nodeIndex}-container`;
  const container = document.getElementById(containerId);
    if(container) {
      container.style.display = 'block';
      if (isInstant) {
        container.style.opacity = '1';
      } else {
        gsap.to(container, { opacity: 1, duration: 1.5, delay: 1 });
      }
      
      isGallery1 = true;
    
      // Fade in Intro Text for ALL galleries
      const titles = container.querySelectorAll('.g1-elegant-title, .g1-intro-text, .g1-intro-sub, .scroll-down-hint');
      if(titles.length > 0) {
        if (isInstant) {
          gsap.set(titles, { opacity: 1, y: 0 });
        } else {
          gsap.fromTo(titles, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.3, duration: 2, ease: "power2.out", delay: 1.5 }
          );
        }
      }

      // If it's gallery 1, initialize scroll tracking
      if(nodeIndex === 1) {
        initGallery1Scroll();
      }
      
      // If it's the Sacred Gallery (Gallery 2), initialize its specific scroll animations
      if(nodeIndex === 2) {
        initSacredGalleryScroll();
      }
    
      // If it's the Music gallery, initialize player
      if(nodeIndex === 4) {
        initMusicPlayer();
      }
    }
};

window.exitSection = () => {
  if (typeof window.pauseAllAudio === 'function') window.pauseAllAudio();
  
  // Hide all gallery containers
  const containers = document.querySelectorAll('.fullscreen-container, #gallery-1-container');
  containers.forEach(c => {
    if(c.style.display !== 'none') {
      gsap.to(c, { opacity: 0, duration: 1, onComplete: () => c.style.display = 'none' });
    }
  });
  
  // Also hide the cinematic node UI (3D headings)
  const ui = document.getElementById('ui-container');
  if(ui && ui.style.display !== 'none') {
    gsap.to(ui, { opacity: 0, duration: 1, onComplete: () => ui.style.display = 'none' });
  }

  // Restore DNA opacity
  gsap.to(particles.material, { opacity: 0.8, duration: 2 });
  isGallery1 = false;
  currentNodeIndex = 0;
  window.returnToHub();
};

window.nextSection = (sectionIndex) => {
  if (typeof window.pauseAllAudio === 'function') window.pauseAllAudio();
  const nextNodeIndex = sectionIndex + 1;
  const currentContainer = document.getElementById(`gallery-${sectionIndex}-container`);
  
  gsap.to(currentContainer, { opacity: 0, duration: 1, onComplete: () => {
    currentContainer.style.display = 'none';
    isGallery1 = false;
    
    // Jump camera to next node
    scrollPercent = nextNodeIndex / (totalNodes - 1);
    const trueTargetZ = scrollPercent * -spiralLength;
    camera.position.z = trueTargetZ + 200;
    targetCameraZ = trueTargetZ; 
    
    // Restore DNA & UI
    gsap.to(particles.material, { opacity: 0.8, duration: 2 });
    const ui = document.getElementById('ui-container');
    ui.style.display = 'block';
    gsap.to(ui, { opacity: 1, duration: 1 });
    
    // THIS WAS MISSING — activate the correct next node
    currentNodeIndex = 0; // reset so updateNodes sees a change
    updateNodes(scrollPercent);
  }});
};

window.returnToHub = () => {
  is3DActive = false;
  gsap.to(webGLContainer, {
    opacity: 0, duration: 1,
    onComplete: () => {
      webGLContainer.style.display = 'none';
      hubWrapper.style.display = 'block';
      hubWrapper.style.pointerEvents = 'auto';
      // Restore the hub wrapper itself + all UI elements
      gsap.to(hubWrapper, { opacity: 1, duration: 1 });
      gsap.to(['#hub-bg-img', '#ui-panels', '.van-lax-overlay', ...document.querySelectorAll('.hotspot')], {
        opacity: 1, duration: 1, stagger: 0.1
      });
      nodes.forEach(n => n.classList.remove('active'));
    }
  });
};

// ==========================================
// SACRED GALLERY SCROLL REVEAL
// ==========================================
let sacredInitialized = false;
function initSacredGalleryScroll() {
  if (sacredInitialized) return;
  sacredInitialized = true;

  gsap.utils.toArray('.gallery-spotlight').forEach((spotlight) => {
    const isRight = spotlight.classList.contains('right-side');
    const plaque = spotlight.querySelector('.seal-plaque');
    const imgWrap = spotlight.querySelector('.seal-img-wrap');
    
    // 1. Framed painting slightly zooms and fades in from center like an exhibition piece
    gsap.fromTo(imgWrap, 
      { scale: 0.95, opacity: 0 },
      {
        scrollTrigger: {
          scroller: '.sacred-scroll-content',
          trigger: spotlight,
          start: 'top 85%',
          end: 'top 35%',
          scrub: 1.5
        },
        scale: 1,
        opacity: 1,
        ease: 'power2.out'
      }
    );

    // 2. Museum Plaque slides up slightly
    gsap.fromTo(plaque,
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          scroller: '.sacred-scroll-content',
          trigger: spotlight,
          start: 'top 75%',
          end: 'top 40%',
          scrub: 1.5
        },
        y: 0, 
        opacity: 1,
        ease: 'power2.out'
      }
    );
  });
}

// ==========================================
// 4. THREE.JS 3D SCENE SETUP
// ==========================================
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.003);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const PARTICLE_COUNT = 15000;
const geometry = new THREE.BufferGeometry();
const basePositions = new Float32Array(PARTICLE_COUNT * 3);
const targetPositions = new Float32Array(PARTICLE_COUNT * 3);
const colors = new Float32Array(PARTICLE_COUNT * 3);
const positionArray = new Float32Array(PARTICLE_COUNT * 3);

for(let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;
  basePositions[i3] = (Math.random() - 0.5) * 200;
  basePositions[i3+1] = (Math.random() - 0.5) * 200;
  basePositions[i3+2] = Math.random() * -spiralLength - 100; 
  positionArray[i3] = basePositions[i3];
  positionArray[i3+1] = basePositions[i3+1];
  positionArray[i3+2] = basePositions[i3+2];
  
  const t = i / PARTICLE_COUNT;
  const angle = t * Math.PI * 60; 
  const radius = 10 + Math.random() * 4; 
  
  targetPositions[i3] = Math.cos(angle) * radius;
  targetPositions[i3+1] = Math.sin(angle) * radius;
  targetPositions[i3+2] = t * -spiralLength; 
  
  // Make them brighter white by default
  colors[i3] = 0.8; colors[i3+1] = 0.8; colors[i3+2] = 0.8;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
const material = new THREE.PointsMaterial({ size: 0.25, vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.8 });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

// ==========================================
// 5. SCROLL AND RENDER LOGIC
// ==========================================
window.addEventListener('wheel', (e) => {
  if (!is3DActive || isGallery1) return; // Prevent 3D spiral scroll if in Gallery 1
  e.preventDefault();
  scrollPercent += e.deltaY * 0.0002; // Fixed inverted scroll
  if (scrollPercent < 0) scrollPercent = 0;
  if (scrollPercent > 1) scrollPercent = 1;
  targetCameraZ = scrollPercent * -spiralLength;
  updateNodes(scrollPercent);
}, { passive: false });

// Mobile Touch Scrolling
let lastTouchY = 0;
window.addEventListener('touchstart', (e) => {
  if (!is3DActive || isGallery1) return;
  lastTouchY = e.touches[0].clientY;
}, { passive: false });

window.addEventListener('touchmove', (e) => {
  if (!is3DActive || isGallery1) return;
  const currentY = e.touches[0].clientY;
  const deltaY = lastTouchY - currentY; // Positive if swiping up (scrolling down)
  
  if (Math.abs(deltaY) > 0) {
    if(e.cancelable) e.preventDefault();
  }
  
  scrollPercent += deltaY * 0.001; // Slightly more sensitive than wheel
  if (scrollPercent < 0) scrollPercent = 0;
  if (scrollPercent > 1) scrollPercent = 1;
  targetCameraZ = scrollPercent * -spiralLength;
  updateNodes(scrollPercent);
  
  lastTouchY = currentY;
}, { passive: false });

const nodeColors = [
  new THREE.Color(0x333333), // node 0 (Art)
  new THREE.Color(0xE5B236), // node 1 (Gallery 1)
  new THREE.Color(0x8A2BE2), // node 2 (Gallery 2)
  new THREE.Color(0xffffff), // node 3 (The Book)
  new THREE.Color(0x00d2ff), // node 4 (Generative)
  new THREE.Color(0xaa00ff), // node 5 (Music)
  new THREE.Color(0xff0055), // node 6 (Store)
  new THREE.Color(0x00ff88), // node 7 (About)
  new THREE.Color(0xff8800)  // node 8 (Contacts)
];

let currentNodeIndex = 0;

function updateNodes(percent) {
  const floatNode = percent * (totalNodes - 1);
  const index = Math.round(floatNode);
  
  if (index !== currentNodeIndex) {
    currentNodeIndex = index;
    if(nodes && nodes.length > 0) {
      nodes.forEach((node, i) => {
        if(i === (index - 1)) node.classList.add('active');
        else node.classList.remove('active');
      });
    }
  }
}

function lerp(start, end, amt) { return (1 - amt) * start + amt * end; }

function animate() {
  requestAnimationFrame(animate);
  if (!is3DActive) return;

  camera.position.z = lerp(camera.position.z, targetCameraZ, 0.05);

  let nearestNodeZ = Math.round(camera.position.z / -nodeSpacing) * -nodeSpacing;
  if (nearestNodeZ > 0) nearestNodeZ = 0;
  if (nearestNodeZ < -spiralLength) nearestNodeZ = -spiralLength;

  let assemblyFactor = Math.pow(Math.max(0, 1.0 - (Math.abs(camera.position.z - nearestNodeZ) / 80)), 2); 

  const activeNodeIndex = Math.round(nearestNodeZ / -nodeSpacing);
  const targetColor = nodeColors[activeNodeIndex];
  const curPos = particles.geometry.attributes.position.array;
  const curCol = particles.geometry.attributes.color.array;
  const baseCol = nodeColors[0]; 

  const time = Date.now() * 0.001;
  for(let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    
    // Add chaotic space-like hovering
    const chaoticX = Math.sin(time + i) * 1.5;
    const chaoticY = Math.cos(time * 0.8 + i) * 1.5;
    const chaoticZ = Math.sin(time * 0.5 + i) * 2.0;

    curPos[i3] = lerp(basePositions[i3], targetPositions[i3], assemblyFactor) + chaoticX;
    curPos[i3+1] = lerp(basePositions[i3+1], targetPositions[i3+1], assemblyFactor) + chaoticY;
    
    curCol[i3] = lerp(baseCol.r, targetColor.r, assemblyFactor);
    curCol[i3+1] = lerp(baseCol.g, targetColor.g, assemblyFactor);
    curCol[i3+2] = lerp(baseCol.b, targetColor.b, assemblyFactor);
  }
  
  particles.geometry.attributes.position.needsUpdate = true;
  particles.geometry.attributes.color.needsUpdate = true;
  particles.rotation.z += 0.001;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// ==========================================
// 6. STEM AUDIO PLAYER LOGIC
// ==========================================
let musicInitialized = false;
let audios = [];
let gainNodes = [];
let audioCtx;
let analyser;
let isAudioPlaying = false;
let visAnimationFrame;

window.initMusicPlayer = () => {
  if (musicInitialized) return;
  musicInitialized = true;
  
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 512;
  analyser.connect(audioCtx.destination);
  
  const sources = [
    "Rebirth Tracks/Untitled_4.wav",
    "Rebirth Tracks/Untitled_5.wav",
    "Rebirth Tracks/Untitled_8.wav"
  ];
  
  sources.forEach((src, index) => {
    const audio = new Audio(src);
    audio.loop = true; 
    audio.crossOrigin = "anonymous";
    audios.push(audio);
    
    const sourceNode = audioCtx.createMediaElementSource(audio);
    const gainNode = audioCtx.createGain();
    
    sourceNode.connect(gainNode);
    gainNode.connect(analyser); // Route everything through analyser for visualization
    gainNodes.push(gainNode);
  });
  
  const playBtn = document.getElementById('master-play-btn');
  
  const togglePlay = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    if (!isAudioPlaying) {
      const playPromises = audios.map(a => a.play());
      
      Promise.all(playPromises.map(p => p.catch(e => console.error("Play prevented", e)))).then(() => {
        playBtn.innerText = "PAUSE";
        playBtn.style.color = "#000";
        playBtn.style.background = "var(--gold)";
        isAudioPlaying = true;
        startVisualizer();
      });
    } else {
      audios.forEach(a => a.pause());
      playBtn.innerText = "PLAY";
      playBtn.style.color = "var(--gold)";
      playBtn.style.background = "transparent";
      isAudioPlaying = false;
    }
  };

  playBtn.addEventListener('click', togglePlay);
  playBtn.addEventListener('touchstart', togglePlay);
  
  document.querySelectorAll('.stem-mute-btn').forEach(btn => {
    const toggleStem = (e) => {
      if (e.type === 'touchstart') e.preventDefault();
      const idx = parseInt(e.target.getAttribute('data-index'));
      if(e.target.classList.contains('active')){
         e.target.classList.remove('active');
         e.target.innerText = "MUTED";
         gsap.to(gainNodes[idx].gain, { value: 0, duration: 0.5 });
      } else {
         e.target.classList.add('active');
         e.target.innerText = "ACTIVE";
         gsap.to(gainNodes[idx].gain, { value: 1, duration: 0.5 });
      }
    };
    btn.addEventListener('click', toggleStem);
    btn.addEventListener('touchstart', toggleStem);
  });
}

function startVisualizer() {
  const canvas = document.getElementById('music-visualizer');
  if(!canvas) return;
  const c = canvas.getContext('2d');
  
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  
  function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    if(!isAudioPlaying) { // clear up on pause
      c.clearRect(0, 0, canvas.width, canvas.height);
      return; 
    }
    
    visAnimationFrame = requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(dataArray);
    
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.lineWidth = 3;
    
    // Create animated multicolored gradient
    const time = Date.now() * 0.05; // speed of color change
    const gradient = c.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, `hsl(${time % 360}, 100%, 60%)`);
    gradient.addColorStop(0.5, `hsl(${(time + 60) % 360}, 100%, 60%)`);
    gradient.addColorStop(1, `hsl(${(time + 120) % 360}, 100%, 60%)`);
    
    c.strokeStyle = gradient;
    c.shadowBlur = 20;
    c.shadowColor = `hsl(${(time + 60) % 360}, 100%, 50%)`;
    
    c.beginPath();
    const sliceWidth = canvas.width * 1.0 / bufferLength;
    let x = 0;
    
    for(let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0; 
      const y = v * (canvas.height / 2); 
      
      if(i === 0) c.moveTo(x, y);
      else c.lineTo(x, y);
      
      x += sliceWidth;
    }
    c.stroke();
  }
  draw();
}

window.pauseAllAudio = () => {
    if(isAudioPlaying) {
      document.getElementById('master-play-btn').click(); // trigger pause logic
    }
};

// ==========================================
// STATE PERSISTENCE (Language Switching)
// ==========================================
document.addEventListener('click', function(e) {
  const langLink = e.target.closest('.lang-switch-global a, .lang-switch-nav a');
  if (!langLink || langLink.classList.contains('active')) return;
  
  e.preventDefault();
  let target = langLink.getAttribute('href');
  let hash = '';
  
  // Detect current state from visible DOM elements (not JS vars)
  // Check if any fullscreen gallery container is visible
  for (let i = 1; i <= 8; i++) {
    const container = document.getElementById('gallery-' + i + '-container');
    if (container && container.style.display !== 'none' && container.style.display !== '') {
      hash = '#gallery-' + i;
      break;
    }
  }
  
  // If no gallery container is open, check if 3D spiral is visible
  if (!hash) {
    const webgl = document.getElementById('webgl-container');
    if (webgl && webgl.style.display === 'block') {
      // Find which node is active in the spiral
      const activeNode = document.querySelector('.gallery-node.active');
      if (activeNode) {
        const nodeId = activeNode.id; // e.g. "node-3"
        hash = '#' + nodeId;
      }
    }
  }
  
  window.location.href = target + hash;
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (!hash) return;
  
  const isNode = hash.startsWith('#node-');
  const isGallery = hash.startsWith('#gallery-');
  
  if (isNode || isGallery) {
    const idStr = hash.replace(isNode ? '#node-' : '#gallery-', '');
    const targetIdx = parseInt(idStr, 10);
    
    if (!isNaN(targetIdx) && typeof window.flyThrough === 'function') {
      // 1. Immediately configure the 3D scene properly using the internal setup function
      window.flyThrough(targetIdx, true);
      
      // 2. Enter gallery section instantly if required
      if (isGallery && typeof window.enterSection === 'function') {
         setTimeout(() => window.enterSection(targetIdx, true), 50);
      }
    }
  }
});

