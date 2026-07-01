import { offers } from '@/lib/content'
import { MonoFact } from '@/components/ui'

export function WhatIDoSection() {
  return (
    <section aria-labelledby="services-heading" className="py-12 sm:py-14">
      <h2
        id="services-heading"
        className="max-w-prose font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]"
      >
        Three ways to work together
      </h2>
      <ol className="mt-8 space-y-8">
        {offers.map((offer, index) => (
          <li key={offer.title} className="max-w-prose">
            <h3 className="font-display text-lg font-semibold text-ink">
              {index + 1}. {offer.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-ink">{offer.description}</p>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-prose text-base leading-relaxed text-ink">
        <span className="font-display font-semibold">Pricing:</span> Projects run{' '}
        <MonoFact>€5,000–15,000</MonoFact> depending on scope. We figure out exactly
        where yours lands on the call — no surprise invoice, no &ldquo;let&apos;s circle
        back with a quote.&rdquo;
      </p>
    </section>
  )
}
