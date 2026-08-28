# Träwelling Help Pages

This repository uses [VitePress](https://vitepress.dev/) for multilingual documentation.

To contribute you can simply edit the markdown files under `docs/`. German is the default language and lives at the
top level of `docs/` (e.g. `docs/features/index.md`); English translations live in a mirrored `docs/en/` subtree
(e.g. `docs/en/features/index.md`). Internal links between pages use relative paths
(e.g. `[Support](../support/index.md)`), and because both locales mirror the same directory structure, the same
relative link works unchanged in either language tree. Images and other static files live in `docs/public/` and are
referenced with an absolute path (e.g. `/features/manual-trips/button-de.png`).

Navigation, sidebar and translated labels are configured in `docs/.vitepress/config.mts`.

If you want to preview your changes locally:

```bash
npm install
npm run docs:dev
```

Then open <http://localhost:8000>.

To produce a production build:

```bash
npm run docs:build
npm run docs:preview
```
