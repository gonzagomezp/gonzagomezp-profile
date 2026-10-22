const BASE = "https://cv.gonzagomezp.com.ar";

// lastModified only when the content really changes: Google ignores it if it's not accurate.
export default function sitemap() {
  return [
    { url: BASE, lastModified: "2026-10-19" },
    { url: `${BASE}/cv/CV-Gonzalo-Gomez-Pizarro-EN.pdf`, lastModified: "2026-10-06" },
    { url: `${BASE}/cv/CV-Gonzalo-Gomez-Pizarro-ES.pdf`, lastModified: "2026-10-06" },
  ];
}
