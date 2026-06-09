const a0_0x13ec4c = a0_0x172c;
(function (_0xeae82b, _0x1e5a8c) {
  const _0x269e7e = a0_0x172c,
    _0x562573 = _0xeae82b();
  while (!![]) {
    try {
      const _0x1e47f8 =
        -parseInt(_0x269e7e(0x131)) / 0x1 +
        -parseInt(_0x269e7e(0x1da)) / 0x2 +
        (parseInt(_0x269e7e(0x1e6)) / 0x3) *
          (-parseInt(_0x269e7e(0x158)) / 0x4) +
        parseInt(_0x269e7e(0x157)) / 0x5 +
        parseInt(_0x269e7e(0x1a8)) / 0x6 +
        (-parseInt(_0x269e7e(0x11c)) / 0x7) *
          (-parseInt(_0x269e7e(0x1c5)) / 0x8) +
        parseInt(_0x269e7e(0x147)) / 0x9;
      if (_0x1e47f8 === _0x1e5a8c) break;
      else _0x562573["push"](_0x562573["shift"]());
    } catch (_0x33ca68) {
      _0x562573["push"](_0x562573["shift"]());
    }
  }
})(a0_0x4df6, 0x3fe51);
const canvas = document[a0_0x13ec4c(0x193)](a0_0x13ec4c(0x190)),
  ctx = canvas[a0_0x13ec4c(0x111)]("2d"),
  playPauseBtn = document[a0_0x13ec4c(0x193)](a0_0x13ec4c(0x1fd)),
  randomizeBtn = document[a0_0x13ec4c(0x193)]("randomize"),
  shapeNameEl = document[a0_0x13ec4c(0x193)]("shape-name"),
  valLrpmEl = document[a0_0x13ec4c(0x193)](a0_0x13ec4c(0x194)),
  valRrpmEl = document[a0_0x13ec4c(0x193)](a0_0x13ec4c(0x178)),
  valSymmetryEl = document[a0_0x13ec4c(0x193)]("val-symmetry"),
  AM = Math["PI"] / 0xb4,
  isRu = document[a0_0x13ec4c(0x159)][a0_0x13ec4c(0x13b)] === "ru";
let width,
  height,
  cx,
  cy,
  isPlaying = !![],
  isInfiniteMode = !![],
  totalSteps = 0x0,
  time = 0x0,
  rot = { l: 0x0, r: 0x0, c: 0x0 },
  pen = { x: null, y: null },
  startPoint = null,
  isFinished = ![];
const SVG_MAX = 0x7a120;
let svgBuffer = [],
  svgBufferPos = 0x0,
  vignetteGradient = null;
const SCHEMES = [
  { name: a0_0x13ec4c(0x143), ruName: "Радуга" },
  { name: "Ethereal\x20Gold", ruName: a0_0x13ec4c(0x115) },
  { name: a0_0x13ec4c(0x197), ruName: "Глубины\x20Океана" },
  { name: a0_0x13ec4c(0x12a), ruName: "Священный\x20Огонь" },
  { name: "Electric\x20Neon", ruName: a0_0x13ec4c(0x13d) },
  { name: a0_0x13ec4c(0x1a9), ruName: a0_0x13ec4c(0x1b2) },
  { name: a0_0x13ec4c(0x139), ruName: "Призма" },
  { name: a0_0x13ec4c(0x169), ruName: a0_0x13ec4c(0x180) },
  { name: a0_0x13ec4c(0x19e), ruName: a0_0x13ec4c(0x164) },
  { name: a0_0x13ec4c(0x1f1), ruName: "Вечный\x20Вихрь" },
];
let currentScheme = 0x0;
function a0_0x4df6() {
  const _0x355be2 = [
    "zhjPzNrm",
    "ywjZ",
    "phvZzsbOCMvMpsiJyxjTlwnVCMuIihrYyw5ZzM9YBt0ICM90yxrLka",
    "Dhj1zq",
    "BgLNAhrLCG",
    "y2fUDMfZ",
    "qNvYC3q",
    "Aw5SAw5LlwjSB2nR",
    "z2v0rwXLBwvUDej5swq",
    "DMfSlwXYCg0",
    "0khrGTcW0ydrGG",
    "CNjVDge",
    "rgvLCcbpy2vHBG",
    "CNvoyw1L",
    "y3jLyxrLrwXLBwvUDa",
    "tokcGsa",
    "BgvUz3rO",
    "AgvHzgvY",
    "zMLSBfjLy3q",
    "uMvKlujSDwuGrMXVDW",
    "Aw5UzxjxAwr0Aa",
    "y29Z",
    "0j/qVTgc0l7qUG",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "shvIicG",
    "cIaGpc9NpGO8l3n2zZ4",
    "CMfYBti",
    "CMDIysGXmJGSidaSidi1nsWGmc44nsK",
    "BgLUzvDPzhrO",
    "odK0mtC0yursExDR",
    "tw9UB2nOCM9Tzq",
    "Agj4",
    "0jhqTDgb0lRqVTc90lxrH9c90yVqUq",
    "DM9SDw1L",
    "z2v0sxrLBq",
    "0kxqSnc+0ylqUngh0l3rI9c5",
    "CMDIysG",
    "C2vHCMnO",
    "BMfTzq",
    "0jZqVTc90l7rHDga0l7qVa",
    "C2vNCW",
    "icbm4Okcia",
    "C2XPy2u",
    "AgfUzgXYB3q",
    "y29SB3i",
    "AgrPC3q",
    "CMDIysG1lduSmtaSmcK",
    "lMnVBNrYB2XZ",
    "ywrK",
    "zgf0yq",
    "Bw92zvrV",
    "iIbZDhjVA2u9iG",
    "yxnPBG",
    "i2u1yJiZnG",
    "BNvTyMvY",
    "Dg9cBg9I",
    "mtuWmda",
    "Dgv4DejHC2vSAw5L",
    "mtiWmdHoy1jdrgi",
    "zhjHD0LTywDL",
    "y2XPy2S",
    "0ktqUncZ0yprGncWinc10yNrKsdqS9c10l3qTDga0lJrGngd0lxrGTgb0y8UincF0ydqTDga0llqSngc0yWG0lGG0llrI9c50ylqUd8",
    "AM9PBG",
    "CMfUzg9T",
    "lcaXmdaLlca1mcuSidaUoduP",
    "0j/rG9c70yZrGq",
    "ChvZAa",
    "CMDIysGWlcaYmdKSidi1nsWGmc44nsK",
    "0khrGTc+0l8",
    "u3rVCa",
    "yMvNAw5qyxrO",
    "y3jVDge",
    "zMLSBfrLEhq",
    "vvjmihbHCNnLigvYCM9YoG",
    "4O+ZincG0lxqVDc00lxrGnc40l3qS+kaPG",
    "q2HHB3m",
    "lNbUzW",
    "rxjYB3i6igzHAwXLzcb0BYbJCMvHDguGAw1Hz2uGkg5VDcbLBM91z2GGBwvTB3j5pYK",
    "zMXVB3i",
    "nJKXnZK2u1LJuxLP",
    "0kxqSnc+0ye",
    "Z4NIGOeGpsa",
    "ihWGmtaWmmoxmtaWmcbWEcb8idmWmcbeueKGFcbuCMfUC3bHCMvUDcaTlt4kphn2zYb4BwXUCZ0IAhr0CdOVl3D3DY53mY5VCMCVmJaWmc9ZDMCIihHTBg5ZoNHSAw5RpsjODhrWoI8VD3D3lNCZlM9YzY8XotK5l3HSAw5RiGOGicaGihDPzhrOpsi",
    "z2XVyMfSqwXWAge",
    "phbHDgGGzd0I",
    "qwjYywTHzgfICMfF",
    "0j3qTDgcinc00ldqVDc90yVrHsdqTnc70y8G0y3qUTgb0l/qVTga0ylqSc4G0khqVDcW0yFqSnc70laG0l7rGDgc0ldqVDc+0llqUngc0luG0lpqTDc90lxrGncW0yBqUngolG",
    "ywrKq29SB3jtDg9W",
    "uhvSC2u",
    "BwLKzgXL",
    "qvnztq",
    "mJqYngfrB0DQzW",
    "tM8Gzgf0ysb0BYbLEhbVCNqUifn0B3aGz2vUzxjHDgLVBIbMAxjZDc4",
    "BgLUzvrV",
    "y3jLyxrLt2jQzwn0vvjm",
    "Aw1Hz2uVCg5N",
    "rhjPzNq",
    "C3LTBwv0CNK",
    "uMfUzg9T",
    "zM9UDa",
    "yM9KEq",
    "pc9KzxnJpGOGidXKzwzZpGOGicaGpceTlsbhBg93igjSDxiG4OcuihnVzNrLBNmGDgHLihrOAwnRigHHBg8GCgfZCYb3AxrOB3v0igeGyMfJA2DYB3vUzcaTlt4kicaGidXMAwX0zxiGAwq9iMDMiIb4psiTndaLiIb5psiTndaLiIb3Awr0Ad0ImtGWjsiGAgvPz2H0psiXodaLiJ4kicaGicaGpgzLr2f1C3nPyw5cBhvYihn0zerLDMLHDgLVBJ0ImI41iI8+cIaGica8l2zPBhrLCJ4kicaGidWHls0GugfZCYaXoIb0AgLJAYWGyMX1CNjLzcbNBg93ic0TpGOGicaGpgCGAwq9iMfYBs1NBg93iJ4kicaGicaG",
    "rxrLCM5HBcbwB3j0zxG",
    "Aw5Uzxjive1m",
    "icaGWRCGica",
    "A2v5zg93BG",
    "ywnVCW",
    "CMv2B2TLt2jQzwn0vvjm",
    "B3bHy2L0Eq",
    "CM91BMq",
    "C2vSzG",
    "CMDIysGWlca1nIWGmJu1lcaWlJG1kq",
    "CMvTB3zLq2HPBgq",
    "zgLZywjSzwq",
    "CgXHEs1WyxvZzq",
    "CMvTB3zL",
    "zw5KC1DPDgG",
    "CxvLCNLtzwXLy3rVCG",
    "iJ4kica8DgL0Bgu+",
    "icbs4Okcia",
    "zgjSy2XPy2S",
    "0jlqUngf0ydrJa",
    "BgfYBti",
    "u3rVCM0",
    "CxnM",
    "ywXWAgfIzxrPyW",
    "qujsquTbrefcuKeGieDftKvsqvrjvKuGieDbteXfuLK",
    "zMLSBfn0EwXL",
    "ksaGimk3icaG",
    "rg93BMXVywqGzMfPBgvKoIa",
    "C2HHzg93q29SB3i",
    "AhjLzG",
    "Agj5",
    "ChjLDMvUDerLzMf1Bhq",
    "yM90Dg9T",
    "BgLUzunHCa",
    "y29SB3iTBMfTzq",
    "z2v0q29UDgv4Da",
    "y29Kzq",
    "zxH0",
    "ChjVDg9JB2W",
    "0k3rHnc40ydqVDc+0luG0jFqVTc70l7rGTc+",
    "BwfW",
    "Aw5UzxjizwLNAhq",
    "iIbZDhjVA2uTB3bHy2L0Et0Imc4WnYiGC3rYB2TLlxDPzhrOpsiZiIbMAwXSpsjUB25LiIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIlZ4",
    "0j7rInc40lhqUTcWingn0lRrGDc/0l7rGngc0la6ia",
    "D2LKDgG",
    "y2vUDgvY",
    "mJm5nefUDLPlBW",
    "z2v0sw1Hz2veyxrH",
    "4PYtincH0lRqSngh0ldqVse",
    "cIaGica8l2C+cIaGica8is0TifbHC3mGmJOGDgHPBIWGC2HHCNaGy29YzsaTlt4kicaGidXNigLKpsjHCM0Ty29Yzsi+cIaGicaGia",
    "CMDIysG1lduSmtaSmsK",
    "v2LSza",
    "WQKGieLUC3bPCMvKigj5ifzHBIbmyxG",
    "CMvWBgfJzvn0yxrL",
    "z2v0",
    "4O+ZifjLBMrLCMLUz+kaPG",
    "0khqU9gd0yFqSnc50l3rI9c5",
    "ldaUoduP",
    "u3rHCNq",
    "y3jLyxrLuMfKAwfSr3jHzgLLBNq",
    "u2fJCMvKiezPCMu",
    "u1Ln",
    "pd94BwWGDMvYC2LVBJ0Ims4WiIbLBMnVzgLUzZ0IvvrgltGIpZ4kpceTlsbwyw4Gtgf4iefICMfRywrHyNjHihWG",
    "AhnSysG",
    "Dgv4DenVBNrLBNq",
    "zg93BMXVywq",
    "zxHPDfnLy3rPB24",
    "ndKXnZm0rvDYr29e",
    "y2vPBa",
    "CMDIysGYmJKSmtC4ldu0ldaUmtGP",
    "C2vJB25Kyxj5",
    "0kJrGTc+0ydqVa",
    "4PYtiev4Cg9YDgvKiq",
    "Z4NIGOiGpsa",
    "C3rYB2TLu3r5Bgu",
    "uhjPC20",
    "ndaWide1mhb4icjizwX2zxrPy2eGtMv1zsiSieHLBhzLDgLJysWGqxjPywWSihnHBNmTC2vYAwy",
    "BgfUzW",
    "CMDIysGYntuSide4ncWGmcWGmc44nsK",
    "0k3qU9c10lRrGTga0lJqUIdqNDc10l7qVq",
    "yxjJ",
    "BhjVDge",
    "rNjLzq",
    "0jtqUnc60lJqUq",
    "C3fYDa",
    "uMfPBMjVDW",
    "BMv4Dc1JB2XVCG",
    "z2XVyMfSq29TCg9ZAxrLt3bLCMf0Aw9U",
    "BwLU",
    "nJyYmJmWoeDlEufsAW",
    "zMLSBa",
    "0j7rInc40lhqUTcWoIdqVDc1ingd0ltqSnc70l7rGDgmingb0l7qT9c00ldrGTgminc40lFqVTcX0ydqSnc20lxqVDc40luGknc90lxqTnc+0yhrGTcW0ylqVTgh0l3qVIdqV9cW0lZrJ9gc0lG/kq",
    "DhjHBNnPDgLVBG",
    "ntaWidiYChGGiKHLBhzLDgLJysbozxvLiIWGsgvSDMv0AwnHlcbbCMLHBcWGC2fUCY1ZzxjPzG",
    "i2mWyZbJma",
    "BwvZC2fNzq",
    "y29SB3jTB2rL",
    "BgfYBte",
    "iZa1mduWyq",
    "cIaGicaGia",
    "ksiVpGOGicaG",
    "zhjPzNrd",
    "zxjYB3i",
    "i2zMzG",
    "zgv2AwnLugL4zwXsyxrPBW",
    "mta5nJKWrKXMzNfq",
    "mtu4ogDkuLbzCa",
    "zg9JDw1LBNrfBgvTzw50",
    "Dg9W",
    "rgLZDca",
    "C2LU",
    "sw5MAw5PDgu",
    "CMfYBte",
    "u3bPCMfS",
    "z2v0qM91BMrPBMDdBgLLBNrszwn0",
    "i2iWyJHJoa",
    "0jtrGnc10lNrHa",
    "qMXVB20",
    "0jRrGncW0yhqVDc+lDcH0lJqVDc40lKG0j/qVTgc0l7qUG",
    "0khqSTc+0lhqVTc00l3rI9c5",
    "vM9YDgv4",
    "mZaWidi0ChGGiKHLBhzLDgLJysbozxvLiIWGsgvSDMv0AwnHlcbbCMLHBcWGC2fUCY1ZzxjPzG",
    "Dgv4DefSAwDU",
    "vMLICMfUDcbsywLUyM93",
    "C2v0qxr0CMLIDxrL",
    "mZaWide4ChGGiKHLBhzLDgLJysbozxvLiIWGsgvSDMv0AwnHlcbbCMLHBcWGC2fUCY1ZzxjPzG",
    "Z4LJid0G",
    "CMDIysGYntuSidC3lcaWlcaWlJG1kq",
    "rMLNDxjLigLZihn0AwXSigDLBMvYyxrPBMCUieXLyxzLigfUExDHEt8",
    "y2XHC3nmAxn0",
    "AgLZDg9YEq",
    "z3jVD3rO",
    "cIaGpc9NpGOGidWHls0Gq29YzsbWyxnZicHJCMLZCcbSAw5LCYbVBIb0B3aPic0TpGOGidXNpGOGicaGphvZzsbOCMvMpsiJyxjTlwnVCMuIlZ4kicaGia",
    "phnWyw4GC3r5Bgu9iM9WywnPDhK6mc41o2zVBNqTD2vPz2H0oJiWmdSIpKfcuKflqurbqLjbpc9ZCgfUpIbhru5fuKfusvzfieDbteXfuLK",
    "ZRGGpsa",
    "C3rYB2TL",
    "4PYtincT0lRrGDc/0l7rGngc0lJrGnc+0llqSnc90l4H",
    "Dg9gAxHLza",
    "DMfSlxjYCg0",
    "BM9Uzq",
    "uUkcGsa",
    "iIbZDhjVA2uTB3bHy2L0Et0Imc41iIbZDhjVA2uTD2LKDgG9iJaUnsiGzMLSBd0IBM9UzsiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiI8+",
    "C2v0sxrLBq",
    "lca4mcuSidyWjsWGmc44nsK",
    "v2f2zq",
    "zhjPzNrs",
    "0k/rGnc60ldrJYdqOncW0ltrG9cZ0la",
    "Bg9JyxrPB24",
    "0kdqSngb0yBqSTc10yi",
    "Ag9ZDa",
    "rxH0ia",
    "zgLZCgXHEq",
    "CMLNAhq",
    "AgvPz2H0",
    "Bwf4",
    "C291CMnLlw92zxi",
    "C3r5Bgu",
  ];
  a0_0x4df6 = function () {
    return _0x355be2;
  };
  return a0_0x4df6();
}
const colorBtn = document["getElementById"](a0_0x13ec4c(0x144)),
  colorNameEl = document["getElementById"](a0_0x13ec4c(0x110));
