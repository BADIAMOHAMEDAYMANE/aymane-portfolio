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
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Aussi utilisé · IA & Machine Learning",
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
    title: "Aussi utilisé · NLP & Données",
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
    title: "Aussi utilisé · Développement",
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
    title: "Aussi utilisé · Outils",
    description: "Environnement de travail",
    items: ["Git", "GitHub", "Vercel", "Kaggle", "Google Colab", "CUDA (entraînement GPU)", "Postman", "Jupyter"],
  },
];
