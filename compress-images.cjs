const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = "./src/assets/images-webp";
const WEBP_QUALITY = 82;
const MAX_WIDTH = 1600;

const BASE = "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2F";
const Q = "?alt=media";

const images = [
  { name: "hor1",         url: `${BASE}hor1.png${Q}` },
  { name: "hor2",         url: `${BASE}hor2.png${Q}` },
  { name: "hor5",         url: `${BASE}hor5.png${Q}` },
  { name: "hor6",         url: `${BASE}hor6.jpg${Q}` },
  { name: "hor7",         url: `${BASE}hor7.jpg${Q}` },
  { name: "hor8",         url: `${BASE}hor8.jpg${Q}` },
  { name: "hor9",         url: `${BASE}hor9.jpg${Q}` },
  { name: "hor10",        url: `${BASE}hor10.jpg${Q}` },
  { name: "hor11",        url: `${BASE}hor11.jpg${Q}` },
  { name: "hor13",        url: `${BASE}hor13.jpg${Q}` },
  { name: "ver1",         url: `${BASE}ver1.png${Q}` },
  { name: "ver2",         url: `${BASE}ver2.jpg${Q}` },
  { name: "ver3",         url: `${BASE}ver3.jpg${Q}` },
  { name: "ver4",         url: `${BASE}ver4.jpg${Q}` },
  { name: "ver5",         url: `${BASE}ver5.jpg${Q}` },
  { name: "ver12",        url: `${BASE}ver12.jpg${Q}` },
  { name: "ver15",        url: `${BASE}ver15.png${Q}` },
  { name: "neonh",        url: `${BASE}neonh.png${Q}` },
  { name: "neonLicence",  url: `${BASE}neon-licence.jpg${Q}` },
  { name: "round",        url: `${BASE}round.png${Q}` },
  { name: "roundsigns",   url: `${BASE}roundsigns.png${Q}` },
  { name: "logos",        url: `${BASE}logos.jpg${Q}` },
  { name: "logo",         url: `${BASE}logo.jpg${Q}` },
  { name: "logoh",        url: `${BASE}logoh.png${Q}` },
  { name: "collageh",     url: `${BASE}collageh.png${Q}` },
  { name: "collagev",     url: `${BASE}collagev.png${Q}` },
  { name: "collagev1",    url: `${BASE}collagev1.png${Q}` },
  { name: "blackcollage", url: `${BASE}blackcollage.png${Q}` },
  { name: "collectimage", url: `${BASE}collectimage.png${Q}` },
  { name: "uspartner",    url: `${BASE}uspartner.jpg${Q}` },
  { name: "why",          url: `${BASE}WHY.jpg${Q}` },
  { name: "signs72",      url: `${BASE}72.png${Q}` },
];

async function downloadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`\n🚀 Processing ${images.length} images from Firebase...\n`);

  let totalOriginal = 0;
  let totalCompressed = 0;

  for (const { name, url } of images) {
    try {
      process.stdout.write(`⏳ ${name.padEnd(20)}`);
      const buffer = await downloadBuffer(url);
      totalOriginal += buffer.length;

      const outPath = path.join(OUTPUT_DIR, `${name}.webp`);
      await sharp(buffer)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outPath);

      const outSize = fs.statSync(outPath).size;
      totalCompressed += outSize;

      const saved = (((buffer.length - outSize) / buffer.length) * 100).toFixed(1);
      console.log(`✅  ${kb(buffer.length)} → ${kb(outSize)}  (saved ${saved}%)`);
    } catch (err) {
      console.log(`❌  FAILED — ${err.message}`);
    }
  }

  const totalSaved = (((totalOriginal - totalCompressed) / totalOriginal) * 100).toFixed(1);
  console.log(`\n${"─".repeat(55)}`);
  console.log(`📦 Total original  : ${kb(totalOriginal)}`);
  console.log(`📦 Total WebP      : ${kb(totalCompressed)}`);
  console.log(`🎉 Total savings   : ${totalSaved}%`);
  console.log(`\n📁 Done! Files saved to: ${OUTPUT_DIR}\n`);
}

function kb(bytes) { return (bytes / 1024).toFixed(1) + " KB"; }

run();
