import { localePath, type Lang } from '../i18n';
import { readingMinutes } from '../lib/readingTime';
import { takeContent, type TakeContent } from './takeContent';

type Tone = 'night' | 'dusk' | 'sky' | 'desert';

export interface Take {
  slug: string;
  title: string;
  href: string;
  tone: Tone;
  /** Bild für den Hero der Take-Seite; ohne Angabe bunter Verlauf */
  image?: string;
  /** Bild der Kachel im Slider der Perspectives-Seite (Aura-Kreis, passend zum Header); ohne Angabe wie `image` */
  cardImage?: string;
  /** Breites Bild mit mittigem Kreis für „Newest take“ (wie in der Menükarte „Our Takes“); ohne Angabe wie `image` */
  teaserImage?: string;
  /** Echter Inhalt; fehlt er, zeigt die Seite Blindtext */
  content?: TakeContent;
  /** Lesezeit in Minuten (aus dem Inhalt berechnet, sonst 5) */
  minutes: number;
}

/** Alle Takes der Perspectives-Seite, der neueste zuerst. Die Unterseiten unter /perspectives/<slug> entstehen daraus automatisch. */
export const takes = (lang: Lang): Take[] => {
  const take = (slug: string, title: string, tone: Tone, image?: string, cardImage?: string, teaserImage?: string): Take => ({
    slug,
    title,
    tone,
    image,
    cardImage,
    teaserImage,
    content: takeContent[slug],
    // Der Text ist bisher nur Englisch, daher mit englischer Lesegeschwindigkeit
    minutes: takeContent[slug] ? readingMinutes('en', title, takeContent[slug].sections) : 5,
    href: localePath(lang, `/perspectives/${slug}`),
  });

  return [
    // Take 1, zugleich „Newest take“ oben auf der Perspectives-Seite
    take('lorem-ipsum', 'The Tempting Illusion of AI Insourcing', 'dusk', '/images/take-aura-01-hero.jpg', '/images/take-aura-01.jpg', '/images/take-aura-01-nav.jpg'),
    // Take 2
    take('lorem-ipsum-02', 'What Corporate Film Can Do That No Campaign Can', 'night', '/images/take-aura-02-hero.jpg', '/images/take-aura-02.jpg'),
    // Take 3
    take('lorem-ipsum-03', 'The Human Is Not the Magic Ingredient', 'sky', '/images/take-aura-03-hero.jpg', '/images/take-aura-03.jpg'),
  ];
};