let params = {
    speed: 0x64,
    colormode: 0x4,
    brightness: 0x1,
    crota: 0x4,
    hbx: 0x0,
    hby: -0x10e,
    hdist: 0xf5,
    lrota: 0x2,
    larm1: 0x49,
    larm2: 0xdd,
    rrota: -0x3,
    rarm1: 0x42,
    rarm2: 0x104,
    ext: 0x25,
    handlrot: 0x0,
    growth: 0x0,
    volume: 0x0,
    symmetry: 0x1,
  },
  targetParams = { ...params };
const SHAPE_NAMES = {
  en: [
    a0_0x13ec4c(0x1d6),
    a0_0x13ec4c(0x166),
    a0_0x13ec4c(0x103),
    a0_0x13ec4c(0x15f),
    a0_0x13ec4c(0x1e3),
    a0_0x13ec4c(0x163),
    "Flow",
    a0_0x13ec4c(0x191),
    a0_0x13ec4c(0x17e),
    a0_0x13ec4c(0x1eb),
  ],
  ru: [
    a0_0x13ec4c(0x1db),
    a0_0x13ec4c(0x204),
    a0_0x13ec4c(0x135),
    "Спираль",
    a0_0x13ec4c(0x1cc),
    a0_0x13ec4c(0x182),
    a0_0x13ec4c(0x1a1),
    "Взрыв",
    "Волна",
    a0_0x13ec4c(0x162),
  ],
};
function resize() {
  const _0x5e26d9 = a0_0x13ec4c,
    _0x2594d4 = window[_0x5e26d9(0x156)] || 0x1;
  ((width = window[_0x5e26d9(0x19f)]),
    (height = window[_0x5e26d9(0x117)]),
    (canvas["width"] = width * _0x2594d4),
    (canvas[_0x5e26d9(0x187)] = height * _0x2594d4),
    ctx["setTransform"](_0x2594d4, 0x0, 0x0, _0x2594d4, 0x0, 0x0),
    (cx = width / 0x2));
  const _0x4d3e36 = width < 0x300;
  if (_0x4d3e36) {
    const _0x7d63b0 = document[_0x5e26d9(0x200)](_0x5e26d9(0x19c)),
      _0x3c66bb = document[_0x5e26d9(0x200)](_0x5e26d9(0x1ba)),
      _0x4c2f25 = _0x7d63b0
        ? _0x7d63b0[_0x5e26d9(0x160)]()[_0x5e26d9(0x10e)]
        : 0x5a,
      _0x226aa7 = _0x3c66bb
        ? _0x3c66bb[_0x5e26d9(0x160)]()[_0x5e26d9(0x15a)]
        : height - 0xdc;
    cy = _0x4c2f25 + (_0x226aa7 - _0x4c2f25) / 0x2;
  } else cy = height / 0x2;
  (clearCanvas(), (vignetteGradient = null));
}
function clearCanvas() {
  const _0x575617 = a0_0x13ec4c;
  if (!ctx) return;
  ((ctx["globalCompositeOperation"] = _0x575617(0x189)),
    (ctx[_0x575617(0x107)] = _0x575617(0x150)),
    ctx[_0x575617(0x19d)](0x0, 0x0, width, height),
    (pen["x"] = null),
    (pen["y"] = null),
    (startPoint = null),
    (isFinished = ![]),
    (rot["l"] = params["handlrot"] || 0x0),
    (rot["r"] = 0x0),
    (rot["c"] = 0x0),
    (time = 0x0),
    (totalSteps = 0x0),
    (svgBuffer = []),
    (svgBufferPos = 0x0));
}
function drawMarker(_0x33121d, _0x26e983, _0x3fdb56) {
  const _0x56adf2 = a0_0x13ec4c,
    _0x4fd989 = Math[_0x56adf2(0x146)](width, height) / 0x708;
  (ctx["save"](),
    (ctx[_0x56adf2(0x145)] = _0x56adf2(0x189)),
    ctx["beginPath"](),
    ctx[_0x56adf2(0x13e)](
      _0x33121d,
      _0x26e983,
      0x5 * _0x4fd989,
      0x0,
      Math["PI"] * 0x2,
    ),
    (ctx[_0x56adf2(0x107)] = _0x3fdb56 ? _0x56adf2(0x155) : "#ff3366"),
    (ctx["shadowBlur"] = 0xf),
    (ctx[_0x56adf2(0x10a)] = _0x3fdb56 ? _0x56adf2(0x155) : "#ff3366"),
    ctx[_0x56adf2(0x148)](),
    !_0x3fdb56 &&
      (ctx[_0x56adf2(0x1d1)](),
      ctx[_0x56adf2(0x13e)](
        _0x33121d,
        _0x26e983,
        0x2 * _0x4fd989,
        0x0,
        Math["PI"] * 0x2,
      ),
      (ctx[_0x56adf2(0x107)] = "#fff"),
      ctx[_0x56adf2(0x148)]()),
    ctx["restore"]());
}
function getStrokeColor(_0x3d4510) {
  const _0x1d0773 = a0_0x13ec4c;
  let _0x11116c, _0x479c76, _0x90ea25;
  switch (currentScheme) {
    case 0x1:
      ((_0x11116c = 0xd2 + Math[_0x1d0773(0x15c)](_0x3d4510 * 0.5) * 0x2d),
        (_0x479c76 = 0xaa + Math["sin"](_0x3d4510 * 0.5 + 0x2) * 0x1e),
        (_0x90ea25 =
          0x50 + Math[_0x1d0773(0x15c)](_0x3d4510 * 0.5 + 0x4) * 0x28));
      break;
    case 0x2:
      ((_0x11116c = 0x14 + Math[_0x1d0773(0x15c)](_0x3d4510) * 0x14),
        (_0x479c76 = 0x8c + Math["sin"](_0x3d4510 + 0x1) * 0x73),
        (_0x90ea25 = 0xc8 + Math[_0x1d0773(0x15c)](_0x3d4510 + 0x2) * 0x37));
      break;
    case 0x3:
      ((_0x11116c = 0xdc + Math["sin"](_0x3d4510) * 0x23),
        (_0x479c76 = 0x46 + Math[_0x1d0773(0x15c)](_0x3d4510 + 0x1) * 0x3c),
        (_0x90ea25 = 0x14 + Math[_0x1d0773(0x15c)](_0x3d4510 + 0x2) * 0x14));
      break;
    case 0x4:
      ((_0x11116c = 0x96 + Math[_0x1d0773(0x15c)](_0x3d4510) * 0x69),
        (_0x479c76 = 0x1e + Math[_0x1d0773(0x15c)](_0x3d4510 + 0x1) * 0x1e),
        (_0x90ea25 = 0xdc + Math[_0x1d0773(0x15c)](_0x3d4510 + 0x2) * 0x23));
      break;
    case 0x5:
      const _0x48b749 = 0xb4 + Math["sin"](_0x3d4510) * 0x4b;
      _0x11116c = _0x479c76 = _0x90ea25 = _0x48b749;
      break;
    case 0x6:
      const _0x3f3808 = (_0x3d4510 * 0x3c) % 0x168;
      return _0x1d0773(0x12d) + _0x3f3808 + _0x1d0773(0x17d);
    case 0x7:
      const _0xcd9bd = ((_0x3d4510 * 0xb4) / Math["PI"]) % 0x168;
      return "hsla(" + _0xcd9bd + _0x1d0773(0x1cb);
    case 0x8:
      const _0xc3610f =
        (Math[_0x1d0773(0x15c)](_0x3d4510 * 0.5) * 0.5 + 0.5) * 0xf0;
      return _0x1d0773(0x12d) + _0xc3610f + _0x1d0773(0x1cb);
    case 0x9:
      const _0x314ba0 = (_0x3d4510 % (Math["PI"] * 0x2)) / (Math["PI"] * 0x2);
      if (_0x314ba0 < 0.2) return _0x1d0773(0x16d);
      if (_0x314ba0 < 0.4) return _0x1d0773(0x13c);
      if (_0x314ba0 < 0.6) return _0x1d0773(0x1ce);
      if (_0x314ba0 < 0.8) return _0x1d0773(0x1fa);
      return _0x1d0773(0x1a6);
    default:
      ((_0x11116c = Math["sin"](_0x3d4510) * 0x7f + 0x7f),
        (_0x479c76 = Math[_0x1d0773(0x15c)](_0x3d4510 + 2.094) * 0x7f + 0x7f),
        (_0x90ea25 = Math[_0x1d0773(0x15c)](_0x3d4510 + 4.189) * 0x7f + 0x7f));
  }
  return (
    _0x1d0773(0x1af) +
    Math["floor"](_0x11116c) +
    "," +
    Math[_0x1d0773(0x1d9)](_0x479c76) +
    "," +
    Math[_0x1d0773(0x1d9)](_0x90ea25) +
    _0x1d0773(0x127)
  );
}
function updateColorUI() {
  const _0x27e10b = a0_0x13ec4c;
  if (colorNameEl) {
    const _0x218710 = SCHEMES[currentScheme];
    colorNameEl["textContent"] = isRu
      ? _0x218710[_0x27e10b(0x198)]
      : _0x218710[_0x27e10b(0x1b1)];
  }
}
function randomize() {
  const _0x53a7b9 = a0_0x13ec4c;
  ((currentScheme = Math["floor"](
    Math[_0x53a7b9(0x1ca)]() * SCHEMES[_0x53a7b9(0x19b)],
  )),
    updateColorUI());
  const _0x351148 = (_0x2a4981, _0x318fa5) =>
      Math["random"]() * (_0x318fa5 - _0x2a4981) + _0x2a4981,
    _0x496b93 = () => (Math[_0x53a7b9(0x1ca)]() > 0.5 ? 0x1 : -0x1),
    _0x5b6483 = window[_0x53a7b9(0x19f)] < 0x300,
    _0x3a95cd = _0x5b6483 ? 0.7 : 0x1,
    _0x3d2574 = Math[_0x53a7b9(0x1d9)](Math[_0x53a7b9(0x1ca)]() * 0x5);
  let _0x31dcf3 = ![];
  const _0x57601c = Math[_0x53a7b9(0x1ca)]();
  if (_0x57601c < 0.25) {
    const _0xc61789 =
      Math[_0x53a7b9(0x1f8)](_0x351148(0.1, 0x64) * 0x3e8) / 0x3e8;
    ((targetParams["lrota"] = _0x496b93() * _0xc61789),
      (_0x31dcf3 = _0xc61789 >= 0xf),
      _0x31dcf3
        ? (targetParams[_0x53a7b9(0x196)] = -targetParams[_0x53a7b9(0x13f)])
        : (targetParams[_0x53a7b9(0x196)] =
            Math[_0x53a7b9(0x1ca)]() > 0.3
              ? targetParams["lrota"]
              : -targetParams[_0x53a7b9(0x13f)]));
  } else {
    const _0x6f9c88 =
        Math[_0x53a7b9(0x1f8)](_0x351148(0.5, 0x6) * 0x3e8) / 0x3e8,
      _0x51dbe6 =
        Math[_0x53a7b9(0x1f8)]((0x1 / _0x351148(0xa, 0xc8)) * 0x3e8) / 0x3e8;
    Math[_0x53a7b9(0x1ca)]() > 0.5
      ? ((targetParams[_0x53a7b9(0x13f)] = _0x496b93() * _0x6f9c88),
        (targetParams[_0x53a7b9(0x196)] = _0x496b93() * _0x51dbe6))
      : ((targetParams[_0x53a7b9(0x13f)] = _0x496b93() * _0x51dbe6),
        (targetParams["rrota"] = _0x496b93() * _0x6f9c88));
  }
  _0x31dcf3
    ? (targetParams[_0x53a7b9(0x1d2)] =
        Math[_0x53a7b9(0x1ca)]() > 0.3
          ? Math[_0x53a7b9(0x1f8)](
              _0x496b93() * _0x351148(0.001, 0.08) * 0x3e8,
            ) / 0x3e8
          : 0x0)
    : (targetParams[_0x53a7b9(0x1d2)] =
        Math[_0x53a7b9(0x1ca)]() > 0.2
          ? Math[_0x53a7b9(0x1f8)](_0x496b93() * _0x351148(0.01, 1.2) * 0x3e8) /
            0x3e8
          : 0x0);
  ((targetParams[_0x53a7b9(0x1aa)] = _0x351148(-0xc8, 0xc8) * _0x3a95cd),
    (targetParams[_0x53a7b9(0x10c)] = _0x351148(-0x226, -0xc8) * _0x3a95cd),
    (targetParams[_0x53a7b9(0x1b8)] = _0x351148(0x32, 0x258) * _0x3a95cd),
    (targetParams[_0x53a7b9(0x14f)] = _0x351148(0x14, 0xb4) * _0x3a95cd),
    (targetParams[_0x53a7b9(0x15e)] = _0x351148(0x14, 0xb4) * _0x3a95cd),
    (targetParams[_0x53a7b9(0x102)] = _0x351148(0x64, 0x258) * _0x3a95cd),
    (targetParams[_0x53a7b9(0x1a5)] = _0x351148(0x64, 0x258) * _0x3a95cd),
    (targetParams["ext"] = _0x351148(0x0, 0x78)),
    (targetParams[_0x53a7b9(0x1b6)] = _0x351148(0x0, 0x168)),
    (targetParams["speed"] = 0x78),
    (targetParams[_0x53a7b9(0x14e)] = 0x4),
    (targetParams["growth"] = 0x0),
    (targetParams[_0x53a7b9(0x1ac)] = 0x0),
    (targetParams[_0x53a7b9(0x18b)] = 0x0),
    (targetParams["driftR"] = 0x0),
    (targetParams[_0x53a7b9(0x153)] = 0x0));
  if (_0x3d2574 === 0x1)
    ((targetParams[_0x53a7b9(0x18b)] = _0x351148(0.002, 0.025) * _0x496b93()),
      (targetParams["driftR"] = _0x351148(0.002, 0.025) * _0x496b93()),
      (targetParams[_0x53a7b9(0x153)] = _0x351148(0.001, 0.01) * _0x496b93()));
  else {
    if (_0x3d2574 === 0x2)
      targetParams[_0x53a7b9(0x1ac)] = _0x351148(0.02, 0.12);
    else {
      if (_0x3d2574 === 0x3)
        targetParams[_0x53a7b9(0x171)] =
          _0x351148(0.0001, 0.0006) * _0x496b93();
      else
        _0x3d2574 === 0x4 &&
          ((targetParams[_0x53a7b9(0x18b)] =
            _0x351148(0.001, 0.018) * _0x496b93()),
          (targetParams[_0x53a7b9(0x17f)] =
            _0x351148(0.001, 0.018) * _0x496b93()),
          (targetParams[_0x53a7b9(0x153)] =
            _0x351148(0.001, 0.008) * _0x496b93()),
          (targetParams[_0x53a7b9(0x1ac)] = _0x351148(0.01, 0.08)),
          (targetParams[_0x53a7b9(0x171)] =
            _0x351148(0.00005, 0.0003) * _0x496b93()));
    }
  }
  let _0x1529ad;
  _0x3d2574 === 0x3 || _0x3d2574 === 0x4
    ? (_0x1529ad = [0x1, 0x1, 0x2, 0x3])
    : (_0x1529ad = [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x8, 0xa, 0xc]);
  targetParams["symmetry"] =
    _0x1529ad[
      Math[_0x53a7b9(0x1d9)](
        Math[_0x53a7b9(0x1ca)]() * _0x1529ad[_0x53a7b9(0x19b)],
      )
    ];
  const _0x54b6f9 = 0x384,
    _0x307e7e = 0x28a,
    _0x5288d3 =
      Math[_0x53a7b9(0x18c)](targetParams[_0x53a7b9(0x1aa)]) +
      targetParams[_0x53a7b9(0x1b8)] / 0x2 +
      targetParams[_0x53a7b9(0x14f)] +
      targetParams[_0x53a7b9(0x102)] +
      targetParams[_0x53a7b9(0x113)],
    _0x3de640 =
      Math["abs"](targetParams["hby"]) +
      targetParams["larm1"] +
      targetParams[_0x53a7b9(0x102)] +
      targetParams[_0x53a7b9(0x113)],
    _0x15f474 = Math[_0x53a7b9(0x188)](_0x5288d3, _0x3de640);
  let _0x25627b = 0x1;
  if (_0x15f474 > _0x54b6f9) _0x25627b = _0x54b6f9 / _0x15f474;
  else {
    if (_0x15f474 < _0x307e7e) _0x25627b = _0x307e7e / _0x15f474;
  }
  Math["abs"](_0x25627b - 0x1) > 0.01 &&
    ((targetParams["hbx"] *= _0x25627b),
    (targetParams[_0x53a7b9(0x10c)] *= _0x25627b),
    (targetParams["hdist"] *= _0x25627b),
    (targetParams[_0x53a7b9(0x14f)] *= _0x25627b),
    (targetParams["rarm1"] *= _0x25627b),
    (targetParams[_0x53a7b9(0x102)] *= _0x25627b),
    (targetParams[_0x53a7b9(0x1a5)] *= _0x25627b),
    (targetParams[_0x53a7b9(0x113)] *= _0x25627b));
  const _0x4dd6c5 = isRu ? SHAPE_NAMES["ru"] : SHAPE_NAMES["en"],
    _0x42d95f = isRu
      ? [
          _0x53a7b9(0x1ae),
          _0x53a7b9(0x141),
          _0x53a7b9(0x165),
          _0x53a7b9(0x126),
          _0x53a7b9(0x1ab),
        ]
      : [
          "Chaotic",
          _0x53a7b9(0x121),
          _0x53a7b9(0x140),
          _0x53a7b9(0x1ed),
          _0x53a7b9(0x15d),
        ];
  (shapeNameEl &&
    (shapeNameEl[_0x53a7b9(0x1f2)] = isRu
      ? _0x53a7b9(0x173)
      : _0x53a7b9(0x173)),
    (params = { ...targetParams }),
    clearCanvas(),
    (isPlaying = !![]));
}
function updateDisplay() {
  const _0x55da95 = a0_0x13ec4c;
  if (valLrpmEl)
    valLrpmEl["textContent"] = params[_0x55da95(0x13f)]["toFixed"](0x3);
  if (valRrpmEl) valRrpmEl[_0x55da95(0x12e)] = params["rrota"]["toFixed"](0x3);
  let _0x56cd98 = _0x55da95(0x1e5);
  if (
    params[_0x55da95(0x196)] % params["lrota"] === 0x0 ||
    params[_0x55da95(0x13f)] % params[_0x55da95(0x196)] === 0x0
  )
    _0x56cd98 = _0x55da95(0x12b);
  if (valSymmetryEl) valSymmetryEl[_0x55da95(0x12e)] = _0x56cd98;
}
function draw() {
  const _0x46403b = a0_0x13ec4c;
  requestAnimationFrame(draw);
  if (!isPlaying || !ctx) return;
  updateDisplay();
  const _0x3bac30 = width < 0x300,
    _0x18a0e1 = Math["min"](width, height) / (_0x3bac30 ? 0x4b0 : 0x7d0),
    {
      speed: _0x25e3be,
      hbx: _0x26ec80,
      hby: _0x1aabd4,
      hdist: _0x40af65,
      lrota: _0x31c796,
      larm1: _0x23aa2f,
      larm2: _0x4dc2ca,
      rrota: _0x417fc5,
      rarm1: _0x40cdb3,
      rarm2: _0x1eb4b7,
      ext: _0x198d0f,
      crota: _0x1d7fd3,
      colormode: _0x5e38e6,
      brightness: _0x5e35de,
      growth: _0x12579d,
      volume: _0x1a1e83,
    } = params;
  ((ctx[_0x46403b(0x10f)] = _0x46403b(0x1f8)),
    (ctx[_0x46403b(0x145)] = _0x46403b(0x18f)));
  for (let _0x20308c = 0x0; _0x20308c < _0x25e3be; _0x20308c++) {
    time += 0.0001;
    const _0x438c76 =
        _0x31c796 + (params[_0x46403b(0x18b)] || 0x0) * Math["sin"](time * 0xa),
      _0x5e2c7e =
        _0x417fc5 +
        (params["driftR"] || 0x0) * Math[_0x46403b(0x1a0)](time * 0xa),
      _0x1bf6b3 = _0x1d7fd3 + (params[_0x46403b(0x153)] || 0x0),
      _0x3645b2 = 0x1 + time * 0x50 * _0x12579d,
      _0x1ba68c = _0x23aa2f * _0x3645b2,
      _0x53690b = _0x40cdb3 * _0x3645b2,
      _0x2e0878 = _0x4dc2ca * _0x3645b2,
      _0x53c567 = _0x1eb4b7 * _0x3645b2,
      _0x980645 = _0x198d0f * _0x3645b2,
      _0x1a4b54 = _0x40af65 * _0x3645b2,
      _0x50a49f =
        _0x1a1e83 === 0x0
          ? 0x0
          : Math[_0x46403b(0x1a0)](time * 0x8 * _0x1a1e83) * 0x64,
      _0xe9b998 = _0x1a4b54 + _0x50a49f;
    ((rot["l"] = (rot["l"] + _0x438c76 / 0xa + 0x168) % 0x168),
      (rot["r"] = (rot["r"] + _0x5e2c7e / 0xa + 0x168) % 0x168),
      (rot["c"] = (rot["c"] + _0x1bf6b3 / 0xa + 0x168) % 0x168));
    const _0xef54cc =
        cx +
        (_0x26ec80 +
          (_0x1a1e83 === 0x0 ? 0x0 : Math["cos"](time * 0x4) * 0x32)) *
          _0x18a0e1,
      _0x317f36 =
        cy +
        (_0x1aabd4 +
          (_0x1a1e83 === 0x0
            ? 0x0
            : Math[_0x46403b(0x15c)](time * 0x4) * 0x32)) *
          _0x18a0e1,
      _0x2b8b3f = _0xef54cc - (_0xe9b998 / 0x2) * _0x18a0e1,
      _0x497cae = _0x317f36,
      _0x5567be = _0xef54cc + (_0xe9b998 / 0x2) * _0x18a0e1,
      _0x23f8c5 = _0x317f36,
      _0x52b270 =
        Math[_0x46403b(0x1a0)](rot["l"] * AM) * _0x1ba68c * _0x18a0e1 +
        _0x2b8b3f,
      _0x44814f =
        Math[_0x46403b(0x15c)](rot["l"] * AM) * _0x1ba68c * _0x18a0e1 +
        _0x497cae,
      _0x370305 =
        Math[_0x46403b(0x1a0)](rot["r"] * AM) * _0x53690b * _0x18a0e1 +
        _0x5567be,
      _0x5437d3 =
        Math["sin"](rot["r"] * AM) * _0x53690b * _0x18a0e1 + _0x23f8c5,
      _0x9cefc0 = _0x370305 - _0x52b270,
      _0x49ecbc = _0x5437d3 - _0x44814f,
      _0x53e919 = Math[_0x46403b(0x142)](
        _0x9cefc0 * _0x9cefc0 + _0x49ecbc * _0x49ecbc,
      ),
      _0x375269 = _0x2e0878 * _0x18a0e1,
      _0x2df598 = _0x53c567 * _0x18a0e1;
    if (
      _0x53e919 > 0.1 &&
      _0x53e919 < _0x375269 + _0x2df598 &&
      _0x53e919 > Math["abs"](_0x375269 - _0x2df598)
    ) {
      const _0x4da398 = Math[_0x46403b(0x188)](
          -0x1,
          Math[_0x46403b(0x146)](
            0x1,
            (_0x2df598 * _0x2df598 +
              _0x375269 * _0x375269 -
              _0x53e919 * _0x53e919) /
              (0x2 * _0x2df598 * _0x375269),
          ),
        ),
        _0x51333b = Math[_0x46403b(0x1f5)](_0x4da398),
        _0x1837ec = Math[_0x46403b(0x188)](
          -0x1,
          Math[_0x46403b(0x146)](
            0x1,
            (_0x2df598 * Math["sin"](_0x51333b)) / _0x53e919,
          ),
        ),
        _0x404de7 = Math[_0x46403b(0x188)](
          -0x1,
          Math[_0x46403b(0x146)](
            0x1,
            (_0x375269 * Math[_0x46403b(0x15c)](_0x51333b)) / _0x53e919,
          ),
        );
      let _0x2e5d09 = Math[_0x46403b(0x1bf)](_0x1837ec),
        _0x596ab0 = Math[_0x46403b(0x1bf)](_0x404de7);
      const _0x21a659 = Math[_0x46403b(0x1bf)](
        Math["max"](-0x1, Math[_0x46403b(0x146)](0x1, _0x49ecbc / _0x53e919)),
      );
      if (_0x375269 > _0x2df598) _0x596ab0 = Math["PI"] - _0x2e5d09 - _0x51333b;
      if (_0x2df598 > _0x375269) _0x2e5d09 = Math["PI"] - _0x596ab0 - _0x51333b;
      const _0x435297 = Math["PI"] - (_0x596ab0 - _0x21a659),
        _0x2aa891 =
          _0x370305 +
          Math[_0x46403b(0x1a0)](_0x435297) *
            (_0x2df598 + _0x980645 * _0x18a0e1),
        _0x55bcbd =
          _0x5437d3 +
          Math[_0x46403b(0x15c)](_0x435297) *
            (_0x2df598 + _0x980645 * _0x18a0e1),
        _0x4eefc5 = _0x2aa891 - cx,
        _0x329634 = _0x55bcbd - cy,
        _0x23d43d = Math["sqrt"](_0x4eefc5 * _0x4eefc5 + _0x329634 * _0x329634);
      let _0x351231 =
        _0x23d43d === 0x0
          ? 0x0
          : Math["asin"](
              Math[_0x46403b(0x188)](
                -0x1,
                Math[_0x46403b(0x146)](0x1, _0x329634 / _0x23d43d),
              ),
            );
      if (_0x4eefc5 < 0x0) _0x351231 = Math["PI"] - _0x351231;
      _0x351231 += rot["c"] * AM;
      const _0x2e87c6 = cx + Math[_0x46403b(0x1a0)](_0x351231) * _0x23d43d,
        _0x1ec04b = cy + Math[_0x46403b(0x15c)](_0x351231) * _0x23d43d;
      if (startPoint === null) startPoint = { x: _0x2e87c6, y: _0x1ec04b };
      if (pen["x"] !== null) {
        const _0x5317ff = AM * rot["l"],
          _0x1a575b = getStrokeColor(_0x5317ff),
          _0x320ed7 = params[_0x46403b(0x1ec)] || 0x1,
          _0x413abb = pen["x"] - cx,
          _0x141b4b = pen["y"] - cy,
          _0x1962fe = _0x2e87c6 - cx,
          _0x1352b2 = _0x1ec04b - cy,
          _0x2d0e25 = Math["sqrt"](
            (_0x1962fe - _0x413abb) ** 0x2 + (_0x1352b2 - _0x141b4b) ** 0x2,
          ),
          _0x1878e2 = Math[_0x46403b(0x188)](
            0.1,
            Math[_0x46403b(0x146)](0x1, 0xa / (_0x2d0e25 + 0.1)),
          ),
          _0x3366cf = 0.5 * _0x18a0e1;
        ctx[_0x46403b(0x138)] = _0x1a575b;
        if (_0x1878e2 > 0.3) {
          ((ctx[_0x46403b(0x1a7)] = _0x3366cf * 0x4),
            (ctx[_0x46403b(0x1de)] = 0.09 * _0x1878e2),
            ctx[_0x46403b(0x1d1)]());
          for (let _0x274b43 = 0x0; _0x274b43 < _0x320ed7; _0x274b43++) {
            const _0x41d4d8 = (0x2 * Math["PI"] * _0x274b43) / _0x320ed7,
              _0xb32854 = Math[_0x46403b(0x1a0)](_0x41d4d8),
              _0x56aec7 = Math[_0x46403b(0x15c)](_0x41d4d8);
            (ctx[_0x46403b(0x1bd)](
              cx + _0x413abb * _0xb32854 - _0x141b4b * _0x56aec7,
              cy + _0x413abb * _0x56aec7 + _0x141b4b * _0xb32854,
            ),
              ctx[_0x46403b(0x1e8)](
                cx + _0x1962fe * _0xb32854 - _0x1352b2 * _0x56aec7,
                cy + _0x1962fe * _0x56aec7 + _0x1352b2 * _0xb32854,
              ));
          }
          ctx[_0x46403b(0x175)]();
        }
        ((ctx[_0x46403b(0x1a7)] = (0.3 + 0.5 * _0x1878e2) * _0x18a0e1),
          (ctx[_0x46403b(0x1de)] = 0.35 + 0.35 * _0x1878e2),
          ctx["beginPath"]());
        for (let _0x161606 = 0x0; _0x161606 < _0x320ed7; _0x161606++) {
          const _0x5f31c0 = (0x2 * Math["PI"] * _0x161606) / _0x320ed7,
            _0x48eac = Math[_0x46403b(0x1a0)](_0x5f31c0),
            _0x4c8e67 = Math[_0x46403b(0x15c)](_0x5f31c0);
          (ctx[_0x46403b(0x1bd)](
            cx + _0x413abb * _0x48eac - _0x141b4b * _0x4c8e67,
            cy + _0x413abb * _0x4c8e67 + _0x141b4b * _0x48eac,
          ),
            ctx["lineTo"](
              cx + _0x1962fe * _0x48eac - _0x1352b2 * _0x4c8e67,
              cy + _0x1962fe * _0x4c8e67 + _0x1352b2 * _0x48eac,
            ));
        }
        (ctx[_0x46403b(0x175)](),
          (ctx[_0x46403b(0x1de)] = 0x1),
          svgBuffer["length"] < SVG_MAX &&
            svgBuffer[_0x46403b(0x1cd)]({
              px: _0x413abb,
              py: _0x141b4b,
              qx: _0x1962fe,
              qy: _0x1352b2,
              color: _0x1a575b,
            }));
      }
      ((pen["x"] = _0x2e87c6), (pen["y"] = _0x1ec04b));
    }
    totalSteps++;
  }
  if (!vignetteGradient) {
    const _0x590dd7 = width / 0x2,
      _0x588009 = height / 0x2,
      _0x582576 = Math["max"](width, height) * 0.72;
    ((vignetteGradient = ctx[_0x46403b(0x129)](
      _0x590dd7,
      _0x588009,
      _0x582576 * 0.42,
      _0x590dd7,
      _0x588009,
      _0x582576,
    )),
      vignetteGradient["addColorStop"](0x0, _0x46403b(0x1b9)),
      vignetteGradient[_0x46403b(0x1e2)](0.65, _0x46403b(0x1b9)),
      vignetteGradient[_0x46403b(0x1e2)](0x1, _0x46403b(0x120)));
  }
  ((ctx["globalCompositeOperation"] = "source-over"),
    (ctx[_0x46403b(0x1de)] = 0x1),
    (ctx[_0x46403b(0x107)] = vignetteGradient),
    ctx["fillRect"](0x0, 0x0, width, height));
}
const returnBtn = document["querySelector"]("a.link-btn[href*=\x22index\x22]");
returnBtn &&
  returnBtn[a0_0x13ec4c(0x1a2)]("click", (_0x3ba42f) => {
    const _0xbe29f = a0_0x13ec4c;
    if (isPlaying) {
      const _0x2863dd = isRu ? _0xbe29f(0x1c8) : _0xbe29f(0x16e);
      if (!confirm(_0x2863dd)) {
        _0x3ba42f[_0xbe29f(0x10d)]();
        return;
      }
    }
    if (window[_0xbe29f(0x1f9)] !== window["top"]) {
      _0x3ba42f[_0xbe29f(0x10d)]();
      try {
        window["parent"][_0xbe29f(0x130)]();
      } catch (_0x4120e7) {
        window[_0xbe29f(0x181)][_0xbe29f(0x10b)] = returnBtn[_0xbe29f(0x10b)];
      }
    }
  });
