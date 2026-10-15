import type { Experience, Education } from "@/data/experience";
import type { FeaturedProject, Project } from "@/data/projects";
import { experiences, education } from "@/data/experience";
import { featuredProjects, projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { profile as sourceProfile } from "@/data/profile";

export type Locale = "fr" | "en";

const english = {
  language: "Language",
  switchTo: "Switch to French",
  navigation: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    main: "Main navigation",
  },
  cv: "Download my CV",
  cvShort: "CV PDF",
  cvFile: "Mohamed-Aymane-Badia-CV-EN.pdf",
  githubProfile: "GitHub profile",
  themeLight: "light",
  themeDark: "dark",
  closeMenu: "Close menu",
  openMenu: "Open menu",
  backToTop: "Back to top",
  skipToContent: "Skip to content",
  hero: {
    status: "Seeking a 6-month final-year internship (PFE) in AI / Machine Learning / Data Science",
    role: "AI & Data Science Engineering Student",
    tagline: "LLM fine-tuning · Document AI · Deep Learning — from experiments to usable applications.",
    focus: ["Machine Learning", "Deep Learning", "NLP", "LLM fine-tuning", "Computer Vision"],
    projects: "Explore projects",
    contact: "Contact",
    stats: [
      "Valid JSON · 60/60 outputs",
      "Correct fields on CORD",
      "Roles tested",
      "Recall · clean scans",
    ],
    portrait: "Portrait of Mohamed Aymane Badia",
  },
  about: {
    eyebrow: "About",
    title: "From experimentation to application.",
    paragraphs: [
      "I am a fifth-year engineering student in Artificial Intelligence & Data Science at EMSI, particularly interested in Machine Learning, Deep Learning and NLP.",
      "As part of an 8-week end-of-year project (PFA) at Lama Healthcare, I contributed to rebuilding a credentialing platform and ran document-extraction experiments, including LoRA fine-tuning. This PFA is distinct from the 6-month final-year internship (PFE) I am seeking.",
      "I learn by building. My projects go beyond notebooks: I work from data preparation through training and evaluation to integration into an application — from Streamlit demos and Docker deployments to web apps.",
      "I am seeking a 6-month PFE internship in AI, Machine Learning or Data Science, focused on NLP/LLMs, Computer Vision, Document AI or model deployment.",
    ],
    languages: "Languages",
    highlights: [
      { label: "Focus", value: "ML · Deep Learning · NLP" },
      { label: "Approach", value: "Data → Model → Product" },
      { label: "End-of-year project", value: "Lama Healthcare · PFA · 8 weeks" },
      { label: "Education", value: "Year 5 · AI & Data Science · EMSI" },
    ],
    lookingFor: "What I’m looking for",
    internship: "PFE internship",
    missions: "Applied AI assignments, experimentation and putting models into production.",
    start: "Starting",
    mobility: "Work arrangement",
    mobilityValue: "On-site or remote",
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected projects",
    intro: "An 8-week end-of-year project (PFA) at Lama Healthcare, distinct from the PFE internship I am seeking, followed by personal projects. PFA extraction results were measured on the public CORD dataset.",
    all: "All",
    filters: "Filter projects by category",
    empty: "No projects in this category yet.",
    problem: "Problem",
    approach: "Approach",
    technologies: "Technologies",
    code: "Code",
    privateCode: "Private code",
    liveDemo: "Live demo",
    demoLabel: "Live demo: ",
    categories: {
      "AI / ML": "AI / ML",
      "Deep Learning": "Deep Learning",
      NLP: "NLP",
      "Full-Stack": "Full-stack",
      "Computer Vision": "Computer Vision",
    },
  },
  featured: {
    privateCode: "Private code",
    viewCode: "View public code",
    code: "View code",
    problem: "Problem",
    approach: "Approach",
    contribution: "My contribution",
    architecture: "Architecture",
    technologies: "Technologies",
  },
  skills: {
    eyebrow: "Skills",
    title: "Technical skills",
    intro: "A selection of skills used in my projects; other tools I have used are listed below.",
    core: "Core skills",
    groupTitles: ["Also used · AI & Machine Learning", "Also used · NLP & Data", "Also used · Development", "Also used · Tools"],
    groupDescriptions: ["Modelling, training and evaluation", "Preparation, analysis and visualization", "Interfaces, APIs and integration", "Working environment"],
  },
  experience: {
    eyebrow: "Experience",
    title: "Experience & education",
    work: "Experience",
    education: "Education",
    certifications: "Certifications",
    caseStudy: "Read the detailed case study",
  },
  github: {
    eyebrow: "GitHub",
    title: "Repositories & projects",
    intro: "Browse repositories for projects whose code is available. The project developed at Lama Healthcare remains private.",
    allRepos: "All repositories",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk",
    intro: "I am seeking a six-month PFE internship in AI, Machine Learning or Data Science. The 8-week PFA at Lama Healthcare was a previous, separate experience.",
    message: "To discuss an internship or a project, reach me by email or on LinkedIn.",
    sendEmail: "Send an email",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSubmit: "Send message",
    formSending: "Sending...",
    formSuccess: "Your message has been sent. Thank you!",
    formError: "Unable to send your message. Please try again or email me directly.",
    start: "Available from",
    mobility: "Work arrangement",
  },
  footer: "Built with Next.js · Tailwind CSS",
  caseStudy: {
    back: "Back to projects",
    label: "PFA · 8 weeks · Team of 3",
    pfaNote: "This 8-week end-of-year project (PFA) is separate from the six-month PFE internship I am seeking.",
    context: "Context & contribution",
    contributionText: "My contribution: front-end design and implementation, reusable components and portal interfaces; participation in document-extraction experiments and LoRA fine-tuning. Work completed as part of a three-person team.",
    architecture: "Document workflow architecture",
    evaluation: "Evaluation methodology",
    protocol: "Protocol",
    measure: "Measure",
    contextColumn: "Context",
    benchmark: "Comparison of 4 vision-language models",
    cleanScans: "~0.94 field recall",
    cleanScansContext: "Clean scans · 180 observations per model",
    fineTune: "Qwen3-1.7B + LoRA fine-tuning",
    fineTuneMeasure: "100% valid JSON (60/60); 87% correct fields (124/143)",
    cordContext: "Public CORD dataset · no real patient data",
    evaluationExplanation: "These results come from different protocols and evaluation sets: the ~0.94 recall is from clean scans in the model benchmark; the correct-field rate was measured on CORD after fine-tuning. They are not directly comparable.",
    unavailable: "The model-by-model benchmark and LoRA training-curve data were not provided for publication; no individual score or plot has been extrapolated.",
    decisions: "Decisions, limitations & lessons",
    lessons: [
      "Keep human validation before saving: automated extraction assists the workflow; it does not replace review.",
      "Use only CORD, a public dataset, to report extraction results; no real health data is published.",
      "Recall measured on clean scans does not necessarily represent robustness on photos or degraded documents.",
      "Available figures are insufficient to compare all four models without individual scores and a shared, complete protocol.",
      "The dashboard screenshot remains hidden until explicit publication permission and confirmation that it contains no real data.",
    ],
    contact: "Contact me about this case study",
  },
} as const;

