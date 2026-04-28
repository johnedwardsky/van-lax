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
let isTransitioning = false; // New state to prevent overlapping transitions
let scrollPercent = 0;
let targetCameraZ = 0;

// Shift these up so they are ready for any function calls
const nodeSpacing = 200; 
const totalNodes = 12; 
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
  if (is3DActive || isTransitioning) return;
  
  const hub = document.getElementById('hub-wrapper');
  if (!hub) return;

  is3DActive = true;
  isTransitioning = true;
  hub.style.pointerEvents = 'none';

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
          isTransitioning = false;
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
  // Enter gallery directly — no donation popup on entry
  executeEnterSection(nodeIndex, isInstant);
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
    
      // If it's the Music gallery (REBIRTH), initialize its player
      if(nodeIndex === 4) {
        initMusicPlayer();
      }

      // If it's the Deep Blue gallery, initialize its player
      if(nodeIndex === 9) {
        initDeepBluePlayer();
      }

      // If it's the NOX gallery, initialize its player
      if(nodeIndex === 10) {
        initNoxPlayer();
      }

      // If it's the Evolution gallery, initialize its player
      if(nodeIndex === 11) {
        initEvolutionPlayer();
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
  if (isTransitioning) return;
  isTransitioning = true;

  gsap.to(webGLContainer, {
    opacity: 0, duration: 1,
    onComplete: () => {
      webGLContainer.style.display = 'none';
      hubWrapper.style.display = 'block';
      hubWrapper.style.pointerEvents = 'auto';
      // Restore the hub wrapper itself + all UI elements
      gsap.to(hubWrapper, { opacity: 1, duration: 1 });
      gsap.to(['#hub-bg-img', '#ui-panels', '.van-lax-overlay', ...document.querySelectorAll('.hotspot')], {
        opacity: 1, duration: 1, stagger: 0.1,
        onComplete: () => {
          is3DActive = false;
          isTransitioning = false;
        }
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

const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 900;
const PARTICLE_COUNT = isMobileDevice ? 4000 : 15000;
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
  new THREE.Color(0xaa00ff), // node 5 (Music / Rebirth)
  new THREE.Color(0xff0055), // node 6 (Store)
  new THREE.Color(0x00ff88), // node 7 (About)
  new THREE.Color(0xff8800), // node 8 (Contacts)
  new THREE.Color(0x00b4d8), // node 9 (Deep Blue)
  new THREE.Color(0xaa00ff), // node 10 (NOX)
  new THREE.Color(0x00ffcc), // node 11 (Evolution)
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
let audioCtxReady = false;

window.initMusicPlayer = () => {
  if (musicInitialized) return;
  musicInitialized = true;
  
  // Use M4A (AAC) for mobile compatibility and smaller file size
  const sources = [
    "Rebirth tracks/Untitled_4.m4a",
    "Rebirth tracks/Untitled_5.m4a",
    "Rebirth tracks/Untitled_8.m4a"
  ];
  
  // Pre-create Audio elements (no AudioContext yet — iOS requires it inside gesture)
  sources.forEach((src) => {
    const audio = new Audio();
    audio.crossOrigin = "anonymous"; // Must be set BEFORE src
    audio.src = src;
    audio.loop = true;
    audio.preload = "auto";
    audios.push(audio);
  });
  
  const playBtn = document.getElementById('master-play-btn');
  
  const setupAudioContext = () => {
    if (audioCtxReady) return;
    audioCtxReady = true;
    
    // Create AudioContext INSIDE user gesture — required by iOS Safari
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;
    analyser.connect(audioCtx.destination);
    
    audios.forEach((audio) => {
      const sourceNode = audioCtx.createMediaElementSource(audio);
      const gainNode = audioCtx.createGain();
      sourceNode.connect(gainNode);
      gainNode.connect(analyser);
      gainNodes.push(gainNode);
    });
  };
  
  const togglePlay = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    
    // Setup AudioContext on first interaction (iOS requirement)
    setupAudioContext();
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    if (!isAudioPlaying) {
      playBtn.innerText = "LOADING...";
      
      const playPromises = audios.map(a => a.play());
      Promise.all(playPromises.map(p => p ? p.catch(err => console.warn("Play blocked:", err)) : Promise.resolve()))
        .then(() => {
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
      if (!audioCtxReady) return; // Don't do anything if audio not started yet
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
      document.getElementById('master-play-btn').click();
    }
    if(dbAudioPlaying) {
      const dbBtn = document.getElementById('deep-blue-play-btn');
      if(dbBtn) dbBtn.click();
    }
    if(noxAudioPlaying) {
      const noxBtn = document.getElementById('nox-play-btn');
      if(noxBtn) noxBtn.click();
    }
    if(evoAudioPlaying) {
      const evoBtn = document.getElementById('evo-play-btn');
      if(evoBtn) evoBtn.click();
    }
};

// Switch between track pages (pause current audio, cross-fade containers)
window.switchTrack = (fromSection, toSection) => {
  // Pause audio on current page
  if(fromSection === 4 && isAudioPlaying) {
    const btn = document.getElementById('master-play-btn');
    if(btn) btn.click();
  }
  if(fromSection === 9 && dbAudioPlaying) {
    const btn = document.getElementById('deep-blue-play-btn');
    if(btn) btn.click();
  }
  if(fromSection === 10 && noxAudioPlaying) {
    const btn = document.getElementById('nox-play-btn');
    if(btn) btn.click();
  }
  if(fromSection === 11 && evoAudioPlaying) {
    const btn = document.getElementById('evo-play-btn');
    if(btn) btn.click();
  }

  // Init player for destination if not already done
  if(toSection === 9)  initDeepBluePlayer();
  if(toSection === 4)  initMusicPlayer();
  if(toSection === 10) initNoxPlayer();
  if(toSection === 11) initEvolutionPlayer();

  const fromEl = document.getElementById(`gallery-${fromSection}-container`);
  const toEl   = document.getElementById(`gallery-${toSection}-container`);
  if(!fromEl || !toEl) return;

  gsap.to(fromEl, { opacity: 0, duration: 0.6, onComplete: () => {
    fromEl.style.display = 'none';
    toEl.style.display = 'block';
    toEl.style.opacity = '0';
    gsap.to(toEl, { opacity: 1, duration: 0.8 });

    // Animate in the titles on the destination page
    const titles = toEl.querySelectorAll('.g1-elegant-title, .g1-intro-text, .g1-intro-sub');
    if(titles.length > 0) {
      gsap.fromTo(titles,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: 'power2.out', delay: 0.3 }
      );
    }
  }});
};

// ==========================================
// 8. NOX STEM PLAYER (5 TRACKS)
// ==========================================
let noxInitialized = false;
let noxAudios = [];
let noxGainNodes = [];
let noxAudioCtx = null;
let noxAnalyser = null;
let noxAudioPlaying = false;
let noxCtxReady = false;

window.initNoxPlayer = () => {
  if (noxInitialized) return;
  noxInitialized = true;

  const sources = [
    "NOX/1.mp3",
    "NOX/2.mp3",
    "NOX/3.mp3",
    "NOX/4.mp3",
    "NOX/5.mp3"
  ];

  const playBtn = document.getElementById('nox-play-btn');
  if (!playBtn) return;

  // Disable until all stems ready to play
  playBtn.disabled = true;
  playBtn.innerText = "LOADING...";
  playBtn.style.opacity = "0.5";
  playBtn.style.cursor = "not-allowed";

  let readyCount = 0;
  const total = sources.length;
  let noxStarted = false; // track whether audio has ever started

  // Use HTMLAudioElement — browser streams natively, no full download needed
  sources.forEach((src, i) => {
    const audio = new Audio();
    audio.src = src;
    audio.loop = false; // Manual loop control for sync
    audio.preload = "auto";
    noxAudios.push(audio);

    const onReady = () => {
      readyCount++;
      playBtn.innerText = `LOADING ${readyCount}/${total}...`;
      if (readyCount === total) {
        playBtn.disabled = false;
        playBtn.innerText = "PLAY";
        playBtn.style.opacity = "1";
        playBtn.style.cursor = "pointer";
      }
    };
    audio.addEventListener('canplaythrough', onReady, { once: true });
    if (audio.readyState >= 4) onReady();
  });

  // Sync loop: when reference track ends, restart ALL tracks at the same time
  noxAudios[0].addEventListener('ended', () => {
    if (noxAudioPlaying) {
      noxAudios.forEach(a => { a.currentTime = 0; a.play().catch(() => {}); });
    }
  });

  // Create AudioContext only on first PLAY (requires user gesture)
  const setupNoxCtx = () => {
    if (noxCtxReady) return;
    noxCtxReady = true;
    noxAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    noxAnalyser = noxAudioCtx.createAnalyser();
    noxAnalyser.fftSize = 512;
    noxAnalyser.connect(noxAudioCtx.destination);
    noxAudios.forEach(audio => {
      const src = noxAudioCtx.createMediaElementSource(audio);
      const gain = noxAudioCtx.createGain();
      src.connect(gain);
      gain.connect(noxAnalyser);
      noxGainNodes.push(gain);
    });
  };

  const toggleNoxPlay = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    if (playBtn.disabled) return;

    // Create AudioContext on first interaction (guaranteed user gesture)
    setupNoxCtx();
    if (noxAudioCtx.state === 'suspended') noxAudioCtx.resume();

    if (!noxAudioPlaying) {
      // Sync: start all tracks in the same synchronous loop tick
      noxAudios.forEach(a => { a.currentTime = 0; a.play().catch(() => {}); });
      noxStarted = true;
      playBtn.innerText = "PAUSE";
      playBtn.style.color = "#000";
      playBtn.style.background = "#aa00ff";
      playBtn.style.borderColor = "#aa00ff";
      noxAudioPlaying = true;
      startNoxVisualizer();
    } else {
      noxAudios.forEach(a => a.pause());
      playBtn.innerText = "PLAY";
      playBtn.style.color = "#aa00ff";
      playBtn.style.background = "transparent";
      playBtn.style.borderColor = "#aa00ff";
      noxAudioPlaying = false;
    }
  };

  playBtn.addEventListener('click', toggleNoxPlay);
  playBtn.addEventListener('touchstart', toggleNoxPlay);

  document.querySelectorAll('.nox-stem-mute-btn').forEach(btn => {
    const toggleStem = (e) => {
      if (e.type === 'touchstart') e.preventDefault();
      if (!noxCtxReady) return;
      const idx = parseInt(e.target.getAttribute('data-index'));
      const isRu = window.location.pathname.includes('-ru');
      if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        e.target.innerText = isRu ? "ВЫКЛ" : "MUTED";
        noxGainNodes[idx].gain.setTargetAtTime(0, noxAudioCtx.currentTime, 0.08);
      } else {
        e.target.classList.add('active');
        e.target.innerText = isRu ? "ВКЛ" : "ACTIVE";
        noxGainNodes[idx].gain.setTargetAtTime(1, noxAudioCtx.currentTime, 0.08);
      }
    };
    btn.addEventListener('click', toggleStem);
    btn.addEventListener('touchstart', toggleStem);
  });
};

function startNoxVisualizer() {
  const canvas = document.getElementById('nox-visualizer');
  if (!canvas) return;
  const c = canvas.getContext('2d');
  const bufferLength = noxAnalyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (!noxAudioPlaying) {
      c.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    requestAnimationFrame(draw);
    noxAnalyser.getByteTimeDomainData(dataArray);
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.lineWidth = 3;

    // NOX — deep violet / purple palette
    const time = Date.now() * 0.04;
    const gradient = c.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, `hsl(${270 + (time % 30)}, 100%, 60%)`);
    gradient.addColorStop(0.5, `hsl(${290 + (time % 20)}, 100%, 70%)`);
    gradient.addColorStop(1, `hsl(${260 + (time % 30)}, 100%, 55%)`);

    c.strokeStyle = gradient;
    c.shadowBlur = 28;
    c.shadowColor = `hsl(275, 100%, 55%)`;

    c.beginPath();
    const sliceWidth = canvas.width / bufferLength;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = v * (canvas.height / 2);
      if (i === 0) c.moveTo(x, y);
      else c.lineTo(x, y);
      x += sliceWidth;
    }
    c.stroke();
  }
  draw();
}

// ==========================================
// 7. DEEP BLUE STEM PLAYER (4 TRACKS)
// ==========================================
let dbInitialized = false;
let dbAudios = [];
let dbGainNodes = [];
let dbAudioCtx = null;
let dbAnalyser = null;
let dbAudioPlaying = false;
let dbCtxReady = false;

window.initDeepBluePlayer = () => {
  if (dbInitialized) return;
  dbInitialized = true;

  const sources = [
    "DEEP BLUE/1.mp3",
    "DEEP BLUE/2.mp3",
    "DEEP BLUE/3.mp3",
    "DEEP BLUE/4.mp3"
  ];

  const playBtn = document.getElementById('deep-blue-play-btn');
  if (!playBtn) return;

  // Disable until all stems ready
  playBtn.disabled = true;
  playBtn.innerText = "LOADING...";
  playBtn.style.opacity = "0.5";
  playBtn.style.cursor = "not-allowed";

  let readyCount = 0;
  const total = sources.length;
  let dbStarted = false; // track whether audio has ever started

  // Use HTMLAudioElement — browser streams natively, no full download needed
  sources.forEach((src, i) => {
    const audio = new Audio();
    audio.src = src;
    audio.loop = false; // Manual loop control for sync
    audio.preload = "auto";
    dbAudios.push(audio);

    const onReady = () => {
      readyCount++;
      playBtn.innerText = `LOADING ${readyCount}/${total}...`;
      if (readyCount === total) {
        playBtn.disabled = false;
        playBtn.innerText = "PLAY";
        playBtn.style.opacity = "1";
        playBtn.style.cursor = "pointer";
      }
    };
    audio.addEventListener('canplaythrough', onReady, { once: true });
    if (audio.readyState >= 4) onReady();
  });

  // Sync loop: when reference track ends, restart ALL tracks at the same time
  dbAudios[0].addEventListener('ended', () => {
    if (dbAudioPlaying) {
      dbAudios.forEach(a => { a.currentTime = 0; a.play().catch(() => {}); });
    }
  });

  // Create AudioContext only on first PLAY (requires user gesture)
  const setupDbCtx = () => {
    if (dbCtxReady) return;
    dbCtxReady = true;
    dbAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    dbAnalyser = dbAudioCtx.createAnalyser();
    dbAnalyser.fftSize = 512;
    dbAnalyser.connect(dbAudioCtx.destination);
    dbAudios.forEach(audio => {
      const src = dbAudioCtx.createMediaElementSource(audio);
      const gain = dbAudioCtx.createGain();
      src.connect(gain);
      gain.connect(dbAnalyser);
      dbGainNodes.push(gain);
    });
  };

  const toggleDbPlay = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    if (playBtn.disabled) return;

    // Create AudioContext on first interaction (guaranteed user gesture)
    setupDbCtx();
    if (dbAudioCtx.state === 'suspended') dbAudioCtx.resume();

    if (!dbAudioPlaying) {
      // Sync: start all tracks in the same synchronous loop tick
      dbAudios.forEach(a => { a.currentTime = 0; a.play().catch(() => {}); });
      dbStarted = true;
      playBtn.innerText = "PAUSE";
      playBtn.style.color = "#000";
      playBtn.style.background = "#00b4d8";
      playBtn.style.borderColor = "#00b4d8";
      dbAudioPlaying = true;
      startDbVisualizer();
    } else {
      dbAudios.forEach(a => a.pause());
      playBtn.innerText = "PLAY";
      playBtn.style.color = "#00b4d8";
      playBtn.style.background = "transparent";
      playBtn.style.borderColor = "#00b4d8";
      dbAudioPlaying = false;
    }
  };

  playBtn.addEventListener('click', toggleDbPlay);
  playBtn.addEventListener('touchstart', toggleDbPlay);

  document.querySelectorAll('.db-stem-mute-btn').forEach(btn => {
    const toggleStem = (e) => {
      if (e.type === 'touchstart') e.preventDefault();
      if (!dbCtxReady) return;
      const idx = parseInt(e.target.getAttribute('data-index'));
      const isRu = window.location.pathname.includes('-ru');
      if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        e.target.innerText = isRu ? "ВЫКЛ" : "MUTED";
        dbGainNodes[idx].gain.setTargetAtTime(0, dbAudioCtx.currentTime, 0.08);
      } else {
        e.target.classList.add('active');
        e.target.innerText = isRu ? "ВКЛ" : "ACTIVE";
        dbGainNodes[idx].gain.setTargetAtTime(1, dbAudioCtx.currentTime, 0.08);
      }
    };
    btn.addEventListener('click', toggleStem);
    btn.addEventListener('touchstart', toggleStem);
  });
};

function startDbVisualizer() {
  const canvas = document.getElementById('deep-blue-visualizer');
  if (!canvas) return;
  const c = canvas.getContext('2d');
  const bufferLength = dbAnalyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (!dbAudioPlaying) {
      c.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    dbVisFrame = requestAnimationFrame(draw);
    dbAnalyser.getByteTimeDomainData(dataArray);
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.lineWidth = 3;

    // Deep blue themed gradient: blues and cyans
    const time = Date.now() * 0.05;
    const gradient = c.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, `hsl(${190 + (time % 40)}, 100%, 60%)`);
    gradient.addColorStop(0.5, `hsl(${210 + (time % 40)}, 100%, 70%)`);
    gradient.addColorStop(1, `hsl(${230 + (time % 30)}, 100%, 60%)`);

    c.strokeStyle = gradient;
    c.shadowBlur = 24;
    c.shadowColor = `hsl(210, 100%, 60%)`;

    c.beginPath();
    const sliceWidth = canvas.width / bufferLength;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = v * (canvas.height / 2);
      if (i === 0) c.moveTo(x, y);
      else c.lineTo(x, y);
      x += sliceWidth;
    }
    c.stroke();
  }
  draw();
}

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


