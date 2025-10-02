# Marcus Wagner - Digital Ansøgning

En moderne og interaktiv portfolio/ansøgningswebsite bygget med Astro, der præsenterer mine færdigheder og projekter som praktiksøgende.

## 👨‍💻 Om mig

Jeg hedder Marcus Wagner og søger en praktikplads som udvikler. Dette website er min digitale ansøgning, hvor du kan lære mig bedre at kende og se mine tekniske færdigheder i praksis.

## 🚀 Website Features

- **Responsivt design** - Optimeret til alle skærmstørrelser
- **Interaktive animationer** - Smooth scrolling og hover-effekter
- **Particle system** - Dynamisk baggrund med tsparticles
- **Theme switcher** - Mørk/lys tema funktionalitet
- **Portfolio sektion** - Showcase af mine projekter
- **Skills overview** - Visualisering af mine tekniske færdigheder
- **Kontakt information** - Nem måde at komme i kontakt

## 🛠️ Teknisk Stack

### Frontend Framework

- **Astro 5.13.5** - Moderne static site generator
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Custom styling og animationer

### Biblioteker & Dependencies

- **astro-particles 2.10.0** - Particle system integration
- **tsparticles 3.9.1** - Interactive particle backgrounds
- **tsparticles-slim 2.12.0** - Optimeret particle engine

### Development Tools

- **Prettier 3.6.2** - Code formatting
- **prettier-plugin-astro 0.14.1** - Astro-specific formatering

## 📁 Projekt Struktur

```text
digital_ansøgning/
├── public/                    # Statiske filer
│   ├── favicon.png           # Website ikon
│   └── sc-*.webp            # Screenshots af projekter
├── src/
│   ├── assets/              # Billeder og assets
│   │   ├── bitmoji_*.webp   # Personlige billeder
│   │   ├── logo*.webp       # Logo varianter
│   │   └── profilbillede.webp
│   ├── components/          # Genbrugelige komponenter
│   │   ├── Footer.astro     # Website footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hovedsektion med intro
│   │   ├── Projects.astro   # Portfolio projekter
│   │   ├── Skills.astro     # Færdigheder overview
│   │   ├── Stars.astro      # Particle background
│   │   └── UI.astro         # UI komponenter demo
│   ├── layouts/
│   │   └── Layout.astro     # Grundlæggende page layout
│   ├── pages/
│   │   └── index.astro      # Hovedside
│   ├── script/              # JavaScript funktionalitet
│   │   ├── app.js          # Hovedapplikation
│   │   ├── cursor.js       # Custom cursor effekter
│   │   ├── svgAnimation.js # SVG animationer
│   │   └── theme.js        # Theme switcher
│   └── style/               # CSS styling
│       ├── style.css       # Hovedstyles
│       └── theme-switcher.css
├── astro.config.mjs         # Astro konfiguration
├── package.json             # Dependencies og scripts
└── tsconfig.json           # TypeScript konfiguration
```

## 🧞 Kommandoer

Alle kommandoer køres fra projektets rod:

| Kommando            | Handling                                     |
| :------------------ | :------------------------------------------- |
| `npm install`       | Installer dependencies                       |
| `npm run dev`       | Start development server på `localhost:4321` |
| `npm run build`     | Byg production site til `./dist/`            |
| `npm run preview`   | Preview det byggede site lokalt              |
| `npm run astro ...` | Kør Astro CLI kommandoer                     |

## 🎯 Formål

Dette website fungerer som:

- **Digital ansøgning** - Præsentation af mig som kandidat
- **Portfolio** - Showcase af mine projekter og færdigheder
- **Teknisk demonstration** - Viser mine front-end udviklingsfærdigheder
- **Kontaktplatform** - Nem måde for potentielle praktikpladser at kontakte mig

## 📞 Kontakt

Interesseret i at høre mere? Besøg websitet og kontakt mig gennem kontaktformen eller de sociale links.

---

_Bygget med ❤️ og moderne webteknologier_