export function copy(locale: Locale) {
  return locale === "en" ? english : {
    ...english,
    language: "Langue",
    switchTo: "Passer en anglais",
    navigation: { about: "À propos", projects: "Projets", skills: "Compétences", experience: "Expérience", contact: "Contact", main: "Navigation principale" },
    cv: "Télécharger mon CV",
    cvShort: "CV PDF",
    cvFile: "Mohamed-Aymane-Badia-CV-FR.pdf",
    githubProfile: "Profil GitHub",
    themeLight: "clair",
    themeDark: "sombre",
    closeMenu: "Fermer le menu",
    openMenu: "Ouvrir le menu",
    backToTop: "Retour en haut de page",
    skipToContent: "Aller au contenu",
    hero: {
      status: "Recherche un stage PFE de 6 mois en IA / Machine Learning / Data Science",
      role: "Élève-ingénieur IA & Data Science",
      tagline: "LLM fine-tuning · Document AI · Deep Learning — de l'expérimentation à des applications utilisables.",
      focus: ["Machine Learning", "Deep Learning", "NLP", "LLM fine-tuning", "Computer Vision"],
      projects: "Voir les projets",
      contact: "Contact",
      stats: ["JSON valide · 60/60 sorties", "Champs corrects sur CORD", "Rôles testés", "Rappel · scans propres"],
      portrait: "Portrait de Mohamed Aymane Badia",
    },
    about: {
      eyebrow: "À propos",
      title: "De l'expérimentation à l'application.",
      paragraphs: [
        "Je suis élève-ingénieur en 5e année d'Intelligence Artificielle & Data Science à l'EMSI, avec un intérêt particulier pour le Machine Learning, le Deep Learning et le NLP.",
        "Dans le cadre de mon projet de fin d'année (PFA, 8 semaines) chez Lama Healthcare, j'ai contribué à reconstruire une plateforme de credentialing et mené des expérimentations d'extraction documentaire, dont un fine-tuning LoRA. Ce PFA est distinct du stage PFE de 6 mois que je recherche.",
        "J'apprends en construisant. Mes projets vont au-delà du notebook : je travaille de la préparation des données à l'entraînement, l'évaluation et l'intégration dans une application — démo Streamlit, déploiement Docker ou application web.",
        "Je recherche un stage PFE de 6 mois en IA, Machine Learning ou Data Science, autour du NLP/LLM, de la Computer Vision, du Document AI ou du déploiement de modèles.",
      ],
      languages: "Langues",
      highlights: [
        { label: "Domaines", value: "ML · Deep Learning · NLP" },
        { label: "Approche", value: "Données → Modèle → Produit" },
        { label: "Projet de fin d'année", value: "Lama Healthcare · PFA · 8 semaines" },
        { label: "Formation", value: "5e année · IA & Data Science · EMSI" },
      ],
      lookingFor: "Ce que je cherche",
      internship: "Stage PFE",
      missions: "Missions en IA appliquée, expérimentation et mise en production de modèles.",
      start: "Début",
      mobility: "Mobilité",
      mobilityValue: "Présentiel ou à distance",
    },
    projects: {
      eyebrow: "Projets",
      title: "Projets sélectionnés",
      intro: "Un projet de fin d'année (PFA, 8 semaines) chez Lama Healthcare, distinct du stage PFE recherché, suivi de projets personnels. Les résultats d'extraction du PFA sont mesurés sur le dataset public CORD.",
      all: "Tous",
      filters: "Filtrer les projets par catégorie",
      empty: "Aucun projet dans cette catégorie pour le moment.",
      problem: "Problème",
      approach: "Approche",
      technologies: "Technologies",
      code: "Code",
      privateCode: "Code privé",
      liveDemo: "Démo en direct",
      demoLabel: "Démo en direct : ",
      categories: { "AI / ML": "IA / ML", "Deep Learning": "Deep Learning", NLP: "NLP", "Full-Stack": "Full-stack", "Computer Vision": "Computer Vision" },
    },
    featured: {
      privateCode: "Code privé",
      viewCode: "Voir le code public de",
      code: "Voir le code",
      problem: "Problème",
      approach: "Approche",
      contribution: "Ma contribution",
      architecture: "Architecture",
      technologies: "Technologies",
    },
    skills: {
      eyebrow: "Compétences",
      title: "Compétences techniques",
      intro: "Une sélection de compétences mobilisées dans mes projets ; les autres outils utilisés sont regroupés ci-dessous.",
      core: "Compétences cœur",
      groupTitles: ["Aussi utilisé · IA & Machine Learning", "Aussi utilisé · NLP & Données", "Aussi utilisé · Développement", "Aussi utilisé · Outils"],
      groupDescriptions: ["Modélisation, entraînement et évaluation", "Préparation, analyse et visualisation", "Interfaces, APIs et intégration", "Environnement de travail"],
    },
    experience: { eyebrow: "Expérience", title: "Expérience & formation", work: "Expérience", education: "Formation", certifications: "Certifications", caseStudy: "Étude de cas détaillée" },
    github: {
      eyebrow: "GitHub",
      title: "Dépôts & projets",
      intro: "Consulte les dépôts associés aux projets dont le code est disponible. Le code du projet réalisé chez Lama Healthcare reste privé.",
      allRepos: "Tous les dépôts",
    },
    contact: {
      eyebrow: "Contact",
      title: "Échangeons",
      intro: "Je recherche un stage PFE de six mois en IA, Machine Learning ou Data Science. Le PFA de 8 semaines chez Lama Healthcare est une expérience antérieure, distincte de cette recherche.",
      message: "Pour parler d’un stage ou d’un projet, contactez-moi par email ou sur LinkedIn.",
      sendEmail: "Envoyer un email",
      formName: "Nom",
      formEmail: "Email",
      formSubject: "Objet",
      formMessage: "Message",
      formSubmit: "Envoyer le message",
      formSending: "Envoi en cours...",
      formSuccess: "Votre message a été envoyé. Merci !",
      formError: "Impossible d’envoyer le message. Réessayez ou contactez-moi par email.",
      start: "Disponible à partir de",
      mobility: "Mobilité",
    },
    footer: "Réalisé avec Next.js · Tailwind CSS",
    caseStudy: {
      back: "Retour aux projets",
      label: "PFA · 8 semaines · Équipe de 3",
      pfaNote: "Cette expérience de projet de fin d’année (PFA) ne correspond pas au stage PFE de six mois recherché.",
      context: "Contexte & contribution",
      contributionText: "Contribution personnelle : conception et réalisation du front-end, composants réutilisables et interfaces du portail ; participation aux expérimentations d’extraction documentaire et au fine-tuning LoRA. Travail réalisé au sein d’une équipe de trois.",
      architecture: "Architecture du flux documentaire",
      evaluation: "Méthodologie d’évaluation",
      protocol: "Protocole",
      measure: "Mesure",
      contextColumn: "Contexte",
      benchmark: "Comparatif de 4 modèles vision-langage",
      cleanScans: "~0,94 de rappel des champs",
      cleanScansContext: "Scans propres · 180 observations par modèle",
      fineTune: "Fine-tuning Qwen3-1.7B + LoRA",
      fineTuneMeasure: "100 % JSON valide (60/60) ; 87 % des champs corrects (124/143)",
      cordContext: "Dataset public CORD · jamais de données patient réelles",
      evaluationExplanation: "Ces résultats proviennent de protocoles et de jeux d’évaluation différents : le rappel d’environ 0,94 concerne les scans propres du benchmark de modèles ; la proportion de champs corrects est mesurée sur CORD après fine-tuning. Ils ne sont pas directement comparables.",
      unavailable: "Le benchmark détaillé modèle par modèle et les points de la courbe d’entraînement LoRA ne sont pas disponibles pour publication ; aucun score ou tracé individuel n’est extrapolé ici.",
      decisions: "Décisions, limites & apprentissages",
      lessons: [
        "Garder une validation humaine avant l’enregistrement : l’extraction automatique assiste le processus, elle ne remplace pas la revue.",
        "Utiliser uniquement CORD, un dataset public, pour rapporter les résultats d’extraction ; aucune donnée de santé réelle n’est publiée.",
        "La mesure de rappel sur scans propres ne représente pas nécessairement la robustesse sur des photos ou documents dégradés.",
        "Les chiffres disponibles ne suffisent pas à comparer les quatre modèles sans leurs scores individuels et un protocole complet commun.",
        "La capture du dashboard reste masquée jusqu’à confirmation explicite de l’autorisation de publication et de l’absence de données réelles.",
      ],
      contact: "Me contacter au sujet de cette étude",
    },
  };
}

