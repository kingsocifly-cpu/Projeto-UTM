// Gera icon/splash do app compondo o símbolo REAL do utmify (extraído do APK) sobre fundos.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SRC = path.join(__dirname, "..", "assets-src");
const OUT = path.join(__dirname, "..", "assets");

async function compose(symbolFile, bg, canvas, symbolSize, outName) {
  const symbol = await sharp(path.join(SRC, symbolFile))
    .resize(symbolSize, symbolSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  await sharp({ create: { width: canvas, height: canvas, channels: 4, background: bg } })
    .composite([{ input: symbol, gravity: "center" }])
    .png()
    .toFile(path.join(OUT, outName));
  console.log("Gerado:", outName);
}

(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  // Ícone do app: fundo preto + símbolo claro (igual ao app real no iOS)
  await compose("symbol-light.png", { r: 10, g: 10, b: 10, alpha: 1 }, 1024, 600, "icon.png");
  // Splash claro: fundo branco + símbolo escuro
  await compose("symbol-dark.png", { r: 255, g: 255, b: 255, alpha: 1 }, 2732, 760, "splash.png");
  // Splash escuro: fundo preto + símbolo claro
  await compose("symbol-light.png", { r: 10, g: 10, b: 10, alpha: 1 }, 2732, 760, "splash-dark.png");
})().catch((e) => { console.error(e); process.exit(1); });
