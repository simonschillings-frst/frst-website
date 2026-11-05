import { localePath, useLang, type Lang } from '../i18n';

type Tone = 'night' | 'dusk' | 'sky' | 'desert';

export interface ResearchArticle {
  no: string;
  title: string;
  href: string;
  text: string;
  tone: Tone;
  /** Adresse der Blindtext-Unterseite unter /research/<slug>. Artikel mit eigener Seite haben keinen slug. */
  slug?: string;
  /** Sprache des Teasers, falls der Artikel nur in einer Sprache existiert */
  lang?: Lang;
}

/** Alle Artikel der Research-Seite. Neue Artikel hier ergänzen, die Unterseiten entstehen daraus automatisch. */
export const researchArticles = (lang: Lang): ResearchArticle[] => {
  const t = useLang(lang);
  const text = t('What AI means for the agency model – and what comes next.', 'Was KI für das Agenturmodell bedeutet – und was als Nächstes kommt.');
  const withPage = (no: string, slug: string, title: string, tone: Tone): ResearchArticle => ({
    no,
    slug,
    title,
    tone,
    text,
    href: localePath(lang, `/research/${slug}`),
  });
  const placeholderTones: Tone[] = ['night', 'dusk', 'sky', 'desert'];

  return [
    withPage('01', 'time-was-the-real-value', t('Time was the real value.', 'Zeit war der eigentliche Wert.'), 'night'),
    {
      no: '02',
      title: t('The middle is disappearing', 'Die Mitte verschwindet'),
      // Existiert nur auf Deutsch
      href: '/de/perspectives/the-middle-is-disappearing',
      text: 'KI zerstört nicht die Agentur. Sie zerstört das Mittelfeld.',
      lang: 'de',
      tone: 'dusk',
    },
    withPage('03', 'trust-goes-the-model-stays', t('Trust goes the model stays.', 'Vertrauen geht, das Modell bleibt.'), 'sky'),
    withPage('04', 'ai-nods-you-believe', t('AI nods You believe', 'KI nickt. Du glaubst.'), 'desert'),
    // Platzhalter 05–12, damit die Seitenaufteilung (4 Artikel pro Seite, bis zu 12 Artikel) sichtbar ist.
    // Beim Anlegen echter Artikel einfach hier ersetzen oder ergänzen.
    ...Array.from({ length: 8 }, (_, k) => {
      const no = String(k + 5).padStart(2, '0');
      return withPage(no, `lorem-ipsum-${no}`, 'Lorem Ipsum', placeholderTones[k % placeholderTones.length]);
    }),
  ];
};
