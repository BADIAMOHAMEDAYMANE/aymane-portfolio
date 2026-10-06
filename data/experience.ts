/**
 * Experience & education.
 * Source: PFA defence slides (Soutenance PFA — EMSI, 2025–2026).
 * Anything in [BRACKETS] is a placeholder — replace it or delete it.
 */

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  achievements: string[];
  stack: string[];
  placeholder?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "Lama Healthcare — Practice One",
    role: "Front-end & AI Intern — Final-year project (PFA)",
    period: "2026 · 8 weeks",
    location: "[CITY / Remote]",
    summary:
      "Rebuilt, in a team of three interns, a HIPAA-compliant credentialing platform used by US medical practices, and ran the two AI experiments behind its document-extraction pipeline.",
    achievements: [
      "Owned the entire front-end: design system, reusable components and all portal screens, including a full UI redesign",
      "Shipped the dashboard (0–100 compliance score), provider records, credentialing pipeline, alerts, audit grid and a public document-upload page",
      "Benchmarked 4 vision-language models (180 observations each) — ~0.94 field recall on clean scans",
      "Fine-tuned Qwen3-1.7B with LoRA on a free T4 GPU (3.3 GB peak VRAM): 100% valid JSON, 87% of fields correct on the public CORD dataset",
      "Access tests passing for all 6 user roles; sensitive data masked and every reveal audited",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Zod", "Transformers", "PEFT / LoRA"],
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  details?: string;
  placeholder?: boolean;
};

export const education: Education[] = [
  {
    degree: "AI & Data Science — 5th Year",
    school: "EMSI — École Marocaine des Sciences de l'Ingénieur",
    period: "[START_YEAR] — 2026",
    details:
      "Final-year project (PFA): HIPAA-compliant credentialing platform with an AI-assisted document extraction pipeline, at Lama Healthcare.",
  },
];

export const certifications: { name: string; issuer: string; year: string }[] = [
  // { name: "[CERTIFICATION]", issuer: "[ISSUER]", year: "[YEAR]" },
];
