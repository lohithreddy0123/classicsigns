const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = "./src/assets/images-webp";
const WEBP_QUALITY = 82;
const MAX_WIDTH = 1600;

const images = [
  { name: "72", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2F72.png?alt=media" },
  { name: "WHY", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2FWHY.jpg?alt=media" },
  { name: "blackcollage", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fblackcollage.png?alt=media" },
  { name: "collageh", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fcollageh.png?alt=media" },
  { name: "collagev", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fcollagev.png?alt=media" },
  { name: "collagev1", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fcollagev1.png?alt=media" },
  { name: "collectimage", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fcollectimage.png?alt=media" },
  { name: "hor1", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fhor1.png?alt=media" },
  { name: "hor2", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fhor2.png?alt=media" },
  { name: "hor5", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fhor5.png?alt=media" },
  { name: "hor6", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fhor6.jpg?alt=media" },
  { name: "hor7", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fhor7.jpg?alt=media" },
  { name: "hor8", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fhor8.jpg?alt=media" },
  { name: "hor9", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fhor9.jpg?alt=media" },
  { name: "hor10", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fhor10.jpg?alt=media" },
  { name: "hor11", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fhor11.jpg?alt=media" },
  { name: "hor13", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fhor13.jpg?alt=media" },
  { name: "logo", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Flogo.jpg?alt=media" },
  { name: "logoh", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Flogoh.png?alt=media" },
  { name: "logos", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Flogos.jpg?alt=media" },
  { name: "neon-licence", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fneon-licence.jpg?alt=media" },
  { name: "neonh", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fneonh.png?alt=media" },
  { name: "round", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fround.png?alt=media" },
  { name: "roundsigns", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Froundsigns.png?alt=media" },
  { name: "uspartner", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fuspartner.jpg?alt=media" },
  { name: "ver1", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fver1.png?alt=media" },
  { name: "ver2", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fver2.jpg?alt=media" },
  { name: "ver3", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fver3.jpg?alt=media" },
  { name: "ver4", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fver4.jpg?alt=media" },
  { name: "ver5", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fver5.jpg?alt=media" },
  { name: "ver12", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fver12.jpg?alt=media" },
  { name: "ver15", url: "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Fver15.png?alt=media" },
];

async function downloadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

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
  console.log(`\n📁 WebP files saved to: ${OUTPUT_DIR}`);
  console.log(`\n✅ Next: Upload the /images-webp folder to Firebase Storage under a /webp/ path.\n`);
}

function kb(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

run();