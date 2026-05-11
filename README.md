# Design System Lab

A static, GitHub Pages-ready design system playground. It demonstrates semantic tokens, theme switching, form controls, buttons, tabs, modal behavior, alerts, component states, and responsive layout patterns without a build step.

## Files

- `index.html` contains the playground structure and accessible component markup.
- `styles.css` defines design tokens, themes, responsive layout, and component classes.
- `script.js` renders token references and powers theme, tab, density, navigation, and modal interactions.
- `.nojekyll` keeps GitHub Pages from applying Jekyll processing.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
