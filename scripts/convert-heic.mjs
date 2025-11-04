import sharp from "sharp";
import globby from "globby";
import { dirname, join, basename, extname } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputDir = process.argv[2] || "./raw";
const outDir = process.argv[3] || "./public/portfolio";
await fs.mkdir(outDir, { recursive: true });

const sizes = [1600, 1200, 800];
const files = await globby([`${inputDir}/*.{heic,HEIC,jpg,JPG,jpeg,JPEG}`]);

for (const f of files) {
  const base = basename(f, extname(f));
  const img = sharp(f, { limitInputPixels: false }).rotate();
  const meta = await img.metadata();
  for (const w of sizes) {
    const width = Math.min(w, meta.width || w);
    const out = join(outDir, `${base}_${width}.webp`);
    await img.resize({ width }).webp({ quality: 86 }).toFile(out);
    console.log("✓", out);
  }
}