const featuredEnglish: Record<string, Partial<FeaturedProject>> = {
  "lama-healthcare": {
    label: "Industry project · PFA",
    title: "AI-powered credentialing platform and document extraction",
    context: "Lama Healthcare — Practice One · PFA (8 weeks) · team of 3",
    tagline: "Contributed to rebuilding a credentialing platform for US medical practices, with an AI document-analysis pipeline under human review.",
    problem: "Healthcare professionals must be credentialed with each insurer, while licenses, certifications and attestations expire. The existing application had only 4 of 17 features operational, incomplete data protection and health information appearing in logs. Documents arrive as scans or photos, and manual entry is slow and error-prone.",
    solution: "The platform was rebuilt with Next.js and Supabase, practice-level data isolation, a 12-state credentialing workflow enforced by the database, and an audit trail. The document pipeline extracts structured fields and OCR evidence, verifies them, then requires human approval before saving.",
    architecture: [
      { step: "Front end", detail: "Next.js App Router, strict TypeScript, Tailwind and shared Zod validation" },
      { step: "API", detail: "Each route: authentication → validation (Zod) → practice scope → audit log" },
      { step: "Data", detail: "Supabase PostgreSQL with Row-Level Security, private storage and short-lived signed URLs" },
      { step: "Workflow", detail: "12-state credentialing cycle per provider and insurer, with SQL-enforced transitions" },
      { step: "AI extraction", detail: "Specialized model → JSON and OCR evidence → verification model → human review" },
      { step: "Operations", detail: "Vercel, Upstash Redis rate limiting, scheduled expiry alerts, Resend and Twilio" },
    ],
    contributions: [
      "Owned the front end: design system, reusable components and portal interfaces",
      "Contributed to the dashboard, provider records, pipeline, alerts and audit grid",
      "Built the public document-upload page with a secure link and one-time code",
      "Compared four vision-language models on 180 observations each",
      "Fine-tuned Qwen3-1.7B with LoRA on a T4 GPU without using health data",
    ],
    results: [
      { value: "100%", label: "Valid JSON · 60/60 outputs" },
      { value: "87%", label: "Correct fields · 124/143 · CORD" },
      { value: "3.3 GB", label: "Peak fine-tuning VRAM" },
      { value: "6 / 6", label: "Roles passed access tests" },
    ],
    note: "Extraction results were measured on the public CORD dataset, never on real health documents. The dashboard screenshot is withheld pending publication permission.",
    resultContext: "~0.94 field recall refers to clean scans in the model benchmark; 87% (124/143) is field accuracy on the public CORD dataset after fine-tuning. These are separate evaluation protocols.",
  },
  trendradar: {
    label: "Personal project",
    title: "TrendRadar",
    tagline: "Real-time trend detection and social-media virality prediction.",
    problem: "Spotting emerging topics early in a noisy, bilingual feed is difficult: keyword counts miss context, and trends often become obvious only after their peak.",
    solution: "An end-to-end ML application that collects Reddit posts, processes them with a French/English NLP pipeline, groups them by topic, detects activity spikes and estimates post virality in an interactive dashboard.",
    architecture: [
      { step: "Collection", detail: "Reddit API client with retries, streaming and Parquet cache" },
      { step: "Preprocessing", detail: "Language detection, spaCy lemmatization and NER (FR/EN), TF-IDF" },
      { step: "Models", detail: "KMeans topic clustering and Random Forest classification" },
      { step: "Detection", detail: "Sliding-window spike score to surface emerging terms and hashtags" },
      { step: "Prediction", detail: "Gradient-boosted virality model (XGBoost / LightGBM)" },
      { step: "Visualization", detail: "Streamlit dashboard: clusters, spikes, virality and feature importance" },
    ],
    contributions: [
      "Designed the full data → models → dashboard pipeline (~3,300 lines of Python across 5 modules)",
      "Built a bilingual NLP pipeline with spaCy, NLTK and language detection",
      "Implemented spike detection and fixed unstable scores and duplicate alerts",
      "Engineered virality features: early velocity, engagement, and author/subreddit diversity",
      "Built the multi-tab Streamlit interface and admin dashboard",
    ],
  },
};

