import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Bursa Apart — günlük, saatlik, haftalık ve aylık daire";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const font = await readFile(join(process.cwd(), "src/fonts/PlusJakartaSans-Bold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px",
          fontFamily: "Jakarta",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#FF385C",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div style={{ fontSize: 32, color: "#222222", fontWeight: 700 }}>Bursa Apart</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 700, color: "#222222", lineHeight: 1.15 }}>
            Günlük, saatlik, haftalık ve aylık daire
          </div>
          <div style={{ marginTop: 20, fontSize: 28, color: "#5c5c5c" }}>Osmangazi · Altıparmak · Bursa</div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <div
            style={{
              background: "#FF385C",
              color: "white",
              borderRadius: 14,
              padding: "16px 24px",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Telefon Ara
          </div>
          <div
            style={{
              background: "#25D366",
              color: "#222222",
              borderRadius: 14,
              padding: "16px 24px",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            WhatsApp
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Jakarta",
          data: font,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
