export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  categories: string[];
  github: string | null;
  demo: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RoomLock",
    subtitle: "Concurrent Booking API",
    description:
      "REST APIs for booking, room, guest, auth, and payment workflows. SELECT FOR UPDATE locking prevents double-booking; Strategy-pattern pricing, Stripe webhook verification, APScheduler cleanup jobs, and CI/CD.",
    highlights: [
      "No double-booking under load",
      "Stripe webhook verified",
      "Dockerised + CI/CD",
    ],
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
    title: "DocuLens",
    subtitle: "Document Ingestion API",
    description:
      "FastAPI ingestion service that accepts document uploads, tracks batch job status in PostgreSQL, and exposes REST endpoints for progress and retrieval. Structured logging, Docker health checks, and file validation.",
    highlights: [
      "Batch job tracking",
      "Structured logging",
      "Health-checked containers",
    ],
    tech: ["FastAPI", "PostgreSQL", "Docker", "Structured Logging"],
    categories: ["Backend", "Data"],
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "ReflectivePath",
    subtitle: "Applied AI Capstone",
    description:
      "AI practice loop for motivational interviewing. Fine-tuned Gemma 2-2B with LoRA, local inference via Ollama with Claude fallback, FAISS RAG over AnnoMI + synthetic dialogues, LangGraph state, Claude-as-judge eval over 20 scenarios. Crisis-language safety with 988/SAMHSA routing.",
    highlights: [
      "LoRA fine-tune",
      "FAISS RAG",
      "988/SAMHSA safety routing",
    ],
    tech: ["Python", "LangGraph", "RAG", "FAISS", "Gemma 2", "Evaluation"],
    categories: ["AI", "RAG", "Evaluation"],
    github: "https://github.com/TirthShahh28/motivational-interviewing-chatbot",
    demo: null,
  },
  {
    id: 4,
    title: "ResearchGraph",
    subtitle: "Multi-agent Research Workflow",
    description:
      "Three LangGraph agents for research, summarization, and citation validation with shared state, tool calls, retries, and structured outputs. AWS Lambda + Docker, Prometheus metrics, Ragas quality checks, CI/CD. 150+ concurrent sessions at ~$0.004/query.",
    highlights: [
      "3-agent pipeline",
      "150+ concurrent sessions",
      "~$0.004 / query",
    ],
    tech: ["LangGraph", "AWS Lambda", "Docker", "Ragas", "Prometheus"],
    categories: ["AI", "Agents", "Evaluation"],
    github: null,
    demo: null,
  },
];
