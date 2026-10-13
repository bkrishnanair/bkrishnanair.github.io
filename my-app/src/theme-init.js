// Inlined in the document head so the chosen palette applies before first paint.
(() => {
  const root = document.documentElement;
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const key = "portfolio-theme";
  let preference;
  try {
    preference = localStorage.getItem(key);
  } catch {
    /* Storage may be blocked. */
  }
  const valid = (value) => value === "light" || value === "dark";
  if (!valid(preference)) preference = null;
  const sync = () => {
    document.querySelectorAll(".theme-toggle").forEach((button) => {
      button.setAttribute(
        "aria-checked",
        String(root.dataset.theme === "light"),
      );
    });
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta)
      meta.content = root.dataset.theme === "light" ? "#f6f5f2" : "#0c0d10";
  };
  const apply = () => {
    root.dataset.theme = preference || (system.matches ? "dark" : "light");
    sync();
  };
  apply();
  document.addEventListener("DOMContentLoaded", sync);
  document.addEventListener("portfolio:ready", sync);
  window.addEventListener("pageshow", apply);
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".theme-toggle")) return;
    preference = root.dataset.theme === "light" ? "dark" : "light";
    apply();
    try {
      localStorage.setItem(key, preference);
    } catch {
      /* Keep the choice for this page. */
    }
  });
  system.addEventListener("change", () => {
    if (!preference) apply();
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== key && event.key !== null) return;
    preference = valid(event.newValue) ? event.newValue : null;
    apply();
  });
})();
