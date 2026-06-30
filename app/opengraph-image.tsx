import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Man and Van Manchester — Professional Removals across Greater Manchester";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #020617 0%, #1e3a8a 55%, #0f1f4a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(37,99,235,0.18)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            background: "#2563EB",
            borderRadius: "18px",
            width: 80,
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
            boxShadow: "0 8px 32px rgba(37,99,235,0.5)",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 32,
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            MV
          </div>
        </div>

        {/* Business name */}
        <div
          style={{
            color: "white",
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 18,
            letterSpacing: "-1.5px",
          }}
        >
          Man and Van Manchester
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#93C5FD",
            fontSize: 30,
            fontWeight: 400,
            marginBottom: 52,
            letterSpacing: "-0.3px",
          }}
        >
          Professional removals across Greater Manchester
        </div>

        {/* Trust pills */}
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <div
            style={{
              background: "#16a34a",
              borderRadius: "100px",
              padding: "12px 26px",
              color: "white",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            ★ 4.9 · 214 Reviews
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "100px",
              padding: "12px 26px",
              color: "white",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            07438 447286
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "100px",
              padding: "12px 26px",
              color: "white",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            From £79 · Fixed Price
          </div>
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 56,
            color: "rgba(255,255,255,0.3)",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "0.5px",
          }}
        >
          manandvanmanchester.org.uk
        </div>
      </div>
    ),
    { ...size }
  );
}
