# Clone #15 : site VR STUDIO (base template Cleanhas)

- **Base** : template Webflow Cleanhas (licence achetée), cloné le 18/10/2026
- **Adapté pour** : VR STUDIO, contenus immersifs en 360° pour faire découvrir les métiers
- **Sources du contenu** : description fournie + page LinkedIn https://www.linkedin.com/company/vrstudioofficiel/

## Démarrer
```bash
cd 15
npm install
npm run dev
```

## Pages (25, URLs en français)
| Adresse | Fichier | Contenu |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Accueil |
| `/a-propos` | `AboutUs.jsx` | À propos, valeurs, métiers |
| `/offres` + `/offres/<slug>` (6) | `Services.jsx`, `ServiceDetail/` | `src/data/offres.js` |
| `/realisations` + `/realisations/<slug>` (6) | `Projects.jsx`, `ProjectDetail/` | `src/data/realisations.js` |
| `/blog` + `/blog/<slug>` (6) | `Blog.jsx`, `BlogPost/` | `src/data/articles.js` |
| `/contact` | `ContactUs.jsx` | Formulaire |
| toute autre adresse | `NotFound.jsx` | 404 |

Titres d'onglet des pages de détail : `src/data/titles.js`. Routage : `src/router.js`.

## Identité (charte graphique VR STUDIO 2025)
- Couleurs principales : orange `#FF6000`, orange clair `#FF8339`, anthracite `#252525` (texte et fonds foncés), blanc.
- Couleurs secondaires (ponctuelles) : `#FF9E00`, `#EF002A`. Exposées en Tailwind dans `src/index.css` (`bg-orange`, `text-anthracite`...).
- Le bleu marine du template est remplacé partout par l'anthracite (variables de `src/styles/webflow.css`, icônes SVG,
  images décoratives et pastilles des animations Lottie recolorées).
- Typo : celle du site est conservée (Raleway + Poppins), la charte prévoit Albert Sans.
- Logos : icône `public/media/vr-studio-logo.jpg` (navbar), logo complet `public/media/vr-studio-logo-full.webp` (footer).

## Médias (`public/media/`)
- `li-*` : photos et vidéos de VR STUDIO récupérées sur LinkedIn (ateliers, stand, AS Saint-Étienne, captations).
- `px-*` : photos et vidéos Pexels (licence libre), crédits dans `public/media/CREDITS-pexels.json`.
- `fit/` : copies recadrées aux dimensions exactes des images du template (la mise en page Webflow en dépend).
- Animations Lottie : pastilles traduites et passées en orange (`public/lottie/69930d14*`).
- Assets du template non utilisés déplacés dans `_capture/unused-assets/`.

## À compléter avant mise en ligne
- **Coordonnées** : téléphone `06 00 00 00 00`, email `contact@vrstudio.fr` et horaires sont provisoires
  (`src/sections/ContactUs/Contact.jsx`, `src/sections/shared/Footer.jsx`).
- **Témoignages** (accueil) : citations d'exemple attribuées à des rôles, à remplacer par de vrais retours
  (`src/sections/Home/Testimonials.jsx`).
- **Métiers (page À propos)** : 6 exemples de métiers illustrés par des photos Pexels ; seuls kiné et aide à domicile ont réellement été filmés.
- **Dates des réalisations** : reprises des dates incrustées dans les vidéos LinkedIn (à confirmer).
- **Formulaires** : en local ils affichent seulement le message de succès (`src/lib/custom.js`).
- **Vidéos de fond Pexels** : 2,5 à 17 Mo chacune, à compresser si besoin.
- **Hébergement** : réécrire toutes les routes vers `index.html`.

## Structure technique
Inchangée par rapport au clone : `src/styles/webflow.css` (design system d'origine), runtime Webflow en local
(`src/lib/webflow-runtime.js`) pour les animations IX2/IX3, GSAP et Lottie, scripts du template portés dans `src/lib/custom.js`.
