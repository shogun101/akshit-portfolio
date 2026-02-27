'use client'
import Link from 'next/link'
import { InView } from '@/components/motion-primitives/in-view'

const projects: Record<string, { title: string; oneliner: string }> = {
  'prompt-objects': {
    title: 'Prompt Objects',
    oneliner: 'An AI product design exploration.',
  },
  brandsprint: {
    title: 'BrandSprint',
    oneliner: 'Brand identity in 30 minutes, powered by AI.',
  },
}

function PlaceholderImage() {
  return (
    <InView
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div
        className="w-full aspect-video rounded-sm"
        style={{ background: 'var(--surface)' }}
      />
    </InView>
  )
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects[params.slug] ?? { title: params.slug, oneliner: '' }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-sm transition-opacity hover:opacity-60 inline-block mb-12"
        style={{ color: 'var(--text-secondary)' }}
      >
        ← Back
      </Link>

      <h1 className="text-4xl md:text-6xl tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
        {project.title}
      </h1>
      <p className="text-lg mb-16" style={{ color: 'var(--text-secondary)' }}>
        {project.oneliner}
      </p>

      <PlaceholderImage />

      <div className="mt-16 space-y-16">
        {['Problem', 'Process', 'Outcome'].map((section) => (
          <section key={section}>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>
              {section}
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              [Placeholder — Akshit to fill in]
            </p>
            {section === 'Process' && (
              <div className="mt-8">
                <PlaceholderImage />
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return [{ slug: 'prompt-objects' }, { slug: 'brandsprint' }]
}
