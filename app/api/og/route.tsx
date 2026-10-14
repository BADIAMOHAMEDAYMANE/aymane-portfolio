import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — Élève-ingénieur IA & Data Science, recherche stage PFE`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET(request: Request) {
  const isEnglish = new URL(request.url).searchParams.get("locale") === "en";
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
          {isEnglish ? "Seeking a 6-month PFE internship" : "Recherche un stage PFE de 6 mois"}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 38, color: "#b4b4bc" }}>
            {isEnglish ? "AI & Data Science Engineering Student" : "Élève-ingénieur IA & Data Science"}
          </div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: 24,
                padding: "10px 20px",
                border: "1px solid #2c2c32",
                borderRadius: 999,
                color: "#d4d4d8",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
