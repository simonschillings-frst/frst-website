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
    key: 'why',
    label: 'Why frst',
    href: '/#why-frst',
    layout: 'cards',
    children: [
      { title: 'Agency & Transformation', subtitle: 'Agency Transformation', href: '/#why-frst' },
      { title: 'Creative Growth', subtitle: 'Agency Transformation', href: '/#why-frst' },
      { title: 'AI & Agency', subtitle: 'Agency Transformation', href: '/#why-frst' },
    ],
  },
  {
    key: 'what',
    label: 'What We Do',
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
      { title: 'Relationships', subtitle: 'Lorem ipsum', href: '/research' },
      { title: 'Reports', subtitle: 'Lorem ipsum', href: '/research#reports' },
      { title: 'Insights', subtitle: 'Lorem ipsum', href: '/research#insights' },
      { title: 'Benchmark', subtitle: 'Lorem ipsum', href: '/research#benchmark' },
      { title: 'Participate', subtitle: 'Lorem ipsum', href: '/research' },
    ],
  },
  {
    key: 'work',
    label: 'Work',
    href: '/#work',
    layout: 'cards',
    children: [
      { title: 'Cases', subtitle: 'Work', href: '/#work' },
      { title: 'Results', subtitle: 'Work', href: '/#work' },
    ],
  },
  {
    key: 'perspectives',
    label: 'Perspectives',
    href: '/#perspectives',
    layout: 'cards',
    children: [
      { title: 'Articles', subtitle: 'Perspectives', href: '/#perspectives' },
      { title: 'Videos', subtitle: 'Perspectives', href: '/#perspectives' },
      { title: 'Podcast', subtitle: 'Perspectives', href: '/#perspectives' },
    ],
  },
  {
    key: 'cmo',
    label: 'CMO Community',
    href: '/#cmo-community',
    layout: 'cards',
    children: [
      { title: 'Events', subtitle: 'CMO Community', href: '/#cmo-community' },
      { title: 'Roundtables', subtitle: 'CMO Community', href: '/#cmo-community' },
      { title: 'CMO Network', subtitle: 'CMO Community', href: '/#cmo-community' },
    ],
  },
  {
    key: 'about',
    label: 'About',
    href: '/#about',
    layout: 'cards',
    children: [
      { title: 'Team', subtitle: 'About', href: '/#about' },
      { title: 'Philosophy', subtitle: 'About', href: '/#about' },
      { title: 'Careers', subtitle: 'About', href: '/#about' },
    ],
  },
];
