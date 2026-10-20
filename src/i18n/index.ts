/**
 * Zweisprachigkeit (Englisch = Standard unter `/`, Deutsch unter `/de/`).
 *
 * Texte stehen direkt an der Stelle, an der sie gebraucht werden, jeweils als Paar:
 *   const t = useLang(lang);
 *   t('Book a demo', 'Demo buchen')
 * So stehen beide Sprachen nebeneinander und sind leicht zu vergleichen und zu pflegen.
 * Die Seitenvorlagen liegen in src/templates/, die Adressen in src/pages/ (en) und src/pages/de/ (de).
 */
export const locales = ['en', 'de'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

/** Liefert eine Übersetzungsfunktion: t('English', 'Deutsch') */
export const useLang = (lang: Lang) => (en: string, de: string): string => (lang === 'de' ? de : en);

/** Macht interne Adressen sprachabhängig: '/work' -> '/de/work' (nur bei Deutsch). Externe Links und Anker bleiben unverändert. */
export const localePath = (lang: Lang, href: string): string => {
  if (lang === defaultLang) return href;
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  if (href === '/de' || href.startsWith('/de/') || href.startsWith('/de#')) return href;
  return `/de${href}`;
};

/** Erkennt die Sprache aus der Adresse */
export const langFromPath = (pathname: string): Lang => (pathname === '/de' || pathname.startsWith('/de/') ? 'de' : 'en');

/** Adresse ohne Sprachpräfix: '/de/work' -> '/work' */
export const stripLang = (pathname: string): string => {
  const stripped = pathname.replace(/^\/de(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
};
