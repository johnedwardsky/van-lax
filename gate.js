/* ============================================================
   VAN LAX — GOTHIC GATE & INVITE CODE SYSTEM
   ============================================================ */

// ── 50 SHA-256 hashes (VANLAX_GATE_2026 + code) ─────────────
const GATE_HASHES = new Set([
  "39f4f7ee709b7c163df350c27380ddc1584ceba9fd3598aa346e1ea44be47eea",
  "8a1bf8be30b32c9ea79412f6676e0141e307d4b8fcf9ab5542807edd9e64ba46",
  "1fb4de35365be5b335eefb46d7b7d7d1f8e50db8390c068fbc8e3de89836a563",
  "f5e3e571251e17598487352d03a84f6ecf84012fce0df5e0efb57e8da399241a",
  "20e4f330446ce9343ba31242e4bf4bd7bd2f7020241dcba8faa36e223c0fb7c5",
  "c2068d5f71343a08c0b2311e2a51542bea48202b32da416835bbf5710fb97f86",
  "8c04101d58aa62aacdd4834a49bd2090b3efa1090efb72701d3bbe7df5ea004a",
  "000aa57a8189e1a473a31103b4f85a390fb7e2417d3777dca7d6a68106c0ff45",
  "1b75004d14b815ad796f5dd4aa075bccd3cd33a07a6ffc222682a36fa463367f",
  "18375c6a53c851c5d436c6c5936ffc387e08e5c9d9fd080264eddb261b66a1db",
  "16487837d95cdb8657cd23b2b2961d15f04af99633edc8f85559895e0e674c62",
  "fcfcda3c4674c321ceeb82425603a70cd833fbdfa7e4c9f03a5914b8ce2ab82e",
  "0b7a4144803ca75303b72d7b5e14c22f87ec7cb42d30c853edb819ba6d6d7af0",
  "caa15b9ee3c674de0bb79f2abbeee723c910f14fa0393aa551114ae5414e5650",
  "0645edb78776de577de51699e5a8a1167ba0a5c3999bbc3d865beac2f0b79591",
  "2b8db974e355f559872531498b4dfc7dc193d1bed066d04e2620ecb62f96d772",
  "8dc82f329f420909652204ecb80e57807214ff92ef3c408045b71609d333c1e4",
  "6bd71801ae78a74e3e23a2d2c18eff4c6f48f3bb3e5cf8d38efaebd01043d460",
  "2cf55835ee056e5fbd95a04be40ebadf67268b8f5f6a1e06507c818532c2972c",
  "fd916f3c21c31d5788cbde980b3d3981ccb4985065a8b933a40981bb12baf383",
  "000fd4c5e7577748437fbb6c31cb06955418728a3534c6bddb356b2c75102e38",
  "c41afa57dd498c290120bc21ddc8ce8d4d82f2077a394fba58ac56dbb477477e",
  "18e0f5d8784735409e25f6b5636796ec400887e5edfa15911986da41d6dd24ae",
  "f1ae51b9be6b2b0ff2e526db1fb5b20397ad7782c627cdbac15d33f8bd56f8e6",
  "d5cec035428886d3543b3424a2261860de7316a53c675a41c7e198fee9c85da2",
  "d1efb793e0cd243670e9a5247fac7c8436a23ad828b53b38358341de37a80158",
  "215bc05cd8e48a2a279d3cfdf3f0bd374e4e8d250f7e46649d10e69a51bd73ae",
  "cf58f147f1c8b24c741cf2eeb272af4fba8818e0adb9b6fd50f2dc47e953fe93",
  "3a7c2afe11a686d9f164ed0d28a01b013f08c1fa23e143fb4c84cba1d30f83dc",
  "f895282bcb2b1d099f5f55129f9117185c8a7aed6b16ffcbb089148cbdcbf3af",
  "52fbff2b35ba88b6b4d1c95b3c78512311b41aeff8a271976ae87a5e66c8194e",
  "f5dcbfd4d590c9ea37492660716a6ce0042b7dbbff8147015ccc34d786f9ca21",
  "45bbb98df42f3cbe3beb90023075e3171b9e5ec34cc813eac928d912e23c698d",
  "7053c9ca77de7d94316ec36399115e10056f108324ece8c867a467902bc50dab",
  "700a91e9171e7a66f1a7264910f1b8bb6b13fb7c3be6a07a793815bcc4e0e57d",
  "d7169b4b6d75ea706024df73fc08adf46eba8fae5775a59e5bf18461ef2ce844",
  "d7f25df1d2c74d7966e864ef24374242c7665ee1e2e44b29028b41b45de2ab68",
  "8609e8641f1286103a2dc0eab34a6e62762e767ac7d430c6ba81a07b66b4878d",
  "cc32fe11ed30be9f2ce16faa4c1b392c8e262e44eaf7bc4dcee9e3c767e21b22",
  "90b304a6a4a55c63d8b59db33298bcbd747c0176d0fdf25e97a2c4d1bb8520a0",
  "12599df30bb95f8c4c9b2b9edd40fad57534be0f1cb39714fd886b46cc710b2f",
  "bc9e7845747202e84919997ba2125c8f7607b140b438b6d9ceb81d20a052cd18",
  "eb0dadb4d6184b1f6cac0d1a0f4ced0eb320182cfde4267562fb00d0c8ebff5e",
  "99405d638071acc2ef159d2e9f0256bcec9853dd9ce1225df37e8de695690368",
  "a2deaca3c1b70c218bbb739f9b8a33f73a16d6c57e8246139ca4f4b9e27451d9",
  "59b646553350a63a3534c7de9885023bf2c46da687768629b79e1865d3c899e2",
  "b262d2dada7b2eac0efac141d62f38d274626b642d04557064691eebec5eaad1",
  "3099055ade21590a3d44bcb03af1d2060f278ba8c3436db2674251596ebb36af",
  "fc498f7994410f9061356537986ca88e4c949ab26c7b110c13e7c67a26443e32",
  "037df7e42ba6a3c31528c2f71fd4093b00795123e77bd38ccb6196d7ee748360"
]);

