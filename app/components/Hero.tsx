'use client'
import { TextEffect } from '@/components/motion-primitives/text-effect'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-16 pb-20 pt-32">
      <div className="max-w-5xl">
        <TextEffect
          as="h1"
          preset="blur"
          className="text-[clamp(3rem,10vw,6rem)] leading-[0.95] tracking-[-0.03em] mb-8"
          style={{ color: 'var(--text-primary)', fontWeight: 450 }}
        >
          Akshit Vrma
        </TextEffect>
        <TextEffect
          as="p"
          preset="slide"
          delay={0.3}
          className="text-lg md:text-xl max-w-lg"
          style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}
        >
          Product designer. I design crypto and AI products — and I ship code too.
        </TextEffect>
        <TextEffect
          as="p"
          preset="slide"
          delay={0.5}
          className="text-sm mt-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          Open to full-time roles.
        </TextEffect>
      </div>
    </section>
  )
}
