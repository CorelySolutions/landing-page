'use client'

import { Marquee } from '@/registry/magicui/marquee'

const logos = [
  'Construction',
  'Logistics & Fleet',
  'Utilities',
  'Project Management',
  'Facility Management',
  'Field Services',
  'Telecommunications',
  'Energy & Environment',
]

export function LogoStripSection() {
  return (
    <div className="border-t border-[#e2e8f0] bg-white py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-[#cbd5e1]">
        Trusted by teams across
      </p>
      <Marquee pauseOnHover repeat={3} className="[--duration:30s] [--gap:2rem]">
        {logos.map((logo) => (
          <div
            key={logo}
            className="flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-5 py-2"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            <span className="whitespace-nowrap text-xs font-medium text-[#94a3b8]">{logo}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
