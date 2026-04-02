import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Corely — One platform. Full infrastructure control.',
  description:
    'Corely helps live event production companies manage AV inventory, fleet, projects and teams — all in one place. No more spreadsheets.',
  openGraph: {
    title: 'Corely — One platform. Full infrastructure control.',
    description:
      'Manage AV inventory, fleet, projects and teams. Built for live event companies.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>{children}</body>
    </html>
  )
}
