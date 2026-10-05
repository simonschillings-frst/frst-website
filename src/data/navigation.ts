export interface NavItem {
  label: string;
  href: string;
  /** Öffnet das Research-Dropdown statt direkt zu verlinken */
  dropdown?: 'research';
}

export const navItems: NavItem[] = [
  { label: 'Why frst', href: '/#why-frst' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Research', href: '/#research', dropdown: 'research' },
  { label: 'Work', href: '/#work' },
  { label: 'Perspectives', href: '/#perspectives' },
  { label: 'CMO Community', href: '/#cmo-community' },
  { label: 'About', href: '/#about' },
];

export const researchTopics = [
  { title: 'Agency & Transformation', subtitle: 'Agency Transformation', href: '#', tone: 'night' },
  { title: 'Creative Growth', subtitle: 'Agency Transformation', href: '#', tone: 'desert' },
  { title: 'AI & Agency', subtitle: 'Agency Transformation', href: '#', tone: 'mist' },
] as const;
