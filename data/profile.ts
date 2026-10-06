/**
 * Single source of truth for personal information.
 * Anything wrapped in [BRACKETS] is a placeholder — replace it with real data.
 */

export const profile = {
  name: "Mohamed Aymane Badia",
  shortName: "Mohamed Aymane Badia",
  initials: "AB",
  role: "AI & Data Science Student",
  tagline:
    "I build end-to-end AI applications — from data pipelines, deep learning and LLM fine-tuning to deployed, usable interfaces.",
  status: "Open to internship opportunities in AI / Data Science",
  location: "[YOUR_CITY], Morocco",
  email: "badiamohamedaymane@gmail.com",
  github: "https://github.com/BADIAMOHAMEDAYMANE",
  githubUsername: "BADIAMOHAMEDAYMANE",
  linkedin: "https://www.linkedin.com/in/mohamed-aymane-badia-40a9712a1/",
  // Put your CV in /public/cv.pdf and set this to "/cv.pdf" to show a "Resume" button.
  resume: "" as string,
  // Set this to your Vercel / custom domain once deployed (no trailing slash).
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app",
} as const;

export const about = {
  paragraphs: [
    "I'm a 5th-year student in Artificial Intelligence & Data Science at EMSI, focused on Machine Learning, Deep Learning and NLP.",
    "During my final-year internship at Lama Healthcare, I helped rebuild a HIPAA-compliant platform for US medical practices — owning the front-end and running the AI experiments behind its document-extraction pipeline, including LoRA fine-tuning of an LLM.",
    "I learn by building. My projects go beyond the notebook: I take a model from raw data to training, evaluation and a working application — a Streamlit demo, a Dockerised deployment or a full-stack web app.",
    "I'm looking for an internship where I can apply this to real-world problems and grow as an AI / Data Science engineer.",
  ],
  highlights: [
    { label: "Focus", value: "ML · Deep Learning · NLP" },
    { label: "Approach", value: "Data → Model → Product" },
    { label: "Internship", value: "Lama Healthcare (PFA)" },
    { label: "Currently", value: "5th year, AI & Data Science — EMSI" },
  ],
};
