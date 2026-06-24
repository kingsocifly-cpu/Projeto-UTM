const sharp = require("sharp");
const path = require("path");
const base = path.join(__dirname, "..", "apk_extract", "assets", "flutter_assets", "assets", "pngs", "logo");
const files = ["Icon.png", "logo-sm-claro.png", "logo-sm-escuro.png", "logo-dark.png", "logo-white.png", "logo-foreground.png"];
(async () => {
  for (const f of files) {
    try {
      const img = sharp(path.join(base, f));
      const m = await img.metadata();
      const stats = await img.stats();
      const meanAlpha = stats.channels[3] ? Math.round(stats.channels[3].mean) : 255;
      const lum = Math.round((stats.channels[0].mean + stats.channels[1].mean + stats.channels[2].mean) / 3);
      console.log(`${f}: ${m.width}x${m.height} ch=${m.channels} alphaMean=${meanAlpha} lum=${lum}`);
    } catch (e) { console.log(f, "ERR", e.message); }
  }
})();
