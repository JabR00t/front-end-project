# Front End Project

lifeos/
├── index.html                  ← welcome page (renamed from lifeos-welcome.html)
├── pages/
│   ├── productivity.html       ← Productivity & Education (to build)
│   ├── health.html             ← Health & Wellness (to build)
│   ├── reading.html            ← Reading & Entertainment (to build)
│   ├── spiritual.html          ← Spiritual Life (to build)
│   └── personal-growth.html    ← your existing page (renamed)
├── assets/
│   ├── css/
│   │   ├── tokens.css          ← shared colors, fonts, dark mode variables
│   │   ├── layout.css          ← sidebar, cards, stats (shared by all pages)
│   │   └── welcome.css         ← splash screen styles
│   ├── js/
│   │   ├── nav.js              ← sidebar menu (currently duplicated per page)
│   │   ├── icons.js            ← the SVG icon set
│   │   └── storage.js          ← saving habits and goals (localStorage)
│   └── img/
│       └── favicon.svg
├── docs/
│   ├── pillars.md              ← the five pillars and their features
│   └── design-mockup.jpg       ← your WhatsApp image, renamed
├── .gitignore
├── LICENSE
└── README.md

Things to do when you move the files in

In index.html, change the “Commencer” link to pages/personal-growth.html, and point the five pillar cards to their pages.
Add a “Accueil” link in each page’s sidebar back to ../index.html.
Right now each page has its CSS and JS inline. That’s fine for two pages, but once you add the other pillars, move the shared parts (the :root variables, .card, .stats, nav, and the I icon object) into assets/ so you only change them once.
Your habit and goal data is currently hard-coded. storage.js with localStorage would make the checkboxes persist between visits.

Starter README.md

md
# LifeOS

One platform, all your goals. A personal dashboard built around five pillars:
Productivity & Education, Health & Wellness, Reading & Entertainment,
Spiritual Life, and Personal Growth.

## Run locally
Open `index.html` in a browser. No build step needed.

## Pages
- `index.html` – welcome screen
- `pages/personal-growth.html` – goals, habit tracker, weekly review, progress

## Roadmap
- [x] Welcome screen
- [x] Personal Growth
- [ ] Productivity & Education
- [ ] Health & Wellness
- [ ] Reading & Entertainment
- [ ] Spiritual Life