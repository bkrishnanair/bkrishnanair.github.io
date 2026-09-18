import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import data from "./data/resume.json";
import { resolveRoute } from "./routes.js";
const route = resolveRoute(window.location.pathname, data.projects);
document.title = route.project
  ? `${route.project.name} | ${data.basics.displayName}`
  : data.meta.title;
createRoot(document.getElementById("root")).render(
  <App pathname={window.location.pathname} />,
);
