# ARCHITECTURE.md — Portfolio Rebuild Specification
**Repo:** bkrishnanair.github.io (Create React App, `master` = source, `gh-pages` = compiled deploy target)
**This document is binding. Where your judgment conflicts with this document, this document wins.**

---

## 1. Prime Directives

1. **Single source of truth:** ALL text content — every name, title, bullet, date, link, and label — comes from `src/data/resume.json`. Zero hardcoded content strings in any component. Components receive data via props or import the JSON at the top level and pass it down. If you find yourself typing a sentence into JSX, stop — it belongs in the JSON.
2. **No new frameworks:** This stays a Create React App project. Do NOT migrate to Next.js, Vite, or anything else. Do NOT add state libraries (no Redux/Zustand), no router (single page, anchor scroll), no UI kits (no MUI/Chakra/shadcn).
3. **Styling = Tailwind CSS only.** Install Tailwind for CRA (`tailwindcss`, `postcss`, `autoprefixer`, standard CRA setup). Delete all existing CSS files/modules except `index.css` (Tailwind directives + the two font imports only). No inline `style={{}}` except for truly dynamic values.
4. **Delete before building:** Remove ALL existing components in `src/components/`. Remove the old "Services" section, "Writings & Articles" section, and "Technology Shop Assistant" experience entirely. They must not exist in the new build.
5. **No browser storage:** No localStorage/sessionStorage anywhere.
6. **Accessibility:** semantic HTML, exactly one `<h1>` (in Hero), section headings are `<h2>`, alt text on all images, aria-labels on icon-only links, visible focus states (`focus-visible:ring-2 ring-[--accent]`), color contrast ≥ 4.5:1 for body text.

---

## 2. Design System — Tokens (exact values, do not improvise)

**Aesthetic target: Vercel/Stripe. Restrained, typographic, generous whitespace. If a design decision feels "fun," it is wrong.**

### Theme: single dark theme (no toggle)
| Token | Value | Tailwind usage |
|---|---|---|
| Background | `#0A0A0A` | `bg-[#0A0A0A]` (page) |
| Surface / cards | `#111113` | `bg-[#111113]` |
| Border | `#26262A` | `border-[#26262A]`, always 1px |
| Text primary | `#EDEDED` | `text-[#EDEDED]` |
| Text secondary | `#A1A1AA` | `text-zinc-400` |
| Text muted | `#71717A` | `text-zinc-500` |
| **Accent (the ONLY color)** | `#6366F1` (indigo-500) | links, availability dot, hover states, focus rings |
| Accent hover | `#818CF8` (indigo-400) | link hover |
| Success (availability badge only) | `#22C55E` | the status dot only |

**Permitted:** subtle radial gradients, low-opacity accent glows, backdrop-blur on nav, border-glow hovers, text gradients on headings only.

**Still forbidden:** neon colors outside the indigo/violet family, animated backgrounds/particles, typewriter effects, glassmorphism heavier than `bg-zinc-900/60 + backdrop-blur-sm`, translate/scale transforms on hover, more than ONE accent family.

**Accent family (the ONLY color family):** indigo/violet — `#6366F1` base, `#818CF8` hover, `#8B5CF6` gradient partner. No cyan, no teal, no yellow anywhere. The old site's cyan/yellow/neon vocabulary is fully retired.

### Typography
- Font: **Inter** (Google Fonts, weights 400/500/600/700). Fallback: `ui-sans-serif, system-ui`.
- Scale: `h1` = `text-4xl md:text-5xl font-bold tracking-tight`; `h2` (section titles) = `text-2xl md:text-3xl font-semibold tracking-tight`; card titles = `text-lg font-semibold`; body = `text-base leading-relaxed text-zinc-400`; labels/meta = `text-sm text-zinc-500`.
- Monospace accents (dates, tech tags): `font-mono text-sm` using default mono stack.

### Spacing & Layout
- Content column: `max-w-4xl mx-auto px-6`.
- Section vertical rhythm: `py-20 md:py-24`. Never more, never less.
- Cards: `rounded-lg border border-[#26262A] bg-[#111113] p-6`. Hover: `hover:border-zinc-600 transition-colors`. NO scale transforms, NO lift shadows.
- Tech tags: `rounded-md border border-[#26262A] px-2 py-0.5 font-mono text-xs text-zinc-400`.
- Animations: the ONLY permitted animation is a subtle fade-in-up on section entry (opacity 0→1, translateY 8px→0, 300ms ease-out, CSS only or IntersectionObserver). Nothing else moves.

