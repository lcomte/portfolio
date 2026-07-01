export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="py-12 sm:py-14">
      <h2
        id="problem-heading"
        className="max-w-prose font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]"
      >
        You&apos;ve tried ChatGPT. That&apos;s not the same as having AI in your stack.
      </h2>
      <p className="mt-5 max-w-prose text-base leading-relaxed text-ink sm:text-lg">
        Maybe you paid an agency for a pilot that looked great in the demo and died the
        moment real data hit it. The board keeps asking what your AI strategy is.
        You&apos;ve got data sitting in Postgres and no one internal who can turn it into
        something that actually ships and keeps running.
      </p>
    </section>
  )
}
