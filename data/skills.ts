/**
 * Only technologies that are visible in the GitHub repositories are listed here.
 * Add new ones as your projects grow.
 */

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const coreSkills = [
  "Python",
  "PyTorch",
  "Transformers / LoRA (PEFT)",
  "Scikit-learn",
  "NLP",
  "Computer Vision",
  "Document AI",
  "Streamlit",
  "Docker",
  "Next.js / TypeScript",
] as const;

export const coreSkillProjectSlugs: Record<(typeof coreSkills)[number], string[]> = {
  Python: ["trendradar", "image-captioning", "cifar10-cnn", "news-classification", "flight-tracker"],
  PyTorch: ["image-captioning", "cifar10-cnn"],
  "Transformers / LoRA (PEFT)": ["lama-healthcare"],
  "Scikit-learn": ["trendradar", "news-classification"],
  NLP: ["trendradar", "image-captioning", "news-classification"],
  "Computer Vision": ["image-captioning", "cifar10-cnn"],
  "Document AI": ["lama-healthcare"],
  Streamlit: ["trendradar", "image-captioning", "cifar10-cnn"],
  Docker: ["cifar10-cnn"],
  "Next.js / TypeScript": ["lama-healthcare"],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "IA & Machine Learning",
    description: "Modélisation, entraînement et évaluation",
    items: [
      "TensorFlow / Keras",
      "CNN",
      "LSTM / BiLSTM",
      "Vision-Language Models",
      "Transfer Learning",
      "Clustering (KMeans)",
      "Ensemble models (RF, Boosting)",
    ],
  },
  {
    title: "NLP & Données",
    description: "Préparation, analyse et visualisation",
    items: [
      "spaCy",
      "NLTK",
      "TF-IDF",
      "Pandas",
      "NumPy",
      "Plotly",
      "Matplotlib",
      "Data Visualization",
    ],
  },
  {
    title: "Développement",
    description: "Interfaces, APIs et intégration",
    items: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Flask",
      "REST APIs",
    ],
  },
  {
    title: "Outils",
    description: "Environnement de travail",
    items: ["Git", "GitHub", "Vercel", "Kaggle", "Google Colab", "CUDA (entraînement GPU)", "Postman", "Jupyter"],
  },
];
