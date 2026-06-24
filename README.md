# ART VOX — Site officiel

Site vitrine premium (one-page + pages biographiques) pour **ART VOX**, construit avec **Next.js 15** (App Router), **React 18.3**, **TypeScript** et **Tailwind CSS 3.4**.

Thème : **dark-luxe noir / or** (blueprint « MasterClass × OpenAI × Hermès × Linear »). Toutes les polices sont **vendorées localement** en `.woff2` et chargées via `next/font/local` (aucun appel à Google Fonts au build).

## Design system (blueprint)

Tokens de couleur — exposés à la fois en variables CSS (`app/globals.css`) et en couleurs Tailwind (`tailwind.config.ts`) :

| Token | Tailwind | Valeur | Rôle |
| --- | --- | --- | --- |
| `--bg` | `bg-bg` | `#080808` | Noir absolu (fond principal) |
| `--bg-2` | `bg-bg2` | `#111111` | Noir chaud (fond secondaire) |
| `--gold` | `gold` | `#D4AF72` | Accent principal |
| `--gold-bright` | `goldBright` | `#EAC97A` | Accent secondaire |
| `--ivory` | `ivory` | `#F2F0EB` | Texte principal |
| `--silver` | `silver` | `#9E9E9E` | Texte secondaire |
| `--card` | `bg-card` | `rgba(255,255,255,0.04)` | Surface verre sombre |
| `--glow` | — | `rgba(212,175,114,0.12)` | Glow au survol |
| `--hairline` | `border-hairline` | `rgba(212,175,114,0.18)` | Filet de bordure |

Des alias (`ink`, `ink-2`, `surface`, `cream`, `muted`, `gold-light`) pointent vers les nouveaux tokens pour la rétrocompatibilité.

Typographie (variables `--font-display` / `--font-serif` / `--font-sans`, câblées dans `tailwind.config.ts`) :

- **Playfair Display** (600/700 + italique 600/700) → titres de section (`.h-display`) & emphase ; **italique** pour citations / témoignages (`.quote-serif`).
- **Cormorant Garamond** (500/600/700) → grand display du hero (`.h-hero`).
- **Inter** (300–600) → corps, nav, labels, boutons (`font-sans`, défaut sur `<body>`).

Éléments signature :

- `components/Waveform.tsx` — waveform dorée animée (barres CSS, dégradé `#D4AF72 → #EAC97A`, pulse lent). Variante `hero` (~80px sous le hero) et `divider` (séparateur de sections). Figée sous `prefers-reduced-motion` via `motion-safe:`.
- `components/GoldCursor.tsx` — point doré pulsant suivant le curseur. Desktop uniquement (`matchMedia('(pointer:fine)')`), désactivé sous `prefers-reduced-motion`. `pointer-events:none`, `mix-blend-screen`, `z-index` élevé, une `transform` par rAF.
- `Reveal` — apparition fade-up + léger drift horizontal, respecte `prefers-reduced-motion`.
- Boutons : `.btn-gold` (plein) et `.btn-ghost` / `.btn-outline` (ghost) → glow + `scale(1.03)` au survol.
- `Placeholder` — léger zoom Ken-Burns (figé sous reduced-motion).

## Hero A/B & drapeaux éditoriaux (`lib/config.ts`)

```ts
export const HERO_VARIANT: 'A' | 'B' = 'A'; // variante par défaut
export const DRAFT_FIGURES = true;          // marqueurs « (à valider) » sur les stats
```

- **`HERO_VARIANT`** sélectionne le hero affiché par défaut :
  - **A** (blueprint, défaut) — « Devenez l'artiste que vous êtes vraiment. » + double CTA (or « Découvrir Art Vox 360° » → `#ECOSYSTEME`, ghost « Voir les transformations » → `#TEMOIGNAGES`).
  - **B** (actuel) — « L'architecte de la carrière musicale » + CTA unique « Prendre rendez-vous » → `#CONTACT`.