// ── SVG Islamic Golden Gate Builder ──────────────────────────
function buildGateSVG() {

  function panel(side) {
    const W = 500, H = 1000, L = side === 'L';

    // Gold gradient stops (shared prefix avoids ID collision between panels)
    const pfx = L ? 'l' : 'r';

    // 1. Denser Acanthus Foliage Pediment (Unclipped, top center crown)
    let pediment = '';
    if (L) {
      // Main foliage arcs meeting at center
      pediment += `<path d="M ${W - 140},100 Q ${W - 90},30 ${W},25" fill="none" stroke="url(#g${pfx})" stroke-width="7.5" />`;
      pediment += `<path d="M ${W - 110},100 Q ${W - 70},45 ${W},40" fill="none" stroke="url(#g${pfx})" stroke-width="4.5" opacity="0.95" />`;
      
      // PLUMES & FOLIAE WINGS
      pediment += `<path d="M ${W - 40},42 Q ${W - 15},15 ${W},20" fill="url(#g${pfx})" opacity="0.9"/>`;
      pediment += `<path d="M ${W - 70},65 C ${W - 35},35 ${W - 15},55 ${W},50" fill="url(#g${pfx})" opacity="0.9"/>`;
      pediment += `<path d="M ${W - 95},85 C ${W - 65},65 ${W - 35},80 ${W},75" fill="url(#g${pfx})" opacity="0.9"/>`;
      pediment += `<path d="M ${W - 120},100 A 20,20 0 1,1 ${W - 102},82" fill="none" stroke="url(#g${pfx})" stroke-width="4.5" />`;
      pediment += `<circle cx="${W - 111}" cy="91" r="8" fill="url(#g${pfx})" />`;
      pediment += `<path d="M ${W - 20},22 Q ${W},0 ${W},22 Z" fill="url(#g${pfx})"/>`;
      
      // SPLIT ROYAL CROWN - LEFT HALF (at center seam x = W)
      // Crown Base
      pediment += `<path d="M ${W - 45},40 L ${W},40 L ${W},33 L ${W - 42},33 Z" fill="url(#g${pfx})" />`;
      // Base Jewels
      pediment += `<circle cx="${W - 32}" cy="36.5" r="2.5" fill="#fff" />`;
      pediment += `<circle cx="${W - 16}" cy="36.5" r="2" fill="#ffd700" />`;
      // Left half main dome arch
      pediment += `<path d="M ${W - 38},33 Q ${W - 32},12 ${W},10 L ${W},14 Q ${W - 28},16 ${W - 34},33 Z" fill="url(#g${pfx})" />`;
      // Left half side arch
      pediment += `<path d="M ${W - 22},33 Q ${W - 17},18 ${W},16 L ${W},19 Q ${W - 14},21 ${W - 19},33 Z" fill="url(#g${pfx})" />`;
      // Cross at the top center
      pediment += `<path d="M ${W - 6},10 L ${W},10 L ${W},0 L ${W - 2},0 L ${W - 2},3 L ${W - 6},3 Z M ${W - 3},5 L ${W},5 L ${W},7 L ${W - 3},7 Z" fill="url(#g${pfx})" />`;
      // Orb
      pediment += `<path d="M ${W - 5},10 A 5,5 0 0,0 ${W},10 Z" fill="url(#g${pfx})" />`;
      // Foliage plumes extending outwards from crown base
      pediment += `<path d="M ${W - 50},45 C ${W - 65},20 ${W - 20},15 ${W},8 L ${W},12 C ${W - 15},18 ${W - 45},25 ${W - 48},45 Z" fill="url(#g${pfx})" opacity="0.9" />`;
    } else {
      // Main foliage arcs meeting at center
      pediment += `<path d="M 140,100 Q 90,30 0,25" fill="none" stroke="url(#g${pfx})" stroke-width="7.5" />`;
      pediment += `<path d="M 110,100 Q 70,45 0,40" fill="none" stroke="url(#g${pfx})" stroke-width="4.5" opacity="0.95" />`;
      
      // PLUMES & FOLIAE WINGS
      pediment += `<path d="M 40,42 Q 15,15 0,20" fill="url(#g${pfx})" opacity="0.9"/>`;
      pediment += `<path d="M 70,65 C 35,35 15,55 0,50" fill="url(#g${pfx})" opacity="0.9"/>`;
      pediment += `<path d="M 95,85 C 65,65 35,80 0,75" fill="url(#g${pfx})" opacity="0.9"/>`;
      pediment += `<path d="M 120,100 A 20,20 0 1,0 102,82" fill="none" stroke="url(#g${pfx})" stroke-width="4.5" />`;
      pediment += `<circle cx="111" cy="91" r="8" fill="url(#g${pfx})" />`;
      pediment += `<path d="M 20,22 Q 0,0 0,22 Z" fill="url(#g${pfx})"/>`;
      
      // SPLIT ROYAL CROWN - RIGHT HALF (at center seam x = 0)
      // Crown Base
      pediment += `<path d="M 0,40 L 45,40 L 42,33 L 0,33 Z" fill="url(#g${pfx})" />`;
      // Base Jewels
      pediment += `<circle cx="32" cy="36.5" r="2.5" fill="#fff" />`;
      pediment += `<circle cx="16" cy="36.5" r="2" fill="#ffd700" />`;
      // Right half main dome arch
      pediment += `<path d="M 38,33 Q 32,12 0,10 L 0,14 Q 28,16 34,33 Z" fill="url(#g${pfx})" />`;
      // Right half side arch
      pediment += `<path d="M 22,33 Q 17,18 0,16 L 0,19 Q 14,21 19,33 Z" fill="url(#g${pfx})" />`;
      // Cross at the top center
      pediment += `<path d="M 6,10 L 0,10 L 0,0 L 2,0 L 2,3 L 6,3 Z M 3,5 L 0,5 L 0,7 L 3,7 Z" fill="url(#g${pfx})" />`;
      // Orb
      pediment += `<path d="M 5,10 A 5,5 0 0,1 0,10 Z" fill="url(#g${pfx})" />`;
      // Foliage plumes
      pediment += `<path d="M 50,45 C 65,20 20,15 0,8 L 0,12 C 15,18 45,25 48,45 Z" fill="url(#g${pfx})" opacity="0.9" />`;
    }

    // 2. Heavy Kick-Plate Area (bottom H - 140 to H = 860 to 1000)
    let kickPlate = '';
    
    // Base lines
    kickPlate += `<line x1="0" y1="${H - 140}" x2="${W}" y2="${H - 140}" stroke="url(#g${pfx})" stroke-width="7"/>`;
    kickPlate += `<line x1="0" y1="${H - 148}" x2="${W}" y2="${H - 148}" stroke="url(#g${pfx})" stroke-width="2" opacity="0.75"/>`;
    kickPlate += `<line x1="0" y1="${H - 14}" x2="${W}" y2="${H - 14}" stroke="url(#g${pfx})" stroke-width="10"/>`;
    kickPlate += `<line x1="0" y1="${H - 24}" x2="${W}" y2="${H - 24}" stroke="url(#g${pfx})" stroke-width="2.5" opacity="0.8"/>`;

    // Loops filled with royal fleur-de-lis
    for (let x = 30; x < W; x += 60) {
      // Mirrored C-scrolls forming a heart shape
      kickPlate += `<path d="M ${x},${H - 122} C ${x - 22},${H - 117} ${x - 22},${H - 43} ${x},${H - 38} C ${x + 22},${H - 43} ${x + 22},${H - 117} ${x},${H - 122} Z" fill="none" stroke="url(#g${pfx})" stroke-width="3" opacity="0.9" />`;
      
      // Small royal fleur-de-lis inside the heart
      // Center petal
      kickPlate += `<path d="M ${x - 6},${H - 80} Q ${x},${H - 96} ${x + 6},${H - 80} Q ${x},${H - 74} ${x - 6},${H - 80} Z" fill="url(#g${pfx})" />`;
      kickPlate += `<path d="M ${x - 2.5},${H - 80} L ${x + 2.5},${H - 80} L ${x + 2},${H - 65} L ${x - 2},${H - 65} Z" fill="url(#g${pfx})" />`;
      // Side wings
      kickPlate += `<path d="M ${x},${H - 80} Q ${x - 13},${H - 91} ${x - 11},${H - 73} Q ${x - 5},${H - 76} ${x},${H - 80}" fill="url(#g${pfx})" />`;
      kickPlate += `<path d="M ${x},${H - 80} Q ${x + 13},${H - 91} ${x + 11},${H - 73} Q ${x + 5},${H - 76} ${x},${H - 80}" fill="url(#g${pfx})" />`;
      
      // Mini rosettes
      kickPlate += `<circle cx="${x}" cy="${H - 80}" r="2" fill="#fff" />`;
      
      // Bottom leaf-tips
      kickPlate += `<path d="M ${x - 10},${H - 30} Q ${x},${H - 10} ${x + 10},${H - 30} Z" fill="url(#g${pfx})" opacity="0.8"/>`;
    }

    // 3. Top Scrollwork Area (y = 100 to 350, clipped by arch)
    let topScrolls = '';
    // Let's add multiple concentric arches under the main arch edge to make it look layered and royal
    if (L) {
      topScrolls += `<path d="M 0,250 Q ${W*0.35},140 ${W},100" fill="none" stroke="url(#g${pfx})" stroke-width="6" opacity="0.85"/>`;
      topScrolls += `<path d="M 0,265 Q ${W*0.35},155 ${W},115" fill="none" stroke="url(#g${pfx})" stroke-width="3" opacity="0.7"/>`;
      topScrolls += `<path d="M 0,280 Q ${W*0.35},170 ${W},130" fill="none" stroke="url(#g${pfx})" stroke-width="1.8" stroke-dasharray="4,2" opacity="0.6"/>`;
      
      // Main sweeping scroll curves
      topScrolls += `<path d="M 30,350 C 50,180 ${W * 0.5},170 ${W - 40},130" fill="none" stroke="url(#g${pfx})" stroke-width="6" opacity="0.95"/>`;
      topScrolls += `<path d="M 30,350 C 50,180 ${W * 0.5},170 ${W - 40},130" fill="none" stroke="url(#g${pfx})" stroke-width="2.2" stroke-dasharray="6,4" opacity="0.8"/>`;
      topScrolls += `<path d="M ${W - 60},350 C ${W * 0.65},220 ${W * 0.25},240 40,160" fill="none" stroke="url(#g${pfx})" stroke-width="5" opacity="0.9"/>`;
      topScrolls += `<path d="M 100,350 C 130,220 180,240 220,160" fill="none" stroke="url(#g${pfx})" stroke-width="3.5" opacity="0.8"/>`;
      topScrolls += `<path d="M 240,350 C 270,220 320,240 360,160" fill="none" stroke="url(#g${pfx})" stroke-width="3.5" opacity="0.8"/>`;
      
      // Rosettes and leaflets in the top scroll voids
      topScrolls += `<path d="M 120,220 Q 150,180 180,210 Z" fill="url(#g${pfx})" opacity="0.85"/>`;
      topScrolls += `<path d="M 280,220 Q 310,180 340,210 Z" fill="url(#g${pfx})" opacity="0.85"/>`;
      
      // Gold flower centers (circles)
      topScrolls += `<circle cx="${W - 70}" cy="150" r="14" fill="none" stroke="url(#g${pfx})" stroke-width="2"/>`;
      topScrolls += `<circle cx="${W - 70}" cy="150" r="7" fill="url(#g${pfx})"/>`;
      topScrolls += `<circle cx="80" cy="180" r="12" fill="none" stroke="url(#g${pfx})" stroke-width="2"/>`;
      topScrolls += `<circle cx="80" cy="180" r="5" fill="url(#g${pfx})"/>`;
      topScrolls += `<circle cx="160" cy="170" r="9" fill="none" stroke="url(#g${pfx})" stroke-width="1.8"/>`;
      topScrolls += `<circle cx="160" cy="170" r="4" fill="url(#g${pfx})"/>`;
      topScrolls += `<circle cx="320" cy="160" r="9" fill="none" stroke="url(#g${pfx})" stroke-width="1.8"/>`;
      topScrolls += `<circle cx="320" cy="160" r="4" fill="url(#g${pfx})"/>`;
    } else {
      topScrolls += `<path d="M ${W},250 Q ${W*0.65},140 0,100" fill="none" stroke="url(#g${pfx})" stroke-width="6" opacity="0.85"/>`;
      topScrolls += `<path d="M ${W},265 Q ${W*0.65},155 0,115" fill="none" stroke="url(#g${pfx})" stroke-width="3" opacity="0.7"/>`;
      topScrolls += `<path d="M ${W},280 Q ${W*0.65},170 0,130" fill="none" stroke="url(#g${pfx})" stroke-width="1.8" stroke-dasharray="4,2" opacity="0.6"/>`;
      
      // Mirrored sweeping curves
      topScrolls += `<path d="M ${W - 30},350 C ${W - 50},180 ${W * 0.5},170 40,130" fill="none" stroke="url(#g${pfx})" stroke-width="6" opacity="0.95"/>`;
      topScrolls += `<path d="M ${W - 30},350 C ${W - 50},180 ${W * 0.5},170 40,130" fill="none" stroke="url(#g${pfx})" stroke-width="2.2" stroke-dasharray="6,4" opacity="0.8"/>`;
      topScrolls += `<path d="M 60,350 C ${W * 0.35},220 ${W * 0.75},240 ${W - 40},160" fill="none" stroke="url(#g${pfx})" stroke-width="5" opacity="0.9"/>`;
      topScrolls += `<path d="M ${W - 100},350 C ${W - 130},220 ${W - 180},240 ${W - 220},160" fill="none" stroke="url(#g${pfx})" stroke-width="3.5" opacity="0.8"/>`;
      topScrolls += `<path d="M ${W - 240},350 C ${W - 270},220 ${W - 320},240 ${W - 360},160" fill="none" stroke="url(#g${pfx})" stroke-width="3.5" opacity="0.8"/>`;
      
      topScrolls += `<path d="M ${W - 180},220 Q ${W - 150},180 ${W - 120},210 Z" fill="url(#g${pfx})" opacity="0.85"/>`;
      topScrolls += `<path d="M ${W - 340},220 Q ${W - 310},180 ${W - 280},210 Z" fill="url(#g${pfx})" opacity="0.85"/>`;
      
      topScrolls += `<circle cx="70" cy="150" r="14" fill="none" stroke="url(#g${pfx})" stroke-width="2"/>`;
      topScrolls += `<circle cx="70" cy="150" r="7" fill="url(#g${pfx})"/>`;
      topScrolls += `<circle cx="${W - 80}" cy="180" r="12" fill="none" stroke="url(#g${pfx})" stroke-width="2"/>`;
      topScrolls += `<circle cx="${W - 80}" cy="180" r="5" fill="url(#g${pfx})"/>`;
      topScrolls += `<circle cx="${W - 160}" cy="170" r="9" fill="none" stroke="url(#g${pfx})" stroke-width="1.8"/>`;
      topScrolls += `<circle cx="${W - 160}" cy="170" r="4" fill="url(#g${pfx})"/>`;
      topScrolls += `<circle cx="${W - 320}" cy="160" r="9" fill="none" stroke="url(#g${pfx})" stroke-width="1.8"/>`;
      topScrolls += `<circle cx="${W - 320}" cy="160" r="4" fill="url(#g${pfx})"/>`;
    }

    // 4. Vertical Bars & Intermediate Scrollwork Fillers (y = 350 to H - 140)
    let bars = '';
    const numBars = 9;
    const cy = H - 430; // 570
    
    // Cross bars (horizontal rails)
    bars += `<line x1="0" y1="350" x2="${W}" y2="350" stroke="url(#g${pfx})" stroke-width="7"/>`;
    bars += `<line x1="0" y1="490" x2="${W}" y2="490" stroke="url(#g${pfx})" stroke-width="4.5" opacity="0.85"/>`;
    bars += `<line x1="0" y1="630" x2="${W}" y2="630" stroke="url(#g${pfx})" stroke-width="4.5" opacity="0.85"/>`;
    bars += `<line x1="0" y1="770" x2="${W}" y2="770" stroke="url(#g${pfx})" stroke-width="4.5" opacity="0.85"/>`;
    bars += `<line x1="0" y1="${H - 140}" x2="${W}" y2="${H - 140}" stroke="url(#g${pfx})" stroke-width="7"/>`;

    // Draw vertical bars
    for (let i = 1; i <= numBars; i++) {
      const x = (W / (numBars + 1)) * i;
      // Main bar line
      bars += `<line x1="${x}" y1="350" x2="${x}" y2="${H - 140}" stroke="url(#g${pfx})" stroke-width="5.5" opacity="0.95"/>`;
      
      // Knuckles and collars at horizontal cross intersections
      // Top intersection (y = 350)
      bars += `<rect x="${x - 7}" y="346" width="14" height="8" fill="url(#g${pfx})"/>`;
      // Spearhead/Fleur-de-lis finial above y = 350
      bars += `<path d="M ${x - 8},350 L ${x},322 L ${x + 8},350 Z" fill="url(#g${pfx})" />`;
      bars += `<path d="M ${x - 12},340 Q ${x},330 ${x + 12},340" fill="none" stroke="url(#g${pfx})" stroke-width="1.8" />`;
      
      // Intermediate intersections (y = 490, 630, 770)
      bars += `<circle cx="${x}" cy="490" r="6" fill="url(#g${pfx})"/>`;
      bars += `<circle cx="${x}" cy="630" r="6" fill="url(#g${pfx})"/>`;
      bars += `<circle cx="${x}" cy="770" r="6" fill="url(#g${pfx})"/>`;
      
      // Knuckle line (y = cy = 570)
      bars += `<rect x="${x - 7}" y="${cy - 8}" width="14" height="2" fill="url(#g${pfx})"/>`;
      bars += `<circle cx="${x}" cy="${cy}" r="7" fill="url(#g${pfx})"/>`;
      bars += `<rect x="${x - 7}" y="${cy + 6}" width="14" height="2" fill="url(#g${pfx})"/>`;
      
      // Bottom intersection (y = H - 140 = 860)
      bars += `<rect x="${x - 7}" y="${H - 147}" width="14" height="8" fill="url(#g${pfx})"/>`;
      bars += `<circle cx="${x}" cy="${H - 152}" r="5.5" fill="none" stroke="url(#g${pfx})" stroke-width="1.8"/>`;
      
      // Little scroll wings attaching bars to bottom rail
      bars += `<path d="M ${x - 12},${H - 140} Q ${x},${H - 165} ${x + 12},${H - 140}" fill="none" stroke="url(#g${pfx})" stroke-width="2.5" opacity="0.8"/>`;
    }

    // Scrollwork fillers between bars (10 slots)
    const slotWidth = W / (numBars + 1); // 50
    for (let j = 0; j <= numBars; j++) {
      const midX = slotWidth * (j + 0.5);

      // Section A: y = 350 to 490 (C-scroll heart pairs + center rosette)
      bars += `<path d="M ${midX},362 C ${midX - 22},370 ${midX - 22},470 ${midX},478" fill="none" stroke="url(#g${pfx})" stroke-width="2.2" opacity="0.85"/>`;
      bars += `<path d="M ${midX},362 C ${midX + 22},370 ${midX + 22},470 ${midX},478" fill="none" stroke="url(#g${pfx})" stroke-width="2.2" opacity="0.85"/>`;
      bars += `<circle cx="${midX}" cy="420" r="4.5" fill="url(#g${pfx})"/>`;
      bars += `<circle cx="${midX}" cy="420" r="8" fill="none" stroke="url(#g${pfx})" stroke-width="1" stroke-dasharray="2,2"/>`;

      // Section B: y = 490 to 630 (S-scroll ribbons)
      bars += `<path d="M ${midX - 11},500 C ${midX + 16},525 ${midX - 16},595 ${midX + 11},620" fill="none" stroke="url(#g${pfx})" stroke-width="2.2" opacity="0.8"/>`;
      bars += `<circle cx="${midX}" cy="560" r="3.5" fill="url(#g${pfx})"/>`;

      // Section C: y = 630 to 770 (Inverted C-scroll hearts + center rosette)
      bars += `<path d="M ${midX},642 C ${midX - 22},650 ${midX - 22},750 ${midX},758" fill="none" stroke="url(#g${pfx})" stroke-width="2.2" opacity="0.85"/>`;
      bars += `<path d="M ${midX},642 C ${midX + 22},650 ${midX + 22},750 ${midX},758" fill="none" stroke="url(#g${pfx})" stroke-width="2.2" opacity="0.85"/>`;
      bars += `<circle cx="${midX}" cy="700" r="4.5" fill="url(#g${pfx})"/>`;

      // Section D: y = 770 to 860 (Cross braces with micro-ring center)
      bars += `<path d="M ${midX - 16},782 L ${midX + 16},848" fill="none" stroke="url(#g${pfx})" stroke-width="1.8" opacity="0.75"/>`;
      bars += `<path d="M ${midX + 16},782 L ${midX - 16},848" fill="none" stroke="url(#g${pfx})" stroke-width="1.8" opacity="0.75"/>`;
      bars += `<circle cx="${midX}" cy="815" r="4" fill="none" stroke="url(#g${pfx})" stroke-width="1.5"/>`;
    }

    // 5. Heavy Baroque Cartouche framing the Coat of Arms
    let cartouche = '';
    const cx = W * 0.5;
    const cty = H - 340;
    
    // Backing plate
    cartouche += `<path d="M ${cx - 75},${cty} C ${cx - 75},${cty - 90} ${cx + 75},${cty - 90} ${cx + 75},${cty} C ${cx + 75},${cty + 90} ${cx - 75},${cty + 90} Z" fill="rgba(18,14,8,0.95)" stroke="url(#g${pfx})" stroke-width="5" />`;
    cartouche += `<path d="M ${cx - 65},${cty} C ${cx - 65},${cty - 80} ${cx + 65},${cty - 80} ${cx + 65},${cty} C ${cx + 65},${cty + 80} ${cx - 65},${cty + 80} Z" fill="none" stroke="url(#g${pfx})" stroke-width="1.8" stroke-dasharray="5,3" opacity="0.85" />`;
    
    // Crown on top of Cartouche (y = cty - 90 to cty - 145)
    const cbY = cty - 90;
    cartouche += `<rect x="${cx - 40}" y="${cbY - 10}" width="80" height="10" fill="url(#g${pfx})" rx="2"/>`;
    cartouche += `<circle cx="${cx - 25}" cy="${cbY - 5}" r="2" fill="#fff"/>`;
    cartouche += `<circle cx="${cx}" cy="${cbY - 5}" r="2.2" fill="#ffd700"/>`;
    cartouche += `<circle cx="${cx + 25}" cy="${cbY - 5}" r="2" fill="#fff"/>`;
    cartouche += `<path d="M ${cx - 35},${cbY - 10} Q ${cx - 30},${cbY - 35} ${cx},${cbY - 38} Q ${cx + 30},${cbY - 35} ${cx + 35},${cbY - 10} Z" fill="none" stroke="url(#g${pfx})" stroke-width="4.5"/>`;
    cartouche += `<path d="M ${cx - 20},${cbY - 10} Q ${cx - 15},${cbY - 30} ${cx},${cbY - 32} Q ${cx + 15},${cbY - 30} ${cx + 20},${cbY - 10} Z" fill="none" stroke="url(#g${pfx})" stroke-width="2"/>`;
    cartouche += `<circle cx="${cx}" cy="${cbY - 42}" r="4" fill="url(#g${pfx})"/>`;
    cartouche += `<path d="M ${cx - 1},${cbY - 52} L ${cx + 1},${cbY - 52} L ${cx + 1},${cbY - 46} L ${cx - 1},${cbY - 46} Z M ${cx - 4},${cbY - 50} L ${cx + 4},${cbY - 50} L ${cx + 4},${cbY - 48} L ${cx - 4},${cbY - 48} Z" fill="url(#g${pfx})"/>`;
    
    // Side acanthus wings
    cartouche += `<path d="M ${cx - 75},${cty} Q ${cx - 105},${cty - 50} ${cx - 90},${cty - 85} Q ${cx - 60},${cty - 60} ${cx - 75},${cty}" fill="url(#g${pfx})" opacity="0.95"/>`;
    cartouche += `<path d="M ${cx + 75},${cty} Q ${cx + 105},${cty - 50} ${cx + 90},${cty - 85} Q ${cx + 60},${cty - 60} ${cx + 75},${cty}" fill="url(#g${pfx})" opacity="0.95"/>`;
    cartouche += `<path d="M ${cx - 75},${cty} Q ${cx - 105},${cty + 50} ${cx - 90},${cty + 85} Q ${cx - 60},${cty + 60} ${cx - 75},${cty}" fill="url(#g${pfx})" opacity="0.95"/>`;
    cartouche += `<path d="M ${cx + 75},${cty} Q ${cx + 105},${cty + 50} ${cx + 90},${cty + 85} Q ${cx + 60},${cty + 60} ${cx + 75},${cty}" fill="url(#g${pfx})" opacity="0.95"/>`;
    
    // Flanking acanthus leaves
    cartouche += `<path d="M ${cx - 75},${cty - 40} Q ${cx - 120},${cty - 80} ${cx - 100},${cty - 110} Q ${cx - 80},${cty - 70} ${cx - 75},${cty - 40}" fill="url(#g${pfx})" opacity="0.9"/>`;
    cartouche += `<path d="M ${cx + 75},${cty - 40} Q ${cx + 120},${cty - 80} ${cx + 100},${cty - 110} Q ${cx + 80},${cty - 70} ${cx + 75},${cty - 40}" fill="url(#g${pfx})" opacity="0.9"/>`;
    cartouche += `<path d="M ${cx - 75},${cty + 40} Q ${cx - 120},${cty + 80} ${cx - 100},${cty + 110} Q ${cx - 80},${cty + 70} ${cx - 75},${cty + 40}" fill="url(#g${pfx})" opacity="0.9"/>`;
    cartouche += `<path d="M ${cx + 75},${cty + 40} Q ${cx + 120},${cty + 80} ${cx + 100},${cty + 110} Q ${cx + 80},${cty + 70} ${cx + 75},${cty + 40}" fill="url(#g${pfx})" opacity="0.9"/>`;

    // Bottom center swag / pendant
    cartouche += `<path d="M ${cx - 50},${cty + 80} Q ${cx},${cty + 120} ${cx + 50},${cty + 80} Q ${cx},${cty + 100} ${cx - 50},${cty + 80}" fill="url(#g${pfx})" opacity="0.9"/>`;
    cartouche += `<path d="M ${cx - 30},${cty + 85} Q ${cx},${cty + 110} ${cx + 30},${cty + 85}" fill="none" stroke="url(#g${pfx})" stroke-width="2" opacity="0.8"/>`;
    cartouche += `<path d="M ${cx - 15},${cty + 90} L ${cx},${cty + 115} L ${cx + 15},${cty + 90} Z" fill="url(#g${pfx})"/>`;
    cartouche += `<circle cx="${cx}" cy="${cty + 122}" r="5.5" fill="url(#g${pfx})"/>`;

    // 6. Injected Coat of Arms
    const crestW = 96;
    const crestH = 100;
    const crestX = cx - crestW / 2;
    const crestY = cty - crestH / 2;
    const crestImg = `<image href="assets/coat_of_arms.svg" x="${crestX}" y="${crestY}" width="${crestW}" height="${crestH}" />`;

    // Top frieze band (kept for classical architecture)
    let frieze = '';
    const fh = 70, fs = 28;
    frieze += `<rect x="0" y="0" width="${W}" height="${fh}" fill="rgba(24,16,8,0.55)"/>`;
    for (let x = 0; x < W; x += fs) {
      frieze += `<rect x="${x + 2}" y="4" width="${fs - 4}" height="${fh - 8}" rx="3" fill="none" stroke="url(#g${pfx})" stroke-width="1.2" opacity="0.85"/>`;
      frieze += `<circle cx="${x + fs / 2}" cy="${fh / 2}" r="${fs * 0.22}" fill="none" stroke="url(#g${pfx})" stroke-width="1.5"/>`;
      frieze += `<circle cx="${x + fs / 2}" cy="${fh / 2}" r="${fs * 0.1}" fill="url(#g${pfx})" opacity="0.85"/>`;
      frieze += `<line x1="${x + fs / 2}" y1="4" x2="${x + fs / 2}" y2="${fh - 4}" stroke="url(#g${pfx})" stroke-width="0.8" opacity="0.4"/>`;
    }

    // Corner brackets
    let cornerScrolls = '';
    if (L) {
      // Bottom-Outer corner (x = 0, y = H)
      cornerScrolls += `<path d="M 14,${H - 14} Q 60,${H - 60} 14,${H - 110} M 14,${H - 14} Q 60,${H - 60} 110,${H - 14}" fill="none" stroke="url(#g${pfx})" stroke-width="4.5" opacity="0.95"/>`;
      cornerScrolls += `<path d="M 14,${H - 14} C 45,${H - 45} 45,${H - 80} 14,${H - 80}" fill="none" stroke="url(#g${pfx})" stroke-width="2" opacity="0.8"/>`;
      cornerScrolls += `<circle cx="42" cy="${H - 42}" r="5" fill="url(#g${pfx})"/>`;
      
      // Bottom-Inner corner (x = W = 500, y = H)
      cornerScrolls += `<path d="M ${W - 14},${H - 14} Q ${W - 60},${H - 60} ${W - 14},${H - 110} M ${W - 14},${H - 14} Q ${W - 60},${H - 60} ${W - 110},${H - 14}" fill="none" stroke="url(#g${pfx})" stroke-width="4.5" opacity="0.95"/>`;
      cornerScrolls += `<path d="M ${W - 14},${H - 14} C ${W - 45},${H - 45} ${W - 45},${H - 80} ${W - 14},${H - 80}" fill="none" stroke="url(#g${pfx})" stroke-width="2" opacity="0.8"/>`;
      cornerScrolls += `<circle cx="${W - 42}" cy="${H - 42}" r="5" fill="url(#g${pfx})"/>`;

      // Middle-Outer corner where the arch starts (x = 0, y = 250)
      cornerScrolls += `<path d="M 14,250 Q 55,270 14,310 M 14,250 Q 55,270 75,250" fill="none" stroke="url(#g${pfx})" stroke-width="4" opacity="0.9"/>`;
      cornerScrolls += `<circle cx="36" cy="272" r="4" fill="url(#g${pfx})"/>`;
    } else {
      // Bottom-Outer corner (x = W = 500, y = H)
      cornerScrolls += `<path d="M ${W - 14},${H - 14} Q ${W - 60},${H - 60} ${W - 14},${H - 110} M ${W - 14},${H - 14} Q ${W - 60},${H - 60} ${W - 110},${H - 14}" fill="none" stroke="url(#g${pfx})" stroke-width="4.5" opacity="0.95"/>`;
      cornerScrolls += `<path d="M ${W - 14},${H - 14} C ${W - 45},${H - 45} ${W - 45},${H - 80} ${W - 14},${H - 80}" fill="none" stroke="url(#g${pfx})" stroke-width="2" opacity="0.8"/>`;
      cornerScrolls += `<circle cx="${W - 42}" cy="${H - 42}" r="5" fill="url(#g${pfx})"/>`;
      
      // Bottom-Inner corner (x = 0, y = H)
      cornerScrolls += `<path d="M 14,${H - 14} Q 60,${H - 60} 14,${H - 110} M 14,${H - 14} Q 60,${H - 60} 110,${H - 14}" fill="none" stroke="url(#g${pfx})" stroke-width="4.5" opacity="0.95"/>`;
      cornerScrolls += `<path d="M 14,${H - 14} C 45,${H - 45} 45,${H - 80} 14,${H - 80}" fill="none" stroke="url(#g${pfx})" stroke-width="2" opacity="0.8"/>`;
      cornerScrolls += `<circle cx="42" cy="${H - 42}" r="5" fill="url(#g${pfx})"/>`;

      // Middle-Outer corner where the arch starts (x = W = 500, y = 250)
      cornerScrolls += `<path d="M ${W - 14},250 Q ${W - 55},270 ${W - 14},310 M ${W - 14},250 Q ${W - 55},270 ${W - 75},250" fill="none" stroke="url(#g${pfx})" stroke-width="4" opacity="0.9"/>`;
      cornerScrolls += `<circle cx="${W - 36}" cy="272" r="4" fill="url(#g${pfx})"/>`;
    }

    // Pointed Moorish arch edge (inner edge of panel)
    const archEdge = L
      ? `M 0,${H} L 0,250 Q ${W*0.35},140 ${W},100`
      : `M ${W},${H} L ${W},250 Q ${W*0.65},140 0,100`;
    const archEdge2 = L
      ? `M 10,${H} L 10,255 Q ${W*0.35 + 2},148 ${W - 10},108`
      : `M ${W - 10},${H} L ${W - 10},255 Q ${W*0.65 - 2},148 10,108`;

    // Clip: cut panel along arch edge so background shows through
    const clipId = `archClip${pfx}`;
    const clipPath = L
      ? `<clipPath id="${clipId}"><path d="M 0,${H} L 0,250 Q ${W*0.35},140 ${W},100 L ${W},${H} Z"/></clipPath>`
      : `<clipPath id="${clipId}"><path d="M ${W},${H} L ${W},250 Q ${W*0.65},140 0,100 L 0,${H} Z"/></clipPath>`;

    // Seam bar (vertical gold bar along inner edge where doors meet)
    const seamBar = L
      ? `<rect x="${W - 14}" y="100" width="14" height="${H - 100}" fill="url(#g${pfx})"/>`
      : `<rect x="0" y="100" width="14" height="${H - 100}" fill="url(#g${pfx})"/>`;

    // Outer frame
    const frame = `
      <rect x="0" y="0" width="${W}" height="${H}" fill="none" stroke="url(#g${pfx})" stroke-width="14"/>
      <rect x="7" y="7" width="${W - 14}" height="${H - 14}" fill="none" stroke="url(#g${pfx})" stroke-width="2.5" opacity="0.5"/>`;

    const defs = `<defs>
      <linearGradient id="g${pfx}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stop-color="#5c2d00"/>
        <stop offset="20%"  stop-color="#b06010"/>
        <stop offset="48%"  stop-color="#ffd050"/>
        <stop offset="52%"  stop-color="#ffe878"/>
        <stop offset="80%"  stop-color="#b06010"/>
        <stop offset="100%" stop-color="#5c2d00"/>
      </linearGradient>
      <linearGradient id="g${pfx}v" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stop-color="#5c2d00"/>
        <stop offset="40%"  stop-color="#c07820"/>
        <stop offset="50%"  stop-color="#ffd050"/>
        <stop offset="60%"  stop-color="#c07820"/>
        <stop offset="100%" stop-color="#5c2d00"/>
      </linearGradient>
      <filter id="glow${pfx}">
        <feGaussianBlur stdDeviation="3.5" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      ${clipPath}
    </defs>`;

    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%">
      ${defs}
      <!-- Unclipped Group for Top Pediment -->
      <g filter="url(#glow${pfx})">
        ${pediment}
      </g>
      <!-- Clipped Group for Gate Content -->
      <g clip-path="url(#${clipId})">
        <g filter="url(#glow${pfx})">
          ${bars}
          ${kickPlate}
          ${topScrolls}
          ${cartouche}
          ${crestImg}
          ${frieze}
          ${frame}
          ${seamBar}
          ${cornerScrolls}
          <path d="${archEdge}" fill="none" stroke="url(#g${pfx})" stroke-width="14"/>
          <path d="${archEdge2}" fill="none" stroke="url(#g${pfx})" stroke-width="3" opacity="0.5"/>
        </g>
      </g>
    </svg>`;
  }

  return { left: panel('L'), right: panel('R') };
}

// ── GATE Logic ───────────────────────────────────────────────
const GATE = {
  SALT: 'VANLAX_GATE_2026',
  EXPIRY: 3 * 24 * 60 * 60 * 1000,

  deviceId() {
    const s = [navigator.userAgent, navigator.language,
      screen.width+'x'+screen.height+'x'+screen.colorDepth,
      new Date().getTimezoneOffset(),
      navigator.hardwareConcurrency||0, navigator.platform].join('|');
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
    return (h >>> 0).toString(36);
  },

  async hashCode(raw) {
    const str = this.SALT + raw.trim().toUpperCase().replace(/[\s-]/g,'');
    // re-add expected dashes: first 3 chars, then 4, then 4
    const norm = this.SALT + raw.trim().toUpperCase();
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(norm));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
  },

  async getIP() {
    try { return (await (await fetch('https://api.ipify.org?format=json')).json()).ip; }
    catch { return 'unknown'; }
  },

  load() {
    try { return JSON.parse(localStorage.getItem('vanlax_gate') || 'null'); }
    catch { return null; }
  },

  save(hash, ip) {
    const now = Date.now();
    const d = { h: hash, dev: this.deviceId(), t: now, exp: now + this.EXPIRY, ip };
    localStorage.setItem('vanlax_gate', JSON.stringify(d));
    document.cookie = `vlg=${btoa(hash+':'+d.dev)};max-age=${this.EXPIRY/1000};path=/;SameSite=Strict`;
  },

  isValid() {
    const d = this.load();
    if (!d) return false;
    if (Date.now() > d.exp) { localStorage.removeItem('vanlax_gate'); return false; }
    if (d.dev !== this.deviceId()) return false;
    if (!GATE_HASHES.has(d.h)) return false;
    return true;
  },

  async validate(code) {
    const h = await this.hashCode(code);
    return GATE_HASHES.has(h) ? h : null;
  }
};

// ── UI Functions ─────────────────────────────────────────────
async function submitInviteCode() {
  const inp  = document.getElementById('invite-code-input');
  const btn  = document.getElementById('invite-submit-btn');
  const err  = document.getElementById('gate-error');
  const code = inp.value.trim();
  if (!code) { inp.focus(); return; }

  btn.textContent = 'VERIFYING…';
  btn.disabled = true;
  err.textContent = '';

  const hash = await GATE.validate(code);
  if (hash) {
    const ip = await GATE.getIP();
    GATE.save(hash, ip);

    // Show success state
    document.getElementById('gate-form').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('gate-form').style.display = 'none';
      document.getElementById('gate-success').style.display = 'block';
    }, 300);

    // Rise gate after 0.9s
    setTimeout(openGate, 900);
  } else {
    err.textContent = 'Invalid invite code. Please try again.';
    inp.classList.add('shake');
    inp.addEventListener('animationend', () => inp.classList.remove('shake'), { once: true });
    btn.textContent = 'VERIFY ACCESS';
    btn.disabled = false;
    inp.focus();
  }
}

// Enter Phi Geometry page (separate locked page)
window.enterPhi = function(lang) {
  const dest = lang === 'ru' ? 'phi-geometry-ru.html' : 'phi-geometry.html';
  if (GATE.isValid()) {
    window.location.href = dest;
  } else {
    window._vanlaxPendingNav = () => { window.location.href = dest; };
    showGatePopup();
  }
};

// Enter Spirals of Time page (separate locked page)
window.enterSpirals = function() {
  const isRu = window.location.pathname.includes('-ru');
  const dest = isRu ? 'spirals-of-time.html' : 'spirals-of-time-en.html';
  if (GATE.isValid()) {
    window.location.href = dest;
  } else {
    window._vanlaxPendingNav = () => { window.location.href = dest; };
    showGatePopup();
  }
};

// Close popup without entering code
function closeGatePopup() {
  // On a fully locked page (e.g. phi-geometry), send user back to hub
  if (window.GATE_LOCKED_PAGE) {
    const isRu = window.location.pathname.includes('-ru') || (window.location.pathname.includes('spirals-of-time') && !window.location.pathname.includes('-en'));
    window.location.href = isRu ? 'index-ru.html' : 'index.html';
    return;
  }
  const overlay = document.getElementById('welcome-popup-overlay');
  const gate    = document.getElementById('gothic-gate-container');
  if (overlay) { overlay.style.transition = 'opacity 0.4s ease'; overlay.style.opacity = '0'; setTimeout(() => { overlay.style.display = 'none'; overlay.style.opacity = '1'; overlay.style.transition = ''; }, 420); }
  if (gate)    gate.style.display = 'none';
  window._vanlaxPendingNav = null;
}

// Show invite popup when user clicks a restricted section
function showGatePopup() {
  const gateEl  = document.getElementById('gothic-gate-container');
  const overlay = document.getElementById('welcome-popup-overlay');
  if (gateEl)  { gateEl.style.display = 'block'; gateEl.classList.remove('gate-opening'); }
  if (overlay) { overlay.style.display = 'flex'; overlay.style.opacity = '1'; overlay.style.transition = ''; }
  const form    = document.getElementById('gate-form');
  const success = document.getElementById('gate-success');
  const err     = document.getElementById('gate-error');
  const btn     = document.getElementById('invite-submit-btn');
  const inp     = document.getElementById('invite-code-input');
  if (form)    { form.style.display = ''; form.style.opacity = '1'; }
  if (success) success.style.display = 'none';
  if (err)     err.textContent = '';
  if (btn)     { btn.textContent = 'VERIFY ACCESS'; btn.disabled = false; }
  if (inp)     { inp.value = ''; setTimeout(() => inp.focus(), 100); }
}

function openGate() {
  const gate    = document.getElementById('gothic-gate-container');
  const overlay = document.getElementById('welcome-popup-overlay');

  if (gate) gate.classList.add('gate-opening');

  setTimeout(() => {
    if (overlay) { overlay.style.transition = 'opacity 0.9s ease'; overlay.style.opacity = '0'; }
  }, 1200);

  setTimeout(() => {
    if (overlay) overlay.style.display = 'none';
    if (gate)    gate.style.display    = 'none';
    // Proceed to the section user originally clicked
    if (window._vanlaxPendingNav) {
      const nav = window._vanlaxPendingNav;
      window._vanlaxPendingNav = null;
      nav();
    }
  }, 2400);
}

function acceptCookies() {
  const b = document.getElementById('cookie-banner');
  b.classList.add('hidden');
  b.addEventListener('animationend', () => b.style.display = 'none', { once: true });
  localStorage.setItem('vanlax_cookies', '1');
}

// ── Auto-format input ────────────────────────────────────────
function formatCodeInput(e) {
  let v = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (v.length > 3) v = v.slice(0,3) + '-' + v.slice(3);
  if (v.length > 8) v = v.slice(0,8) + '-' + v.slice(8);
  e.target.value = v.slice(0, 13);
}

// ── Init ─────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Build two-panel baroque gate (hidden by default)
  const gateEl = document.getElementById('gothic-gate-container');
  if (gateEl) {
    const panels = buildGateSVG();
    const left = document.createElement('div');
    left.className = 'gate-panel-left';
    left.innerHTML = panels.left;
    const right = document.createElement('div');
    right.className = 'gate-panel-right';
    right.innerHTML = panels.right;
    gateEl.appendChild(left);
    gateEl.appendChild(right);
    gateEl.style.display = 'none';
  }

  // Overlay always hidden on load — shown only when entering restricted section
  const overlay = document.getElementById('welcome-popup-overlay');
  if (overlay) overlay.style.display = 'none';

  // Cookie banner
  if (localStorage.getItem('vanlax_cookies') === '1') {
    const cb = document.getElementById('cookie-banner');
    if (cb) cb.style.display = 'none';
  }

  // Input events
  const inp = document.getElementById('invite-code-input');
  if (inp) {
    inp.addEventListener('input', formatCodeInput);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') submitInviteCode(); });
  }

  // On fully locked pages (phi-geometry etc.), show gate immediately if not valid
  if (window.GATE_LOCKED_PAGE) {
    if (!GATE.isValid()) {
      showGatePopup();
    }
    return; // No need to wrap flyThrough/enterSection on standalone pages
  }

  // DNA positions that require an invite code (for flyThrough)
  const RESTRICTED_FLY = new Set([1, 2, 3, 4, 5, 10, 12]);
  // Gallery container IDs that require an invite code (for enterSection)
  const RESTRICTED_SECTION = new Set([1, 2, 3, 4, 9, 11]);

  // Wrap flyThrough
  if (typeof window.flyThrough === 'function') {
    const _orig = window.flyThrough;
    window.flyThrough = function(n, ...args) {
      if (RESTRICTED_FLY.has(n) && !GATE.isValid()) {
        window._vanlaxPendingNav = () => _orig.call(window, n, ...args);
        showGatePopup();
        return;
      }
      _orig.call(window, n, ...args);
    };
  }

  // Wrap enterSection
  if (typeof window.enterSection === 'function') {
    const _orig = window.enterSection;
    window.enterSection = function(n, ...args) {
      if (RESTRICTED_SECTION.has(n) && !GATE.isValid()) {
        window._vanlaxPendingNav = () => _orig.call(window, n, ...args);
        showGatePopup();
        return;
      }
      _orig.call(window, n, ...args);
    };
  }
});
