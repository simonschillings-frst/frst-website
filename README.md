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

## Veröffentlichen auf All-Inkl

Bei jedem Push auf `main` baut die GitHub Action `.github/workflows/deploy-allinkl.yml` die Seite und lädt `dist/` per FTPS auf den All-Inkl-Webspace. Vorher einmalig unter **Settings → Secrets and variables → Actions** anlegen:

- Secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
- optional Variable `FTP_SERVER_DIR` (muss mit `/` enden), falls der FTP-Benutzer nicht direkt im Website-Ordner startet

Ohne Secrets baut die Action nur und lädt nichts hoch. Manuell starten geht unter **Actions → Deploy to All-Inkl → Run workflow**.
