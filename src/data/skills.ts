export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "AI / ML",
    items: [
      "LangChain",
      "OpenAI API",
      "Hugging Face Transformers",
      "RAG Pipelines",
      "scikit-learn",
      "PyTorch",
      "Prompt Engineering",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "SQL", "Java", "TypeScript", "C++", "Bash"],
  },
  {
    category: "Vector DBs & Search",
    items: ["Pinecone", "ChromaDB", "FAISS", "MeiliSearch", "Elasticsearch"],
  },
  {
    category: "Model Serving & APIs",
    items: [
      "FastAPI",
      "Docker",
      "REST APIs",
      "Webhooks",
      "Streaming Inference",
      "CI/CD",
      "AWS (S3, EC2, SageMaker)",
    ],
  },
  {
    category: "Data & MLOps",
    items: [
      "Pandas",
      "NumPy",
      "ETL Pipelines",
      "Feature Engineering",
      "Airflow",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
];
