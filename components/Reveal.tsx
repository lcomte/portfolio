'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReducedMotion(media.matches)
    updateMotion()
    media.addEventListener('change', updateMotion)

    const node = ref.current
    if (!node) return () => media.removeEventListener('change', updateMotion)

    if (media.matches) {
      setVisible(true)
      return () => media.removeEventListener('change', updateMotion)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      media.removeEventListener('change', updateMotion)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={[
        className,
        reducedMotion || visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-3 opacity-0',
        !reducedMotion && 'transition-all duration-700 ease-out motion-reduce:transition-none',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
