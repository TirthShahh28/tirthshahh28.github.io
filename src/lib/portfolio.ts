export const identity = {
  name: "Tirth Shah",
  role: "Software / AI Engineer",
  location: "Hartford, CT",
  status: "Open to full-time roles — 2026",
  blurb:
    "I build dependable software — backend APIs, SQL/data workflows, and production web apps for real users and ops teams. I ship applied AI when it solves a clear product problem.",
  links: {
    github: "https://github.com/TirthShahh28",
    linkedin: "https://www.linkedin.com/in/tirth-shah",
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
  { value: 30000, suffix: "+", label: "products indexed", sub: "AI search @ Capital Spirits" },
  { value: 40, suffix: "%", label: "manual workload cut", sub: "Python automation @ UConn" },
  { value: 150, suffix: "+", label: "concurrent sessions", sub: "ResearchGraph agents" },
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
      "ResearchGraph is the standout — three LangGraph agents (research, summarization, citation validation) running on AWS Lambda + Docker, sustaining 150+ concurrent sessions at ~$0.004/query with Prometheus + Ragas quality checks. RoomLock is the strongest pure-backend piece: SELECT FOR UPDATE locking to guarantee no double-booking under load.",
    "Does he have backend + AI experience?":
      "Yes — both, in production. Backend: FastAPI/Next.js REST APIs, PostgreSQL schemas, Stripe + webhook event processing, RBAC, CI/CD. Applied AI: MeiliSearch AI search over 30,000+ products at Capital Spirits, plus LangGraph agents, FAISS RAG, and a LoRA fine-tune of Gemma 2.",
    "Is he available for full-time?":
      "Yes — Tirth is open to full-time software / AI engineering roles starting 2026, graduating with an M.S. in CS from UConn in May 2026.",
    "What's his AI/RAG background?":
      "RAG and agents are a core focus: FAISS retrieval over AnnoMI dialogues in ReflectivePath, LangGraph multi-agent orchestration with Ragas evaluation in ResearchGraph, a Gemma 2 LoRA fine-tune served via Ollama with a Claude fallback, and MeiliSearch relevance tuning in production.",
    _default:
      "I'm a demo assistant over Tirth's resume. Try one of the suggested questions — ask about his strongest project, his backend + AI experience, availability, or his RAG background.",
  } as Record<string, string>,
};
