/**
 * Selected projects. Every claim and metric below comes from the repository code,
 * README, notebook outputs or the PFA defence slides — never invented.
 */

export type ProjectCategory = "AI / ML" | "Deep Learning" | "NLP" | "Full-Stack";

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
  demo?: string;
  /** For company / internship projects. */
  context?: string;
  images?: { src: string; alt: string }[];
  /** Shown as a small notice when something needs your attention. */
  note?: string;
};

const GH = "https://github.com/BADIAMOHAMEDAYMANE";

export type FeaturedProject = Project & {
  label: string;
  architecture: { step: string; detail: string }[];
  contributions: string[];
};

const lamaHealthcare: FeaturedProject = {
  slug: "lama-healthcare",
  label: "Featured · Industry project",
  title: "HIPAA-Compliant Credentialing Platform with AI Document Extraction",
  context: "Lama Healthcare — Practice One · Final-year internship (PFA) · team of 3 · 8 weeks",
  tagline:
    "Rebuilt a healthcare credentialing platform for US medical practices, with an AI pipeline that reads licences and certificates under human review.",
  problem:
    "Doctors must be approved by every insurer, and every licence, certification and insurance document expires. The legacy app had only 4 of 17 features working, data protection disabled on most tables and health data visible in logs — a HIPAA risk. Documents arrive as scans or phone photos, and typing them in by hand is slow and error-prone.",
  solution:
    "We rebuilt the platform on Next.js and Supabase with strict per-practice data isolation, a 12-state credentialing workflow enforced by the database and a full audit trail. For documents, we designed an AI pipeline where a specialist model extracts JSON with the exact OCR evidence, a second model verifies it, and a human always validates before anything is saved.",
  architecture: [
    { step: "Front-end", detail: "Next.js App Router, TypeScript (strict), Tailwind + shadcn/ui, shared Zod validation" },
    { step: "API", detail: "Every route: authenticate → validate (Zod) → scope to the practice → audit log" },
    { step: "Data", detail: "Supabase PostgreSQL with Row-Level Security, private storage, short-lived signed URLs" },
    { step: "Workflow", detail: "12-state credentialing machine per provider × payer, transitions enforced in SQL" },
    { step: "AI extraction", detail: "Specialist model → JSON + OCR evidence, verifier model, human review queue" },
    { step: "Ops", detail: "Vercel, Upstash Redis rate limiting, scheduled expiry alerts, Resend & Twilio" },
  ],
  contributions: [
    "Built the whole front-end: design system, reusable components and every portal screen",
    "Dashboard with a 0–100 compliance score, provider records (11 document types), pipeline, alerts and audit grid",
    "Public, account-free document upload page for doctors (secure link + one-time code)",
    "Benchmarked 4 vision-language models on 180 degraded-document observations each to choose the reader model",
    "Fine-tuned Qwen3-1.7B with LoRA on a free Kaggle T4 GPU to prove training was feasible without health data",
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
  results: [
    { value: "100%", label: "Valid JSON outputs (60/60)" },
    { value: "87%", label: "Fields correct (124/143)" },
    { value: "3.3 GB", label: "Peak VRAM for fine-tuning" },
    { value: "6 / 6", label: "Roles passing access tests" },
  ],
  images: [{ src: "/projects/lama-dashboard.webp", alt: "Practice One dashboard: providers, credentialing pipeline, expiring documents, blockers" }],
  note: "Company project — source code is private. Extraction results measured on the public CORD dataset, not on real health documents.",
};

const trendRadar: FeaturedProject = {
  label: "Featured · Personal project",
  slug: "trendradar",
  title: "TrendRadar",
  tagline: "Real-time trend detection and virality prediction on social media data.",
  problem:
    "Spotting emerging topics early in a noisy, bilingual stream of social posts is hard: keyword counts miss context, and popular topics are only obvious once they have already peaked.",
  solution:
    "An end-to-end ML application that collects live Reddit posts, cleans them with a French/English NLP pipeline, groups them into topics, detects sudden bursts of activity and predicts which posts are likely to go viral — all inside an interactive dashboard.",
  architecture: [
    { step: "Collect", detail: "Reddit API client with retries, live streaming and Parquet caching" },
    { step: "Preprocess", detail: "Language detection, spaCy lemmatisation and NER (FR/EN), TF-IDF" },
    { step: "Model", detail: "KMeans topic clustering, Random Forest topic classifier" },
    { step: "Detect", detail: "Sliding-window burst score to flag fast-rising terms and hashtags" },
    { step: "Predict", detail: "Gradient-boosting virality model (XGBoost / LightGBM fallback)" },
    { step: "Visualise", detail: "Streamlit dashboard: clusters, bursts, virality, feature importance" },
  ],
  contributions: [
    "Designed the full data → model → dashboard pipeline (~3,300 lines of Python, 5 modules)",
    "Built a bilingual NLP pipeline with spaCy, NLTK and language detection",
    "Implemented burst detection from scratch, including fixes for score explosions and duplicate alerts",
    "Engineered virality features (early velocity, engagement ratio, author and subreddit diversity)",
    "Built the multi-tab Streamlit interface and admin dashboard",
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
    title: "Image Captioning — CNN vs Attention vs Transformer",
    tagline: "From-scratch PyTorch captioning system benchmarking three decoder architectures.",
    problem:
      "Which decoder design actually produces better image descriptions? Comparing architectures fairly requires the same encoder, data and evaluation.",
    solution:
      "A frozen ResNet50 encoder feeds three decoders — LSTM baseline, Bahdanau attention and a Transformer decoder — trained on Flickr8k and compared with BLEU-1 to BLEU-4, beam search and attention heatmaps in a Streamlit demo.",
    stack: ["PyTorch", "ResNet50", "LSTM", "Attention", "Transformer", "Streamlit"],
    categories: ["Deep Learning", "NLP"],
    results: [
      // Add real BLEU scores once the repository is public, e.g. { value: "0.xx", label: "BLEU-4 (Transformer)" }
    ],
    github: `${GH}/Image-Captioning-Project`,
    note: "Repository currently private — make it public so this link works.",
  },
  {
    slug: "cifar10-cnn",
    title: "CIFAR-10 CNN Classifier",
    tagline: "GPU-trained convolutional network with a deployed web demo.",
    problem: "Classify real-world photos into 10 object classes with a compact model trained on 32×32 images.",
    solution:
      "A 3-block CNN (BatchNorm, Dropout, ~500K parameters) trained on a Tesla T4 GPU with PyTorch, served through a Dockerised Streamlit app that accepts any uploaded image.",
    stack: ["PyTorch", "CUDA", "CNN", "Streamlit", "Docker"],
    categories: ["Deep Learning"],
    results: [
      { value: "~78%", label: "Test accuracy" },
      { value: "~500K", label: "Parameters" },
    ],
    github: `${GH}/Animal-Classification`,
    demo: "https://animal-classification-2gd59hwka4ppwvsjsnp7cp.streamlit.app/",
    images: [
      { src: "/projects/cifar-plane.webp", alt: "Streamlit app predicting 'airplane'" },
      { src: "/projects/cifar-cat.webp", alt: "Streamlit app predicting 'cat'" },
      { src: "/projects/cifar-dog.webp", alt: "Streamlit app predicting 'dog'" },
    ],
  },
  {
    slug: "news-classification",
    title: "News Category Classification",
    tagline: "Bidirectional LSTM classifying news articles into 42 categories.",
    problem:
      "Automatically route news articles to the right section among 42 overlapping categories (e.g. Arts vs Arts & Culture).",
    solution:
      "NLP pipeline (cleaning, stop-words, tokenisation, padding) feeding an Embedding + BiLSTM network with class balancing, early stopping and LR scheduling, evaluated on ~42K held-out articles.",
    stack: ["TensorFlow / Keras", "BiLSTM", "NLTK", "Scikit-learn", "Pandas"],
    categories: ["NLP", "Deep Learning"],
    results: [
      { value: "69.0%", label: "Top-3 accuracy (42 classes)" },
      { value: "45.4%", label: "Top-1 accuracy" },
    ],
    github: `${GH}/News-Classification-Project`,
  },
  {
    slug: "flight-tracker",
    title: "Real-Time Flight Tracker + AI Travel Assistant",
    tagline: "React app with live flight data and an LLM-powered travel chatbot.",
    problem: "Travellers need live departure information and quick destination ideas in one place.",
    solution:
      "React front-end consuming the AviationStack API for real-time flights, plus a Flask backend that connects a conversational assistant to Google Gemini with a custom system prompt and per-session chat history.",
    stack: ["React", "JavaScript", "Flask", "Gemini API", "REST APIs"],
    categories: ["Full-Stack", "AI / ML"],
    results: [],
    github: `${GH}/flight-management`,
  },
];

/** Smaller repos shown in the GitHub section. */
export const otherRepos = [
  {
    name: "backend-costume",
    description: "Inventory management REST API with JWT authentication and admin module.",
    stack: ["Laravel", "PHP", "MySQL"],
    url: `${GH}/backend-costume`,
  },
];