---

## 3. Component Tree (build exactly this, in this order)

```
<App>
 ├─ <Nav />                      // sticky, backdrop-blur, border-b
 ├─ <main>
 │   ├─ <Hero />                 // h1 name, title, tagline, availability badge, CTAs
 │   ├─ <Stats data={stats} />   // 4 metric cells in a bordered grid row
 │   ├─ <About data={about} />
 │   ├─ <Experience data={experience} />   // timeline-less: company card(s) with highlight bullets
 │   ├─ <Projects data={projects} />       // Huddle = featured full-width card first, others 2-col grid
 │   ├─ <Skills data={skills} />           // category rows, tag chips
 │   ├─ <Certifications data={certifications, achievements} />
 │   ├─ <Education data={education} />
 │   └─ <Contact data={contact, basics} />
 └─ <Footer data={basics} />
```

### Component requirements
- **Nav:** left = `basics.displayName`; right = anchor links (About, Experience, Projects, Skills, Contact) + a `Resume` button (`<a href={meta.resumePdfPath} download>` styled as the one solid-accent button on the page). Mobile: links collapse, Resume button stays.
- **Hero:** availability badge = pill with green dot + `basics.availability`. h1 = `basics.displayName`. Below: `basics.title` and `basics.tagline` in secondary text, then `basics.summary` (max-w-2xl). CTAs: primary `Download Resume`, secondary (bordered) `View Projects` (anchor), tertiary text links to GitHub/LinkedIn/Email with aria-labels.
- **Stats:** 4 cells, `grid-cols-2 md:grid-cols-4`, value in `text-3xl font-bold text-[#EDEDED]`, label in `text-sm text-zinc-500`. No count-up animation.
- **Experience:** map `experience[]`. Header row: company (semibold) + dates (mono, right-aligned). Role in accent-colored `text-sm`. Highlights as a clean `<ul>` with `marker:text-zinc-600`. Tech tags row at bottom.
- **Projects:** `projects.filter(featured)` renders first as a full-width card with tagline, description, highlights, tech tags, and link buttons (`Live Demo` solid accent — render only if `links.live` is non-null; `Source` bordered — only if non-null). Non-featured projects in a `md:grid-cols-2` grid with tagline, description (no highlights), tech tags, links.
- **Skills:** one row per category: category label (mono, muted, uppercase, `text-xs tracking-wider`) + wrapped tag chips.
- **Certifications:** cert cards; if `status === "In Progress"` render an amber (`text-amber-400 border-amber-400/30`) "IN PROGRESS" tag — visually distinct from completed. Achievements as a simple list below.
- **Contact:** headline, message, responseNote, and three link rows (Email/LinkedIn/GitHub) with icons. Email uses `mailto:` — NO form, NO backend.
- **Footer:** name, small nav repeat, `Download Resume` text link, © year computed at runtime.

---

## 4. File Structure (target state)

```
src/
├── data/resume.json          // provided — do not edit content, only consume
├── components/
│   ├── Nav.jsx  Hero.jsx  Stats.jsx  About.jsx  Experience.jsx
│   ├── Projects.jsx  Skills.jsx  Certifications.jsx  Education.jsx
│   ├── Contact.jsx  Footer.jsx
├── App.js                    // imports resume.json once, passes slices down
├── index.js
└── index.css                 // @tailwind directives + font import ONLY
public/
├── index.html                // title + meta description from meta.*, GoatCounter script slot before </body>
└── Balakrishna_Nair_Resume.pdf   // must exist for the download button
```

## 5. Definition of Done (verify each before finishing)
- [ ] `npm run build` passes with zero errors/warnings
- [ ] Grep the components folder for any hardcoded name/date/sentence — must find none
- [ ] Old Services / Writings / Technology Shop Assistant content absent
- [ ] Only colors on the page: the tokens in §2
- [ ] Resume button triggers a download (file present in /public)
- [ ] Responsive at 375px, 768px, 1280px
- [ ] One h1; headings hierarchical; all icon links labeled
- [ ] Lighthouse: Performance / Accessibility / Best Practices / SEO ≥ 90
