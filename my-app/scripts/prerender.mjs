import {
  readFile,
  writeFile,
  mkdir,
  rm,
  readdir,
  copyFile,
} from "node:fs/promises";
import { join } from "node:path";
import { render } from "../.ssr/entry-server.js";
import { projectPath } from "../src/routes.js";
const data = JSON.parse(await readFile("src/data/resume.json", "utf8"));
const template = await readFile("dist/index.html", "utf8");
const font = (await readdir("dist/assets")).find((name) =>
  name.endsWith(".woff2"),
);
const year = new Date().getFullYear();
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const routes = [
  { path: "/", project: null },
  ...data.projects.map((project) => ({ path: projectPath(project), project })),
  { path: "/404.html", notFound: true },
];
for (const route of routes) {
  const title = route.notFound
    ? `${data.ui.notFound.title} | ${data.basics.displayName}`
    : route.project
      ? `${route.project.name} | ${data.basics.displayName}`
      : data.meta.title;
  const description = route.notFound
    ? data.ui.notFound.description
    : route.project?.summary || data.meta.description;
  const canonical = data.meta.siteUrl + route.path;
  const structured = route.notFound
    ? null
    : route.project
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: route.project.name,
          description,
          url: canonical,
          author: {
            "@type": "Person",
            name: data.basics.name,
            url: data.meta.siteUrl,
          },
        }
      : {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: canonical,
          mainEntity: {
            "@type": "Person",
            name: data.basics.name,
            alternateName: data.basics.displayName,
            jobTitle: data.basics.title,
            url: canonical,
            email: data.basics.email,
            sameAs: data.basics.profiles.map((item) => item.url),
            alumniOf: data.about.education.map((item) => ({
              "@type": "EducationalOrganization",
              name: item.institution,
            })),
          },
        };
  const head = `<title>${escape(title)}</title>
    <link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />
    <meta name="description" content="${escape(description)}" />
    ${route.notFound ? '<meta name="robots" content="noindex, follow" />' : `<link rel="canonical" href="${canonical}" />`}
    <meta property="og:type" content="website" /><meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" /><meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${data.meta.siteUrl + data.meta.socialImage}" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escape(data.meta.socialImageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${escape(title)}" />
    <meta name="twitter:description" content="${escape(description)}" /><meta name="twitter:image" content="${data.meta.siteUrl + data.meta.socialImage}" />
    <meta name="twitter:image:alt" content="${escape(data.meta.socialImageAlt)}" />
    ${structured ? `<script type="application/ld+json">${JSON.stringify(structured).replaceAll("<", "\\u003c")}</script>` : ""}`;
  const html = template
    .replace("<!--page-head-->", head)
    .replace('<div id="root">', `<div id="root" data-year="${year}">`)
    .replace("<!--page-html-->", render(route.path, year));
  const target =
    route.path === "/"
      ? "dist/index.html"
      : route.notFound
        ? "dist/404.html"
        : join("dist", route.path, "index.html");
  await mkdir(join(target, ".."), { recursive: true });
  await writeFile(target, html);
}
// Preserve historical project slugs without relying on a SPA error-page redirect.
for (const project of data.projects) {
  for (const alias of project.aliases) {
    const target = join("dist/project", alias);
    await mkdir(target, { recursive: true });
    const url = projectPath(project);
    await writeFile(
      join(target, "index.html"),
      `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(project.name)}</title><meta http-equiv="refresh" content="0;url=${url}"><link rel="canonical" href="${data.meta.siteUrl + url}"><meta name="robots" content="noindex,follow"></head><body><a href="${url}">${escape(project.name)}</a></body></html>`,
    );
  }
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes
    .filter((route) => !route.notFound)
    .map((route) => `<url><loc>${data.meta.siteUrl + route.path}</loc></url>`)
    .join("")}</urlset>`,
);
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${data.meta.siteUrl}/sitemap.xml\n`,
);
await writeFile("dist/.nojekyll", "");
for (const alias of data.meta.resumeAliases) {
  await copyFile(join("dist", data.meta.resumePath), join("dist", alias));
}
await rm(".ssr", { recursive: true, force: true });
console.log(
  `Pre-rendered ${routes.length} pages and ${data.projects.reduce((sum, project) => sum + project.aliases.length, 0)} legacy redirects.`,
);
