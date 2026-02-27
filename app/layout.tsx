import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Akshit Vrma — Product Designer',
  description: 'Product designer specialising in crypto and AI products.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`} style={{ fontWeight: 450 }}>
        {children}
      </body>
    </html>
  )
}
