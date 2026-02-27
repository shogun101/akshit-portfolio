'use client'
import { TextEffect } from '@/components/motion-primitives/text-effect'

export default function Hero() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32">
      <TextEffect
        as="h1"
        preset="blur"
        className="text-5xl md:text-8xl tracking-tight leading-none mb-6"
        style={{ color: 'var(--text-primary)' }}
      >
        Akshit Vrma
      </TextEffect>
      <TextEffect
        as="p"
        preset="slide"
        delay={0.2}
        className="text-lg md:text-xl max-w-xl leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        Product designer. I design crypto and AI products — and I ship code too.
      </TextEffect>
    </section>
  )
}
