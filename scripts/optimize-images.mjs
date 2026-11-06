// Erzeugt aus allen Fotos in public/images/ verkleinerte WebP-Fassungen in mehreren Breiten
// (public/_img/, nicht im Repo) und eine Liste dazu (src/data/images.generated.json).
// Läuft automatisch vor `npm run dev` und `npm run build`. Die Originale bleiben unverändert;
// im Code werden Bilder weiter wie gewohnt mit "/images/…" eingebunden.
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SOURCE = path.join(ROOT, 'public/images');
const OUT = path.join(ROOT, 'public/_img');
const MANIFEST = path.join(ROOT, 'src/data/images.generated.json');
const WIDTHS = [480, 828, 1200, 1600, 2400];
const PHOTO = /\.(jpe?g|png|webp|avif)$/i;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (PHOTO.test(entry.name)) yield full;
  }
}

await mkdir(OUT, { recursive: true });
const manifest = {};
const jobs = [];
for await (const file of walk(SOURCE)) {
  jobs.push(
    (async () => {
      const data = await readFile(file);
      const hash = createHash('md5').update(data).digest('hex').slice(0, 8);
      const image = sharp(data, { failOn: 'none' });
      const meta = await image.metadata();
      // Hochformat-Fotos aus der Kamera: Breite und Höhe nach der Drehung
      const rotated = (meta.orientation ?? 1) >= 5;
      const width = rotated ? meta.height : meta.width;
      const height = rotated ? meta.width : meta.height;
      const widths = WIDTHS.filter((w) => w < width);
      if (width <= WIDTHS.at(-1)) widths.push(width);
      const rel = path.relative(path.join(ROOT, 'public'), file).split(path.sep).join('/');
      const base = rel.replace(/^images\//, '').replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9-_]/g, '-');
      const variants = [];
      for (const w of widths) {
        const name = `${base}-${hash}-${w}.webp`;
        const target = path.join(OUT, name);
        if (!existsSync(target)) {
          await sharp(data, { failOn: 'none' }).rotate().resize({ width: w }).webp({ quality: 78 }).toFile(target);
        }
        variants.push({ w, src: `/_img/${name}` });
      }
      manifest[`/${rel}`] = { width, height, variants };
    })(),
  );
}
await Promise.all(jobs);
const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + '\n');
console.log(`Bilder optimiert: ${Object.keys(sorted).length} Fotos, ${Object.values(sorted).reduce((n, m) => n + m.variants.length, 0)} Fassungen`);
