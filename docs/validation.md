# Rebuild validation

Validated on September 18, 2026 against the production build served locally. The original rebuild was subsequently published and verified on GitHub Pages; the checks below describe the local build unless stated otherwise.

## Automated checks

- `npm test`: all 10 checks pass. These cover route resolution and historical slugs, pre-rendered profile content, internal links and anchors, Google Drive document links and legacy PDF filename, canonical email, responsive image sources and other assets, metadata and structured data, complete case studies, real static-server HTTP behavior, sitemap/404 handling, and a 5 KB gzip JavaScript budget.
- Production build: completes with no warnings.
- `npm run format:check`: passes.
- `npm audit`: zero vulnerabilities.
- `git diff --check`: clean.
- No `node_modules` files remain tracked by Git (8,364 removed).
- Public résumé checksum matches the supplied PDF exactly.

## Mobile Lighthouse

Lighthouse 13.4.1, default mobile simulation, local static preview; one final run per page. Scores vary by environment and should be checked again after deployment.

| Page | Performance | Accessibility | Best practices | SEO | FCP | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage | 100 | 100 | 100 | 100 | 1.1 s | 1.7 s | 0 ms | 0 |
| Huddle case study | 100 | 100 | 100 | 100 | 0.9 s | 1.6 s | 0 ms | 0 |

Production JavaScript is approximately 0.52 KB gzip. React is not loaded in production. Text, routes, and native architecture disclosures work without it. The local font is preloaded, the mobile portrait has its own small source, and all rendered images have explicit dimensions.

## Browser checks

- Reviewed homepage layouts at 375, 768, 1280, and 1440 CSS pixels without horizontal overflow.
- Checked Huddle and ClassNest case studies at desktop/mobile sizes and visited the IoT case study.
- Verified mobile menu keyboard opening, closing on navigation, and Escape returning focus to the menu trigger.
- Verified keyboard-operated architecture disclosures.
- Verified project navigation, direct reload, and browser back/forward behavior.
- Verified contact navigation and visible focus indicators.
- No broken rendered images or console warnings/errors observed on the checked pages.
- A nonexistent route displays the intended 404 page; HTTP tests confirm actual status 404.
- The Vite development server also renders the application without console errors.

## External links and limitations

- GitHub profile, Huddle source repository, and Huddle live site: HTTP 200.
- LinkedIn returns HTTP 999 to automated requests. Its owner-supplied URL is preserved, but automated verification is inconclusive.
- The old ClassNest source URL returns 404 and is omitted from the new site.
- The rebuild was published to GitHub Pages on September 18, 2026. Homepage, all three case studies, direct Huddle routing, résumé PDF, social image, sitemap, and robots file were verified against the local build; an unknown route returned HTTP 404. Later document-link updates are tracked separately below.

## Google Drive document update

The header, hero, and contact résumé links now open the owner-provided Google Drive folder in a new tab. The main buttons say “Résumé & cover letter”; the compact header retains “Résumé”. Legacy PDF URLs remain available for old links, but are no longer linked from the site. Subsequent résumé and cover-letter updates can be managed directly in Drive without redeploying the website.
