export const siteConfig = {
  name: 'Lucas Comte',
  title: 'Lucas Comte — AI Implementation for B2B Teams',
  description:
    'Production AI systems for B2B teams — RAG pipelines, MCP servers, and internal agents on your stack. Ex-CERN engineer.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lucascomte.com',
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://cal.com/lucas-comte/15min',
  email: 'lucas.comte63700@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lucas-comte-2011a1161/',
  x: process.env.NEXT_PUBLIC_X_URL ?? 'https://x.com/lucascomte',
  tagline: 'AI implementation for B2B teams — Bangkok, remote-first',
} as const
