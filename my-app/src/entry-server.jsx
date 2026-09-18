import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
export function render(pathname, year) {
  return renderToString(<App pathname={pathname} year={year} />);
}
