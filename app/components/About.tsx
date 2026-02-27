'use client'
import { InView } from '@/components/motion-primitives/in-view'

export default function About() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-5xl">
        <InView
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewOptions={{ margin: '0px 0px -80px 0px' }}
        >
          <p
            className="text-xs uppercase tracking-[0.15em] mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            About
          </p>
          <p
            className="text-xl md:text-2xl leading-relaxed max-w-2xl"
            style={{ color: 'var(--text-primary)', fontWeight: 450, lineHeight: 1.65 }}
          >
            I design at the intersection of crypto, AI, and consumer products. I&apos;ve worked with teams building wallets, DEXs, trading tools, and AI-native apps. I also write code — which means I prototype fast and ship without waiting.
          </p>
        </InView>
      </div>
    </section>
  )
}
