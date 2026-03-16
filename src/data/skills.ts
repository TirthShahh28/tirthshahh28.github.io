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
      "Hugging Face",
      "RAG Pipelines",
      "PyTorch",
      "scikit-learn",
      "Prompt Engineering",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "SQL", "TypeScript"],
  },
  {
    category: "Vector DBs & Search",
    items: ["Pinecone", "ChromaDB", "FAISS", "Elasticsearch"],
  },
  {
    category: "Infrastructure",
    items: ["FastAPI", "Docker", "AWS (SageMaker, S3, EC2)", "Airflow"],
  },
  {
    category: "Data",
    items: ["Pandas", "NumPy", "PostgreSQL", "MongoDB", "ETL Pipelines"],
  },
];
