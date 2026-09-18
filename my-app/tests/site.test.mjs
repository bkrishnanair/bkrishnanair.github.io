import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat, readdir } from "node:fs/promises";
import { join } from "node:path";
import { gzipSync } from "node:zlib";
import { load } from "cheerio";
import { projectPath, resolveRoute } from "../src/routes.js";
import { createStaticServer } from "../scripts/preview.mjs";
const data = JSON.parse(await readFile("src/data/resume.json", "utf8"));
const homepage = await readFile("dist/index.html", "utf8");
const home = load(homepage);
const pages = [
  { path: "/", html: homepage },
  ...(await Promise.all(
    data.projects.map(async (project) => ({
      path: projectPath(project),
      html: await readFile(
        join("dist", projectPath(project), "index.html"),
        "utf8",
      ),
    })),
  )),
];

test("known routes resolve deterministically, including old slugs", () => {
  assert.equal(resolveRoute("/", data.projects).type, "home");
  assert.equal(
    new Set(data.projects.map((item) => item.slug)).size,
    data.projects.length,
  );
  for (const project of data.projects) {
    for (const slug of [project.slug, ...project.aliases]) {
      for (const suffix of ["", "/"])
        assert.equal(
          resolveRoute(`/project/${slug}${suffix}`, data.projects).project.slug,
          project.slug,
        );
    }
  }
  for (const path of [
    "/missing",
    "/project/missing",
    "/project/",
    "/project/%ZZ",
    "/project/huddle/extra",
  ])
    assert.equal(resolveRoute(path, data.projects).type, "not-found");
});

test("homepage communicates the verified professional profile without JavaScript", () => {
  assert.equal(home("h1").length, 1);
  for (const text of [
    "Capgemini",
    "MUFG",
    "Master of Engineering, Software Engineering",
    "87%",
    "25%",
    "30%",
    "90%",
    "Available immediately",
  ])
    assert.ok(home.text().includes(text), text);
  assert.ok(
    !/starting June|currently pursuing|M\.S\.|60fps|finalist|Learn React|bkrishna@umd\.edu/i.test(
      home.text(),
    ),
  );
});

test("all navigation anchors and same-site links resolve to built pages or assets", async () => {
  for (const page of pages) {
    const $ = load(page.html);
    for (const el of $("a[href]").toArray()) {
      const href = $(el).attr("href");
      if (/^(https?:|mailto:)/.test(href)) continue;
      const url = new URL(href, data.meta.siteUrl + page.path);
      const target = url.pathname.endsWith("/")
        ? join("dist", url.pathname, "index.html")
        : join("dist", url.pathname);
      assert.ok((await stat(target)).isFile(), `${page.path} -> ${href}`);
      if (url.hash) {
        const targetPage = load(await readFile(target, "utf8"));
        assert.equal(
          targetPage(`[id="${url.hash.slice(1)}"]`).length,
          1,
          `${page.path} -> ${href}`,
        );
      }
      assert.ok(
        $(el).text().trim() || $(el).attr("aria-label"),
        `Unnamed link on ${page.path}`,
      );
    }
  }
});

test("résumé links open the shared Drive folder while legacy PDFs and canonical contact remain available", async () => {
  assert.equal(home(`a[href="${data.meta.resumeUrl}"]`).length, 3);
  const pdf = await readFile(join("dist", data.meta.resumePath));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.ok(pdf.length > 10000);
  for (const alias of data.meta.resumeAliases) {
    assert.deepEqual(await readFile(join("dist", alias)), pdf);
  }
  for (const page of pages) {
    const $ = load(page.html);
    const links = $(`a[href="${data.meta.resumeUrl}"]`);
    assert.ok(links.length >= 2);
    for (const el of links.toArray()) {
      assert.equal($(el).attr("target"), "_blank");
      assert.match($(el).attr("rel"), /noopener/);
      assert.equal($(el).attr("download"), undefined);
    }
    assert.equal($(`a[href="${data.meta.resumePath}"]`).length, 0);
    assert.ok($.text().includes(data.ui.resumeDocuments));
    for (const el of $('a[href^="mailto:"]').toArray())
      assert.equal($(el).attr("href"), `mailto:${data.basics.email}`);
  }
});

