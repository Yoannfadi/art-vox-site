# ART VOX — Manifeste des images / médias d'origine

Les visuels du site actuel sont hébergés sur le CDN Duda (`le-cdn.website-editor.net`) via des **URLs signées et expirantes** (`?Expires=...&Signature=...`). Elles ne sont donc pas récupérables de façon pérenne et n'ont pas été intégrées au projet Next.js. À la place, le site reconstruit utilise :

- un **logo typographique doré** (wordmark « ART VOX ») — voir `components/Wordmark.tsx` ;
- des **titres de sections en vrai texte stylé** (meilleur SEO + rendu premium) au lieu des images-titres ;
- des **placeholders premium** (`components/Placeholder.tsx`) pour les emplacements photo.

Pour réintégrer les visuels d'origine (ou de nouveaux shootings), déposez les fichiers dans `public/images/` et remplacez le `Placeholder` concerné par `<Image src="/images/..."/>`.

## À fournir / remplacer (placeholders → fichiers)

| Emplacement | Placeholder actuel | Fichier à déposer (suggestion) | Source d'origine |
|---|---|---|---|
| Logo header/footer | Wordmark doré | `public/images/logo-or.png` | `Logo+Doré-1920w.png` (CDN Duda) |
| Logo footer (blanc) | Wordmark doré | `public/images/logo-blanc.png` | `art-vox-logo-sans-fond-blanc-1920w.png` |
| Portrait Fadi Dahdouh | Placeholder initiales | `public/images/team/fadi-dahdouh.jpg` | Photo équipe (CDN) |
| Portrait Sarah Sanders | Placeholder initiales | `public/images/team/sarah-sanders.jpg` | Photo équipe (CDN) |
| Portrait Clara Poirieux | Placeholder initiales | `public/images/team/clara-poirieux.jpg` | Photo équipe (CDN) |
| Portrait Thomas Gérôme | Placeholder initiales | `public/images/team/thomas-gerome.jpg` | Photo équipe (CDN) |
| 12 autres membres équipe | Placeholder initiales | `public/images/team/<nom>.jpg` | Photos grille équipe (CDN) |
| Visuel Vocalosteo® | Placeholder / dégradé | `public/images/vocalosteo.jpg` | `Vocalosteo---1-ce5d67f1-1920w.png` |
| Visuel section Équipe | Placeholder / dégradé | `public/images/equipe.jpg` | `e-quipe-c7caa2dd-1920w.png` |
| Images-titres (9) | Remplacées par texte | — (non nécessaires) | `titres+sites-35..43-1920w.png` |

## Documents

| Fichier | Statut | Action |
|---|---|---|
| PDF « SOLO vs COLLECTIF » | Lien en place vers `/SOLO-vs-COLLECTIF.pdf` | Déposer le PDF dans `public/` |

## Médias recommandés par le blueprint (Temps 2 / à produire)

- **Vidéo hero 4K** (loop, sans son) : session coaching Fadi + artiste en scène → `public/videos/hero.mp4`.
- **Portrait cinématique de Fadi** (qualité magazine, fond sombre, lumière chaude).
- **3 vidéo-témoignages** (90 s, format cinématique, fond noir, sous-titres).
- **Portraits formateurs** qualité magazine (fond sombre, lumière chaude).
- **Logos partenaires / scènes** pour la section « Ils nous font confiance ».
