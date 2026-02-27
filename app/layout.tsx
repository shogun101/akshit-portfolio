import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Agentation } from 'agentation'
import PageTransition from './components/PageTransition'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akshit Vrma — Product Designer',
  description: 'Product designer specialising in crypto and AI products. Open to full-time roles.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <PageTransition>
          {children}
        </PageTransition>
        <Agentation />
      </body>
    </html>
  )
}
