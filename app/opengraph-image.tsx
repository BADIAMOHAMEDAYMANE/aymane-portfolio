import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — AI & Data Science Student`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const tags = ["Machine Learning", "Deep Learning", "NLP", "PyTorch"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0b",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#2dd4bf", fontSize: 26 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#2dd4bf" }} />
          Open to AI / Data Science internships
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 38, color: "#8b8b92" }}>AI & Data Science Student</div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {tags.map((t) => (
            <div
              key={t}
              style={{
                fontSize: 24,
                padding: "10px 20px",
                border: "1px solid #2c2c32",
                borderRadius: 999,
                color: "#d4d4d8",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
