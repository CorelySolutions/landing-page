import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
