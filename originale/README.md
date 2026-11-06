# Originale (werden nicht veröffentlicht)

Hochaufgelöste Originalbilder, die auf der Website gerade nicht eingebunden sind.
Sie lagen früher in `public/images/` und wurden bei jedem Deploy mit hochgeladen (über 400 MB).

Ein Bild hier verwenden: verkleinerte Fassung (max. 2400 px breit, JPG oder WebP) nach `public/images/`
legen und wie gewohnt mit `/images/…` einbinden. Beim Build entstehen daraus automatisch
WebP-Fassungen in mehreren Größen (siehe `scripts/optimize-images.mjs`).
