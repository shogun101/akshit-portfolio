'use client'
import * as Tooltip from '@radix-ui/react-tooltip'
import { AnimatedBackground } from '@/components/motion-primitives/animated-background'
import { InView } from '@/components/motion-primitives/in-view'

const companies = [
  { name: 'Coinbase', role: 'Product Design' },
  { name: 'Instadapp', role: 'Product Design' },
  { name: 'VelarBTC', role: 'Product Design' },
  { name: 'Emerge', role: 'Product Design' },
]

export default function Companies() {
  return (
    <section className="px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-5xl">
        <InView
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewOptions={{ margin: '0px 0px -60px 0px' }}
        >
          <p className="text-xs uppercase tracking-[0.15em] mb-10" style={{ color: 'var(--text-secondary)' }}>
            Collaborated With
          </p>
          <Tooltip.Provider delayDuration={100}>
            <AnimatedBackground
              className="rounded-sm"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              enableHover
            >
              <div className="flex flex-wrap gap-x-10 gap-y-5">
                {companies.map((c) => (
                  <Tooltip.Root key={c.name}>
                    <Tooltip.Trigger asChild>
                      <button
                        data-id={c.name}
                        className="text-base md:text-lg px-3 py-2 -mx-3 -my-2 rounded-sm transition-all duration-200"
                        style={{
                          color: 'var(--text-primary)',
                          opacity: 0.35,
                          filter: 'grayscale(1)',
                          fontWeight: 450,
                          background: 'transparent',
                          border: 'none',
                          cursor: 'default',
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget
                          el.style.opacity = '1'
                          el.style.filter = 'grayscale(0)'
                          el.style.transform = 'scale(1.05)'
                          // dim siblings
                          el.closest('.flex')?.querySelectorAll('button').forEach(b => {
                            if (b !== el) { b.style.opacity = '0.15'; b.style.filter = 'grayscale(1)' }
                          })
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget
                          el.style.opacity = '0.35'
                          el.style.filter = 'grayscale(1)'
                          el.style.transform = 'scale(1)'
                          el.closest('.flex')?.querySelectorAll('button').forEach(b => {
                            b.style.opacity = '0.35'; b.style.filter = 'grayscale(1)'
                          })
                        }}
                      >
                        {c.name}
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="text-xs px-3 py-1.5 rounded animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-1"
                        style={{ background: 'var(--text-primary)', color: 'var(--bg)', zIndex: 100 }}
                        sideOffset={8}
                        side="top"
                      >
                        {c.name} — {c.role}
                        <Tooltip.Arrow style={{ fill: 'var(--text-primary)' }} />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                ))}
              </div>
            </AnimatedBackground>
          </Tooltip.Provider>
        </InView>
      </div>
    </section>
  )
}
