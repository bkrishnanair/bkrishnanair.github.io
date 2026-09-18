import "./styles.css";

// Production pages are complete HTML. React is used only to preview content in development.
if (import.meta.env.DEV) import("./dev.jsx");

document.addEventListener("click", (event) => {
  const link = event.target.closest(".mobile-menu nav a");
  if (link) link.closest("details").removeAttribute("open");
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const menu = document.querySelector(".mobile-menu[open]");
  if (menu) {
    menu.removeAttribute("open");
    menu.querySelector("summary").focus();
  }
});
