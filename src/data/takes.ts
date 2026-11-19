import { localePath, useLang, type Lang } from '../i18n';
import { readingMinutes } from '../lib/readingTime';
import { takeContent, type TakeContent } from './takeContent';
import { takeContentDe } from './takeContent.de';

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
  const t = useLang(lang);
  const contents = lang === 'de' ? takeContentDe : takeContent;
  const take = (slug: string, title: string, tone: Tone, image?: string, cardImage?: string, teaserImage?: string): Take => ({
    slug,
    title,
    tone,
    image,
    cardImage,
    teaserImage,
    content: contents[slug],
    minutes: contents[slug] ? readingMinutes(lang, title, contents[slug].sections) : 5,
    href: localePath(lang, `/perspectives/${slug}`),
  });

  return [
    // Take 1, zugleich „Newest take“ oben auf der Perspectives-Seite
    take('lorem-ipsum', t('The Tempting Illusion of AI Insourcing', 'Die verlockende Illusion vom KI-Insourcing'), 'dusk', '/images/take-aura-01-hero.jpg', '/images/take-aura-01.jpg', '/images/take-aura-01-nav.jpg'),
    // Take 2
    take('lorem-ipsum-02', t('What Corporate Film Can Do That No Campaign Can', 'Was ein Unternehmensfilm kann, was keine Kampagne kann'), 'night', '/images/take-aura-02-hero.jpg', '/images/take-aura-02.jpg'),
    // Take 3
    take('lorem-ipsum-03', t('The Human Is Not the Magic Ingredient', 'Der Mensch ist nicht die Wunderzutat'), 'sky', '/images/take-aura-03-hero.jpg', '/images/take-aura-03.jpg'),
  ];
};
