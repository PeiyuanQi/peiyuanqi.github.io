# Repository Instructions

This repository is a static personal website hosted on GitHub Pages from the `gh-pages` branch. The checked-in `docs/` folder is the reviewable deploy output source that is published to `gh-pages`.

## Development

- Use Node 20 or newer.
- Run `npm start` for local development.
- Run `npm run lint`, `npm test`, and `npm run build` before handing off code changes.
- Keep source edits in `src/` and static assets in `public/`.
- Do not edit generated files in `docs/` by hand.

## GitHub Pages

- Run `npm run predeploy` before committing deployable site changes.
- Commit the refreshed `docs/` output with the source changes.
- Run `npm run deploy` after the commit when the live `gh-pages` branch should be updated.
- The `predeploy` script creates static route entries for `/about` and `/projects`, then copies `index.html` to `404.html` as a fallback for any future React routes.
- For the Celestial Mandate project page, prefer running `npm run deploy-website` from `/Users/peiyuanqi/projects/celestial-mandate-concept-collection`; that command updates this repo's `public/projects/celestial-mandate/`, commits the refreshed `docs/` output, pushes `main`, and publishes `gh-pages`.
- GitHub Pages does not serve Git LFS objects. Keep original large media in LFS-backed archive paths, but put browser-viewable site media in `public/` as normal Git files.

## Style

- Keep the existing Future Imperfect-inspired style: white surfaces, thin borders, restrained accent color, uppercase metadata, and clean typography.
- Prefer small, focused components and data-driven project entries.
- Keep README and agent instructions concise and practical.
