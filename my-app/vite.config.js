import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
export default defineConfig({
  plugins: [
    react(),
    {
      name: "theme-before-paint",
      transformIndexHtml() {
        return [
          {
            tag: "script",
            attrs: { "data-theme-init": "" },
            children: readFileSync(
              new URL("./src/theme-init.js", import.meta.url),
              "utf8",
            ),
            injectTo: "head",
          },
        ];
      },
    },
  ],
  base: "/",
  build: { target: "es2022", sourcemap: false },
});
