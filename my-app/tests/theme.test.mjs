import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import { load } from "cheerio";
const html = await readFile("dist/index.html", "utf8");
const $ = load(html);
const code = $("script[data-theme-init]").text();
function browser({ saved = null, dark = false, blocked = false } = {}) {
  const events = {},
    windowEvents = {},
    attributes = {},
    writes = [];
  const root = { dataset: {} };
  const meta = { content: "" };
  const button = { setAttribute: (k, v) => (attributes[k] = v) };
  const system = {
    matches: dark,
    addEventListener: (name, fn) => (system.change = fn),
  };
  const document = {
    documentElement: root,
    querySelectorAll: () => [button],
    querySelector: () => meta,
    addEventListener: (name, fn) => (events[name] = fn),
  };
  const window = {
    matchMedia: () => system,
    addEventListener: (name, fn) => (windowEvents[name] = fn),
  };
  runInNewContext(code, {
    document,
    window,
    localStorage: {
      getItem: () => {
        if (blocked) throw Error("blocked");
        return saved;
      },
      setItem: (k, v) => {
        if (blocked) throw Error("blocked");
        writes.push([k, v]);
      },
    },
  });
  return {
    root,
    meta,
    attributes,
    writes,
    system,
    events,
    windowEvents,
    toggle: () => events.click({ target: { closest: () => button } }),
  };
}
test("every generated page includes a keyboard-accessible switch and early theme initialization", async () => {
  for (const file of [
    "dist/index.html",
    "dist/project/huddle/index.html",
    "dist/project/classnest/index.html",
    "dist/404.html",
  ]) {
    const markup = await readFile(file, "utf8");
    const page = load(markup);
    assert.equal(
      page('button.theme-toggle[role="switch"][aria-label="Light theme"]')
        .length,
      1,
    );
    assert.ok(page("script[data-theme-init]").text().length > 0);
    assert.ok(markup.indexOf("data-theme-init") < markup.indexOf("<body>"));
  }
});
test("first visit follows system preference and sets browser chrome and switch state", () => {
  for (const dark of [false, true]) {
    const b = browser({ dark });
    assert.equal(b.root.dataset.theme, dark ? "dark" : "light");
    assert.equal(b.attributes["aria-checked"], String(!dark));
    assert.equal(b.meta.content, dark ? "#0c0d10" : "#f6f5f2");
  }
});
test("saved preference wins across pages and toggle persists the new choice", () => {
  const b = browser({ saved: "light", dark: true });
  assert.equal(b.root.dataset.theme, "light");
  b.toggle();
  assert.equal(b.root.dataset.theme, "dark");
  assert.deepEqual(b.writes, [["portfolio-theme", "dark"]]);
  assert.equal(b.attributes["aria-checked"], "false");
  assert.equal(
    browser({ saved: b.writes[0][1], dark: false }).root.dataset.theme,
    "dark",
  );
});
test("blocked storage still allows switching and invalid preferences fall back to the OS", () => {
  const b = browser({ blocked: true, dark: true });
  b.toggle();
  assert.equal(b.root.dataset.theme, "light");
  assert.equal(
    browser({ saved: "unexpected", dark: false }).root.dataset.theme,
    "light",
  );
});
test("system changes follow the OS until an explicit choice, and other tabs stay in sync", () => {
  const b = browser({ dark: true });
  b.system.matches = false;
  b.system.change();
  assert.equal(b.root.dataset.theme, "light");
  b.toggle();
  b.system.change();
  assert.equal(b.root.dataset.theme, "dark");
  b.windowEvents.storage({ key: "portfolio-theme", newValue: "light" });
  assert.equal(b.root.dataset.theme, "light");
  b.windowEvents.storage({ key: "unrelated", newValue: "dark" });
  assert.equal(b.root.dataset.theme, "light");
  b.system.matches = true;
  b.windowEvents.storage({ key: null, newValue: null });
  assert.equal(b.root.dataset.theme, "dark");
});
test("late development rendering synchronizes the accessible switch state", () => {
  const b = browser({ saved: "light" });
  b.attributes["aria-checked"] = "false";
  b.events["portfolio:ready"]();
  assert.equal(b.attributes["aria-checked"], "true");
});
