// Verkleinerte Fassungen eines Bildes aus public/images/ (erzeugt von scripts/optimize-images.mjs).
// Gibt es keine (SVG, neues Bild vor dem nächsten Build), bleibt es beim Originalbild.
import { readFileSync } from 'node:fs';
import path from 'node:path';

type Entry = { width: number; height: number; variants: { w: number; src: string }[] };

let manifest: Record<string, Entry> | undefined;
const load = () => {
  if (!manifest) {
    try {
      manifest = JSON.parse(readFileSync(path.join(process.cwd(), 'src/data/images.generated.json'), 'utf8'));
    } catch {
      manifest = {};
    }
  }
  return manifest!;
};

/**
 * Attribute für ein <img>: src und srcset. `src` darf "?v=2" o. ä. enthalten.
 * Breite und Höhe setzen wir bewusst nicht: die Größe kommt überall aus den CSS-Klassen (aspect-…, h-full),
 * und ein width-Attribut würde z. B. Bilderstreifen mit fester Höhe sprengen.
 */
export function responsiveImage(src: string) {
  const entry = load()[src.split('?')[0]];
  if (!entry || entry.variants.length === 0) return { src };
  const largest = entry.variants.at(-1)!;
  return {
    src: largest.src,
    srcset: entry.variants.map((v) => `${v.src} ${v.w}w`).join(', '),
  };
}
