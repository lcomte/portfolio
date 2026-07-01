import { siteConfig } from '@/lib/site'

type BookCallButtonProps = {
  className?: string
  children: React.ReactNode
}

export function BookCallButton({ className = '', children }: BookCallButtonProps) {
  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        'inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-white',
        'transition-colors hover:bg-accent/90',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        className,
      ].join(' ')}
    >
      {children}
    </a>
  )
}

export function MonoFact({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-ink">{children}</span>
}

export function VerifiedTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-sm text-verified">{children}</span>
  )
}

export function CodeComment({ text }: { text: string }) {
  return (
    <span className="block font-mono text-sm text-muted">{text}</span>
  )
}

export function SectionRule() {
  return <hr className="border-0 border-t border-line" aria-hidden="true" />
}

export function PipelineDiagram() {
  const steps = ['Scrape', 'Classify', 'Embed', 'Score']

  return (
    <div
      className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded border border-line bg-white/60 px-3 py-2 font-mono text-xs text-muted sm:text-sm"
      aria-label="Pipeline: Scrape, Classify, Embed, Score"
    >
      {steps.map((step, index) => (
        <span key={step} className="inline-flex items-center gap-2">
          <span className="text-ink">{step}</span>
          {index < steps.length - 1 && (
            <span className="text-muted" aria-hidden="true">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  )
}
