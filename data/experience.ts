/**
 * Experience & education.
 * Source: PFA defence slides (Soutenance PFA — EMSI, 4th year, 2025–2026).
 * PFA internship: July – September 2026. Engineering cycle: 2022 – 2027 (5th year in 2026–2027).
 */

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string | null;
  summary: string;
  achievements: string[];
  stack: string[];
  caseStudy?: string;
};

export const experiences: Experience[] = [
  {
    company: "Lama Healthcare — Practice One",
    role: "Stage de projet de fin d'année (PFA) · Front-end & IA",
    period: "Juillet – Septembre 2026",
    location: "Las Vegas, Nevada, États-Unis",
    summary:
      "En équipe de trois, contribution à la reconstruction d'une plateforme de gestion des accréditations destinée à des cabinets médicaux américains et aux expérimentations d'extraction documentaire.",
    achievements: [
      "Pris en charge le front-end : système de design, composants réutilisables et écrans du portail, avec refonte de l'interface",
      "Livré le tableau de bord, les dossiers professionnels, le workflow d'accréditation, les alertes, l'audit et une page publique de dépôt de documents",
      "Comparé des modèles vision-langage sur des scans propres et fine-tuné Qwen3-1.7B avec LoRA sur GPU T4",
      "Contribué aux contrôles d'accès par rôle, au masquage des données et à la traçabilité des accès",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Zod", "Transformers", "PEFT / LoRA"],
    caseStudy: "/projects/lama-credentialing",
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  details?: string;
};

export const education: Education[] = [
  {
    degree: "Cycle ingénieur · Intelligence Artificielle & Data Science · 5e année",
    school: "EMSI — École Marocaine des Sciences de l'Ingénieur",
    period: "2022 – 2027 · 5e année en 2026–2027",
    details:
      "Projet de fin d'année (PFA) de 4e année chez Lama Healthcare, de juillet à septembre 2026.",
  },
];

export const certifications: { name: string; issuer: string; year: string }[] = [];
