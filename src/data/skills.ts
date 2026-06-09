export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C++", "Go", "Rust", "R", "Bash"],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Flask",
      "Django",
      "SQLAlchemy",
      "REST APIs",
      "GraphQL",
      "gRPC",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Vite",
      "HTML5",
      "CSS3",
      "Server Components",
      "NextAuth",
    ],
  },
  {
    category: "Databases & Data",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "MeiliSearch",
      "Kafka",
      "Airflow",
      "Pinecone",
      "FAISS",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "AWS (EC2, S3, Lambda, RDS)",
      "GCP",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
      "Linux",
    ],
  },
  {
    category: "Testing & Observability",
    items: [
      "pytest",
      "Jest",
      "Playwright",
      "Cypress",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
    ],
  },
  {
    category: "Engineering Practices",
    items: [
      "System Design",
      "OOP",
      "Design Patterns",
      "TDD",
      "JWT",
      "OAuth2",
      "RBAC",
      "Agile Scrum",
      "Microservices",
    ],
  },
  {
    category: "AI & ML",
    items: [
      "scikit-learn",
      "PyTorch",
      "Hugging Face",
      "LangChain",
      "RAG",
      "Vector Search",
      "LLM APIs",
      "OpenAI",
      "Prompt Engineering",
    ],
  },
];