const triggerRandomize = () => {
  randomize();
  playPauseBtn[a0_0x13ec4c(0x12e)] = isRu ? "Стоп" : "Stop";
  if (downloadBtn) {
    downloadBtn["classList"]["add"]("disabled");
    downloadBtn["disabled"] = true;
  }
  if (exportHDBtn) {
    exportHDBtn["classList"]["add"]("disabled");
    exportHDBtn["disabled"] = true;
  }
};
(randomizeBtn[a0_0x13ec4c(0x1a2)](a0_0x13ec4c(0x1c7), triggerRandomize),
  canvas[a0_0x13ec4c(0x1a2)](a0_0x13ec4c(0x203), triggerRandomize));
const redrawBtn = document[a0_0x13ec4c(0x193)]("redraw");
redrawBtn &&
  redrawBtn[a0_0x13ec4c(0x1a2)](a0_0x13ec4c(0x1c7), function () {
    const _0xd4518e = a0_0x13ec4c;
    (clearCanvas(),
      (isPlaying = !![]),
      (playPauseBtn[_0xd4518e(0x12e)] = isRu
        ? _0xd4518e(0x1cf)
        : _0xd4518e(0x1d0)),
      downloadBtn &&
        (downloadBtn["classList"][_0xd4518e(0x1bb)](_0xd4518e(0x134)),
        (downloadBtn[_0xd4518e(0x1fc)] = !![])),
      exportHDBtn &&
        (exportHDBtn[_0xd4518e(0x16f)][_0xd4518e(0x1bb)](_0xd4518e(0x134)),
        (exportHDBtn[_0xd4518e(0x1fc)] = !![])));
  });
