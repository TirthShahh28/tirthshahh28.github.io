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
    date: "Jun 2025 — Mar 2026",
    role: "Software Engineer",
    company: "Capital Spirits — Hartford, CT",
    standout: true,
    summary:
      "Rebuilt catalog search and owned checkout end-to-end on a multi-location commerce platform.",
    description: [
      "Rebuilt Next.js + TypeScript catalog search by replacing Prisma LIKE queries with MeiliSearch, cutting 30,000+ SKU lookups from 4s to 30ms via a tuned ranking pipeline, typo tolerance, faceted filters, and synonym rules",
      "Built a Node.js batch indexing pipeline syncing Prisma/PostgreSQL into MeiliSearch with live stock across 3 retail locations, automated facet mapping, and incremental reindex jobs on a cron schedule",
      "Owned the Stripe Elements checkout end-to-end with idempotent webhooks, server-side price verification, CT 6.35% tax, and duplicate-order guards, eliminating payment disputes across the storefront",
      "Shipped 3-strategy NextAuth (Google, Apple, email) on JWT sessions with OAuth2 provider linking and a custom Prisma adapter, resolving account-linking edge cases in the sign-up flow",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "MeiliSearch",
      "PostgreSQL",
      "Stripe",
      "NextAuth",
    ],
  },
  {
    date: "Sep 2024 — May 2026",
    role: "Software Engineer",
    company: "University of Connecticut — Storrs, CT",
    summary:
      "Python automation and ETL for accommodations and exam scheduling at scale.",
    description: [
      "Built Python automation for accommodation intake, validation, and exam scheduling for 1,000+ students with Pandas, SQL, and pytest coverage, cutting manual triage by 40% and replacing legacy spreadsheets",
      "Developed Pandas + SQL ETL workflows with automated data validation and schema checks that blocked malformed records before dashboard refreshes and audit exports, eliminating downstream reconciliation rework",
      "Benchmarked scikit-learn routing classifiers with precision-recall and confusion-matrix evaluation, lifting routing accuracy 25% and saving ~$12k/year through reduced misrouting",
    ],
    tags: ["Python", "Pandas", "SQL", "ETL", "scikit-learn", "pytest"],
  },
  {
    date: "Jan 2022 — Apr 2024",
    role: "Software Engineer",
    company: "Deconstruct — Bengaluru, India",
    summary:
      "Internal admin & order-management platform for a D2C skincare brand.",
    description: [
      "Built an internal admin and order-management platform for a D2C skincare brand with Python, Django, and React, centralizing catalog, pricing, inventory, and fulfillment for 500+ SKUs in one panel for internal staff",
      "Designed PostgreSQL-backed REST APIs for order, inventory, and returns flows with JWT RBAC, Pydantic validation, and audit logging, replacing manual spreadsheet processes across the operations team",
      "Shipped Docker-packaged services deployed via GitHub Actions with schema validation and automated tests, cutting back-office data-entry errors and rework 40% across internal tooling",
    ],
    tags: ["Python", "Django", "React", "PostgreSQL", "REST APIs", "Docker"],
  },
];
