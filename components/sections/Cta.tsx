import { BookCallButton } from '@/components/ui'

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-12 sm:py-16"
    >
      <h2
        id="cta-heading"
        className="max-w-prose font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]"
      >
        15 minutes, no pitch deck
      </h2>
      <p className="mt-5 max-w-prose text-base leading-relaxed text-ink sm:text-lg">
        Tell me what&apos;s stuck. I&apos;ll tell you honestly whether AI is the right tool
        for it, and roughly what fixing it would take — even if the honest answer is
        &ldquo;don&apos;t do this yet.&rdquo;
      </p>
      <div className="mt-8">
        <BookCallButton>Book 15 minutes</BookCallButton>
      </div>
    </section>
  )
}
