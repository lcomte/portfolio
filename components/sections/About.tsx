export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="py-12 sm:py-14">
      <h2
        id="about-heading"
        className="max-w-prose font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]"
      >
        Precision engineering, applied to AI that has to actually work
      </h2>
      <div className="mt-5 max-w-prose space-y-4 text-base leading-relaxed text-ink sm:text-lg">
        <p>
          I started in robotics engineering at CERN, where tolerances are measured in
          millimeters and &ldquo;close enough&rdquo; isn&apos;t a category. That&apos;s the
          standard I bring to AI implementation — most of what gets sold as &ldquo;AI
          transformation&rdquo; wouldn&apos;t survive the kind of scrutiny engineering work
          gets by default.
        </p>
        <p>
          I studied at Epitech Lyon, then spent several years building and running Joube.ai,
          an AI content platform with real paying customers — not a hackathon demo, a
          product I was personally on the hook for keeping alive, billing correctly, and not
          breaking in production.
        </p>
        <p>
          Based in Bangkok, working with B2B teams across the US and UK, remote-first.
        </p>
      </div>
    </section>
  )
}
