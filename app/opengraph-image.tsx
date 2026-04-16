import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0f1837",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top gradient bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #f97316, #22d3ee)",
            display: "flex",
          }}
        />

        {/* Logo from public folder */}
        <img
          src="https://www.countryhealthandcare.com.au/images/logo-hero.png"
          width={130}
          height={130}
          style={{ marginBottom: "32px", borderRadius: "16px" }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: "900",
            color: "#ffffff",
            marginBottom: "16px",
            letterSpacing: "-1px",
            display: "flex",
          }}
        >
          Country Health and Care
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.5px",
            display: "flex",
          }}
        >
          Compassionate NDIS Services Across Australia
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "1px",
            display: "flex",
          }}
        >
          countryhealthandcare.com.au
        </div>
      </div>
    ),
    size
  );
}
