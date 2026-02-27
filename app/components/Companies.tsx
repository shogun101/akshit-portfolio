'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import * as Tooltip from '@radix-ui/react-tooltip'

const companies = [
  { name: 'Coinbase', role: 'Product Design' },
  { name: 'Instadapp', role: 'Product Design' },
  { name: 'VelarBTC', role: 'Product Design' },
  { name: 'Emerge', role: 'Product Design' },
]

export default function Companies() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="px-6 md:px-12 py-16">
      <p className="text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--text-secondary)' }}>
        Collaborated With
      </p>
      <Tooltip.Provider delayDuration={0}>
        <div className="flex flex-wrap gap-8 md:gap-12">
          {companies.map((c) => {
            const isHovered = hovered === c.name
            const isDimmed = hovered !== null && !isHovered
            return (
              <Tooltip.Root key={c.name}>
                <Tooltip.Trigger asChild>
                  <motion.span
                    className="text-base md:text-lg cursor-default select-none"
                    style={{ color: 'var(--text-primary)' }}
                    animate={{
                      opacity: isDimmed ? 0.2 : isHovered ? 1 : 0.35,
                      scale: isHovered ? 1.05 : 1,
                      filter: isHovered ? 'grayscale(0)' : 'grayscale(1)',
                    }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setHovered(c.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {c.name}
                  </motion.span>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="px-3 py-1.5 text-xs rounded"
                    style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
                    sideOffset={6}
                  >
                    {c.name} — {c.role}
                    <Tooltip.Arrow style={{ fill: 'var(--text-primary)' }} />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            )
          })}
        </div>
      </Tooltip.Provider>
    </section>
  )
}
