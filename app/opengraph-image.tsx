import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FAF9F6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#2C3E80",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Y
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#1c1917" }}>
            YOUnique
          </div>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#1c1917",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          An Innovative Education &amp; Psychology Academy
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "#57534e",
            maxWidth: 820,
          }}
        >
          Career counselling, DMIT, memory training, NLP, EFT, and Garbh
          Sanskar — delivered by a counseling psychologist.
        </div>
      </div>
    ),
    { ...size }
  );
}
