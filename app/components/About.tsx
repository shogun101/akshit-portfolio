'use client'
import { InView } from '@/components/motion-primitives/in-view'

export default function About() {
  return (
    <section className="px-6 md:px-12 py-16">
      <InView
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewOptions={{ margin: '0px 0px -60px 0px' }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          About
        </p>
        <p
          className="text-base md:text-lg leading-relaxed max-w-xl"
          style={{ color: 'var(--text-primary)', lineHeight: 1.7 }}
        >
          I design at the intersection of crypto, AI, and consumer products. I&apos;ve worked with teams building wallets, DEXs, trading tools, and AI-native apps. I also write code — which means I prototype fast and ship without waiting.
        </p>
      </InView>
    </section>
  )
}
