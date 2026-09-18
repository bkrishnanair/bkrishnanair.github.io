# Content decisions and evidence

The owner requested an expert synthesis of several conflicting briefs. The supplied résumé and cover letter provide the factual baseline; the suggestions do not establish additional professional claims.

## Sources

- Supplied `Balakrishna Nair_Resume.pdf`: enterprise employment, promotion dates, role metrics, education, GPA, Huddle metrics, ClassNest test coverage, IoT scope, skills, and certification status. The public download is a byte-for-byte copy of that file.
- Supplied `Balakrishna_Nair_Coverletter.pdf`: Huddle schema-constrained Gemini output and validation, solo product ownership, immediate availability, and relocation.
- Existing portfolio: personal interests (sports and music).
- Owner explicitly confirmed `bkrishna@terpmail.umd.edu` during this rebuild.
- Huddle live interface and public source repository were reachable during verification.

## Deliberate choices

- Use **Master of Engineering in Software Engineering**, never the suggested but incorrect M.S. in Computer Science.
- Keep AWS Solutions Architect Associate preparation **in progress**; remove the elapsed target date.
- State **2 years** of enterprise experience, without rounding up the supplied employment period.
- Attribute $100M+ daily transaction volume to the MUFG platform supported by the team, not to personal throughput.
- Use Huddle's résumé-backed 565+ events, 48 routes, 68 pages, 87% payload reduction, 566-record migration, and atomic RSVP transactions.
- Omit 60fps, finalist status, Zod/retry-harness details, and unverified user-count claims.
- The old site mentioned 90% fewer API calls, but the supplied résumé does not. Prefer its documented 87% payload reduction; these are different metrics and should not be conflated.
- ClassNest's 90% coverage is application test coverage. The case study explicitly presents model-quality evaluation as future work, not a completed achievement.
- ClassNest's previous public repository URL returned 404. Do not display a dead source link. Likewise omit unverified source links for the older IoT project. Add links in the JSON when public repositories become available.
- Keep three projects supported by the supplied résumé. Remove older unsupported portfolio entries instead of filling them with speculative content.
- A LinkedIn automated HTTP probe returned 999 (access restriction). Retain the owner-supplied profile URL; do not label it as verified publicly reachable.

## Technical decisions

- Vite replaces deprecated CRA tooling and its dependency tree.
- React provides build-time components; generated HTML avoids the need for a router, hydration, or a server in production.
- Static project directories solve GitHub Pages deep linking without redirecting all unknown paths to the homepage. Native links preserve back/forward behavior and work without JavaScript.
- CSS is a small, explicit design system rather than a second UI framework. The old CSS modules, Tailwind configuration, animation libraries, Three.js, preloader, and EmailJS form are removed.
- A direct mail link avoids an unnecessary third-party form dependency and does not promise unverified CAPTCHA protection.
- A real screenshot represents Huddle. The other cards show conceptual, labeled architecture diagrams rather than fabricated product interfaces.
- Legacy source, duplicate assets, backup applications, and tracked dependencies were removed only after confirming they were not part of the retained implementation. Git history preserves the original tracked material.
