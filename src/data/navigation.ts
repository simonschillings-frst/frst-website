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
 * Hauptnavigation mit Mega-Menü (Stand des Entwurfs aus dem Claude-Artifact).
 * Die Unterpunkte verlinken vorerst auf Abschnitte der Startseite bzw. /what-we-do.
 * Sobald es eigene Seiten gibt, nur die href-Werte ersetzen.
 * Texte wie "Lorem ipsum" und "Latest Media" sind Platzhalter aus dem Entwurf.
 */
export const navItems: NavItem[] = [
  {
    key: 'what',
    label: 'Services',
    href: '/what-we-do',
    layout: 'list-media',
    children: [
      { title: 'Strategy', subtitle: 'Agency Transformation', href: '/what-we-do' },
      { title: 'Creative', subtitle: 'Agency Transformation', href: '/what-we-do' },
      { title: 'Brand', subtitle: 'Agency Transformation', href: '/what-we-do' },
      { title: 'Campaigns', subtitle: 'Agency Transformation', href: '/what-we-do' },
      { title: 'AI', subtitle: 'Agency Transformation', href: '/what-we-do' },
    ],
    media: {
      label: 'Latest Media',
      items: [
        { title: 'Latest Media: Lorem Ipsum', subtitle: 'Agency Transformation', href: '#', tone: 'dusk' },
        { title: 'Latest Media: Lorem Ipsum', subtitle: 'Agency Transformation', href: '#', tone: 'desert' },
      ],
    },
  },
  {
    key: 'research',
    label: 'Research',
    href: '/research',
    layout: 'feature',
    feature: { label: 'Our Approaches', title: ['The', 'Future', 'of the Agency'] },
    children: [
      { title: 'Better questions. Deeper Insights.', subtitle: 'Lorem ipsum', href: '/research' },
      { title: 'Time was the real value.', subtitle: 'Lorem ipsum', href: '/research' },
      { title: 'The middle is disappearing', subtitle: 'Lorem ipsum', href: '/perspectives/the-middle-is-disappearing' },
      { title: 'Trust goes the model stays.', subtitle: 'Lorem ipsum', href: '/research' },
      { title: 'AI nods You believe', subtitle: 'Lorem ipsum', href: '/research' },
    ],
  },
  {
    key: 'work',
    label: 'Work',
    href: '/work',
    layout: 'cards',
    children: [
      { title: 'Cases', subtitle: 'Work', href: '/work#cases' },
      { title: 'Results', subtitle: 'Work', href: '/work#results' },
    ],
  },
  {
    key: 'perspectives',
    label: 'Perspectives',
    href: '/perspectives',
    layout: 'cards',
    children: [
      { title: 'Articles', subtitle: 'Perspectives', href: '/research#articles' },
      { title: 'Videos', subtitle: 'Perspectives', href: '/perspectives#videos' },
      { title: 'Podcast', subtitle: 'Perspectives', href: '/perspectives#podcast' },
    ],
  },
  {
    key: 'cmo',
    label: 'CMO Community',
    href: '/cmo-community',
    layout: 'cards',
    children: [
      { title: 'Events', subtitle: 'CMO Community', href: '/cmo-community#events' },
      { title: 'Roundtables', subtitle: 'CMO Community', href: '/cmo-community#roundtables' },
      { title: 'CMO Network', subtitle: 'CMO Community', href: '/cmo-community#network' },
    ],
  },
  {
    key: 'about',
    label: 'About us',
    href: '/about-us',
    layout: 'cards',
    children: [
      { title: 'Superpod', subtitle: 'About us', href: '/about-us#superpod' },
      { title: 'Careers', subtitle: 'About us', href: '/about-us#careers' },
    ],
  },
];