function generateSVG(_0x331c26) {
  const _0x3d956d = a0_0x13ec4c;
  if (svgBuffer[_0x3d956d(0x19b)] < 0x2) return null;
  const _0x43e00c = params[_0x3d956d(0x1ec)] || 0x1,
    _0x3f137f = svgBuffer;
  let _0x424824 = 0x0;
  for (const _0x527ef3 of _0x3f137f)
    _0x424824 = Math[_0x3d956d(0x188)](
      _0x424824,
      Math[_0x3d956d(0x142)](
        _0x527ef3["px"] * _0x527ef3["px"] + _0x527ef3["py"] * _0x527ef3["py"],
      ),
      Math["sqrt"](
        _0x527ef3["qx"] * _0x527ef3["qx"] + _0x527ef3["qy"] * _0x527ef3["qy"],
      ),
    );
  if (_0x424824 < 0x1) _0x424824 = 0x1;
  const _0x117805 = 0x3e8,
    _0x21974b = _0x117805 / 0x2,
    _0x100308 = _0x117805 / 0x2,
    _0x19d411 = (_0x117805 * 0.45) / _0x424824;
  let _0x42aa08 = [],
    _0x1dc737 = "",
    _0x34296c = null;
  for (const _0xae7b5e of _0x3f137f) {
    const _0x2725f3 = Math[_0x3d956d(0x1f8)](
        _0x21974b + _0xae7b5e["px"] * _0x19d411,
      ),
      _0x475aa6 = Math[_0x3d956d(0x1f8)](
        _0x100308 + _0xae7b5e["py"] * _0x19d411,
      ),
      _0x3a39a0 = Math[_0x3d956d(0x1f8)](
        _0x21974b + _0xae7b5e["qx"] * _0x19d411,
      ),
      _0x5c6606 = Math["round"](_0x100308 + _0xae7b5e["qy"] * _0x19d411);
    if (_0xae7b5e["color"] !== _0x34296c) {
      if (_0x1dc737)
        _0x42aa08[_0x3d956d(0x1cd)]({ color: _0x34296c, d: _0x1dc737 });
      ((_0x1dc737 = "M" + _0x2725f3 + "," + _0x475aa6),
        (_0x34296c = _0xae7b5e[_0x3d956d(0x1b7)]));
    }
    _0x1dc737 += "\x20L" + _0x3a39a0 + "," + _0x5c6606;
  }
  if (_0x1dc737)
    _0x42aa08[_0x3d956d(0x1cd)]({ color: _0x34296c, d: _0x1dc737 });
  const _0x202c11 = _0x42aa08[_0x3d956d(0x116)](
      (_0x32f4e7) =>
        _0x3d956d(0x1df) +
        _0x32f4e7["d"] +
        _0x3d956d(0x1be) +
        _0x32f4e7["color"] +
        _0x3d956d(0x118),
    )[_0x3d956d(0x1c9)](_0x3d956d(0x151)),
    _0x24ca36 = _0x42aa08[_0x3d956d(0x116)](
      (_0x50afa9) =>
        _0x3d956d(0x1df) +
        _0x50afa9["d"] +
        _0x3d956d(0x1be) +
        _0x50afa9[_0x3d956d(0x1b7)] +
        _0x3d956d(0x17b),
    )[_0x3d956d(0x1c9)](_0x3d956d(0x151));
  let _0x2c82d5 = "",
    _0x4f3fdd = "";
  for (let _0x19c073 = 0x1; _0x19c073 < _0x43e00c; _0x19c073++) {
    const _0x18f4b5 = ((0x168 * _0x19c073) / _0x43e00c)[_0x3d956d(0x177)](0x4);
    ((_0x2c82d5 +=
      "<use\x20href=\x22#arm-glow\x22\x20transform=\x22rotate(" +
      _0x18f4b5 +
      "," +
      _0x21974b +
      "," +
      _0x100308 +
      _0x3d956d(0x152)),
      (_0x4f3fdd +=
        _0x3d956d(0x18d) +
        _0x18f4b5 +
        "," +
        _0x21974b +
        "," +
        _0x100308 +
        ")\x22/>\x0a\x20\x20\x20\x20"));
  }
  const _0x4732dc = ((0x3e8 / 0x12c) * 25.4)[_0x3d956d(0x177)](0x3);
  return (
    _0x3d956d(0x12c) +
    _0x331c26 +
    _0x3d956d(0x1dd) +
    _0x4732dc +
    "mm\x22\x20height=\x22" +
    _0x4732dc +
    "mm\x22\x0a\x20\x20\x20\x20\x20viewBox=\x220\x200\x20" +
    _0x117805 +
    "\x20" +
    _0x117805 +
    _0x3d956d(0x201) +
    _0x331c26 +
    "</title>\x0a\x20\x20<desc>Van\x20Lax\x20Abrakadabra\x20|\x20S=" +
    (params[_0x3d956d(0x1ec)] || 0x1) +
    _0x3d956d(0x1f0) +
    _0x202c11 +
    _0x3d956d(0x11f) +
    _0x24ca36 +
    "\x0a\x20\x20\x20\x20</g>\x0a\x20\x20</defs>\x0a\x20\x20<!--\x20No\x20background\x20—\x20fully\x20transparent,\x20works\x20on\x20white,\x20black\x20or\x20any\x20colour\x20-->\x0a\x20\x20<!--\x20Glow\x20pass\x20(blurred\x20halo)\x20-->\x0a\x20\x20<g\x20filter=\x22url(#gf)\x22>\x0a\x20\x20\x20\x20<use\x20href=\x22#arm-glow\x22/>\x0a\x20\x20\x20\x20" +
    _0x2c82d5 +
    _0x3d956d(0x172) +
    _0x4f3fdd +
    _0x3d956d(0x1a4)
  );
}
var downloadBtn = document[a0_0x13ec4c(0x193)]("download"),
  exportHDBtn = document["getElementById"]("export-hd");
