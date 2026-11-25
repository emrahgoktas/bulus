import { ImageResponse } from "next/og";

export function generateStaticParams() {
  return [{ size: "192" }, { size: "512" }];
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ size: string }> },
) {
  const { size } = await context.params;
  const dimension = size === "512" ? 512 : size === "192" ? 192 : 0;

  if (!dimension) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FF385C",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: Math.round(dimension * 0.46),
          fontWeight: 700,
        }}
      >
        B
      </div>
    ),
    { width: dimension, height: dimension },
  );
}
