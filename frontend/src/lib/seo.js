// Per-page SEO: title, description, and canonical (SPA-safe upserts).
const BASE = "https://dcalimos.com";

export function setPageSeo({ title, description, path }) {
  if (title) document.title = title;
  if (description) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", path === "/" ? `${BASE}/` : `${BASE}${path}`);
}

// Inject (or replace) a JSON-LD <script id=...> in <head>; returns a cleanup
// function for useEffect. Used for per-page FAQPage / BreadcrumbList schema.
export function setJsonLd(id, data) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
  return () => {
    const s = document.getElementById(id);
    if (s) s.remove();
  };
}
