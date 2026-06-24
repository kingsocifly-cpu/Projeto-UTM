// Converte os SVGs de assets-src/ em PNGs em assets/ (formato esperado pelo @capacitor/assets)
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SRC = path.join(__dirname, "..", "assets-src");
const OUT = path.join(__dirname, "..", "assets");

const jobs = [
  { svg: "icon.svg", png: "icon.png", w: 1024, h: 1024 },
  { svg: "splash.svg", png: "splash.png", w: 2732, h: 2732 },
  { svg: "splash-dark.svg", png: "splash-dark.png", w: 2732, h: 2732 },
];

(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  for (const j of jobs) {
    const buf = fs.readFileSync(path.join(SRC, j.svg));
    await sharp(buf, { density: 400 }).resize(j.w, j.h).png().toFile(path.join(OUT, j.png));
    console.log("Gerado:", j.png);
  }
})().catch((e) => { console.error(e); process.exit(1); });
