export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  summary: string;
  standout?: boolean;
  description: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    date: "Feb 2025 — Present",
    role: "AI / Software Engineer Intern",
    company: "Capital Spirits",
    standout: true,
    summary:
      "Shipping AI search and event-driven backend on a live commerce platform.",
    description: [
      "Integrated AI-powered search engine (MeiliSearch) into production platform, designing indexing pipelines, relevance tuning, and real-time sync for 30,000+ products",
      "Built RESTful APIs with Next.js and TypeScript for intelligent search and context-aware filtering; implemented webhook-driven event processing for automated workflows",
      "Deployed Stripe payment integration with event-driven architecture — patterns directly transferable to AI model inference API deployment",
    ],
    tags: ["MeiliSearch", "Next.js", "TypeScript", "Stripe", "REST APIs"],
  },
  {
    date: "Sep 2024 — Present",
    role: "Data & AI Operations Engineer",
    company: "University of Connecticut — Center for Students with Disabilities",
    summary: "Python data pipelines for accommodations & exam scheduling.",
    description: [
      "Developed Python automation pipelines for processing accommodation data and exam scheduling across 1,000+ students, reducing manual workload by 40%",
      "Designed end-to-end data workflows (ingest → transform → validate → serve), reducing manual processing by 35–40% using Pandas and SQL",
    ],
    tags: ["Python", "Pandas", "SQL", "Automation"],
  },
  {
    date: "Jan 2024 — Apr 2024",
    role: "Software Engineer Intern — Internal Systems",
    company: "Deconstruct — Bengaluru, India",
    summary: "Internal admin & ops dashboard replacing spreadsheet workflows.",
    description: [
      "Built an internal admin & operations dashboard (Python/Django + React) to manage 500+ skincare SKUs across catalog, pricing, inventory, and order status — replacing manual spreadsheet workflows for the ops team",
      "Designed PostgreSQL schemas and REST APIs for order, inventory, and fulfillment flows with JWT-based RBAC, input validation, and audit logging",
      "Automated inventory reconciliation and order-status syncing, cutting manual back-office data-entry errors and rework ~40%",
    ],
    tags: ["Python", "Django", "React", "PostgreSQL", "REST APIs", "RBAC"],
  },
];