test("every rendered local image, stylesheet, font preload, and script exists", async () => {
  for (const page of pages) {
    const $ = load(page.html);
    for (const el of $(
      'img[src],script[src],link[rel="stylesheet"],link[rel="icon"],link[rel="preload"]',
    ).toArray()) {
      const source = $(el).attr("src") || $(el).attr("href");
      const srcset = $(el).attr("srcset") || $(el).attr("imagesrcset");
      const urls = [
        ...(source ? [source] : []),
        ...(srcset
          ? srcset
              .split(",")
              .map((candidate) => candidate.trim().split(/\s+/)[0])
          : []),
      ];
      assert.ok(urls.length > 0, `Asset has no source on ${page.path}`);
      for (const url of urls) {
        if (!url.startsWith("/")) continue;
        assert.ok((await stat(join("dist", url))).isFile(), `Missing ${url}`);
      }
    }
    for (const image of $("img").toArray()) {
      assert.notEqual($(image).attr("alt"), undefined);
      assert.ok($(image).attr("width") && $(image).attr("height"));
    }
  }
});

test("pages have unique titles, descriptions, canonical URLs, social cards and structured data", async () => {
  const titles = new Set();
  for (const page of pages) {
    const $ = load(page.html);
    assert.equal($("h1").length, 1);
    assert.equal($("main").length, 1);
    assert.equal($("html").attr("lang"), "en");
    assert.equal(
      $('link[rel="canonical"]').attr("href"),
      data.meta.siteUrl + page.path,
    );
    const title = $("title").text();
    assert.ok(title.length > 10);
    assert.ok(!titles.has(title));
    titles.add(title);
    assert.ok($('meta[name="description"]').attr("content").length > 50);
    assert.equal($('meta[property="og:title"]').attr("content"), title);
    assert.equal(
      $('meta[name="twitter:card"]').attr("content"),
      "summary_large_image",
    );
    assert.equal(
      JSON.parse($('script[type="application/ld+json"]').text())["@context"],
      "https://schema.org",
    );
    assert.ok(
      (
        await stat(
          join(
            "dist",
            new URL($('meta[property="og:image"]').attr("content")).pathname,
          ),
        )
      ).isFile(),
    );
  }
});

test("all projects have complete accessible case studies and consistent stable links", () => {
  for (const project of data.projects) {
    assert.ok(home(`a[href="${projectPath(project)}"]`).length > 0);
    const $ = load(
      pages.find((page) => page.path === projectPath(project)).html,
    );
    assert.ok($("h1").text().includes(project.name));
    assert.equal($(".decisions article").length, project.decisions.length);
    assert.equal(
      $(".architecture-nodes details summary").length,
      project.architecture.nodes.length,
    );
    for (const el of $('a[target="_blank"]').toArray())
      assert.match($(el).attr("rel"), /noopener/);
  }
});

test("unknown routes serve a real 404 while direct project requests and refreshes succeed", async () => {
  const server = createStaticServer("dist");
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const path of [
      "/",
      ...data.projects.flatMap((project) => [
        projectPath(project),
        projectPath(project).slice(0, -1),
      ]),
    ]) {
      for (let refresh = 0; refresh < 2; refresh++) {
        const response = await fetch(origin + path);
        assert.equal(response.status, 200, path);
        const body = await response.text();
        assert.ok(body.includes("<h1"));
      }
    }
    for (const path of [
      "/unknown-page",
      "/project/unknown",
      "/images/missing.webp",
    ]) {
      const response = await fetch(origin + path);
      assert.equal(response.status, 404);
      assert.ok((await response.text()).includes(data.ui.notFound.title));
    }
    for (const project of data.projects)
      for (const alias of project.aliases) {
        const response = await fetch(`${origin}/project/${alias}/`);
        assert.equal(response.status, 200);
        assert.ok(
          (await response.text()).includes(`url=${projectPath(project)}`),
        );
      }
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

test("sitemap contains all canonical pages and excludes unknown/alias routes", async () => {
  const sitemap = await readFile("dist/sitemap.xml", "utf8");
  for (const page of pages)
    assert.ok(sitemap.includes(`<loc>${data.meta.siteUrl + page.path}</loc>`));
  assert.ok(!sitemap.includes("404"));
  const errorPage = load(await readFile("dist/404.html", "utf8"));
  assert.equal(
    errorPage('meta[name="robots"]').attr("content"),
    "noindex, follow",
  );
  assert.ok(
    (await readFile("dist/robots.txt", "utf8")).includes("/sitemap.xml"),
  );
});

test("production JavaScript stays below 5 KB gzip and CSS respects reduced motion", async () => {
  let bytes = 0;
  let css = "";
  for (const name of await readdir("dist/assets")) {
    const content = await readFile(join("dist/assets", name));
    if (name.endsWith(".js")) bytes += gzipSync(content).length;
    if (name.endsWith(".css")) css += content.toString();
  }
  assert.ok(bytes < 5 * 1024, `${bytes} gzipped bytes`);
  assert.ok(css.includes("prefers-reduced-motion"));
  assert.ok(!homepage.includes("iframe"));
});