playPauseBtn[a0_0x13ec4c(0x1a2)](a0_0x13ec4c(0x1c7), function () {
  const _0x470f43 = a0_0x13ec4c;
  ((isPlaying = !isPlaying),
    (playPauseBtn[_0x470f43(0x12e)] = isPlaying
      ? isRu
        ? "Стоп"
        : _0x470f43(0x1d0)
      : isRu
        ? _0x470f43(0x195)
        : _0x470f43(0x128)),
    downloadBtn &&
      (!isPlaying
        ? (downloadBtn[_0x470f43(0x16f)]["remove"](_0x470f43(0x134)),
          (downloadBtn[_0x470f43(0x1fc)] = ![]))
        : (downloadBtn[_0x470f43(0x16f)]["add"](_0x470f43(0x134)),
          (downloadBtn[_0x470f43(0x1fc)] = !![]))),
    exportHDBtn &&
      (!isPlaying
        ? (exportHDBtn[_0x470f43(0x16f)][_0x470f43(0x1fe)]("secondary"),
          (exportHDBtn["disabled"] = ![]))
        : (exportHDBtn["classList"]["add"](_0x470f43(0x134)),
          (exportHDBtn[_0x470f43(0x1fc)] = !![]))));
});
function a0_0x172c(_0x278949, _0x527bd9) {
  _0x278949 = _0x278949 - 0x102;
  const _0x4df668 = a0_0x4df6();
  let _0x172c81 = _0x4df668[_0x278949];
  if (a0_0x172c["QguXwF"] === undefined) {
    var _0x181e79 = function (_0x504006) {
      const _0x597bf4 =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let _0x2594d4 = "",
        _0x4d3e36 = "";
      for (
        let _0x7d63b0 = 0x0, _0x3c66bb, _0x4c2f25, _0x226aa7 = 0x0;
        (_0x4c2f25 = _0x504006["charAt"](_0x226aa7++));
        ~_0x4c2f25 &&
        ((_0x3c66bb =
          _0x7d63b0 % 0x4 ? _0x3c66bb * 0x40 + _0x4c2f25 : _0x4c2f25),
        _0x7d63b0++ % 0x4)
          ? (_0x2594d4 += String["fromCharCode"](
              0xff & (_0x3c66bb >> ((-0x2 * _0x7d63b0) & 0x6)),
            ))
          : 0x0
      ) {
        _0x4c2f25 = _0x597bf4["indexOf"](_0x4c2f25);
      }
      for (
        let _0x33121d = 0x0, _0x26e983 = _0x2594d4["length"];
        _0x33121d < _0x26e983;
        _0x33121d++
      ) {
        _0x4d3e36 +=
          "%" +
          ("00" + _0x2594d4["charCodeAt"](_0x33121d)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      return decodeURIComponent(_0x4d3e36);
    };
    ((a0_0x172c["NpDUSQ"] = _0x181e79),
      (a0_0x172c["YdZQpl"] = {}),
      (a0_0x172c["QguXwF"] = !![]));
  }
  const _0x15777c = _0x4df668[0x0],
    _0xb2d0bd = _0x278949 + _0x15777c,
    _0x5706a1 = a0_0x172c["YdZQpl"][_0xb2d0bd];
  return (
    !_0x5706a1
      ? ((_0x172c81 = a0_0x172c["NpDUSQ"](_0x172c81)),
        (a0_0x172c["YdZQpl"][_0xb2d0bd] = _0x172c81))
      : (_0x172c81 = _0x5706a1),
    _0x172c81
  );
}
exportHDBtn &&
  (exportHDBtn[a0_0x13ec4c(0x16f)]["add"](a0_0x13ec4c(0x134)),
  (exportHDBtn[a0_0x13ec4c(0x1fc)] = !![]));
downloadBtn &&
  (downloadBtn[a0_0x13ec4c(0x16f)][a0_0x13ec4c(0x1bb)](a0_0x13ec4c(0x134)),
  (downloadBtn[a0_0x13ec4c(0x1fc)] = !![]),
  downloadBtn["addEventListener"](a0_0x13ec4c(0x1c7), function () {
    const _0x453f55 = a0_0x13ec4c;
    if (isPlaying) return;
    try {
      var _0x341aa3 = params,
        _0x20bd67 = function (_0x519fbf) {
          const _0x56879d = a0_0x172c;
          return typeof _0x519fbf === "number"
            ? Math[_0x56879d(0x18c)](_0x519fbf) < 0x1
              ? _0x519fbf["toFixed"](0x3)
              : _0x519fbf["toFixed"](0x2)
            : "0";
        },
        _0x372baf = (_0x453f55(0x1e0) +
          _0x20bd67(_0x341aa3[_0x453f55(0x13f)]) +
          "_" +
          _0x20bd67(_0x341aa3[_0x453f55(0x196)]) +
          "_S" +
          (_0x341aa3[_0x453f55(0x1ec)] || 0x1))["replace"](
          /[^A-Za-z0-9._-]/g,
          "_",
        ),
        _0x36a88e = 0xbb8,
        _0x40660c = 0xf0,
        _0x52b934 = _0x36a88e - _0x40660c,
        _0x48d8cb = document[_0x453f55(0x199)](_0x453f55(0x190));
      ((_0x48d8cb["width"] = _0x36a88e),
        (_0x48d8cb[_0x453f55(0x187)] = _0x36a88e));
      var _0x14d23e = _0x48d8cb[_0x453f55(0x111)]("2d");
      ((_0x14d23e["fillStyle"] = _0x453f55(0x150)),
        _0x14d23e[_0x453f55(0x19d)](0x0, 0x0, _0x36a88e, _0x36a88e));
      var _0x5d9e56 = 0x96,
        _0x541188 = document[_0x453f55(0x199)](_0x453f55(0x190));
      _0x541188[_0x453f55(0x11a)] = _0x541188[_0x453f55(0x187)] = _0x5d9e56;
      var _0x4d6d68 = _0x541188[_0x453f55(0x111)]("2d");
      _0x4d6d68[_0x453f55(0x1c6)](canvas, 0x0, 0x0, _0x5d9e56, _0x5d9e56);
      var _0x126bbc = _0x4d6d68[_0x453f55(0x11d)](
          0x0,
          0x0,
          _0x5d9e56,
          _0x5d9e56,
        )[_0x453f55(0x1bc)],
        _0x24b394 = _0x5d9e56,
        _0x28bcb9 = _0x5d9e56,
        _0x153117 = 0x0,
        _0x30b581 = 0x0;
      for (var _0x5366fb = 0x0; _0x5366fb < _0x5d9e56; _0x5366fb++) {
        for (var _0x501f11 = 0x0; _0x501f11 < _0x5d9e56; _0x501f11++) {
          var _0x24ea15 = (_0x5366fb * _0x5d9e56 + _0x501f11) * 0x4;
          if (
            _0x126bbc[_0x24ea15] > 0xc ||
            _0x126bbc[_0x24ea15 + 0x1] > 0xc ||
            _0x126bbc[_0x24ea15 + 0x2] > 0xc
          ) {
            if (_0x501f11 < _0x24b394) _0x24b394 = _0x501f11;
            if (_0x501f11 > _0x153117) _0x153117 = _0x501f11;
            if (_0x5366fb < _0x28bcb9) _0x28bcb9 = _0x5366fb;
            if (_0x5366fb > _0x30b581) _0x30b581 = _0x5366fb;
          }
        }
      }
      (_0x153117 <= _0x24b394 || _0x30b581 <= _0x28bcb9) &&
        ((_0x24b394 = 0x0),
        (_0x28bcb9 = 0x0),
        (_0x153117 = _0x5d9e56 - 0x1),
        (_0x30b581 = _0x5d9e56 - 0x1));
      var _0x3ae01c = _0x153117 - _0x24b394,
        _0x5f052a = _0x30b581 - _0x28bcb9,
        _0x1b6577 = Math["max"](_0x3ae01c * 0.08, 0x4),
        _0x260a5a = Math[_0x453f55(0x188)](_0x5f052a * 0.08, 0x4);
      ((_0x24b394 = Math[_0x453f55(0x188)](0x0, _0x24b394 - _0x1b6577)),
        (_0x28bcb9 = Math[_0x453f55(0x188)](0x0, _0x28bcb9 - _0x260a5a)),
        (_0x153117 = Math[_0x453f55(0x146)](
          _0x5d9e56 - 0x1,
          _0x153117 + _0x1b6577,
        )),
        (_0x30b581 = Math[_0x453f55(0x146)](
          _0x5d9e56 - 0x1,
          _0x30b581 + _0x260a5a,
        )));
      var _0x377c63 = canvas["width"],
        _0x1d413b = canvas[_0x453f55(0x187)],
        _0x487aeb = Math[_0x453f55(0x1d9)]((_0x24b394 * _0x377c63) / _0x5d9e56),
        _0x596b07 = Math[_0x453f55(0x1d9)]((_0x28bcb9 * _0x1d413b) / _0x5d9e56),
        _0x181236 = Math[_0x453f55(0x132)](
          ((_0x153117 - _0x24b394) * _0x377c63) / _0x5d9e56,
        ),
        _0x2cff6d = Math["ceil"](
          ((_0x30b581 - _0x28bcb9) * _0x1d413b) / _0x5d9e56,
        ),
        _0x2aa955 = Math[_0x453f55(0x146)](
          _0x36a88e / _0x181236,
          _0x52b934 / _0x2cff6d,
        ),
        _0x12f9ff = _0x181236 * _0x2aa955,
        _0x3b2d07 = _0x2cff6d * _0x2aa955;
      (_0x14d23e[_0x453f55(0x1c6)](
        canvas,
        _0x487aeb,
        _0x596b07,
        _0x181236,
        _0x2cff6d,
        (_0x36a88e - _0x12f9ff) / 0x2,
        (_0x52b934 - _0x3b2d07) / 0x2,
        _0x12f9ff,
        _0x3b2d07,
      ),
        (_0x14d23e["strokeStyle"] = _0x453f55(0x133)),
        (_0x14d23e["lineWidth"] = 0x1),
        _0x14d23e[_0x453f55(0x1d1)](),
        _0x14d23e[_0x453f55(0x1bd)](0x3c, _0x52b934),
        _0x14d23e["lineTo"](_0x36a88e - 0x3c, _0x52b934),
        _0x14d23e[_0x453f55(0x175)]());
      var _0x5f3eb7 = function (_0x50319, _0x5eb1fa) {
          const _0x4cad9e = _0x453f55;
          return typeof _0x50319 === _0x4cad9e(0x1c1)
            ? _0x50319[_0x4cad9e(0x177)](_0x5eb1fa)
            : "—";
        },
        _0x563adb =
          _0x453f55(0x1dc) +
          _0x5f3eb7(_0x341aa3["lrota"], 0x4) +
          _0x453f55(0x1f3) +
          _0x453f55(0x137) +
          _0x5f3eb7(_0x341aa3[_0x453f55(0x196)], 0x4) +
          _0x453f55(0x1f3) +
          "ωc\x20=\x20" +
          _0x5f3eb7(_0x341aa3[_0x453f55(0x1d2)], 0x3) +
          _0x453f55(0x1f3) +
          "S\x20=\x20" +
          (_0x341aa3[_0x453f55(0x1ec)] || 0x1),
        _0x1ed8c3 =
          _0x453f55(0x1a3) +
          _0x5f3eb7(_0x341aa3[_0x453f55(0x1aa)], 0x1) +
          ",\x20" +
          _0x5f3eb7(_0x341aa3["hby"], 0x1) +
          _0x453f55(0x108) +
          _0x453f55(0x15b) +
          _0x5f3eb7(_0x341aa3[_0x453f55(0x1b8)], 0x1) +
          _0x453f55(0x1f3) +
          "L₁\x20" +
          _0x5f3eb7(_0x341aa3[_0x453f55(0x14f)], 0x1) +
          _0x453f55(0x1b4) +
          _0x5f3eb7(_0x341aa3[_0x453f55(0x102)], 0x1) +
          _0x453f55(0x1f3) +
          _0x453f55(0x17a) +
          _0x5f3eb7(_0x341aa3["rarm1"], 0x1) +
          _0x453f55(0x202) +
          _0x5f3eb7(_0x341aa3[_0x453f55(0x1a5)], 0x1) +
          _0x453f55(0x1f3) +
          _0x453f55(0x184) +
          _0x5f3eb7(_0x341aa3[_0x453f55(0x113)], 0x1) +
          _0x453f55(0x1f3) +
          _0x453f55(0x174) +
          _0x5f3eb7(_0x341aa3[_0x453f55(0x1b6)], 0x1) +
          "°";
      ((_0x14d23e[_0x453f55(0x168)] = _0x453f55(0x11b)),
        (_0x14d23e["textBaseline"] = _0x453f55(0x1e4)),
        (_0x14d23e[_0x453f55(0x1ee)] =
          "400\x2030px\x20\x22Helvetica\x20Neue\x22,\x20Helvetica,\x20Arial,\x20sans-serif"),
        (_0x14d23e["globalAlpha"] = 0.65),
        (_0x14d23e["fillStyle"] = _0x453f55(0x1c0)),
        _0x14d23e[_0x453f55(0x1d3)](
          _0x563adb,
          _0x36a88e / 0x2,
          _0x52b934 + 0x44,
        ),
        (_0x14d23e["font"] = _0x453f55(0x167)),
        (_0x14d23e[_0x453f55(0x1de)] = 0.45),
        (_0x14d23e["fillStyle"] = _0x453f55(0x161)),
        _0x14d23e[_0x453f55(0x1d3)](
          _0x1ed8c3,
          _0x36a88e / 0x2,
          _0x52b934 + 0x7a,
        ),
        (_0x14d23e[_0x453f55(0x168)] = "right"),
        (_0x14d23e["textBaseline"] = _0x453f55(0x105)),
        (_0x14d23e[_0x453f55(0x1ee)] = _0x453f55(0x14b)),
        (_0x14d23e[_0x453f55(0x1de)] = 0.3),
        (_0x14d23e[_0x453f55(0x107)] = "#e5b236"),
        _0x14d23e[_0x453f55(0x1d3)](
          _0x453f55(0x106),
          _0x36a88e - 0x36,
          _0x52b934 + 0xba,
        ),
        (_0x14d23e[_0x453f55(0x1ee)] = _0x453f55(0x16b)),
        (_0x14d23e[_0x453f55(0x1de)] = 0.22),
        (_0x14d23e[_0x453f55(0x107)] = _0x453f55(0x14c)),
        _0x14d23e[_0x453f55(0x1d3)](
          "©\x20\x20Inspired\x20by\x20Van\x20Lax",
          _0x36a88e - 0x36,
          _0x52b934 + 0xd6,
        ),
        (_0x14d23e[_0x453f55(0x1de)] = 0x1),
        _0x48d8cb[_0x453f55(0x1c2)](function (_0x400647) {
          const _0x5452b4 = _0x453f55;
          var _0x56d60e = URL[_0x5452b4(0x1e9)](_0x400647),
            _0x4e012c = document["createElement"]("a");
          ((_0x4e012c[_0x5452b4(0x10b)] = _0x56d60e),
            _0x4e012c["setAttribute"](_0x5452b4(0x12f), _0x372baf + ".png"),
            (_0x4e012c["style"]["display"] = _0x5452b4(0x179)),
            document[_0x5452b4(0x1ef)]["appendChild"](_0x4e012c),
            _0x4e012c[_0x5452b4(0x1c7)](),
            setTimeout(function () {
              const _0x430218 = _0x5452b4;
              (document[_0x430218(0x1ef)][_0x430218(0x1fb)](_0x4e012c),
                URL["revokeObjectURL"](_0x56d60e));
            }, 0xbb8));
        }, _0x453f55(0x1ea)));
      var _0x8bab27 = downloadBtn[_0x453f55(0x12e)];
      ((downloadBtn["textContent"] = isRu
        ? _0x453f55(0x11e)
        : "✓\x20Downloaded!"),
        setTimeout(function () {
          const _0x832fbd = _0x453f55;
          downloadBtn[_0x832fbd(0x12e)] = _0x8bab27;
        }, 0x9c4));
    } catch (_0x594165) {
      (alert(_0x453f55(0x109) + _0x594165[_0x453f55(0x14d)]),
        console[_0x453f55(0x154)](_0x594165));
    }
  }));
exportHDBtn &&
  exportHDBtn[a0_0x13ec4c(0x1a2)](a0_0x13ec4c(0x1c7), function () {
    const _0x5b8321 = a0_0x13ec4c;
    if (isPlaying) return;
    if (svgBuffer["length"] < 0x2) {
      alert(isRu ? _0x5b8321(0x1e1) : _0x5b8321(0x1e7));
      return;
    }
    var _0x51a762 = exportHDBtn[_0x5b8321(0x12e)];
    ((exportHDBtn[_0x5b8321(0x12e)] = isRu
      ? _0x5b8321(0x1d5)
      : _0x5b8321(0x125)),
      (exportHDBtn["disabled"] = !![]),
      setTimeout(function () {
        const _0x4ad899 = _0x5b8321;
        try {
          var _0x508cc2 = params,
            _0x6fb34f = function (_0xcdf9e8) {
              const _0x1bec50 = a0_0x172c;
              return typeof _0xcdf9e8 === _0x1bec50(0x1c1)
                ? Math[_0x1bec50(0x18c)](_0xcdf9e8) < 0x1
                  ? _0xcdf9e8[_0x1bec50(0x177)](0x3)
                  : _0xcdf9e8["toFixed"](0x2)
                : "0";
            },
            _0x4bb47c = ("Abrakadabra_15K_" +
              _0x6fb34f(_0x508cc2[_0x4ad899(0x13f)]) +
              "_" +
              _0x6fb34f(_0x508cc2[_0x4ad899(0x196)]) +
              "_S" +
              (_0x508cc2[_0x4ad899(0x1ec)] || 0x1))["replace"](
              /[^A-Za-z0-9._-]/g,
              "_",
            ),
            _0x2fed8d = 0x3a98,
            _0x1fda17 = 0x4b0,
            _0x5f5b2b = _0x2fed8d - _0x1fda17,
            _0x1bf96d = params[_0x4ad899(0x1ec)] || 0x1,
            _0x51cb1b = 0x0;
          for (
            var _0x1153c3 = 0x0;
            _0x1153c3 < svgBuffer[_0x4ad899(0x19b)];
            _0x1153c3++
          ) {
            var _0xbca64a = svgBuffer[_0x1153c3],
              _0x590e02 = Math[_0x4ad899(0x142)](
                _0xbca64a["px"] * _0xbca64a["px"] +
                  _0xbca64a["py"] * _0xbca64a["py"],
              ),
              _0x3485c7 = Math[_0x4ad899(0x142)](
                _0xbca64a["qx"] * _0xbca64a["qx"] +
                  _0xbca64a["qy"] * _0xbca64a["qy"],
              );
            if (_0x590e02 > _0x51cb1b) _0x51cb1b = _0x590e02;
            if (_0x3485c7 > _0x51cb1b) _0x51cb1b = _0x3485c7;
          }
          if (_0x51cb1b < 0x1) _0x51cb1b = 0x1;
          var _0x8b712f = _0x2fed8d / 0x2,
            _0x27e6f1 = _0x5f5b2b / 0x2,
            _0x37a8fa = Math[_0x4ad899(0x146)](_0x2fed8d, _0x5f5b2b),
            _0x4fea4c = (_0x37a8fa * 0.45) / _0x51cb1b,
            _0x27363a = width < 0x300,
            _0x55df29 =
              Math[_0x4ad899(0x146)](width, height) /
              (_0x27363a ? 0x4b0 : 0x7d0),
            _0x3e04c6 = _0x55df29 * _0x4fea4c,
            _0x777d43 = document["createElement"](_0x4ad899(0x190));
          ((_0x777d43[_0x4ad899(0x11a)] = _0x2fed8d),
            (_0x777d43[_0x4ad899(0x187)] = _0x2fed8d));
          var _0x461715 = _0x777d43[_0x4ad899(0x111)]("2d");
          ((_0x461715[_0x4ad899(0x10f)] = _0x4ad899(0x1f8)),
            (_0x461715[_0x4ad899(0x145)] = _0x4ad899(0x18f)));
          var _0x4958c3 = [],
            _0x30f001 = null;
          for (
            var _0x1153c3 = 0x0;
            _0x1153c3 < svgBuffer[_0x4ad899(0x19b)];
            _0x1153c3++
          ) {
            var _0x59e36f = svgBuffer[_0x1153c3],
              _0x4d453a = _0x59e36f["qx"] - _0x59e36f["px"],
              _0x170ace = _0x59e36f["qy"] - _0x59e36f["py"],
              _0x1ebae3 = Math[_0x4ad899(0x142)](
                _0x4d453a * _0x4d453a + _0x170ace * _0x170ace,
              ),
              _0x2d6312 = Math["max"](
                0.1,
                Math["min"](0x1, 0xa / (_0x1ebae3 + 0.1)),
              ),
              _0x3805f1 = Math[_0x4ad899(0x1f8)](_0x2d6312 * 0xa) / 0xa;
            if (
              _0x30f001 &&
              _0x30f001[_0x4ad899(0x1b7)] === _0x59e36f[_0x4ad899(0x1b7)] &&
              _0x30f001["qsf"] === _0x3805f1
            )
              _0x30f001[_0x4ad899(0x1b3)]["push"](_0x59e36f);
            else {
              if (_0x30f001) _0x4958c3[_0x4ad899(0x1cd)](_0x30f001);
              _0x30f001 = {
                color: _0x59e36f[_0x4ad899(0x1b7)],
                qsf: _0x3805f1,
                sf: _0x2d6312,
                segs: [_0x59e36f],
              };
            }
          }
          if (_0x30f001) _0x4958c3[_0x4ad899(0x1cd)](_0x30f001);
          for (
            var _0x2fad87 = 0x0;
            _0x2fad87 < _0x4958c3[_0x4ad899(0x19b)];
            _0x2fad87++
          ) {
            var _0x5c8815 = _0x4958c3[_0x2fad87],
              _0x55e586 = _0x5c8815[_0x4ad899(0x104)];
            _0x461715["strokeStyle"] = _0x5c8815[_0x4ad899(0x1b7)];
            if (_0x55e586 > 0.3) {
              ((_0x461715[_0x4ad899(0x1a7)] = 0.5 * _0x3e04c6 * 0x4),
                (_0x461715["globalAlpha"] = 0.09 * _0x55e586),
                _0x461715["beginPath"]());
              for (
                var _0x49a355 = 0x0;
                _0x49a355 < _0x5c8815[_0x4ad899(0x1b3)]["length"];
                _0x49a355++
              ) {
                var _0x59e36f = _0x5c8815[_0x4ad899(0x1b3)][_0x49a355],
                  _0xbdb741 = _0x59e36f["px"] * _0x4fea4c,
                  _0x1a3198 = _0x59e36f["py"] * _0x4fea4c,
                  _0x307a65 = _0x59e36f["qx"] * _0x4fea4c,
                  _0xc022e1 = _0x59e36f["qy"] * _0x4fea4c;
                for (var _0xbca64a = 0x0; _0xbca64a < _0x1bf96d; _0xbca64a++) {
                  var _0x1e4423 = (0x2 * Math["PI"] * _0xbca64a) / _0x1bf96d,
                    _0x2870bb = Math[_0x4ad899(0x1a0)](_0x1e4423),
                    _0x71d781 = Math[_0x4ad899(0x15c)](_0x1e4423);
                  (_0x461715[_0x4ad899(0x1bd)](
                    _0x8b712f + _0xbdb741 * _0x2870bb - _0x1a3198 * _0x71d781,
                    _0x27e6f1 + _0xbdb741 * _0x71d781 + _0x1a3198 * _0x2870bb,
                  ),
                    _0x461715[_0x4ad899(0x1e8)](
                      _0x8b712f + _0x307a65 * _0x2870bb - _0xc022e1 * _0x71d781,
                      _0x27e6f1 + _0x307a65 * _0x71d781 + _0xc022e1 * _0x2870bb,
                    ));
                }
              }
              _0x461715[_0x4ad899(0x175)]();
            }
            ((_0x461715[_0x4ad899(0x1a7)] =
              (0.3 + 0.5 * _0x55e586) * _0x3e04c6),
              (_0x461715[_0x4ad899(0x1de)] = 0.35 + 0.35 * _0x55e586),
              _0x461715[_0x4ad899(0x1d1)]());
            for (
              var _0x49a355 = 0x0;
              _0x49a355 < _0x5c8815[_0x4ad899(0x1b3)][_0x4ad899(0x19b)];
              _0x49a355++
            ) {
              var _0x59e36f = _0x5c8815[_0x4ad899(0x1b3)][_0x49a355],
                _0xbdb741 = _0x59e36f["px"] * _0x4fea4c,
                _0x1a3198 = _0x59e36f["py"] * _0x4fea4c,
                _0x307a65 = _0x59e36f["qx"] * _0x4fea4c,
                _0xc022e1 = _0x59e36f["qy"] * _0x4fea4c;
              for (var _0xbca64a = 0x0; _0xbca64a < _0x1bf96d; _0xbca64a++) {
                var _0x1e4423 = (0x2 * Math["PI"] * _0xbca64a) / _0x1bf96d,
                  _0x2870bb = Math[_0x4ad899(0x1a0)](_0x1e4423),
                  _0x71d781 = Math[_0x4ad899(0x15c)](_0x1e4423);
                (_0x461715[_0x4ad899(0x1bd)](
                  _0x8b712f + _0xbdb741 * _0x2870bb - _0x1a3198 * _0x71d781,
                  _0x27e6f1 + _0xbdb741 * _0x71d781 + _0x1a3198 * _0x2870bb,
                ),
                  _0x461715["lineTo"](
                    _0x8b712f + _0x307a65 * _0x2870bb - _0xc022e1 * _0x71d781,
                    _0x27e6f1 + _0x307a65 * _0x71d781 + _0xc022e1 * _0x2870bb,
                  ));
              }
            }
            _0x461715[_0x4ad899(0x175)]();
          }
          ((_0x461715[_0x4ad899(0x1de)] = 0x1),
            (_0x461715["globalCompositeOperation"] = _0x4ad899(0x189)),
            (_0x461715[_0x4ad899(0x138)] = "rgba(229,178,54,0.18)"),
            (_0x461715[_0x4ad899(0x1a7)] = 0x5),
            _0x461715[_0x4ad899(0x1d1)](),
            _0x461715[_0x4ad899(0x1bd)](0x12c, _0x5f5b2b),
            _0x461715["lineTo"](_0x2fed8d - 0x12c, _0x5f5b2b),
            _0x461715[_0x4ad899(0x175)]());
          var _0x29e797 = function (_0x19be14, _0x9bb4a) {
              const _0x16c28c = _0x4ad899;
              return typeof _0x19be14 === "number"
                ? _0x19be14[_0x16c28c(0x177)](_0x9bb4a)
                : "—";
            },
            _0x46cc3a =
              "ω₁\x20=\x20" +
              _0x29e797(_0x508cc2[_0x4ad899(0x13f)], 0x4) +
              _0x4ad899(0x1f3) +
              _0x4ad899(0x137) +
              _0x29e797(_0x508cc2[_0x4ad899(0x196)], 0x4) +
              _0x4ad899(0x1f3) +
              _0x4ad899(0x16c) +
              _0x29e797(_0x508cc2[_0x4ad899(0x1d2)], 0x3) +
              _0x4ad899(0x1f3) +
              "S\x20=\x20" +
              (_0x508cc2["symmetry"] || 0x1),
            _0x5e2faa =
              _0x4ad899(0x1a3) +
              _0x29e797(_0x508cc2["hbx"], 0x1) +
              ",\x20" +
              _0x29e797(_0x508cc2[_0x4ad899(0x10c)], 0x1) +
              _0x4ad899(0x108) +
              _0x4ad899(0x15b) +
              _0x29e797(_0x508cc2["hdist"], 0x1) +
              "\x20\x20\x20·\x20\x20\x20" +
              _0x4ad899(0x19a) +
              _0x29e797(_0x508cc2[_0x4ad899(0x14f)], 0x1) +
              "\x20\x20L₂\x20" +
              _0x29e797(_0x508cc2["larm2"], 0x1) +
              _0x4ad899(0x1f3) +
              _0x4ad899(0x17a) +
              _0x29e797(_0x508cc2[_0x4ad899(0x15e)], 0x1) +
              _0x4ad899(0x202) +
              _0x29e797(_0x508cc2["rarm2"], 0x1) +
              _0x4ad899(0x1f3) +
              _0x4ad899(0x184) +
              _0x29e797(_0x508cc2[_0x4ad899(0x113)], 0x1) +
              _0x4ad899(0x1f3) +
              _0x4ad899(0x174) +
              _0x29e797(_0x508cc2[_0x4ad899(0x1b6)], 0x1) +
              "°";
          ((_0x461715["textAlign"] = "center"),
            (_0x461715[_0x4ad899(0x1c4)] = _0x4ad899(0x1e4)),
            (_0x461715[_0x4ad899(0x1ee)] = _0x4ad899(0x13a)),
            (_0x461715[_0x4ad899(0x1de)] = 0.65),
            (_0x461715[_0x4ad899(0x107)] = "#e5b236"),
            _0x461715[_0x4ad899(0x1d3)](
              _0x46cc3a,
              _0x2fed8d / 0x2,
              _0x5f5b2b + 0x154,
            ),
            (_0x461715[_0x4ad899(0x1ee)] =
              "300\x20120px\x20\x22Helvetica\x20Neue\x22,\x20Helvetica,\x20Arial,\x20sans-serif"),
            (_0x461715["globalAlpha"] = 0.45),
            (_0x461715["fillStyle"] = _0x4ad899(0x161)),
            _0x461715["fillText"](
              _0x5e2faa,
              _0x2fed8d / 0x2,
              _0x5f5b2b + 0x262,
            ),
            (_0x461715[_0x4ad899(0x168)] = _0x4ad899(0x186)),
            (_0x461715[_0x4ad899(0x1c4)] = _0x4ad899(0x105)),
            (_0x461715[_0x4ad899(0x1ee)] =
              "500\x20110px\x20\x22Helvetica\x20Neue\x22,\x20Helvetica,\x20Arial,\x20sans-serif"),
            (_0x461715[_0x4ad899(0x1de)] = 0.3),
            (_0x461715[_0x4ad899(0x107)] = _0x4ad899(0x1c0)),
            _0x461715[_0x4ad899(0x1d3)](
              "ABRAKADABRA\x20\x20GENERATIVE\x20\x20GALLERY",
              _0x2fed8d - 0x10e,
              _0x5f5b2b + 0x3a2,
            ),
            (_0x461715[_0x4ad899(0x1ee)] =
              "300\x2090px\x20\x22Helvetica\x20Neue\x22,\x20Helvetica,\x20Arial,\x20sans-serif"),
            (_0x461715["globalAlpha"] = 0.22),
            (_0x461715[_0x4ad899(0x107)] = _0x4ad899(0x14c)),
            _0x461715[_0x4ad899(0x1d3)](
              _0x4ad899(0x122),
              _0x2fed8d - 0x10e,
              _0x5f5b2b + 0x42e,
            ),
            (_0x461715[_0x4ad899(0x1de)] = 0x1),
            _0x777d43["toBlob"](function (_0x2306cf) {
              const _0xa3d14 = _0x4ad899;
              if (!_0x2306cf) {
                (alert(isRu ? _0xa3d14(0x149) : _0xa3d14(0x1d8)),
                  (exportHDBtn[_0xa3d14(0x12e)] = _0x51a762),
                  (exportHDBtn["disabled"] = ![]));
                return;
              }
              var _0x588725 = URL[_0xa3d14(0x1e9)](_0x2306cf),
                _0x484316 = document[_0xa3d14(0x199)]("a");
              ((_0x484316[_0xa3d14(0x10b)] = _0x588725),
                _0x484316[_0xa3d14(0x16a)](
                  _0xa3d14(0x12f),
                  _0x4bb47c + _0xa3d14(0x1d7),
                ),
                (_0x484316[_0xa3d14(0x18a)][_0xa3d14(0x185)] = _0xa3d14(0x179)),
                document[_0xa3d14(0x1ef)]["appendChild"](_0x484316),
                _0x484316[_0xa3d14(0x1c7)](),
                setTimeout(function () {
                  const _0x391715 = _0xa3d14;
                  (document[_0x391715(0x1ef)][_0x391715(0x1fb)](_0x484316),
                    URL[_0x391715(0x1f6)](_0x588725));
                }, 0x1388),
                (exportHDBtn[_0xa3d14(0x12e)] = isRu
                  ? _0xa3d14(0x176)
                  : _0xa3d14(0x136)),
                setTimeout(function () {
                  const _0x175789 = _0xa3d14;
                  ((exportHDBtn[_0x175789(0x12e)] = _0x51a762),
                    (exportHDBtn[_0x175789(0x1fc)] = ![]));
                }, 0xbb8));
            }, _0x4ad899(0x1ea)));
        } catch (_0x37b3df) {
          (alert(
            (isRu ? _0x4ad899(0x119) : "Export\x20failed:\x20") +
              _0x37b3df[_0x4ad899(0x14d)],
          ),
            console[_0x4ad899(0x154)](_0x37b3df),
            (exportHDBtn[_0x4ad899(0x12e)] = _0x51a762),
            (exportHDBtn[_0x4ad899(0x1fc)] = ![]));
        }
      }, 0x64));
  });
window[a0_0x13ec4c(0x1a2)]("resize", resize);
function checkSecretAccess() {
  const _0x3a78a5 = a0_0x13ec4c,
    _0x355950 = _0x3a78a5(0x1c3),
    _0x252668 = "abrakadabra_hd_unlocked",
    _0x1c7f98 = () => {
      const _0x27c3ce = _0x3a78a5;
      (localStorage[_0x27c3ce(0x17c)](_0x252668, _0x27c3ce(0x18e)),
        exportHDBtn &&
          (exportHDBtn[_0x27c3ce(0x18a)][_0x27c3ce(0x185)] = _0x27c3ce(0x192)));
    };
  if (localStorage[_0x3a78a5(0x1ad)](_0x252668) === _0x3a78a5(0x18e)) {
    _0x1c7f98();
    return;
  }
  try {
    const _0x2dd990 = new URLSearchParams(window["location"][_0x3a78a5(0x1b0)]);
    if (_0x2dd990[_0x3a78a5(0x124)](_0x3a78a5(0x112)) === _0x355950) {
      _0x1c7f98();
      const _0x2d7490 =
        window["location"][_0x3a78a5(0x114)] +
        "//" +
        window[_0x3a78a5(0x181)][_0x3a78a5(0x183)] +
        window[_0x3a78a5(0x181)]["pathname"];
      window[_0x3a78a5(0x170)][_0x3a78a5(0x123)](
        { path: _0x2d7490 },
        "",
        _0x2d7490,
      );
      return;
    }
  } catch (_0x34add9) {
    console["error"](_0x3a78a5(0x1d4), _0x34add9);
  }
  let _0x209a0f = "";
  document["addEventListener"](_0x3a78a5(0x1f4), (_0x4d5efc) => {
    const _0x551790 = _0x3a78a5;
    ((_0x209a0f += _0x4d5efc["key"]),
      _0x209a0f[_0x551790(0x1ff)](_0x355950) &&
        (_0x1c7f98(),
        exportHDBtn &&
          ((exportHDBtn[_0x551790(0x18a)]["opacity"] = "0"),
          (exportHDBtn[_0x551790(0x18a)][_0x551790(0x14a)] =
            "opacity\x200.5s\x20ease-in-out"),
          setTimeout(
            () => (exportHDBtn[_0x551790(0x18a)][_0x551790(0x1f7)] = "1"),
            0x32,
          ))),
      _0x209a0f[_0x551790(0x19b)] > 0x14 &&
        (_0x209a0f = _0x209a0f[_0x551790(0x1b5)](-0x14)));
  });
}
(
  resize(),
  updateColorUI(),
  checkSecretAccess(),
  randomize(),
  (isPlaying = false),
  (playPauseBtn[a0_0x13ec4c(0x12e)] = isRu ? "Старт" : "Start"),
  draw()
);
