# Personal Website

Source for [peiyuanqi.me](https://peiyuanqi.me), a static React site hosted from the `gh-pages` branch on GitHub Pages. The checked-in `docs/` folder is the reviewable deploy output source that gets published to `gh-pages`.

## Local Dev

Use Node 14 or newer. If you use `nvm`, run:

```bash
nvm install
nvm use
npm install
```

Start the local app:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000). Main source files live in `src/`; static assets live in `public/`.

## Checks

```bash
npm run lint
npm test -- --watchAll=false
npm run build
```

`npm run build` creates a normal production build in `build/`.

## GitHub Pages

Before committing deployable changes, refresh the checked-in static site:

```bash
npm run predeploy
```

This removes `docs/`, builds the React app, adds static route entries for `/about` and `/projects`, adds `404.html` as a GitHub Pages SPA fallback, and moves the build output into `docs/`. Commit both source changes and the regenerated `docs/` files.

Do not edit generated files in `docs/static/` directly; change `src/` or `public/`, then run `npm run predeploy`.

After committing, publish the live GitHub Pages branch:

```bash
npm run deploy
```

The Celestial Mandate project page is generated from `/Users/peiyuanqi/projects/celestial-mandate-concept-collection`. For that page, use the unified source-repo command instead:

```bash
cd /Users/peiyuanqi/projects/celestial-mandate-concept-collection
npm run deploy-website
```

That command builds the project page, copies it into `public/projects/celestial-mandate/`, regenerates and commits `docs/`, pushes `main`, and publishes `gh-pages`.

## Notes

The site is MIT licensed and modified from [mldangelo.com](https://mldangelo.com/), based on the [Future Imperfect](https://html5up.net/future-imperfect) template.
