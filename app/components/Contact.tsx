'use client'
import { InView } from '@/components/motion-primitives/in-view'

export default function Contact() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-5xl">
        <InView
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewOptions={{ margin: '0px 0px -60px 0px' }}
        >
          <p className="text-xs uppercase tracking-[0.15em] mb-8" style={{ color: 'var(--text-secondary)' }}>
            Contact
          </p>
          <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)', maxWidth: '32rem' }}>
            I&apos;m looking for a full-time design role. If you&apos;re building something interesting, reach out.
          </p>
          <div className="flex flex-wrap gap-6 text-lg md:text-xl">
            <a
              href="mailto:akshit@gloww.design"
              className="group relative"
              style={{ color: 'var(--text-primary)' }}
            >
              akshit@gloww.design
              <span
                className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"
                style={{ height: '1px', background: 'var(--text-primary)' }}
              />
            </a>
            <span style={{ color: 'var(--border)' }}>·</span>
            <a
              href="https://x.com/akshitvrma"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              style={{ color: 'var(--text-primary)' }}
            >
              x.com/akshitvrma
              <span
                className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"
                style={{ height: '1px', background: 'var(--text-primary)' }}
              />
            </a>
          </div>
        </InView>
      </div>
    </section>
  )
}
