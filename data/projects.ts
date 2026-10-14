/**
 * Selected projects. Every claim and metric below comes from the repository code,
 * README, notebook outputs or the PFA defence slides — never invented.
 */

export type ProjectCategory = "AI / ML" | "Deep Learning" | "NLP" | "Full-Stack" | "Computer Vision";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  stack: string[];
  categories: ProjectCategory[];
  /** Real results only. Leave empty if no metric is published. */
  results: { value: string; label: string }[];
  /** Omit for private / company projects. */
  github?: string;
  codePrivate?: boolean;
  demo?: string;
  /** For company / internship projects. */
  context?: string;
  images?: { src: string; alt: string }[];
  /** Shown as a small notice when something needs your attention. */
  note?: string;
  resultContext?: string;
};

const GH = "https://github.com/BADIAMOHAMEDAYMANE";

export type FeaturedProject = Project & {
  label: string;
  architecture: { step: string; detail: string }[];
  contributions: string[];
};

export const lamaHealthcare: FeaturedProject = {
  slug: "lama-healthcare",
  label: "Projet en entreprise · PFA",
  title: "Plateforme de credentialing et extraction documentaire par IA",
  context: "Lama Healthcare — Practice One · PFA (8 semaines) · équipe de 3",
  tagline:
    "Contribution à la reconstruction d'une plateforme de gestion des accréditations pour des cabinets médicaux américains, avec un pipeline IA d'analyse documentaire sous revue humaine.",
  problem:
    "Les professionnels doivent être accrédités auprès de chaque assureur, et les licences, certifications et attestations expirent. L'application existante avait 4 fonctionnalités sur 17 opérationnelles, une protection des données incomplète et des données de santé visibles dans les journaux. Les documents arrivent sous forme de scans ou de photos, et leur saisie manuelle est lente et source d'erreurs.",
  solution:
    "La plateforme a été reconstruite avec Next.js et Supabase, une isolation des données par cabinet, un workflow d'accréditation à 12 états appliqué par la base et une piste d'audit. Pour les documents, le pipeline extrait des champs structurés et leurs preuves OCR, les fait vérifier, puis impose une validation humaine avant toute sauvegarde.",
  architecture: [
    { step: "Front-end", detail: "Next.js App Router, TypeScript strict, Tailwind et validation Zod partagée" },
    { step: "API", detail: "Chaque route : authentification → validation (Zod) → périmètre du cabinet → journal d'audit" },
    { step: "Données", detail: "Supabase PostgreSQL avec Row-Level Security, stockage privé et URLs signées à durée limitée" },
    { step: "Workflow", detail: "Cycle d'accréditation à 12 états par professionnel et assureur, transitions appliquées en SQL" },
    { step: "Extraction IA", detail: "Modèle spécialisé → JSON et preuves OCR → modèle de vérification → revue humaine" },
    { step: "Opérations", detail: "Vercel, limitation de débit Upstash Redis, alertes d'expiration planifiées, Resend et Twilio" },
  ],
  contributions: [
    "Pris en charge le front-end : système de design, composants réutilisables et interfaces du portail",
    "Contribué au tableau de bord, aux dossiers professionnels, au pipeline, aux alertes et à la grille d'audit",
    "Créé la page publique de dépôt de documents avec lien sécurisé et code à usage unique",
    "Comparé quatre modèles vision-langage sur 180 observations chacun",
    "Fine-tuné Qwen3-1.7B avec LoRA sur GPU T4 sans utiliser de données de santé",
  ],
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Zod",
    "Hugging Face Transformers",
    "PEFT / LoRA",
    "TRL",
  ],
  categories: ["AI / ML", "Full-Stack"],
  codePrivate: true,
  results: [
    { value: "100%", label: "Valid JSON · 60/60 sorties" },
    { value: "87%", label: "Champs corrects · 124/143 · CORD" },
    { value: "3,3 Go", label: "Pic de VRAM du fine-tuning" },
    { value: "6 / 6", label: "Rôles validés par les tests d'accès" },
  ],
  note: "Résultats d'extraction mesurés sur le dataset public CORD, jamais sur des documents de santé réels. La capture du dashboard est masquée en attendant la confirmation de l'autorisation de publication.",
  resultContext:
    "~0,94 de rappel de champs concerne des scans propres utilisés au benchmark des modèles ; 87 % (124/143) est l'exactitude des champs sur le dataset public CORD après fine-tuning. Ce sont deux protocoles d'évaluation distincts.",
};

