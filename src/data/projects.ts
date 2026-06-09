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
    title: "AI Code-Gen SaaS",
    subtitle: "Lovable / v0.dev-style App Builder",
    description:
      "Distributed AI SaaS that generates full React apps from natural-language prompts using Spring Boot + Spring AI. SSE token streaming for 10K+ concurrent sessions at sub-200ms, backed by MinIO object storage and NFS shared volumes. Auto-updating build pods on Kubernetes (Fabric8 + Ingress, <2s cold start) autoscale to 50K+ codegen requests/day at 99.9% reliability, with RBAC, token quotas, and Stripe subscriptions for multi-tenant billing.",
    highlights: [
      "50K+ codegen requests / day",
      "SSE streaming, sub-200ms",
      "K8s autoscaling, 99.9% uptime",
    ],
    tech: ["Spring Boot", "Spring AI", "Kubernetes", "Redis", "Stripe", "MinIO"],
    categories: ["AI", "Backend"],
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: "RoomLock",
    subtitle: "Concurrent Booking API",
    description:
      "Production-style FastAPI + PostgreSQL REST API with SQLAlchemy 2.0, Alembic migrations, Pydantic v2 validation, JWT RBAC, and OpenAPI docs across reservation, auth, and payment paths. Prevents double-booking under concurrent load via SELECT FOR UPDATE row-level locks; models RESERVED/CONFIRMED/CANCELLED states with Stripe webhook verification and an APScheduler reaper for expired holds.",
    highlights: [
      "No double-booking under load",
      "SELECT FOR UPDATE locking",
      "Stripe webhooks + APScheduler",
    ],
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Stripe", "Docker"],
    categories: ["Backend", "Data"],
    github: "https://github.com/TirthShahh28/hotel-booking-api",
    demo: null,
  },
  {
    id: 3,
    title: "ReflectivePath",
    subtitle: "Motivational Interviewing Coach",
    description:
      "AI practice loop for motivational interviewing. Fine-tuned Gemma 2-2B with LoRA via Hugging Face PEFT, served local Ollama inference in Streamlit, and routed riskier turns to a Claude fallback with prompt-level guardrails. FAISS RAG over AnnoMI + synthetic dialogues with LangGraph state tracking; evaluated 20 scenarios with Claude-as-judge and routed crisis language to 988/SAMHSA resources.",
    highlights: [
      "Gemma 2 LoRA fine-tune",
      "FAISS RAG + LangGraph",
      "988/SAMHSA safety routing",
    ],
    tech: ["Python", "Streamlit", "Gemma 2", "LoRA", "FAISS", "LangGraph"],
    categories: ["AI", "RAG", "Evaluation"],
    github: "https://github.com/TirthShahh28/motivational-interviewing-chatbot",
    demo: null,
  },
];
