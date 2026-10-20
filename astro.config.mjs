// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Hauptadresse der Website: wird für kanonische Adressen und hreflang-Verweise (SEO) gebraucht.
  // Bei einer anderen Domain hier anpassen.
  site: 'https://frst.agency',
  // Mehrsprachigkeit: Englisch unter "/", Deutsch unter "/de/"
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  // Der deutsche Artikel liegt jetzt unter dem deutschen Pfad
  redirects: {
    '/perspectives/the-middle-is-disappearing': '/de/perspectives/the-middle-is-disappearing',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
