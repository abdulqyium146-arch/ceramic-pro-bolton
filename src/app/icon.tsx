import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "14px",
        }}
      >
        <span
          style={{
            color: "#c9a84c",
            fontSize: "28px",
            fontWeight: 800,
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
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
