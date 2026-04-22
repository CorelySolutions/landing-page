'use client'

import { CheckCircle2 } from 'lucide-react'
import { FadeInUp } from './shared'

const included = [
  'Unlimited inventory',
  'Full fleet management',
  'Projects and picking lists',
  'Customisable Kanban boards',
  'Reports and analytics',
  'Automatic alerts and conflict detection',
  'Team management with roles',
  'Dedicated support',
]

export function ChecklistSection() {
  return (
    <section className="border-t border-[#e2e8f0] bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
          <FadeInUp className="flex-1">
            <p className="text-sm font-medium text-[#2563eb]">Everything included</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a]">
              No extra modules. No surprises.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#64748b]">
              A single subscription with access to every feature. Your team never pays more to grow.
            </p>
          </FadeInUp>
          <div className="w-full flex-1">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-[#64748b]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
