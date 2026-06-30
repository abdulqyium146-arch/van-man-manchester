import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2563EB",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: "-3px",
          }}
        >
          MV
        </div>
      </div>
    ),
    { ...size }
  );
}
