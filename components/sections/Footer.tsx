import { siteConfig } from '@/lib/site'
import { BookCallButton } from '@/components/ui'

export function FooterSection() {
  const year = new Date().getFullYear()

  const linkClass =
    'text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

  return (
    <footer className="py-12 sm:py-14">
      <p className="font-display text-lg font-semibold text-ink">{siteConfig.name}</p>
      <p className="mt-2 max-w-prose text-sm text-muted">{siteConfig.tagline}</p>
      <nav aria-label="Footer links" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a href={siteConfig.linkedin} className={linkClass} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={siteConfig.x} className={linkClass} target="_blank" rel="noopener noreferrer">
          X
        </a>
        <a href={`mailto:${siteConfig.email}`} className={linkClass}>
          Email
        </a>
      </nav>
      <div className="mt-6">
        <BookCallButton className="text-sm">Book 15 minutes</BookCallButton>
      </div>
      <p className="mt-8 font-mono text-xs text-muted">
        © {year} {siteConfig.name}
      </p>
    </footer>
  )
}
