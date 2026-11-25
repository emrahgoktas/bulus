"use client";

import { phoneHref, site } from "@/lib/site";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          background: "#ffffff",
          color: "#222222",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "64px 16px" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.04em" }}>{site.host}</p>
          <h1 style={{ fontSize: 32, lineHeight: 1.2 }}>Sayfa şu an açılamadı</h1>
          <p style={{ fontSize: 16, lineHeight: 1.6 }}>
            Yeniden deneyin ya da müsaitlik için telefon ve WhatsApp hattını kullanın.
          </p>
          <p style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                height: 56,
                padding: "0 20px",
                border: 0,
                borderRadius: 12,
                background: "#222222",
                color: "#ffffff",
                fontWeight: 700,
              }}
            >
              Yeniden dene
            </button>
            <a
              href={phoneHref()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 56,
                padding: "0 20px",
                borderRadius: 12,
                background: "#FF385C",
                color: "#ffffff",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Telefon Ara
            </a>
          </p>
        </main>
      </body>
    </html>
  );
}
