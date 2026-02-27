import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Agentation } from 'agentation'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akshit Vrma',
  description: 'Product designer. Crypto and AI products.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ background: '#ffffff', margin: 0 }}>
        {children}
        <Agentation />
      </body>
    </html>
  )
}
