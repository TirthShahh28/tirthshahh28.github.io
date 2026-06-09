export const identity = {
  name: "Tirth Shah",
  role: "Software / AI Engineer",
  location: "Hartford, CT",
  status: "Open to full-time roles — 2026",
  blurb:
    "I build dependable software — backend APIs, SQL/data workflows, and production web apps for real users and ops teams. I ship applied AI when it solves a clear product problem.",
  links: {
    github: "https://github.com/TirthShahh28",
    linkedin: "https://www.linkedin.com/in/tirth-shah14/",
    email: "tirth.shah@uconn.edu",
    resume: "/resume.pdf",
  },
};

export const terminalLines = [
  { prompt: true, text: "cat aboutMe.md" },
  { prompt: false, text: "# Tirth Shah — Software / AI Engineer" },
  { prompt: false, text: "M.S. Computer Science @ UConn · May 2026" },
  { prompt: false, text: "" },
  { prompt: false, text: "Backend APIs · SQL/data workflows · production web apps." },
  { prompt: false, text: "Applied AI when it solves a clear product problem." },
  { prompt: false, text: "" },
  { prompt: true, text: "echo $FOCUS" },
  { prompt: false, text: "Backend · Enterprise Apps · Data · Applied AI" },
];

export const metrics = [
  { value: 30000, suffix: "+", label: "SKUs searched", sub: "4s → 30ms @ Capital Spirits" },
  { value: 40, suffix: "%", label: "manual workload cut", sub: "Python automation @ UConn" },
  { value: 50000, suffix: "+", label: "codegen requests / day", sub: "AI code-gen SaaS platform" },
  { value: 1000, suffix: "+", label: "students served", sub: "accommodation pipelines" },
];

export const chatConfig = {
  caption: "Powered by RAG over my resume",
  suggestions: [
    "What's his strongest project?",
    "Does he have backend + AI experience?",
    "Is he available for full-time?",
    "What's his AI/RAG background?",
  ],
  answers: {
    "What's his strongest project?":
      "The AI Code-Gen SaaS is the standout — a distributed Spring Boot + Spring AI platform that builds full React apps from prompts, with SSE streaming for 10K+ concurrent sessions at sub-200ms and Kubernetes autoscaling to 50K+ codegen requests/day at 99.9% reliability. RoomLock is the strongest pure-backend piece: PostgreSQL SELECT FOR UPDATE locking to guarantee no double-booking under load.",
    "Does he have backend + AI experience?":
      "Yes — both, in production. Backend: FastAPI/Next.js/Spring Boot REST APIs, PostgreSQL schemas, Stripe + idempotent webhooks, JWT/RBAC, Kubernetes, and CI/CD. Applied AI: MeiliSearch search over 30,000+ SKUs at Capital Spirits, Spring AI code generation, a Gemma 2 LoRA fine-tune, and FAISS RAG with LangGraph.",
    "Is he available for full-time?":
      "Yes — Tirth is open to full-time software / AI engineering roles starting 2026, graduating with an M.S. in Computer Science from UConn in May 2026.",
    "What's his AI/RAG background?":
      "RAG and applied AI are a core focus: FAISS retrieval over AnnoMI dialogues with LangGraph state tracking in ReflectivePath, a Gemma 2-2B LoRA fine-tune served via Ollama with a Claude fallback, Spring AI-driven code generation, and MeiliSearch relevance tuning in production.",
    _default:
      "I'm a demo assistant over Tirth's resume. Try one of the suggested questions — ask about his strongest project, his backend + AI experience, availability, or his RAG background.",
  } as Record<string, string>,
};
