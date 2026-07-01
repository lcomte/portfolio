import { joubeBuiltItems } from '@/lib/content'
import { CodeComment, MonoFact, VerifiedTag } from '@/components/ui'

function CaseStudy({
  title,
  meta,
  statusTag,
  problem,
  builtLabel,
  builtItems,
  builtParagraph,
  outcome,
  lesson,
}: {
  title: string
  meta?: string
  statusTag?: string
  problem?: string
  builtLabel?: string
  builtItems?: readonly string[]
  builtParagraph?: string
  outcome?: React.ReactNode
  lesson?: string
}) {
  return (
    <article className="max-w-prose">
      <header>
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        {meta ? (
          <p className="mt-1 font-mono text-sm text-muted">{meta}</p>
        ) : null}
        {statusTag ? (
          <p className="mt-2">
            <VerifiedTag>{statusTag}</VerifiedTag>
          </p>
        ) : null}
      </header>

      {problem ? (
        <div className="mt-5">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-muted">
            Problem
          </p>
          <p className="mt-2 text-base leading-relaxed text-ink">{problem}</p>
        </div>
      ) : null}

      {(builtItems?.length || builtParagraph) && (
        <div className="mt-5">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-muted">
            {builtLabel ?? 'What got built'}
          </p>
          {builtParagraph ? (
            <p className="mt-2 text-base leading-relaxed text-ink">{builtParagraph}</p>
          ) : null}
          {builtItems ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink">
              {builtItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      )}

      {outcome ? (
        <div className="mt-5">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-muted">
            Outcome
          </p>
          <div className="mt-2 text-base leading-relaxed text-ink">{outcome}</div>
        </div>
      ) : null}

      {lesson ? (
        <p className="mt-5 text-base leading-relaxed text-ink">{lesson}</p>
      ) : null}
    </article>
  )
}

export function ProofOfWorkSection() {
  return (
    <section aria-labelledby="proof-of-work-heading" className="py-12 sm:py-16">
      <h2
        id="proof-of-work-heading"
        className="max-w-prose font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]"
      >
        Proof of work
      </h2>

      <div className="mt-10 space-y-14">
        <CaseStudy
          title="Joube.ai — AI content system for creators"
          meta="2023–2026, wound down as of this rebuild"
          problem="French infopreneurs needed a real content system, not another black-box generator that produces generic output no one can trust or improve."
          builtLabel="What got built (as CTO/co-founder, solo-engineered)"
          builtItems={joubeBuiltItems}
          outcome={
            <>
              <MonoFact>29</MonoFact> paying clients at <MonoFact>€47/month</MonoFact>,
              built and run solo.{' '}
              <CodeComment text="// n=15 scripts — on that small sample, content built on top-scored hooks drew roughly 2x the comments of the baseline. Directional, not conclusive." />
            </>
          }
          lesson="The lesson that shaped how I build agents now: the live tool-calling chat — the feature that kept a human making every final call — was what users loved most. A separate attempt to automate more of the pipeline and remove that human checkpoint made the output worse and eroded trust. That's the boundary I now build every agent around."
        />

        <CaseStudy
          title="ContentEngine — B2B thought-leadership pipeline"
          statusTag="// in progress — build-in-public, no performance data yet"
          problem="Producing consistent, high-quality LinkedIn/X content without it turning into generic AI output requires actually understanding what's worked for real creators in a niche — not guessing."
          builtLabel="What's built so far"
          builtParagraph="An MCP server with 10 scoped tools (add_creator, classify_posts, embed_posts, extract_formats, search_similar_content, analyze_creator_fit, and others), a scrape → classify → embed → save pipeline running through one shared service function used by both the MCP tools and the HTTP API, two-tier LLM routing (a fast model for classification, Claude for generation), Postgres 17 + pgvector, and Bright Data for scraping."
          outcome={
            <>
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-muted">
                Status
              </span>
              <p className="mt-2">
                This exact site is one of its outputs — literally build-in-public. No
                performance claims yet; the ICP and creator database are still being built
                out.
              </p>
            </>
          }
        />

        <CaseStudy
          title="IG Lead Intelligence pipeline"
          statusTag="// in progress"
          builtLabel="What's built"
          builtParagraph="Bright Data scraping → Postgres 17 + pgvector → a self-hosted Qwen3-27B model on a RunPod GPU for analysis → lead scoring and ICP matching via embeddings."
          outcome={
            <>
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-muted">
                Status
              </span>
              <p className="mt-2">In progress, no outcome data to report yet.</p>
            </>
          }
        />

        <CaseStudy
          title="LeadEngine"
          statusTag="// early stage — no outcome data"
          builtParagraph="An early-stage tool analyzing coach/infopreneur audience data to surface leads that were missed or worth re-engaging. Too early to claim results — noted here honestly rather than left off entirely, because build-in-public is the point."
        />
      </div>
    </section>
  )
}
