import { localePath, useLang, type Lang } from '../i18n';

/** Bildtöne der Platzhalter (siehe Media.astro). Mit `src` später durch echte Bilder ersetzen. */
export type Tone = 'night' | 'desert' | 'mist' | 'sky' | 'dusk';

export interface MenuLink {
  title: string;
  href: string;
  subtitle?: string;
  /** Platzhalterbild im Mega-Menü; ohne Angabe wird abwechselnd night, desert, mist verwendet */
  tone?: Tone;
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
  feature?: { label: string; title: string[] };
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
      layout: 'list-media',
      children: [
        { title: t('Brand Strategy', 'Markenstrategie'), subtitle: t('Services', 'Leistungen'), href: l('/what-we-do#brand-strategy') },
        { title: t('Creative Concept', 'Kreativkonzept'), subtitle: t('Services', 'Leistungen'), href: l('/what-we-do#creative-concept') },
        { title: t('Campaign and Craft', 'Kampagne und Handwerk'), subtitle: t('Services', 'Leistungen'), href: l('/what-we-do#campaign-and-craft') },
        { title: t('AI driven Technology', 'KI-gestützte Technologie'), subtitle: t('Services', 'Leistungen'), href: l('/what-we-do#ai-driven-technology') },
      ],
      media: {
        label: t('Latest Media', 'Neueste Medien'),
        items: [
          { title: t('Latest Media: Lorem Ipsum', 'Neueste Medien: Lorem Ipsum'), subtitle: t('Agency Transformation', 'Agentur-Transformation'), href: '#', tone: 'dusk' },
          { title: t('Latest Media: Lorem Ipsum', 'Neueste Medien: Lorem Ipsum'), subtitle: t('Agency Transformation', 'Agentur-Transformation'), href: '#', tone: 'desert' },
        ],
      },
    },
    {
      key: 'research',
      label: t('Research', 'Research'),
      href: l('/research'),
      layout: 'feature',
      feature: { label: t('Our Approaches', 'Unsere Ansätze'), title: lang === 'de' ? ['Die', 'Zukunft', 'der Agentur'] : ['The', 'Future', 'of the Agency'] },
      children: [
        { title: t('Better questions. Deeper Insights.', 'Bessere Fragen. Tiefere Einsichten.'), subtitle: 'Lorem ipsum', href: l('/research') },
        { title: t('Time was the real value.', 'Zeit war der eigentliche Wert.'), subtitle: 'Lorem ipsum', href: l('/research') },
        { title: t('The middle is disappearing', 'Die Mitte verschwindet'), subtitle: 'Lorem ipsum', href: '/de/perspectives/the-middle-is-disappearing' },
        { title: t('Trust goes the model stays.', 'Vertrauen geht, das Modell bleibt.'), subtitle: 'Lorem ipsum', href: l('/research') },
        { title: t('AI nods You believe', 'KI nickt. Du glaubst.'), subtitle: 'Lorem ipsum', href: l('/research') },
      ],
    },
    {
      key: 'work',
      label: t('Work', 'Projekte'),
      href: l('/work'),
      layout: 'cards',
      children: [
        { title: t('Cases', 'Cases'), subtitle: t('Work', 'Projekte'), href: l('/work#cases') },
        { title: t('Results', 'Ergebnisse'), subtitle: t('Work', 'Projekte'), href: l('/work#results') },
      ],
    },
    {
      key: 'perspectives',
      label: t('Perspectives', 'Perspektiven'),
      href: l('/perspectives'),
      layout: 'cards',
      children: [
        { title: t('Articles', 'Artikel'), subtitle: t('Perspectives', 'Perspektiven'), href: l('/research#articles') },
        { title: t('Videos', 'Videos'), subtitle: t('Perspectives', 'Perspektiven'), href: l('/perspectives#videos') },
        { title: t('Podcast', 'Podcast'), subtitle: t('Perspectives', 'Perspektiven'), href: l('/perspectives#podcast') },
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
