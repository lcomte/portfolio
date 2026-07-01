export const proofItems = [
  {
    text: 'paying clients on a production AI system I built and ran solo',
    mono: '29',
  },
  {
    text: 'hooks + 72 CTAs scored by embeddings, composite-ranked, in production',
    mono: '145',
  },
  {
    text: 'MCP server, 10 scoped tools, live content pipeline — running right now',
    mono: null,
  },
] as const

export const offers = [
  {
    title: 'Done-for-you implementation',
    description:
      'I build the AI feature or pipeline directly into your stack and hand it over — working, documented, yours.',
  },
  {
    title: 'Productized scopes',
    description:
      'Fixed deliverables: RAG over your docs, an internal MCP server, an LLM-powered data pipeline. Defined scope, defined price.',
  },
  {
    title: 'Audit + architecture',
    description:
      'I design it, document the trade-offs and the real costs, your team builds it. For teams that can execute but need the roadmap.',
  },
] as const

export const pillars = [
  {
    title: 'Data analysis with LLM',
    body: "LLM output is untrusted until it's been through a validation layer. Half the time the boring deterministic check is cheaper and more reliable than a model call.",
  },
  {
    title: 'MCP in production',
    body: 'A read-only Postgres role beats a keyword guard, every time. Most "wrap it in MCP" advice skips the part where it\'s pointed at a production database.',
  },
  {
    title: 'RAG for matching, not just chat',
    body: "If your data's already in Postgres, pgvector handles the vast majority of real workloads. RAG's more interesting use is scoring and matching, not \"chat with your PDF.\"",
  },
  {
    title: 'Audience research automation',
    body: 'The LLM proposes, a human decides. Fully-automated persona research gets you confident, wrong answers.',
  },
  {
    title: 'Infrastructure & self-hosting',
    body: 'Self-hosting wins at a specific volume and loses below it — the question is the break-even, not the ideology.',
  },
  {
    title: 'AI agents',
    body: 'Most "AI agents" are a tool-calling loop with a marketing budget. The interesting design decision is where you keep a human in the loop, not how autonomous you can make it.',
  },
] as const

export const joubeBuiltItems = [
  'A hook & CTA scoring engine — 145 hook templates and 72 CTA templates with embeddings, composite-scored on engagement × frequency × cross-creator spread',
  'A scraper that ingests creator content, classifies it with an LLM, and detects patterns across creators',
  'Reel tracking with embedding-based similarity matching between posted content and generated scripts, tracked at 24h/72h/7d',
  'A real-time tool-calling chat that edits hooks, scripts, and CTAs live during conversation — the single most-used, most-loved feature in the product',
  'Anti-AI-slop detection: similarity scoring that filters low-effort generated content before it reaches a user',
  'An async job pipeline handling 1,300+ tracked jobs with error handling per job',
  '272 generated scripts stored with embeddings for RAG-based retrieval',
] as const
