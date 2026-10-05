# frst-website

Website der Agentur frst, gebaut mit [Astro](https://astro.build) und Tailwind CSS.

## Lokal starten

```sh
npm install
npm run dev      # Entwicklungsserver auf http://localhost:4321
npm run build    # statischer Build nach dist/
```

## Struktur

- `src/styles/global.css`: Farben und Schrift (Albert Sans) aus den XD-Assets
- `src/components/`: Header, Footer, Logo, Karten, Bildflächen
- `src/data/navigation.ts`: Hauptnavigation
- `src/pages/`: eine Datei pro Seite

Bilder sind noch Platzhalter (`Media` ohne `src`), bis die Originale aus XD da sind.
