# Balakrishna Nair — portfolio

A backend-focused engineering portfolio with production case studies, professional experience, and a shared folder for the latest résumé and cover letter. Built with React and Vite, published as static HTML on GitHub Pages.

## Local development

Node 24 LTS is recommended (`.nvmrc`). Install the site's dependencies once:

```sh
npm --prefix my-app ci
npm run dev
```

The root package only forwards commands; the application and lockfile live in `my-app/`.

```sh
npm test       # Build and run routing, content, asset, SEO, and static-server checks
npm run build  # Emit complete static pages into my-app/dist/
npm run preview # Serve the actual build at http://127.0.0.1:4173
```

## Content and architecture

- `my-app/src/data/resume.json` is the source for all visible copy, profile facts, navigation, project slugs, links, image descriptions, and metadata.
- `my-app/src/App.jsx` renders the homepage, reusable sections, case studies, and not-found view.
- `my-app/src/styles.css` defines a responsive dark theme, local Inter font, focus states, and reduced-motion behavior.
- `my-app/src/routes.js` resolves explicit stable slugs and legacy aliases.
- `my-app/scripts/prerender.mjs` generates an HTML file for each route, page-specific metadata, structured data, sitemap, and robots file.
- `my-app/scripts/assets.mjs` regenerates the social card and favicon from the same JSON.
- React runs at build time and in development. Production pages require no client-side React or hydration. Native links and `<details>` provide navigation and architecture disclosures; a tiny script handles menu dismissal.

Every page has its own HTML. `/project/huddle/`, `/project/classnest/`, and `/project/iot-health-monitor/` work directly and on refresh. Requests without a trailing slash use the host's directory redirect. Historical generated slugs redirect to the canonical page. Unknown routes use a real `404.html` with `noindex`, not a SPA fallback that masks missing pages.

The local preview intentionally serves files like a static host, rather than returning the homepage for every request. This catches deployment routing mistakes during tests.

## Updating the profile

1. Edit `my-app/src/data/resume.json`.
2. To update your résumé or general cover letter, replace the documents in the [shared Google Drive folder](https://drive.google.com/drive/folders/1VoKsNrn7fdTpcnJuDrtM8dOyr-5OiZPJ?usp=drive_link). This does not require a Git commit or deployment. Keep the folder link and public viewer access unchanged.
3. For website content changes only, run `npm --prefix my-app run format`, then `npm test`.
4. Inspect the production preview at mobile and desktop sizes.

Primary email: `bkrishna@terpmail.umd.edu`, explicitly confirmed by the owner. AWS certification remains in progress. Do not publish unsupported claims or infer completed certifications from old target dates. See `docs/content-evidence.md` for sources and decisions.

## Publishing to GitHub Pages

The existing source branch is `master`; compiled output is published to `gh-pages` at its root. Repository Settings → Pages should continue to use that branch. No hosting provider migration is required.

After reviewing the changes, publish with:

```sh
npm run deploy
```

This runs the build and tests before publishing only `my-app/dist/` to `gh-pages`, including `.nojekyll`. It does not push the source branch; commit and push source changes separately. The CI workflow checks pull requests and source pushes; it does not publish them automatically.

After deployment, check the homepage, direct project URLs, refreshes, unknown routes, résumé folder link, and social image on the public domain. Local checks cannot certify a deployment that has not happened.

## Assets

The portrait comes from the original repository. The Huddle image is an actual screenshot of its public website, captured for this portfolio. Smaller projects use labeled workflow diagrams rather than invented screenshots. The résumé buttons open the owner's Google Drive folder in a new tab. The original supplied PDF remains at its old URL for backward compatibility; the website no longer links to that snapshot. Inter is self-hosted through Fontsource under the SIL Open Font License.

The original rebuild proposal is retained in `docs/original-rebuild-brief.md` as historical context. The decisions above supersede its implementation constraints, following the owner's request to reconcile multiple proposals with engineering judgment.
