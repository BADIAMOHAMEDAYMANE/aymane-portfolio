/**
 * Single source of truth for personal information.
 * Missing personal details stay null and are intentionally not rendered.
 */

export const profile = {
  name: "Mohamed Aymane Badia",
  initials: "MAB",
  role: "Élève-ingénieur IA & Data Science",
  tagline:
    "LLM fine-tuning · Document AI · Deep Learning — de l'expérimentation à des applications utilisables.",
  status: "Recherche un stage PFE de 6 mois en IA / Machine Learning / Data Science",
  location: "Marrakech, Maroc",
  languages: [
    { name: "Français", level: "B2" },
    { name: "Anglais", level: "B1" },
  ],
  email: "badiamohamedaymane@gmail.com",
  github: "https://github.com/BADIAMOHAMEDAYMANE",
  githubUsername: "BADIAMOHAMEDAYMANE",
  linkedin: "https://www.linkedin.com/in/mohamed-aymane-badia-40a9712a1/",
  resume: "/cv-fr.pdf",
  lookingFor: {
    duration: "6 mois",
    topics: ["LLM / NLP", "Computer Vision", "Document AI", "MLOps"],
    start: "Février",
    mobility: "Présentiel ou à distance",
  },
  // Prefer the custom domain; Vercel's deployment hostname is a safe fallback.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined),
} as const;

export const about = {
  paragraphs: [
    "Je suis élève-ingénieur en 5e année d'Intelligence Artificielle & Data Science à l'EMSI, avec un intérêt particulier pour le Machine Learning, le Deep Learning et le NLP.",
    "Dans le cadre de mon projet de fin d'année (PFA, 8 semaines) chez Lama Healthcare, j'ai contribué à reconstruire une plateforme de credentialing et mené des expérimentations d'extraction documentaire, dont un fine-tuning LoRA. Ce PFA est distinct du stage PFE de 6 mois que je recherche.",
    "J'apprends en construisant. Mes projets vont au-delà du notebook : je travaille de la préparation des données à l'entraînement, l'évaluation et l'intégration dans une application — démo Streamlit, déploiement Docker ou application web.",
    "Je recherche un stage PFE de 6 mois en IA, Machine Learning ou Data Science, autour du NLP/LLM, de la Computer Vision, du Document AI ou du déploiement de modèles.",
  ],
  highlights: [
    { label: "Domaines", value: "ML · Deep Learning · NLP" },
    { label: "Approche", value: "Données → Modèle → Produit" },
    { label: "Projet de fin d'année", value: "Lama Healthcare · PFA · 8 semaines" },
    { label: "Formation", value: "5e année · IA & Data Science · EMSI" },
  ],
};
