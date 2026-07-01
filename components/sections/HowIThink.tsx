import { pillars } from '@/lib/content'

export function HowIThinkSection() {
  return (
    <section aria-labelledby="pillars-heading" className="py-12 sm:py-14">
      <h2
        id="pillars-heading"
        className="max-w-prose font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]"
      >
        How I think
      </h2>
      <ul className="mt-8 space-y-6">
        {pillars.map((pillar) => (
          <li key={pillar.title} className="max-w-prose">
            <h3 className="font-display text-base font-semibold text-ink">
              {pillar.title}
            </h3>
            <p className="mt-1.5 text-base leading-relaxed text-ink">{pillar.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
