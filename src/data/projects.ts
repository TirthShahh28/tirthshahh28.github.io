export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LLM-Powered Document Q&A System",
    description:
      "End-to-end RAG system that ingests documents, generates embeddings via OpenAI API, stores them in Pinecone vector DB, and serves context-aware LLM responses through FastAPI. Implemented intelligent chunking with sub-second retrieval for 10K+ chunks. Integrated LangChain with prompt engineering to reduce hallucinations.",
    tags: ["LangChain", "OpenAI", "Pinecone", "FastAPI", "Docker"],
    github: "https://github.com/TirthShahh28",
    demo: null,
  },
  {
    id: 2,
    title: "AI-Integrated Search & Recommendation Engine",
    description:
      "AI-powered search for production e-commerce platform (30,000+ products) with typo tolerance, synonym handling, and multi-field relevance ranking. Real-time indexing pipeline achieving sub-50ms query latency (100x improvement). Search analytics and query logging for iterative relevance improvements.",
    tags: ["MeiliSearch", "Next.js", "TypeScript", "Search AI"],
    github: "https://github.com/TirthShahh28",
    demo: null,
  },
];
