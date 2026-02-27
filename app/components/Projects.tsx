'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { InView } from '@/components/motion-primitives/in-view'

const projects = [
  { num: '01', title: 'Prompt Objects', desc: 'An AI product design exploration.', slug: 'prompt-objects' },
  { num: '02', title: 'BrandSprint', desc: 'Brand identity in 30 minutes, powered by AI.', slug: 'brandsprint' },
]

function ProjectRow({ num, title, desc, slug, index }: typeof projects[0] & { index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      viewOptions={{ margin: '0px 0px -40px 0px' }}
    >
      <Link href={`/work/${slug}`}>
        <motion.div
          className="flex items-center gap-6 py-7 border-t relative overflow-hidden"
          style={{ borderColor: 'var(--border)' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* bg wash */}
          <motion.div
            className="absolute inset-0 -z-0"
            style={{ background: 'var(--surface)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />

          <span className="text-sm tabular-nums w-8 shrink-0 relative z-10" style={{ color: 'var(--text-secondary)' }}>
            {num}
          </span>

          <div className="flex-1 min-w-0 relative z-10">
            <motion.span
              className="block text-lg md:text-xl"
              style={{ color: 'var(--text-primary)', fontWeight: 450 }}
              animate={{ x: hovered ? 6 : 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {title}
            </motion.span>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{desc}</span>
          </div>

          <motion.span
            className="text-xl shrink-0 relative z-10"
            style={{ color: 'var(--text-secondary)' }}
            animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            ↗
          </motion.span>
        </motion.div>
      </Link>
    </InView>
  )
}

export default function Projects() {
  return (
    <section className="px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-5xl">
        <p className="text-xs uppercase tracking-[0.15em] mb-10" style={{ color: 'var(--text-secondary)' }}>
          Work
        </p>
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} {...p} index={i} />
        ))}
        <div className="border-t" style={{ borderColor: 'var(--border)' }} />
      </div>
    </section>
  )
}
