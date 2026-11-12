// Lesezeit eines Artikels aus seinem Text berechnen.
// Gezählt wird jeder sichtbare Text (Einstieg, Absätze, Zitate, Zahlen …), Bildangaben nicht.
import type { Lang } from '../i18n';

// Wörter pro Minute: Deutsch hat längere Wörter und wird etwas langsamer gelesen
const WORDS_PER_MINUTE: Record<Lang, number> = { en: 230, de: 200 };

// Bildangaben (Pfad, Alt-Text, Ausschnitt, Platzhalter) zählen nicht zum Lesetext
const SKIP_KEYS = new Set(['src', 'alt', 'position', 'label', 'heroImage', 'teaserImage', 'bodyImage', 'summaryImage', 'bandImage']);

const countWords = (value: unknown): number => {
  if (typeof value === 'string') return value.split(/\s+/).filter(Boolean).length;
  if (Array.isArray(value)) return value.reduce((sum: number, item) => sum + countWords(item), 0);
  if (value && typeof value === 'object') {
    return Object.entries(value).reduce((sum, [key, item]) => (SKIP_KEYS.has(key) ? sum : sum + countWords(item)), 0);
  }
  return 0;
};

/** Lesezeit in ganzen Minuten (aufgerundet, mindestens 1) */
export const readingMinutes = (lang: Lang, ...content: unknown[]): number =>
  Math.max(1, Math.ceil(countWords(content) / WORDS_PER_MINUTE[lang]));

/** Zeile wie „Article · 7 min read“ / „Artikel · 7 Min. Lesezeit“ */
export const readingLabel = (lang: Lang, minutes: number): string =>
  lang === 'de' ? `Artikel · ${minutes} Min. Lesezeit` : `Article · ${minutes} min read`;
