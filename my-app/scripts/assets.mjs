import sharp from "sharp";
import { readFile, writeFile, mkdir } from "node:fs/promises";
const data = JSON.parse(
  await readFile(new URL("../src/data/resume.json", import.meta.url), "utf8"),
);
const publicDir = new URL("../public/", import.meta.url);
await mkdir(new URL("images/", publicDir), { recursive: true });
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
const { meta, basics } = data;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#0c0d10"/><path d="M64 110H1136M64 525H1136" stroke="#32313d"/><text x="64" y="76" font-family="Helvetica,Arial,sans-serif" font-weight="600" font-size="28" fill="#ededf0">${escape(basics.displayName)}</text><text x="1136" y="74" text-anchor="end" font-family="monospace" font-size="15" fill="#aaa2ff">${escape(meta.socialCard.eyebrow)}</text><text x="64" y="260" font-family="Helvetica,Arial,sans-serif" font-size="82" font-weight="600" letter-spacing="-4" fill="#ededf0">${escape(meta.socialCard.line1)}</text><text x="64" y="356" font-family="Helvetica,Arial,sans-serif" font-size="82" font-weight="600" letter-spacing="-4" fill="#aaa2ff">${escape(meta.socialCard.line2)}</text><text x="64" y="456" font-family="monospace" font-size="19" fill="#b7b4c7">${escape(meta.socialCard.footer)}</text><text x="64" y="574" font-family="monospace" font-size="18" fill="#a3a5b3">${escape(new URL(meta.siteUrl).host)}</text><text x="1136" y="580" text-anchor="end" font-family="Helvetica,Arial,sans-serif" font-size="32" fill="#aaa2ff">↗</text></svg>`;
await sharp(Buffer.from(svg))
  .png()
  .toFile(new URL("images/og-image.png", publicDir).pathname);
await writeFile(
  new URL("favicon.svg", publicDir),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0c0d10"/><text x="8" y="43" font-family="Arial,sans-serif" font-size="34" font-weight="bold" letter-spacing="-3" fill="#c2bbff">${escape(basics.initials)}.</text></svg>`,
);
