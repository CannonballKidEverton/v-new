import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A09",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: wordmark + divider mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#F2EEE6",
              letterSpacing: "0.005em",
              textTransform: "uppercase",
            }}
          >
            Valantai
          </span>
          <span
            style={{
              width: 1,
              height: 18,
              background: "#3A3A35",
              display: "block",
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 400,
              color: "#5A5A52",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            LDN · DXB · NYC · RUH
          </span>
        </div>

        {/* Centre: main claim */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {["FROM IDEA", "TO EXIT"].map((line) => (
            <span
              key={line}
              style={{
                fontSize: 108,
                fontWeight: 800,
                color: "#F2EEE6",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                textTransform: "uppercase",
              }}
            >
              {line}
            </span>
          ))}
        </div>

        {/* Bottom: descriptor */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#8A8A82",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            BUILT BY OPERATORS · ACCELERATED BY AI
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#3A3A35",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            valantai.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
