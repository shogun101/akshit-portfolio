'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedGroupProps {
  children: ReactNode
  className?: string
}

export function AnimatedGroup({ children, className }: AnimatedGroupProps) {
  const items = Array.isArray(children) ? children : [children]
  return (
    <div className={className}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