const projectEnglish: Record<string, Partial<Project>> = {
  "image-captioning": {
    title: "Image captioning — CNN vs attention vs Transformer",
    tagline: "PyTorch system comparing three decoder architectures.",
    problem: "Which decoder architecture produces the best image descriptions? A fair comparison requires the same encoder, data and evaluation.",
    solution: "A frozen ResNet50 encoder feeds three decoders — LSTM, Bahdanau attention and Transformer — trained on Flickr8k and compared with BLEU-1 to BLEU-4, beam search and attention visualizations.",
    note: "BLEU-1 to BLEU-4 scores for the three decoders and sample captions have not been published here.",
  },
  "cifar10-cnn": {
    title: "CIFAR-10 image classification with a CNN",
    tagline: "GPU-trained convolutional network served in a web demo.",
    problem: "Classify images into 10 categories with a compact model trained on 32×32 images.",
    solution: "A 3-block CNN (BatchNorm, Dropout, approximately 500,000 parameters), trained with PyTorch on a Tesla T4 GPU and served in a containerized Streamlit app that accepts image uploads.",
    results: [{ value: "~78%", label: "Test-set accuracy" }, { value: "~500k", label: "Parameters" }],
    images: [
      { src: "/projects/cifar-plane.webp", alt: "Airplane class prediction in the Streamlit app" },
      { src: "/projects/cifar-cat.webp", alt: "Cat class prediction in the Streamlit app" },
      { src: "/projects/cifar-dog.webp", alt: "Dog class prediction in the Streamlit app" },
    ],
  },
  "news-classification": {
    title: "News category classification",
    tagline: "BiLSTM classifying articles into 42 categories.",
    problem: "Automatically route articles into 42 overlapping categories (for example, Arts and Arts & Culture).",
    solution: "An NLP pipeline (cleaning, stop words, tokenization, padding) feeding an Embedding + BiLSTM network, with class balancing, early stopping and learning-rate scheduling. Evaluated on approximately 42,000 held-out articles.",
    results: [{ value: "69.0%", label: "Top-3 accuracy · 42 classes" }, { value: "45.4%", label: "Top-1 accuracy" }],
    resultContext: "Evaluated on approximately 42,000 held-out articles across 42 overlapping categories. Random and TF-IDF + logistic-regression baselines remain to be measured; expected confusions include Arts and Arts & Culture.",
  },
  "flight-tracker": {
    title: "Real-time flight tracker & AI travel assistant",
    tagline: "React application with flight data and a conversational assistant.",
    problem: "Travelers need to check departures and discover destination ideas in one place.",
    solution: "React interface connected to AviationStack for flight data, plus a Flask server connecting a conversational assistant to Google Gemini with a dedicated system prompt and per-session history.",
  },
};