const trendRadar: FeaturedProject = {
  label: "Projet personnel",
  slug: "trendradar",
  title: "TrendRadar",
  tagline: "Détection de tendances en temps réel et prédiction de viralité sur les réseaux sociaux.",
  problem:
    "Repérer tôt les sujets émergents dans un flux bilingue et bruité est difficile : les comptes de mots-clés ignorent le contexte, et les tendances ne deviennent évidentes qu'après leur pic.",
  solution:
    "Application ML de bout en bout qui collecte des publications Reddit, les traite avec un pipeline NLP français/anglais, les regroupe par thème, détecte les hausses d'activité et estime la viralité des publications dans un tableau de bord interactif.",
  architecture: [
    { step: "Collecte", detail: "Client API Reddit avec nouvelles tentatives, flux et cache Parquet" },
    { step: "Prétraitement", detail: "Détection de langue, lemmatisation spaCy et NER (FR/EN), TF-IDF" },
    { step: "Modèles", detail: "Clustering thématique KMeans et classification Random Forest" },
    { step: "Détection", detail: "Score de hausse par fenêtre glissante pour repérer termes et hashtags émergents" },
    { step: "Prédiction", detail: "Modèle de viralité par gradient boosting (XGBoost / LightGBM)" },
    { step: "Visualisation", detail: "Tableau de bord Streamlit : clusters, pics, viralité, importance des variables" },
  ],
  contributions: [
    "Conçu le pipeline complet données → modèles → tableau de bord (~3 300 lignes Python, 5 modules)",
    "Développé un pipeline NLP bilingue avec spaCy, NLTK et détection de langue",
    "Implémenté la détection de hausse et corrigé les scores instables et alertes en doublon",
    "Construit les variables de viralité : vélocité initiale, engagement et diversité des auteurs et subreddits",
    "Réalisé l'interface Streamlit multi-onglets et le tableau de bord d'administration",
  ],
  stack: ["Python", "Scikit-learn", "spaCy", "NLTK", "Pandas", "Plotly", "Streamlit", "XGBoost / LightGBM"],
  categories: ["AI / ML", "NLP"],
  results: [],
  github: `${GH}/TrendRadar-Project`,
};

export const featuredProjects: FeaturedProject[] = [lamaHealthcare, trendRadar];

export const projects: Project[] = [
  {
    slug: "image-captioning",
    title: "Génération de légendes d'images — CNN vs attention vs Transformer",
    tagline: "Système PyTorch comparant trois architectures de décodeur.",
    problem:
      "Quelle architecture de décodeur produit les meilleures descriptions d'images ? Une comparaison équitable exige un encodeur, des données et une évaluation identiques.",
    solution:
      "Un encodeur ResNet50 gelé alimente trois décodeurs — LSTM, attention de Bahdanau et Transformer — entraînés sur Flickr8k et comparés avec BLEU-1 à BLEU-4, beam search et visualisations d'attention.",
    stack: ["PyTorch", "ResNet50", "LSTM", "Attention", "Transformer", "Streamlit"],
    categories: ["Deep Learning", "NLP"],
    results: [],
    github: `${GH}/Image-Capitioning`,
    note: "Les scores BLEU-1 à BLEU-4 des trois décodeurs et les exemples de légendes ne sont pas publiés ici.",
  },
  {
    slug: "cifar10-cnn",
    title: "Classification CIFAR-10 par CNN",
    tagline: "Réseau convolutif entraîné sur GPU et exposé dans une démo web.",
    problem: "Classer des images parmi 10 catégories avec un modèle compact entraîné sur des images 32×32.",
    solution:
      "CNN à 3 blocs (BatchNorm, Dropout, environ 500 000 paramètres), entraîné avec PyTorch sur GPU Tesla T4 et servi dans une application Streamlit conteneurisée acceptant une image importée.",
    stack: ["PyTorch", "CUDA", "CNN", "Streamlit", "Docker"],
    categories: ["Deep Learning", "Computer Vision"],
    results: [
      { value: "~78 %", label: "Précision sur le jeu de test" },
      { value: "~500 k", label: "Paramètres" },
    ],
    github: `${GH}/Animal-Classification`,
    demo: "https://animal-classification-2gd59hwka4ppwvsjsnp7cp.streamlit.app/",
    images: [
      { src: "/projects/cifar-plane.webp", alt: "Exemple de prédiction de la classe avion dans l'application Streamlit" },
      { src: "/projects/cifar-cat.webp", alt: "Exemple de prédiction de la classe chat dans l'application Streamlit" },
      { src: "/projects/cifar-dog.webp", alt: "Exemple de prédiction de la classe chien dans l'application Streamlit" },
    ],
  },
  {
    slug: "news-classification",
    title: "Classification de catégories d'actualités",
    tagline: "BiLSTM classant des articles parmi 42 catégories.",
    problem:
      "Orienter automatiquement des articles parmi 42 catégories qui se chevauchent (par exemple Arts et Arts & Culture).",
    solution:
      "Pipeline NLP (nettoyage, mots vides, tokenisation, padding) alimentant un réseau Embedding + BiLSTM, avec équilibrage des classes, arrêt anticipé et ajustement du taux d'apprentissage. Évaluation sur environ 42 000 articles mis de côté.",
    stack: ["TensorFlow / Keras", "BiLSTM", "NLTK", "Scikit-learn", "Pandas"],
    categories: ["NLP", "Deep Learning"],
    results: [
      { value: "69,0 %", label: "Précision Top-3 · 42 classes" },
      { value: "45,4 %", label: "Précision Top-1" },
    ],
    resultContext:
      "Évalué sur environ 42 000 articles tenus à l'écart, répartis entre 42 catégories qui se chevauchent. Les scores de baseline hasard et TF-IDF + régression logistique restent à mesurer ; les confusions attendues concernent notamment Arts et Arts & Culture.",
    github: `${GH}/News-Classification-Project`,
  },
  {
    slug: "flight-tracker",
    title: "Suivi de vols en temps réel & assistant de voyage IA",
    tagline: "Application React avec données de vol et assistant conversationnel.",
    problem: "Les voyageurs ont besoin de consulter les départs et de trouver des idées de destinations au même endroit.",
    solution:
      "Interface React connectée à l'API AviationStack pour les vols, et serveur Flask reliant un assistant conversationnel à Google Gemini avec prompt système dédié et historique par session.",
    stack: ["React", "JavaScript", "Flask", "Gemini API", "REST APIs"],
    categories: ["Full-Stack", "AI / ML"],
    results: [],
    github: `${GH}/flight-management`,
  },
];
