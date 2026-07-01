import { BookCallButton, PipelineDiagram } from '@/components/ui'

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="pt-12 pb-16 sm:pt-16 sm:pb-20">
      <p className="mb-4 font-mono text-xs uppercase tracking-wide text-muted sm:text-sm">
        AI implementation for 10–50 person B2B companies
      </p>
      <h1
        id="hero-heading"
        className="max-w-prose font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-ink sm:text-4xl sm:leading-tight"
      >
        You don&apos;t need another AI demo. You need something that survives production.
      </h1>
      <p className="mt-6 max-w-prose text-base leading-relaxed text-ink sm:text-lg">
        I build the RAG pipeline, the MCP server, or the internal agent your team
        doesn&apos;t have time to learn from scratch — on your own stack, owned by you
        when I&apos;m done. Ex-CERN engineer. I&apos;ll tell you when AI is the wrong tool
        for the job.
      </p>
      <div className="mt-8">
        <BookCallButton>Book a 15-minute call</BookCallButton>
      </div>
      <div className="mt-10">
        <PipelineDiagram />
      </div>
    </section>
  )
}
