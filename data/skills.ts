/**
 * Only technologies that are visible in the GitHub repositories are listed here.
 * Add new ones as your projects grow.
 */

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    description: "Model design, training and evaluation",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow / Keras",
      "Scikit-learn",
      "CNN",
      "LSTM / BiLSTM",
      "Transformers (Hugging Face)",
      "LLM Fine-tuning (LoRA / PEFT)",
      "Vision-Language Models",
      "Transfer Learning",
      "Clustering (KMeans)",
      "Ensemble models (RF, Boosting)",
    ],
  },
  {
    title: "NLP & Data",
    description: "From raw text and tables to insight",
    items: [
      "NLP",
      "Document AI / Extraction",
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
    title: "Development",
    description: "Turning models into products",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Flask",
      "REST APIs",
      "Laravel / PHP",
      "MySQL",
      "Streamlit",
    ],
  },
  {
    title: "Tools",
    description: "Everyday workflow",
    items: ["Git", "GitHub", "Docker", "Vercel", "Kaggle", "Google Colab", "CUDA (GPU training)", "Postman", "Jupyter"],
  },
];