// ==========================================
// 11. EVOLUTION VINYL PLAYER
// ==========================================
let evoInitialized = false;
let evoAudioPlaying = false;
let evoAudio = null;
let evoAudioCtx = null;
let evoAnalyser = null;
let evoCtxReady = false;
let evoAnimFrame = null;
let evoBgFrame = null;
let evoVinylAngle = 0;
let evoWaveformData = null; // pre-sampled waveform for vinyl drawing

window.initEvolutionPlayer = () => {
  if (evoInitialized) return;
  evoInitialized = true;

  const playBtn  = document.getElementById('evo-play-btn');
  const fillEl   = document.getElementById('evo-progress-fill');
  const timeCur  = document.getElementById('evo-time-current');
  const timeTotal= document.getElementById('evo-time-total');
  if (!playBtn) return;

  playBtn.disabled = true;
  playBtn.innerText = 'LOADING...';
  playBtn.style.opacity = '0.45';

  evoAudio = new Audio();
  evoAudio.src = 'Evolution/evolution.mp3';
  evoAudio.preload = 'auto';
  evoAudio.loop = true;

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2,'0')}`;
  };

  evoAudio.addEventListener('canplaythrough', () => {
    playBtn.disabled = false;
    playBtn.innerText = 'PLAY';
    playBtn.style.opacity = '1';
    timeTotal.textContent = fmt(evoAudio.duration || 0);
  }, { once: true });

  evoAudio.addEventListener('timeupdate', () => {
    const pct = evoAudio.duration ? (evoAudio.currentTime / evoAudio.duration) * 100 : 0;
    fillEl.style.width = pct + '%';
    timeCur.textContent = fmt(evoAudio.currentTime);
  });

  // Progress bar click to seek
  const barEl = document.querySelector('.evo-progress-bar');
  if (barEl) {
    barEl.addEventListener('click', (e) => {
      if (!evoAudio.duration) return;
      const rect = barEl.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      evoAudio.currentTime = pct * evoAudio.duration;
    });
  }

  // AudioContext created on first PLAY
  const setupEvoCtx = () => {
    if (evoCtxReady) return;
    evoCtxReady = true;
    evoAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    evoAnalyser = evoAudioCtx.createAnalyser();
    evoAnalyser.fftSize = 2048;
    const src = evoAudioCtx.createMediaElementSource(evoAudio);
    src.connect(evoAnalyser);
    evoAnalyser.connect(evoAudioCtx.destination);
    // Pre-sample waveform for vinyl rings (decorative static rings)
    evoWaveformData = new Float32Array(256).fill(0).map((_,i) => Math.sin(i * 0.4) * 0.3 + Math.random() * 0.7);
  };

  const toggleEvo = (e) => {
    if (e && e.type === 'touchstart') e.preventDefault();
    if (playBtn.disabled) return;
    setupEvoCtx();
    if (evoAudioCtx.state === 'suspended') evoAudioCtx.resume();

    if (!evoAudioPlaying) {
      evoAudio.play().catch(() => {});
      playBtn.innerText = 'PAUSE';
      playBtn.classList.add('playing');
      evoAudioPlaying = true;
      startEvoVisualizer();
    } else {
      evoAudio.pause();
      playBtn.innerText = 'PLAY';
      playBtn.classList.remove('playing');
      evoAudioPlaying = false;
      cancelAnimationFrame(evoAnimFrame);
    }
  };

  playBtn.addEventListener('click', toggleEvo);
  playBtn.addEventListener('touchstart', toggleEvo);

  // Start background cosmic particles immediately
  startEvoBgParticles();
  // Draw static vinyl immediately
  drawStaticVinyl();
};

// ---- Vinyl Record Canvas ----
function drawStaticVinyl(rotation = 0) {
  const canvas = document.getElementById('evo-vinyl-canvas');
  if (!canvas) return;
  const size = Math.min(window.innerWidth * 0.55, window.innerHeight * 0.55, 500);
  canvas.width = size;
  canvas.height = size;
  const c = canvas.getContext('2d');
  const cx = size / 2, cy = size / 2, R = size / 2 - 4;

  c.save();
  c.translate(cx, cy);
  c.rotate(rotation);

  // Outer vinyl disc — deep black with subtle gradient
  const discGrad = c.createRadialGradient(0, 0, R * 0.05, 0, 0, R);
  discGrad.addColorStop(0, '#1a1a2e');
  discGrad.addColorStop(0.35, '#0d0d1a');
  discGrad.addColorStop(1, '#050510');
  c.beginPath();
  c.arc(0, 0, R, 0, Math.PI * 2);
  c.fillStyle = discGrad;
  c.fill();

  // Grooves — concentric rings with waveform modulation
  const grooveCount = 60;
  for (let g = 0; g < grooveCount; g++) {
    const t = g / grooveCount;
    const r = R * (0.22 + t * 0.72);
    const waveAmp = evoWaveformData ? evoWaveformData[g % evoWaveformData.length] * 2.5 : 1.5;
    const alpha = 0.08 + t * 0.12;
    const grooveRad = 1.2 + waveAmp * 0.4;

    c.beginPath();
    // Modulate radius with waveform to draw "recorded waves" on the groove
    const steps = 200;
    for (let s = 0; s <= steps; s++) {
      const angle = (s / steps) * Math.PI * 2;
      const waveIdx = Math.floor((s / steps) * (evoWaveformData ? evoWaveformData.length : 1));
      const amp = evoWaveformData ? evoWaveformData[waveIdx % evoWaveformData.length] * waveAmp * 0.5 : 0;
      const rr = r + amp;
      if (s === 0) c.moveTo(Math.cos(angle) * rr, Math.sin(angle) * rr);
      else c.lineTo(Math.cos(angle) * rr, Math.sin(angle) * rr);
    }
    c.closePath();
    c.strokeStyle = `rgba(0,255,204,${alpha})`;
    c.lineWidth = grooveRad * 0.35;
    c.stroke();
  }

  // Sheen highlight — light reflection arc
  const sheenGrad = c.createLinearGradient(-R * 0.5, -R * 0.5, R * 0.3, R * 0.2);
  sheenGrad.addColorStop(0, 'rgba(255,255,255,0.06)');
  sheenGrad.addColorStop(0.5, 'rgba(255,255,255,0.02)');
  sheenGrad.addColorStop(1, 'rgba(255,255,255,0)');
  c.beginPath();
  c.arc(0, 0, R, 0, Math.PI * 2);
  c.fillStyle = sheenGrad;
  c.fill();

  // Center label — cosmic teal circle
  const labelR = R * 0.185;
  const labelGrad = c.createRadialGradient(0, 0, 0, 0, 0, labelR);
  labelGrad.addColorStop(0, '#003322');
  labelGrad.addColorStop(0.6, '#001a11');
  labelGrad.addColorStop(1, '#000a08');
  c.beginPath();
  c.arc(0, 0, labelR, 0, Math.PI * 2);
  c.fillStyle = labelGrad;
  c.fill();
  c.strokeStyle = 'rgba(0,255,204,0.5)';
  c.lineWidth = 1.5;
  c.stroke();

  // Label text
  c.fillStyle = '#00ffcc';
  c.font = `bold ${labelR * 0.32}px Montserrat, sans-serif`;
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText('VAN LAX', 0, -labelR * 0.2);
  c.font = `${labelR * 0.2}px Montserrat, sans-serif`;
  c.fillStyle = 'rgba(0,255,204,0.6)';
  c.fillText('EVOLUTION', 0, labelR * 0.2);

  // Spindle hole
  c.beginPath();
  c.arc(0, 0, R * 0.018, 0, Math.PI * 2);
  c.fillStyle = '#000';
  c.fill();

  // Outer ring glow
  c.beginPath();
  c.arc(0, 0, R, 0, Math.PI * 2);
  c.strokeStyle = 'rgba(0,255,204,0.25)';
  c.lineWidth = 2;
  c.stroke();

  c.restore();
}

function startEvoVisualizer() {
  const canvas = document.getElementById('evo-vinyl-canvas');
  if (!canvas) return;
  const dataArray = new Uint8Array(evoAnalyser.frequencyBinCount);

  const draw = () => {
    if (!evoAudioPlaying) {
      drawStaticVinyl(evoVinylAngle);
      return;
    }
    evoAnimFrame = requestAnimationFrame(draw);

    // Rotate based on time
    evoVinylAngle += 0.004;

    // Get live audio data
    evoAnalyser.getByteFrequencyData(dataArray);

    // Map frequency data onto waveform rings
    const mapped = new Float32Array(256);
    for (let i = 0; i < 256; i++) {
      mapped[i] = dataArray[Math.floor(i * dataArray.length / 256)] / 255;
    }
    evoWaveformData = mapped;

    drawStaticVinyl(evoVinylAngle);
  };
  draw();
}

// ---- Cosmic Background Particles ----
function startEvoBgParticles() {
  const canvas = document.getElementById('evo-bg-canvas');
  if (!canvas) return;
  const c = canvas.getContext('2d');

  // ── Crystal stars: each has a core point + independent diffraction spikes ──
  const crystals = Array.from({length: 110}, () => {
    const spikeCount = 3 + Math.floor(Math.random() * 4); // 3-6 spikes
    const baseAngle  = Math.random() * Math.PI;            // orientation

    return {
      x: Math.random(), y: Math.random(),
      ox: 0, oy: 0,
      // Visual size: most tiny, a few larger (like real sky)
      baseR:   Math.random() < 0.12 ? 1.8 + Math.random() * 2.0   // bright
             : Math.random() < 0.35 ? 0.9 + Math.random() * 0.9   // medium
             :                        0.3 + Math.random() * 0.6,   // dim

      baseHue:  Math.random() * 360,
      hueSpeed: (Math.random() - 0.5) * 0.04,  // very slow color drift

      // Four independent phases for multi-frequency scintillation
      ph:  [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      ],
      // Each spike has its own scintillation phases
      spikeCount,
      baseAngle,
      spikePh: Array.from({length: spikeCount}, () => [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      ]),

      freqBin: Math.floor(Math.random() * 200),
      driftX:  (Math.random() - 0.5) * 0.00005,
      driftY:  (Math.random() - 0.5) * 0.00005,
      energy:  0,
    };
  });

  // ── Nebulae ──────────────────────────────────────────────────────────────
  const nebulae = Array.from({length: 3}, () => ({
    x: Math.random(), y: Math.random(),
    r:     0.10 + Math.random() * 0.14,
    hue:   Math.random() < 0.5 ? 165 : 260,
    alpha: 0.018 + Math.random() * 0.022,
    ph:    Math.random() * Math.PI * 2,
  }));

  let freqData = new Uint8Array(1024);
  let bass = 0, mid = 0, treble = 0;

  // ── Single diffraction spike ──────────────────────────────────────────────
  const drawSpike = (cx, cy, angle, len, halfW, hue, alpha) => {
    // Draw both directions for bidirectional spike
    [0, Math.PI].forEach((offset, di) => {
      const L = di === 0 ? len : len * (0.45 + Math.random() * 0.3);
      c.save();
      c.translate(cx, cy);
      c.rotate(angle + offset);

      const grad = c.createLinearGradient(0, 0, L, 0);
      grad.addColorStop(0,    `hsla(${hue},        60%, 100%, ${alpha})`);
      grad.addColorStop(0.06, `hsla(${(hue+15)%360}, 80%, 90%, ${alpha * 0.55})`);
      grad.addColorStop(0.18, `hsla(${(hue+40)%360}, 90%, 80%, ${alpha * 0.18})`);
      grad.addColorStop(0.40, `hsla(${(hue+80)%360}, 100%, 70%, ${alpha * 0.04})`);
      grad.addColorStop(1,    'transparent');

      c.beginPath();
      c.moveTo(0,  halfW);
      c.quadraticCurveTo(L * 0.12, halfW * 0.4, L, 0);
      c.quadraticCurveTo(L * 0.12, -halfW * 0.4, 0, -halfW);
      c.closePath();
      c.fillStyle = grad;
      c.fill();
      c.restore();
    });
  };

  const drawBg = () => {
    evoBgFrame = requestAnimationFrame(drawBg);
    const W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;
    const t = Date.now() * 0.001;

    // ── Audio ────────────────────────────────────────────────────────────
    if (evoCtxReady && evoAudioPlaying && evoAnalyser) {
      freqData = new Uint8Array(evoAnalyser.frequencyBinCount);
      evoAnalyser.getByteFrequencyData(freqData);
      const rb = freqData.slice(0,6).reduce((a,b)=>a+b,0)/6/255;
      const rm = freqData.slice(6,40).reduce((a,b)=>a+b,0)/34/255;
      const rt = freqData.slice(40,100).reduce((a,b)=>a+b,0)/60/255;
      bass   = bass   * 0.75 + rb * 0.25;
      mid    = mid    * 0.75 + rm * 0.25;
      treble = treble * 0.75 + rt * 0.25;
    } else { bass = mid = treble = 0; }

    // ── Deep space background ────────────────────────────────────────────
    const bg = c.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.max(W,H)*0.8);
    bg.addColorStop(0,    `rgba(6,5,${Math.floor(18+bass*30)},1)`);
    bg.addColorStop(0.5,  '#010108');
    bg.addColorStop(1,    '#000003');
    c.fillStyle = bg;
    c.fillRect(0, 0, W, H);

    // ── Nebulae ──────────────────────────────────────────────────────────
    nebulae.forEach(n => {
      const nx = n.x*W + Math.sin(t*0.04+n.ph)*18;
      const ny = n.y*H + Math.cos(t*0.03+n.ph)*12;
      const nr = n.r * Math.min(W,H) * (1 + mid*0.2);
      const ng = c.createRadialGradient(nx, ny, 0, nx, ny, nr);
      ng.addColorStop(0, `hsla(${n.hue},100%,55%,${n.alpha*(1+mid*1.5)*2})`);
      ng.addColorStop(1, 'transparent');
      c.beginPath(); c.arc(nx, ny, nr, 0, Math.PI*2);
      c.fillStyle = ng; c.fill();
    });

    // ── Crystal stars ────────────────────────────────────────────────────
    crystals.forEach(cr => {
      // Audio energy
      let binVal = 0;
      if (evoCtxReady && evoAudioPlaying && freqData.length > cr.freqBin)
        binVal = freqData[cr.freqBin] / 255;
      cr.energy = cr.energy * 0.7 + binVal * 0.3;
      const e = cr.energy;

      // Drift — much stronger with music (stars fly around)
      const driftBoost = 1 + e * 20 + bass * 35 + mid * 12;
      cr.ox += cr.driftX * driftBoost;
      cr.oy += cr.driftY * driftBoost;
      cr.ox *= 0.992; cr.oy *= 0.992; // pull back faster so they don't escape

      const cx = (cr.x + cr.ox) * W;
      const cy = (cr.y + cr.oy) * H;

      // ── Multi-frequency scintillation (non-repeating twinkling) ──────
      // Use 4 incommensurable frequencies so pattern never loops
      const [p0,p1,p2,p3] = cr.ph;
      const sc = (
        Math.sin(t * 3.73  + p0)        +
        Math.sin(t * 7.11  + p1) * 0.50 +
        Math.sin(t * 13.37 + p2) * 0.25 +
        Math.sin(t * 19.91 + p3) * 0.12
      ) / 1.87;  // range ≈ -1..1

      // Brightness: dips to nearly off, flares to full
      const bright = Math.max(0.05, 0.45 + 0.55 * sc);  // 0.05..1.0

      // Hue slow drift + scintillation color shift (like chromatic dispersion)
      cr.baseHue = (cr.baseHue + cr.hueSpeed + 360) % 360;
      const hue = (cr.baseHue + sc * 18 + 360) % 360;

      // Size FIXED — stays a point, no bloat with music
      const size = cr.baseR;

      // ── Diffraction spikes ───────────────────────────────────────────
      for (let s = 0; s < cr.spikeCount; s++) {
        const angle = cr.baseAngle + (s / cr.spikeCount) * Math.PI;
        const [sp0, sp1] = cr.spikePh[s];

        // Each spike scintillates at its own frequency pair
        const spSc = (
          Math.sin(t * (5.1 + s*1.87) + sp0)        +
          Math.sin(t * (11.3 + s*2.41) + sp1) * 0.5
        ) / 1.5;
        const spBright = Math.max(0, 0.5 * spSc + 0.5); // 0..1

        // Spike length: scintillation-driven, music makes spikes longer
        const spikeLen = size * (9 + spBright * 12 + e * 22 + bass * 18);
        const halfW    = size * (0.9 + spBright * 0.5);
        // Rays much more visible with music
        const alpha    = Math.min(
          0.04 + spBright * (0.09 + cr.baseR * 0.07) + e * 0.45 + bass * 0.35,
          0.75
        );

        if (alpha > 0.015) {
          drawSpike(cx, cy, angle, spikeLen, halfW, hue, alpha);
        }
      }

      // Core glow — slightly brighter with music, but stays tiny
      const coreAlpha = Math.min(
        bright * (0.45 + cr.baseR * 0.28) + e * 0.2 + bass * 0.15,
        0.95
      );
      const coreR = size * (2.2 + bright * 1.2); // fixed, not music-scaled

      const core = c.createRadialGradient(cx, cy, 0, cx, cy, coreR);
      core.addColorStop(0,    `hsla(${hue}, 20%, 100%, ${coreAlpha})`);
      core.addColorStop(0.15, `hsla(${hue}, 70%, 95%,  ${coreAlpha * 0.45})`);
      core.addColorStop(0.45, `hsla(${hue}, 90%, 80%,  ${coreAlpha * 0.08})`);
      core.addColorStop(1,    'transparent');
      c.beginPath(); c.arc(cx, cy, coreR, 0, Math.PI*2);
      c.fillStyle = core; c.fill();

      // Pinpoint — always tiny, just brighter with music
      c.beginPath();
      c.arc(cx, cy, Math.max(size * 0.3, 0.35), 0, Math.PI * 2);
      c.fillStyle = `hsla(${hue}, 10%, 100%, ${Math.min(coreAlpha * 1.3 + e*0.2, 1)})`;
      c.fill();
    });

    // ── Reactive rings + freq bars around vinyl ──────────────────────────
    if (evoCtxReady && evoAudioPlaying && evoAnalyser) {
      [bass*1.1, mid*0.9, treble*0.7].forEach((amp, ri) => {
        const ringR = Math.min(W,H) * (0.29 + ri*0.07) + amp*30;
        c.beginPath(); c.arc(W/2, H/2, ringR, 0, Math.PI*2);
        c.strokeStyle = `rgba(0,255,204,${0.025 + amp*0.18})`;
        c.lineWidth = 1 + amp*3.5; c.stroke();
      });

      const barCount = 80, minR = Math.min(W,H)*0.30;
      for (let i = 0; i < barCount; i++) {
        const angle = (i/barCount)*Math.PI*2 - Math.PI/2;
        const val = freqData[Math.floor(i*freqData.length/barCount)] / 255;
        const bH = val * Math.min(W,H) * 0.09;
        c.beginPath();
        c.moveTo(W/2+Math.cos(angle)*minR,     H/2+Math.sin(angle)*minR);
        c.lineTo(W/2+Math.cos(angle)*(minR+bH), H/2+Math.sin(angle)*(minR+bH));
        c.strokeStyle = `hsla(${155+val*60},100%,65%,${0.2+val*0.7})`;
        c.lineWidth = 2; c.stroke();
      }

      if (bass > 0.5) {
        const fl = c.createRadialGradient(W/2,H/2,0, W/2,H/2, Math.max(W,H)*0.55);
        fl.addColorStop(0, `rgba(0,255,204,${(bass-0.5)*0.18})`);
        fl.addColorStop(1, 'transparent');
        c.fillStyle = fl; c.fillRect(0,0,W,H);
      }
    }
  };
  drawBg();
}