export function localizedFeatured(locale: Locale): FeaturedProject[] {
  return featuredProjects.map((project) => locale === "en"
    ? { ...project, ...featuredEnglish[project.slug] }
    : project);
}

export function localizedProjects(locale: Locale): Project[] {
  return projects.map((project) => locale === "en"
    ? { ...project, ...projectEnglish[project.slug] }
    : project);
}

const experienceEnglish: Omit<Experience, "company" | "stack" | "caseStudy"> = {
  role: "End-of-year project internship (PFA) · Front end & AI",
  period: "2026 · 8 weeks",
  location: null,
  summary: "As part of a three-person team, contributed to rebuilding a credentialing platform for US medical practices and ran document-extraction experiments. This 8-week PFA is separate from the 6-month PFE internship I am seeking.",
  achievements: [
    "Owned the front end: design system, reusable components and portal screens, including an interface redesign",
    "Delivered the dashboard, provider records, credentialing workflow, alerts, audit and a public document-upload page",
    "Compared 4 vision-language models on 180 observations each — approximately 0.94 recall on clean scans",
    "Fine-tuned Qwen3-1.7B with LoRA on a T4 GPU (3.3 GB peak VRAM): 100% valid JSON and 87% correct fields on the public CORD dataset",
    "Access tests passed for all 6 roles; data was masked and each reveal audited",
  ],
};

