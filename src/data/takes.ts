import { localePath, useLang, type Lang } from '../i18n';

type Tone = 'night' | 'dusk' | 'sky' | 'desert';

export interface Take {
  slug: string;
  title: string;
  href: string;
  tone: Tone;
}

/** Alle Takes der Perspectives-Seite, der neueste zuerst. Die Unterseiten unter /perspectives/<slug> entstehen daraus automatisch. */
export const takes = (lang: Lang): Take[] => {
  const t = useLang(lang);
  const take = (slug: string, title: string, tone: Tone): Take => ({
    slug,
    title,
    tone,
    href: localePath(lang, `/perspectives/${slug}`),
  });

  return [
    take('what-happens-when-creativity-meets-ai', t('What happens when creativity meets AI?', 'Was passiert, wenn Kreativität auf KI trifft?'), 'night'),
    // Platzhalter: Titel und Adresse später durch die echten Takes ersetzen
    take('lorem-ipsum', 'Lorem ipsum', 'dusk'),
    take('lorem-ipsum-02', 'Lorem ipsum', 'night'),
    take('lorem-ipsum-03', 'Lorem ipsum', 'sky'),
    take('lorem-ipsum-04', 'Lorem ipsum', 'desert'),
    take('lorem-ipsum-05', 'Lorem ipsum', 'dusk'),
  ];
};
