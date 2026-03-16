export const projects = [
  {
    id: 1,
    title: 'LLM-Powered Document Q&A System',
    description:
      'Built end-to-end RAG system that ingests documents, generates embeddings via OpenAI API, stores them in Pinecone vector DB, and serves context-aware LLM responses through FastAPI REST endpoints. Implemented intelligent chunking with sub-second retrieval for 10K+ chunks. Integrated LangChain with prompt engineering to reduce hallucinations.',
    tags: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'Docker'],
    github: 'https://github.com/TirthShahh28',
    demo: null,
  },
  {
    id: 2,
    title: 'AI-Integrated Search & Recommendation Engine',
    description:
      'Integrated AI-powered search into production e-commerce platform (30,000+ products) with typo tolerance, synonym handling, and multi-field relevance ranking. Designed real-time indexing pipeline achieving sub-50ms query latency (100x improvement). Implemented search analytics and query logging to improve ranking relevance.',
    tags: ['MeiliSearch', 'Next.js', 'TypeScript', 'Search AI'],
    github: 'https://github.com/TirthShahh28',
    demo: null,
  },
]