- **Override à l'exécution** : ajouter `?hero=a` ou `?hero=b` à l'URL (lu côté client par `components/Hero.tsx`, sans toucher au défaut).
- **`DRAFT_FIGURES`** : quand `true`, affiche un exposant « (à valider) » à côté de chaque chiffre des stats + la ligne « Chiffres indicatifs — à valider avant publication. ». Passer à `false` pour faire disparaître ces marqueurs avant publication.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # sert le build
npm run lint     # ESLint (next/core-web-vitals)
```

Node 18.18+ requis (testé sous Node 22).

## Structure

```
app/
  layout.tsx            Fonts, métadonnées globales, Header + Footer
  page.tsx              Homepage one-page (sections par ancres)
  globals.css           Tailwind + variables CSS + styles de base
  icon.svg              Favicon (monogramme « A » or sur fond sombre)
  sitemap.ts / robots.ts
  api/contact/route.ts  Handler POST du formulaire de contact
  biographie/           Fadi Dahdouh   (noindex)
  sarah-sanders/        Sarah Sanders  (noindex)
  thomas-gerome/        Thomas Gérôme  (placeholder, noindex)
  clara-poirieux/       Clara Poirieux (noindex)
  mentions-legales/     Page légale (squelette à compléter)
  fonts/                woff2 vendorés (Playfair Display, Cormorant Garamond, Inter)
lib/
  config.ts             HERO_VARIANT + DRAFT_FIGURES
components/             Header, Footer, Hero (A/B), Stats, Manifeste, Parcours,
                        FinalCTA, Waveform, GoldCursor, Reveal, Counter,
                        Placeholder, BioLayout, ContactForm, etc.
public/                 Assets statiques (déposer SOLO-vs-COLLECTIF.pdf ici)
```

Ordre de la homepage : Hero → Stats → ADN → **Manifeste** → Écosystème → Résultats → Programme 360° → **Parcours (3 étapes)** → Candidature → Équipe → Vocalosteo → Témoignages → Financements → Équipe noyau → FAQ → **CTA final** → Contact.

Ancres de la homepage : `#ADN`, `#MANIFESTE`, `#ECOSYSTEME`, `#PROGRAMME360`, `#PARCOURS`, `#VOCALOSTEO`, `#EQUIPE`, `#TEMOIGNAGES`, `#FAQ`, `#CONTACT`.

## Formulaire de contact — où brancher les intégrations

Le formulaire (`components/ContactForm.tsx`) poste en JSON vers `app/api/contact/route.ts`.
Le handler **valide** les champs (`prenom`, `nom`, `email`, `telephone`, `message`),
**logge** la demande et retourne `{ ok: true }`.

Les points d'intégration sont documentés en commentaires dans `route.ts` :

- **Tally** : relayer vers un webhook de formulaire.
- **Calendly** : rediriger vers un `scheduling_url` pré-rempli.
- **Make (Integromat)** : déclencher un scénario via webhook.
- **Odoo** : créer un lead CRM (XML-RPC / REST).
- **Airtable** : ajouter une ligne dans une base.

Utilisez des variables d'environnement (`.env.local`) pour les clés/URLs.

## Note sur les images (manifeste)

**Aucune image distante n'est utilisée.** Les visuels originaux du site source étaient
hébergés sur des URLs Duda signées et expirées, donc non récupérables. À la place :

- **Logo** : wordmark typographique or « ART VOX », pas d'image.
- **Titres de section** : vrais `<h2>` HTML stylés (meilleur pour le SEO).
- **Portraits / visuels** (équipe, Vocalosteo) : placeholders CSS élégants
  (`components/Placeholder.tsx`) — dégradé sombre + filet or + initiales/icône.

Pour remplacer un placeholder par une vraie photo : déposer le fichier dans `public/`
et remplacer le composant `<Placeholder />` par une balise `<img>` / `next/image`.

À fournir ultérieurement :
- `public/SOLO-vs-COLLECTIF.pdf` — comparatif des formats (lien déjà présent dans la section Programme 360).
- Photos officielles de l'équipe et visuel Vocalosteo.

## SEO

- Métadonnées globales + OpenGraph + Twitter dans `app/layout.tsx` (`metadataBase` = `https://www.artvox.io`).
- Pages biographiques en `robots: { index: false }` et exclues du sitemap.
- `sitemap.ts` liste `/` et `/mentions-legales`.

## Configuration

`next.config.mjs` : `images.unoptimized = true` (build standard, pas d'export statique, pas de fetch distant).
