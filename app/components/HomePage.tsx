'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

// TextEffect — exact from HTML
function TextEffect({ text, className }: { text: string; className?: string }) {
  const letters = text.split('')
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  }
  const child = {
    visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { type: 'spring' as const, damping: 12, stiffness: 100 } },
    hidden:  { opacity: 0, filter: 'blur(10px)', y: 5 },
  }
  return (
    <motion.h1 className={className} variants={container} initial="hidden" animate="visible">
      {letters.map((l, i) => (
        <motion.span variants={child} key={i}>{l === ' ' ? '\u00A0' : l}</motion.span>
      ))}
    </motion.h1>
  )
}

// InView — exact from HTML
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

// Clock — exact from HTML
function Clock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const updateTime = () => {
      const timeString = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date())
      setTime(`New Delhi · ${timeString} IST`)
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])
  return <span>{time}</span>
}

// Experiments — exact from HTML
const experimentsData = [
  { year: '2025', name: 'Prompt Archive', date: 'Jan 2026',        slug: 'prompt-archive' },
  { year: '',     name: 'BrandSprint',   date: 'Feb 2026',         slug: 'brandsprint' },
  { year: '',     name: 'Gloww',         date: 'Jan – Dec 2025',   slug: 'gloww' },
]

function ExperimentRow({ item }: { item: typeof experimentsData[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <motion.div
      className="group cursor-pointer border-b border-[#E5E5E5] last:border-0"
      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[80px_1fr_auto] items-center py-3 text-[14px]">
          <div className="text-[#737373] tabular-nums">{item.year}</div>
          <div className="flex items-center transition-colors duration-150 ease-out">
            <motion.span className="text-[#111111] font-normal">{item.name}</motion.span>
            <motion.span
              className="ml-2 text-[#737373] text-xs"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -5 }}
            >↗</motion.span>
          </div>
          <div className="text-[#737373] text-right tabular-nums">{item.date}</div>
        </div>
        {/* Mobile */}
        <div className="md:hidden py-3">
          <div className="text-[15px] text-[#111111] mb-1 flex items-center justify-between font-medium">
            {item.name}
            <span className="text-[#737373] text-xs">↗</span>
          </div>
          <div className="flex justify-between text-[13px] text-[#737373]">
            <span>{item.year}</span>
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Experiments() {
  return (
    <div className="mb-12 mt-12">
      <div className="text-[13px] text-[#737373] mb-4 border-b border-transparent">Experiments</div>
      <motion.div
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {experimentsData.map((item, i) => (
          <ExperimentRow key={i} item={item} />
        ))}
      </motion.div>
    </div>
  )
}

// Collaborations — exact from HTML
const collabItems = [
  { id: 1, name: 'Coinbase',   type: 'logo', tooltip: undefined },
  { id: 2, name: 'Velar',      type: 'logo', tooltip: undefined },
  { id: 3, name: 'Instadapp',  type: 'logo', tooltip: undefined },
  { id: 4, name: 'Degen DAO',  type: 'logo', tooltip: undefined },
  { id: 5, name: 'more',       type: 'text', tooltip: 'Emerge · Splat · Osiris · Fere' },
]

function LogoBox({
  item, index, hoveredIndex, setHoveredIndex,
}: {
  item: typeof collabItems[0]
  index: number
  hoveredIndex: number | null
  setHoveredIndex: (i: number | null) => void
}) {
  const isHovered = hoveredIndex === index
  const isAnyHovered = hoveredIndex !== null
  const isDimmed = isAnyHovered && !isHovered
  return (
    <div className="relative group">
      <motion.div
        className="w-full md:w-auto md:px-4 h-[40px] md:h-[48px] border rounded flex items-center justify-center cursor-default bg-white relative z-10 transition-colors"
        style={{ borderColor: isHovered ? '#111' : '#E5E5E5' }}
        initial={false}
        animate={{ opacity: isDimmed ? 0.4 : 1 }}
        transition={{ duration: 0.15 }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {item.type === 'logo' ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[13px] font-medium text-[#111111]">{item.name}</span>
          </div>
        ) : (
          <span className="text-[13px] text-[#737373] italic px-2">more</span>
        )}
      </motion.div>
      <AnimatePresence>
        {isHovered && item.tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 5, x: '-50%' }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 bottom-full mb-2 whitespace-nowrap px-3 py-1.5 bg-black text-white text-[12px] rounded shadow-lg z-20 pointer-events-none"
          >
            {item.tooltip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Collaborations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <div className="mb-12">
      <div className="flex justify-between items-baseline mb-4">
        <span className="text-[13px] text-[#737373]">Collaborated with</span>
        <span className="text-[13px] text-[#737373]">2021 – 2025</span>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3">
        {collabItems.map((item, index) => (
          <LogoBox key={item.id} item={item} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex justify-center bg-white selection:bg-gray-100 selection:text-black">
      <div className="w-full max-w-[640px] px-6 py-12 md:py-[64px] pb-20">
        <div className="flex flex-col">

          {/* Name */}
          <div className="order-1 mb-1">
            <TextEffect
              text="Akshit Vrma"
              className="text-[15px] font-semibold text-[#111111] font-sans leading-tight tracking-normal"
            />
          </div>

          {/* Updated date */}
          <div className="order-2 flex flex-col items-start text-[13px] text-[#737373] mb-10 gap-1 leading-snug">
            <span>Updated Feb 27, 2026</span>
          </div>

          {/* Content */}
          <div className="order-3">

            {/* Bio */}
            <InView delay={0.2}>
              <div className="mb-8 text-[15px] leading-[1.6] text-[#111111] space-y-4">
                <p>
                  I design interfaces with care and document them on my{' '}
                  <a href="https://x.com/akshitvrma" target="_blank" rel="noopener noreferrer"
                    className="underline decoration-1 underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-colors">
                    Twitter
                  </a>.
                </p>
                <p>
                  Last year I ran Gloww, helping teams building on Base and Solana, crafting interfaces for video gen workflows, perp DEXs, trading extensions, and almost everything in between.
                </p>
                <p>
                  I&apos;m probably tinkering with my agent right now. If you want to get in touch, DM me on{' '}
                  <a href="#"
                    className="underline decoration-1 underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-colors">
                    Telegram
                  </a>
                  , or if you&apos;re an SSO connoisseur,{' '}
                  <a href="mailto:akshit@gloww.design"
                    className="underline decoration-1 underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-colors">
                    akshit@gloww.design
                  </a>.
                </p>
              </div>
            </InView>

            {/* Experiments */}
            <Experiments />

            {/* Collaborations */}
            <InView delay={0.1}>
              <Collaborations />
            </InView>

            {/* Footer */}
            <InView delay={0.2}>
              <div className="mt-20 pt-8 border-t border-transparent text-[13px] text-[#737373] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <a href="https://x.com/akshitvrma" target="_blank" rel="noopener noreferrer"
                    className="hover:text-[#111111] transition-colors">x.com/akshitvrma</a>
                  <span className="opacity-30">/</span>
                  <a href="mailto:akshit@gloww.design"
                    className="hover:text-[#111111] transition-colors">akshit@gloww.design</a>
                </div>
                <div className="opacity-60 flex items-center gap-2">
                  <Clock />
                  <span className="text-lg leading-none pb-1">☺</span>
                </div>
              </div>
            </InView>

          </div>
        </div>
      </div>
    </div>
  )
}
