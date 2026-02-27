'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'

const projects = [
  { num: '01', title: 'Prompt Objects', desc: 'An AI product design exploration.', slug: 'prompt-objects' },
  { num: '02', title: 'BrandSprint', desc: 'Brand identity in 30 minutes, powered by AI.', slug: 'brandsprint' },
]

function ProjectRow({ num, title, desc, slug }: typeof projects[0]) {
  return (
    <Link href={`/work/${slug}`}>
      <motion.div
        className="group relative flex items-center gap-6 py-6 border-t cursor-pointer"
        style={{ borderColor: 'var(--border)' }}
        whileHover={{ backgroundColor: 'var(--surface)' }}
        transition={{ duration: 0.15 }}
      >
        <span className="text-sm tabular-nums w-6 shrink-0" style={{ color: 'var(--text-secondary)' }}>
          {num}
        </span>
        <div className="flex-1 min-w-0">
          <motion.span
            className="block text-base md:text-lg"
            style={{ color: 'var(--text-primary)' }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
          >
            {title}
          </motion.span>
          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{desc}</span>
        </div>
        <motion.span
          className="text-lg shrink-0"
          style={{ color: 'var(--text-secondary)' }}
          whileHover={{ x: 3, y: -3 }}
          transition={{ duration: 0.15 }}
        >
          ↗
        </motion.span>
      </motion.div>
    </Link>
  )
}

export default function Projects() {
  return (
    <section className="px-6 md:px-12 py-16">
      <p className="text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--text-secondary)' }}>
        Work
      </p>
      <AnimatedGroup>
        {projects.map((p) => (
          <ProjectRow key={p.slug} {...p} />
        ))}
      </AnimatedGroup>
      <div className="border-t" style={{ borderColor: 'var(--border)' }} />
    </section>
  )
}
