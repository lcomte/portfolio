import { proofItems } from '@/lib/content'
import { MonoFact } from '@/components/ui'

export function ProofStrip() {
  return (
    <section aria-labelledby="proof-heading" className="py-12 sm:py-14">
      <h2 id="proof-heading" className="sr-only">
        Proof
      </h2>
      <ul className="space-y-6">
        {proofItems.map((item, index) => (
          <li
            key={index}
            className="max-w-prose text-base leading-relaxed text-ink sm:text-[1.05rem]"
          >
            {item.mono ? (
              <>
                <MonoFact>{item.mono}</MonoFact>{' '}
              </>
            ) : null}
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  )
}
