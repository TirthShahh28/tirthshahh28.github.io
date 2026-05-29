export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  categories: string[];
  github: string | null;
  demo: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RoomLock — Concurrent Booking API",
    subtitle: "Production-style hotel booking backend",
    description:
      "Built REST APIs for booking, room, guest, auth, and payment workflows. Used SQLAlchemy 2.0, Alembic migrations, Pydantic validation, JWT auth, RBAC, OpenAPI docs, SELECT FOR UPDATE locking to prevent double-booking, Stripe webhook verification, Strategy Pattern pricing, APScheduler cleanup jobs, Docker, and CI/CD pipelines.",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Stripe",
      "Docker",
      "GitHub Actions",
    ],
    categories: ["Backend", "Data"],
    github: "https://github.com/TirthShahh28/hotel-booking-api",
    demo: null,
  },
  {
    id: 2,
    title: "DocuLens — Document Ingestion API",
    subtitle: "Backend document ingestion and batch processing",
    description:
      "Built a FastAPI ingestion service that accepts document uploads, tracks batch job status in PostgreSQL, and exposes REST endpoints for upload progress and retrieval. Added structured logging, Docker health checks, and validation rules for file types and size limits.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "Structured Logging"],
    categories: ["Backend", "Data"],
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "ReflectivePath",
    subtitle: "Applied AI capstone for reflective-listening practice",
    description:
      "Built an AI practice loop for motivational interviewing. Fine-tuned Gemma 2-2B with LoRA, served local inference through Ollama, added Claude fallback for higher-risk cases, used FAISS RAG over AnnoMI plus synthetic dialogues, tracked conversation state with LangGraph, and evaluated 20 scenarios with Claude-as-judge. Includes safety handling for crisis language with 988/SAMHSA routing.",
    tech: [
      "Python",
      "LangGraph",
      "RAG",
      "FAISS",
      "Gemma 2",
      "Evaluation",
    ],
    categories: ["AI", "RAG", "Evaluation"],
    github: "https://github.com/TirthShahh28/motivational-interviewing-chatbot",
    demo: null,
  },
  {
    id: 4,
    title: "ResearchGraph",
    subtitle: "Multi-agent research and citation validation workflow",
    description:
      "Built 3 LangGraph agents for research, summarization, and citation validation using shared state, tool calls, retries, and structured outputs. Deployed with AWS Lambda + Docker, Prometheus metrics, Ragas quality checks, and CI/CD pipelines. Sustained 150+ concurrent sessions at ~$0.004/query.",
    tech: ["LangGraph", "AWS Lambda", "Docker", "Ragas", "Prometheus"],
    categories: ["AI", "Agents", "Evaluation"],
    github: null,
    demo: null,
  },
];
