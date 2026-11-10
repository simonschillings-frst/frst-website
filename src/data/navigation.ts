import { localePath, useLang, type Lang } from '../i18n';

/** Bildtöne der Platzhalter (siehe Media.astro). Mit `src` später durch echte Bilder ersetzen. */
export type Tone = 'night' | 'desert' | 'mist' | 'sky' | 'dusk';

export interface MenuLink {
  title: string;
  href: string;
  subtitle?: string;
  /** Platzhalterbild im Mega-Menü; ohne Angabe wird abwechselnd night, desert, mist verwendet */
  tone?: Tone;
  /** Bild im Mega-Menü; ersetzt den Platzhalter */
  image?: string;
}

export interface NavItem {
  key: string;
  label: string;
  href: string;
  /**
   * Aufbau des Mega-Menüs:
   * - cards: Karten mit Bild nebeneinander
   * - list-media: Liste links, Medienkarten rechts
   * - feature: großer Titel links, Liste rechts
   */
  layout: 'cards' | 'list-media' | 'feature';
  children: MenuLink[];
  /** Nur bei layout "list-media": Karten rechts neben der Liste */
  media?: { label: string; items: MenuLink[] };
  /** Nur bei layout "feature": Beschriftung und Titel (eine Zeile pro Eintrag) links */
  feature?: { label?: string; title: string[] };
}

/*
 * Hauptnavigation mit Mega-Menü, sprachabhängig (en/de).
 * Jeder Text steht als Paar t('English', 'Deutsch'); Adressen werden mit l() automatisch mit /de versehen.
 * Texte wie "Lorem ipsum" und "Latest Media" sind Platzhalter aus dem Entwurf.
 */
export const getNavItems = (lang: Lang): NavItem[] => {
  const t = useLang(lang);
  const l = (href: string) => localePath(lang, href);
  return [
    {
      key: 'what',
      label: t('Services', 'Leistungen'),
      href: l('/what-we-do'),
      layout: 'feature',
      feature: { title: lang === 'de' ? ['Von A bis Z', 'für deine', 'Marke.'] : ['End-to-end', 'for your', 'brand.'] },
      children: [
        { title: t('What we offer', 'Was wir bieten'), subtitle: t('Four disciplines. One team, built around your project.', 'Vier Disziplinen. Ein Team, zusammengestellt für dein Projekt.'), href: l('/what-we-do#services') },
        { title: t('Our process', 'Unser Prozess'), subtitle: t('The Process built around your Ambition.', 'Der Prozess, gebaut um deinen Anspruch.'), href: l('/what-we-do#process') },
        { title: t('Selected work', 'Ausgewählte Projekte'), subtitle: 'New York City Activation', href: l('/what-we-do#selected-work') },
      ],
    },
    {
      key: 'research',
      label: t('Research', 'Research'),
      href: l('/research'),
      layout: 'feature',
      feature: { title: lang === 'de' ? ['Die', 'Zukunft', 'der Agentur'] : ['The', 'Future', 'of the Agency'] },
      children: [
        { title: t('Articles', 'Artikel'), subtitle: t('Thoughts on the future of the agency', 'Gedanken zur Zukunft der Agentur'), href: l('/research#articles') },
        { title: t('Study', 'Studie'), subtitle: t('Get the study', 'Studie anfordern'), href: l('/research#get-the-study') },
        { title: 'Quotes', subtitle: t('Different perspectives. Same direction.', 'Verschiedene Perspektiven. Gleiche Richtung.'), href: l('/research#quotes') },
        { title: 'By the numbers', subtitle: t('Facts that make a difference.', 'Fakten, die den Unterschied machen.'), href: l('/research#by-the-numbers') },
        { title: t('Research study', 'Research-Studie'), subtitle: t('Take part in our study.', 'Nimm teil an unserer Studie.'), href: l('/research#study') },
      ],
    },
    {
      key: 'work',
      label: t('Work', 'Projekte'),
      href: l('/work'),
      layout: 'cards',
      children: [
        { title: t('Cases', 'Cases'), subtitle: t('Our philosophy brought to life', 'Unsere Philosophie, zum Leben erweckt'), href: l('/work#cases'), image: '/images/marccain-teaser-navi.jpg' },
        { title: 'Mention', subtitle: t('What our clients love', 'Was unsere Kunden lieben'), href: l('/work#mention') },
      ],
    },
    {
      key: 'perspectives',
      label: t('Perspectives', 'Perspektiven'),
      href: l('/perspectives'),
      layout: 'cards',
      children: [
        { title: 'Our Takes', subtitle: t('Perspectives', 'Perspektiven'), href: l('/perspectives#our-takes') },
        { title: t('Videos', 'Videos'), subtitle: t('Perspectives', 'Perspektiven'), href: l('/perspectives#videos') },
      ],
    },
    {
      key: 'cmo',
      label: 'CMO Community',
      href: l('/cmo-community'),
      layout: 'cards',
      children: [
        { title: t('Events', 'Events'), subtitle: 'CMO Community', href: l('/cmo-community#events') },
        { title: t('Roundtables', 'Roundtables'), subtitle: 'CMO Community', href: l('/cmo-community#roundtables') },
        { title: t('CMO Network', 'CMO-Netzwerk'), subtitle: 'CMO Community', href: l('/cmo-community#network') },
      ],
    },
    {
      key: 'about',
      label: t('About us', 'Über uns'),
      href: l('/about-us'),
      layout: 'cards',
      children: [
        { title: 'Superpod', subtitle: t('About us', 'Über uns'), href: l('/about-us#superpod') },
        { title: t('Careers', 'Karriere'), subtitle: t('About us', 'Über uns'), href: l('/about-us#careers') },
      ],
    },
  ];
};
