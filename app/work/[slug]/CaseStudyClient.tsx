'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

function InView({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function CaseStudyClient({ slug }: { slug: string }) {
  const title = slug.replace(/-/g, ' ')
  return (
    <div className="min-h-screen w-full flex justify-center bg-white selection:bg-gray-100 selection:text-black">
      <div className="w-full max-w-[640px] px-6 py-12 md:py-[64px] pb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="pt-4"
        >
          <Link
            href="/"
            className="mb-8 text-[#737373] hover:text-[#111111] transition-colors flex items-center gap-2 text-sm group"
            style={{ display: 'inline-flex' }}
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            {' '}Back
          </Link>

          <h1 className="text-xl md:text-2xl font-medium text-[#111111] mb-2 capitalize mt-8">
            {title}
          </h1>
          <p className="text-[#737373] text-base mb-12">Product Design, Strategy</p>

          <InView delay={0.2}>
            <div className="w-full h-64 bg-gray-50 border border-[#E5E5E5] rounded flex items-center justify-center text-[#737373] mb-8 text-sm">
              Case study coming soon.
            </div>
          </InView>

          <InView delay={0.3}>
            <div className="space-y-4 text-[#111111] leading-relaxed text-[15px]">
              <p>This is a placeholder for the case study content. The request specified that the content area should just be placeholder text for now.</p>
              <div className="h-4 bg-gray-50 rounded w-3/4"></div>
              <div className="h-4 bg-gray-50 rounded w-full"></div>
              <div className="h-4 bg-gray-50 rounded w-5/6"></div>
            </div>
          </InView>
        </motion.div>
      </div>
    </div>
  )
}
