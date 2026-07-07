import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0f0f",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
        }}
      >
        <span
          style={{
            color: "#c9a84c",
            fontSize: "80px",
            fontWeight: 800,
            fontFamily: "sans-serif",
            letterSpacing: "-3px",
            lineHeight: 1,
          }}
        >
          CP
        </span>
      </div>
    ),
    { ...size }
  );
}
