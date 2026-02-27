'use client'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { InView } from '@/components/motion-primitives/in-view'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import LiveClock from './LiveClock'
import LogoBox from './LogoBox'
import Link from 'next/link'
import { useState } from 'react'

const experiments = [
  { year: '2025', name: 'Prompt Archive', date: 'Jan 2026', slug: 'prompt-archive' },
  { year: null,   name: 'BrandSprint',   date: 'Feb 2026', slug: 'brandsprint' },
  { year: null,   name: 'Gloww',         date: 'Jan – Dec 2025', slug: 'gloww' },
]

const logos = [
  { name: 'Coinbase' },
  { name: 'Velar' },
  { name: 'Instadapp' },
  { name: 'Degen DAO' },
  { name: 'more', tooltip: 'Emerge · Splat · Osiris · Fere', italic: true },
]

function ExperimentRow({ year, name, date, slug }: typeof experiments[0]) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link href={`/work/${slug}`} className="block">
      <div
        className="grid items-center transition-colors duration-150"
        style={{
          gridTemplateColumns: '48px 1fr auto',
          height: '36px',
          background: hovered ? '#F4F4F3' : 'transparent',
          cursor: 'pointer',
          paddingLeft: '4px',
          paddingRight: '4px',
          borderRadius: '3px',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span style={{ fontSize: '13px', color: '#6B6B6B', fontWeight: 450 }}>
          {year ?? ''}
        </span>
        <span
          className="flex items-center gap-1.5 transition-transform duration-150"
          style={{
            fontSize: '15px',
            color: '#0A0A0A',
            fontWeight: 450,
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          }}
        >
          {name}
          <span
            style={{
              opacity: hovered ? 1 : 0,
              transition: 'opacity 150ms ease',
              fontSize: '13px',
              color: '#6B6B6B',
            }}
          >
            ↗
          </span>
        </span>
        <span style={{ fontSize: '13px', color: '#6B6B6B', fontWeight: 450, textAlign: 'right' }}>
          {date}
        </span>
      </div>
    </Link>
  )
}

export default function HomePage() {
  return (
    <main style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 40px 80px 40px' }}>

      {/* Meta row */}
      <div className="flex items-center justify-between" style={{ marginBottom: '48px' }}>
        <span style={{ fontSize: '13px', color: '#6B6B6B', fontWeight: 450 }}>
          Updated Feb 27, 2026
        </span>
        <span style={{ fontSize: '13px', color: '#6B6B6B', fontWeight: 450 }}>
          New Delhi · <LiveClock /> IST
        </span>
      </div>

      {/* Name */}
      <div style={{ marginBottom: '32px' }}>
        <TextEffect
          as="h1"
          preset="blur"
          style={{ fontSize: '44px', color: '#0A0A0A', fontWeight: 450, lineHeight: 1.1, letterSpacing: '-0.02em' }}
        >
          Akshit Vrma
        </TextEffect>
      </div>

      {/* About — no label */}
      <InView
        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        viewOptions={{ margin: '0px 0px -40px 0px' }}
      >
        <p style={{ fontSize: '15px', color: '#0A0A0A', fontWeight: 450, lineHeight: 1.65, marginBottom: '48px' }}>
          I design interfaces with care and document them on my Twitter. Last year I ran Gloww, helping teams building on Base and Solana, crafting interfaces for video gen workflows, perp DEXs, trading extensions, and almost everything in between. I&apos;m probably tinkering with my agent right now. If you want to get in touch, DM me on{' '}
          <a href="#" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>Telegram</a>
          , or if you&apos;re an SSO connoisseur,{' '}
          <a href="mailto:akshit@gloww.design" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>akshit@gloww.design</a>.
        </p>
      </InView>

      {/* Experiments */}
      <InView
        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        viewOptions={{ margin: '0px 0px -40px 0px' }}
      >
        <div style={{ marginBottom: '48px' }}>
          <span style={{ fontSize: '13px', color: '#6B6B6B', fontWeight: 450, display: 'block', marginBottom: '12px' }}>
            Experiments
          </span>
          <AnimatedGroup>
            {experiments.map((e) => (
              <ExperimentRow key={e.name} {...e} />
            ))}
          </AnimatedGroup>
        </div>
      </InView>

      {/* Collaborated with */}
      <InView
        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        viewOptions={{ margin: '0px 0px -40px 0px' }}
      >
        <div style={{ marginBottom: '48px' }}>
          <div className="flex items-center justify-between" style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', color: '#6B6B6B', fontWeight: 450 }}>Collaborated with</span>
            <span style={{ fontSize: '13px', color: '#6B6B6B', fontWeight: 450 }}>2021 – 2025</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {logos.map((l) => (
              <LogoBox key={l.name} {...l} />
            ))}
          </div>
        </div>
      </InView>

      {/* Footer — just links */}
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <a
          href="https://x.com/akshitvrma"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ fontSize: '14px', color: '#6B6B6B', fontWeight: 450, textUnderlineOffset: '3px' }}
        >
          x.com/akshitvrma
        </a>
        <span style={{ fontSize: '14px', color: '#6B6B6B' }}>·</span>
        <a
          href="mailto:akshit@gloww.design"
          className="hover:underline"
          style={{ fontSize: '14px', color: '#6B6B6B', fontWeight: 450, textUnderlineOffset: '3px' }}
        >
          akshit@gloww.design
        </a>
      </div>

    </main>
  )
}