const educationEnglish: Omit<Education, "school"> = {
  degree: "Engineering program · Artificial Intelligence & Data Science · Year 5",
  period: "Academic year 2025–2026",
  details: "8-week end-of-year project (PFA) at Lama Healthcare. The 6-month PFE internship is a separate upcoming experience.",
};

export function localizedExperience(locale: Locale): Experience[] {
  return experiences.map((item) => locale === "en"
    ? { ...item, ...experienceEnglish }
    : item);
}

export function localizedEducation(locale: Locale): Education[] {
  return education.map((item) => locale === "en"
    ? { ...item, ...educationEnglish, school: "EMSI — Moroccan School of Engineering Sciences" }
    : item);
}

export function localizedSkillGroup(locale: Locale, index: number) {
  const group = skillGroups[index];
  if (locale !== "en") return group;
  const titles = copy("en").skills.groupTitles;
  const descriptions = copy("en").skills.groupDescriptions;
  return { ...group, title: titles[index] ?? group.title, description: descriptions[index] ?? group.description };
}

export function localizedProfile(locale: Locale) {
  if (locale === "fr") return {
    ...baseProfile,
  };
  return {
    ...baseProfile,
    role: "AI & Data Science Engineering Student",
    tagline: "LLM fine-tuning · Document AI · Deep Learning — from experiments to usable applications.",
    status: "Seeking a 6-month final-year internship (PFE) in AI / Machine Learning / Data Science",
    location: "Marrakech, Morocco",
    start: "February",
    mobility: "On-site or remote",
  };
}

const baseProfile = {
  ...sourceProfile,
  start: sourceProfile.lookingFor.start ?? "",
  mobility: sourceProfile.lookingFor.mobility ?? "",
};
