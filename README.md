# LifeOS

One platform, all your goals. A personal dashboard built around five pillars, in plain HTML, CSS and JavaScript (no build step).

## Run locally

Open `index.html` in your browser.

## Project structure

```text
front-end-project/
├── index.html                  # Welcome page
├── pages/
│   └── personal-growth.html
├── assets/
│   ├── css/
│   │   ├── tokens.css          # colors, dark/light variables, base
│   │   ├── layout.css          # sidebar, header, stat cards, grid
│   │   ├── components.css      # buttons, dialogs
│   │   ├── personal-growth.css # page-specific styles
│   │   └── welcome.css         # splash screen
│   ├── js/
│   │   ├── storage.js          # localStorage helper
│   │   ├── icons.js            # SVG icon set
│   │   ├── theme.js            # dark / light toggle
│   │   ├── nav.js              # sidebar menu
│   │   └── personal-growth.js  # goals, habits, weekly review, progress
│   └── img/
│       └── favicon.svg
├── .gitignore
└── README.md
```

## Adding a new page

1. Copy `pages/personal-growth.html` and set `<body data-page="...">`.
2. Add its own `assets/css/<page>.css` and `assets/js/<page>.js`.
3. In `assets/js/nav.js`, replace the `#` of that page with its file name.

## Roadmap

- [x] Welcome page
- [x] Personal Growth (interactive, saved in the browser)
- [x] Dark / light theme
- [ ] Productivity & Education
- [ ] Health & Wellness
- [ ] Reading & Entertainment
- [ ] Spiritual Life
