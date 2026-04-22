'use client'

import { StatItem } from './shared'

const stats = [
  { value: '< 2 min', label: 'To set up your first project' },
  { value: '8', label: 'Core modules at launch' },
  { value: '3', label: 'Role-based access levels' },
  { value: 'Free', label: 'During early access' },
]

export function StatsSection() {
  return (
    <section className="border-t border-[#e2e8f0] bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-px bg-[#e2e8f0] overflow-hidden rounded-xl sm:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              value={s.value}
              label={s.label}
              delayClass={['delay-0', 'delay-100', 'delay-200', 'delay-300'][i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
