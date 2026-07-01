import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const runtime = 'edge'
export const alt = siteConfig.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#FAFAF9',
          padding: '72px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'ui-monospace, monospace',
            fontSize: 22,
            color: '#6B7280',
          }}
        >
          <span style={{ color: '#16181D' }}>Scrape</span>
          <span>→</span>
          <span style={{ color: '#16181D' }}>Classify</span>
          <span>→</span>
          <span style={{ color: '#16181D' }}>Embed</span>
          <span>→</span>
          <span style={{ color: '#16181D' }}>Score</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#16181D',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#6B7280',
              lineHeight: 1.4,
              maxWidth: '900px',
            }}
          >
            AI implementation for B2B teams — production systems, not pitch decks
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'ui-monospace, monospace',
            fontSize: 22,
            color: '#0F766E',
          }}
        >
          lucascomte.com
        </div>
      </div>
    ),
    { ...size },
  )
}
