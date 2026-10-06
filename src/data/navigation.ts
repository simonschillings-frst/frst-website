export interface NavChild {
  title: string;
  description: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Kurzer Teaser links im Mega-Menü */
  description?: string;
  /** Unterpunkte: Wenn vorhanden, öffnet sich das Mega-Menü */
  children?: NavChild[];
}

/*
 * Sitemap der Hauptnavigation.
 * Die Unterpunkte verlinken vorerst auf den passenden Abschnitt der Startseite
 * bzw. auf /what-we-do. Sobald es eigene Seiten gibt, hier nur die href ersetzen.
 * Die Beschreibungen sind Platzhaltertexte und können frei angepasst werden.
 */
export const navItems: NavItem[] = [
  {
    label: 'Why frst',
    href: '/#why-frst',
    description: 'Why agencies need to change, and how we help them move.',
    children: [
      { title: 'Agency Transformation', description: 'Rethinking how agencies are set up to win.', href: '/#why-frst' },
      { title: 'Creative Growth', description: 'Creativity as the engine for business results.', href: '/#why-frst' },
      { title: 'AI & Agency', description: 'What AI changes in the way we work.', href: '/#why-frst' },
    ],
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    description: 'Strategy, creativity and technology working as one team.',
    children: [
      { title: 'Strategy', description: 'Brand and business strategy that gives direction.', href: '/what-we-do#services' },
      { title: 'Creative', description: 'Ideas people remember and talk about.', href: '/what-we-do#services' },
      { title: 'Brand', description: 'Identities and systems built to last.', href: '/what-we-do#services' },
      { title: 'Campaigns', description: 'Integrated work that moves audiences.', href: '/what-we-do#services' },
      { title: 'AI', description: 'Using AI where it makes the work better.', href: '/what-we-do#services' },
    ],
  },
  {
    label: 'Research',
    href: '/#research',
    description: 'Original research on the future of agency relationships.',
    children: [
      { title: 'The Future of Agency Relationships', description: 'Our study on how clients and agencies will work together.', href: '/#research' },
      { title: 'Reports', description: 'In-depth reports to read and download.', href: '/#research' },
      { title: 'Insights', description: 'Short takes on what we are learning.', href: '/#research' },
      { title: 'Benchmark', description: 'See how your agency relationship compares.', href: '/#research' },
      { title: 'Participate', description: 'Take part in our next study.', href: '/#research' },
    ],
  },
  {
    label: 'Work',
    href: '/#work',
    description: 'Selected projects and what they achieved.',
    children: [
      { title: 'Cases', description: 'Our projects in detail.', href: '/#work' },
      { title: 'Results', description: 'The impact behind the work.', href: '/#work' },
    ],
  },
  {
    label: 'Perspectives',
    href: '/#perspectives',
    description: 'Ideas and conversations from our team and guests.',
    children: [
      { title: 'Articles', description: 'Thinking on brands, agencies and growth.', href: '/#perspectives' },
      { title: 'Videos', description: 'Talks and short films.', href: '/#perspectives' },
      { title: 'Podcast', description: 'Conversations with people shaping the industry.', href: '/#perspectives' },
    ],
  },
  {
    label: 'CMO Community',
    href: '/#cmo-community',
    description: 'A network for marketing leaders.',
    children: [
      { title: 'Events', description: 'Meet the community in person.', href: '/#cmo-community' },
      { title: 'Roundtables', description: 'Small-group exchange on current topics.', href: '/#cmo-community' },
      { title: 'CMO Network', description: 'Join the network.', href: '/#cmo-community' },
    ],
  },
  {
    label: 'About',
    href: '/#about',
    description: 'The people and principles behind frst.',
    children: [
      { title: 'Team', description: 'Who we are.', href: '/#about' },
      { title: 'Philosophy', description: 'How we think and work.', href: '/#about' },
      { title: 'Careers', description: 'Open roles and how to join.', href: '/#about' },
    ],
  },
];
