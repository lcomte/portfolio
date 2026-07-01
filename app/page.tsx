import { Reveal } from '@/components/Reveal'
import { AboutSection } from '@/components/sections/About'
import { CtaSection } from '@/components/sections/Cta'
import { FooterSection } from '@/components/sections/Footer'
import { HeroSection } from '@/components/sections/Hero'
import { HowIThinkSection } from '@/components/sections/HowIThink'
import { ProblemSection } from '@/components/sections/Problem'
import { ProofOfWorkSection } from '@/components/sections/ProofOfWork'
import { ProofStrip } from '@/components/sections/ProofStrip'
import { WhatIDoSection } from '@/components/sections/WhatIDo'
import { SectionRule } from '@/components/ui'

export default function HomePage() {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-prose px-5 pb-8 pt-6 sm:px-6 sm:pt-10">
        <HeroSection />

        <SectionRule />

        <Reveal>
          <ProofStrip />
        </Reveal>

        <SectionRule />

        <Reveal>
          <ProblemSection />
        </Reveal>

        <SectionRule />

        <Reveal>
          <WhatIDoSection />
        </Reveal>

        <SectionRule />

        <Reveal>
          <ProofOfWorkSection />
        </Reveal>

        <SectionRule />

        <Reveal>
          <HowIThinkSection />
        </Reveal>

        <SectionRule />

        <Reveal>
          <AboutSection />
        </Reveal>

        <SectionRule />

        <Reveal>
          <CtaSection />
        </Reveal>

        <SectionRule />

        <FooterSection />
      </div>
    </main>
  )
}
