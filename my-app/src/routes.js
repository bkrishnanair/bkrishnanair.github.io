export function projectPath(project) {
  return `/project/${project.slug}/`;
}
export function resolveRoute(pathname, projects) {
  let path;
  try {
    path = decodeURIComponent(pathname).replace(/\/+$/, "") || "/";
  } catch {
    return { type: "not-found" };
  }
  if (path === "/" || path === "/index.html") return { type: "home" };
  const match = /^\/project\/([a-z0-9-]+)$/.exec(path);
  if (!match) return { type: "not-found" };
  const project = projects.find(
    (item) => item.slug === match[1] || item.aliases.includes(match[1]),
  );
  return project ? { type: "project", project } : { type: "not-found" };
}
