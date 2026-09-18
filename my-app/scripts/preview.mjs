import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { pathToFileURL } from "node:url";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
export function createStaticServer(directory = "dist") {
  const root = resolve(directory);
  return createServer(async (req, res) => {
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405).end();
      return;
    }
    try {
      const url = new URL(req.url, "http://localhost");
      const pathname = decodeURIComponent(url.pathname);
      let file = resolve(root, "." + pathname);
      if (file !== root && !file.startsWith(root + sep)) {
        res.writeHead(403).end();
        return;
      }
      const info = await stat(file);
      if (info.isDirectory()) {
        if (!pathname.endsWith("/")) {
          res
            .writeHead(301, { Location: url.pathname + "/" + url.search })
            .end();
          return;
        }
        file = resolve(file, "index.html");
      }
      const content = await readFile(file);
      res.writeHead(200, {
        "Content-Type": types[extname(file)] || "application/octet-stream",
        "Cache-Control": "no-cache",
      });
      res.end(req.method === "HEAD" ? undefined : content);
    } catch {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      const content = await readFile(resolve(root, "404.html")).catch(() => "");
      res.end(req.method === "HEAD" ? undefined : content);
    }
  });
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const port = Number(process.env.PORT) || 4173;
  createStaticServer().listen(port, "127.0.0.1", () =>
    console.log(`Static portfolio preview: http://127.0.0.1:${port}`),
  );
}
