'use client'

import { useState } from 'react'
import { Bell, ShieldCheck, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NumberTicker } from '@/registry/magicui/number-ticker'
import { FadeInUp } from './shared'

const savingsTiers = [
  { label: 'Small', sublabel: 'Up to 5 people', hoursPerWeek: 6, conflictsPerMonth: 2, conflictCost: 180, adminCost: 240 },
  { label: 'Medium', sublabel: '6 – 15 people', hoursPerWeek: 18, conflictsPerMonth: 6, conflictCost: 520, adminCost: 680 },
  { label: 'Large', sublabel: '15+ people', hoursPerWeek: 40, conflictsPerMonth: 14, conflictCost: 1200, adminCost: 1600 },
] as const

export function CostSavingsSection() {
  const [tier, setTier] = useState(1)
  const t = savingsTiers[tier]
  const hourlyRate = 18
  const timeSavings = t.hoursPerWeek * hourlyRate * 4
  const total = timeSavings + t.conflictCost + t.adminCost

  return (
    <section className="border-t border-[#e2e8f0] bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeInUp className="mb-12 text-center">
          <p className="text-sm font-medium text-[#2563eb]">Cost savings</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            See how much you can save.
          </h2>
          <p className="mt-4 text-base text-[#64748b]">
            Switching to Corely pays for itself. Select your team size to see the estimate.
          </p>
        </FadeInUp>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex gap-1 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-1">
            {savingsTiers.map((st, i) => (
              <button
                key={st.label}
                onClick={() => setTier(i)}
                className={cn(
                  'flex cursor-pointer flex-col items-center rounded-lg px-5 py-2.5 text-center transition-colors duration-150',
                  tier === i ? 'bg-[#e2e8f0] text-[#0f172a]' : 'text-[#94a3b8] hover:text-[#64748b]',
                )}
              >
                <span className="text-sm font-semibold">{st.label}</span>
                <span className={cn('text-[11px] transition-colors duration-150', tier === i ? 'text-[#64748b]' : 'text-[#cbd5e1]')}>{st.sublabel}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-6">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb]/20">
              <Bell className="h-4 w-4 text-[#2563eb]" />
            </div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#94a3b8]">Time saved</p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-[#0f172a]">
              <NumberTicker key={t.hoursPerWeek} value={t.hoursPerWeek} />h
              <span className="text-base font-normal text-[#94a3b8]">/week</span>
            </p>
            <p className="mt-2 text-sm text-[#94a3b8]">
              ≈ <span className="font-medium text-[#64748b]">€<NumberTicker key={timeSavings} value={timeSavings} />/mo</span> in recovered labour
            </p>
          </div>

          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-6">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
            </div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#94a3b8]">Conflicts avoided</p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-[#0f172a]">
              <NumberTicker key={t.conflictsPerMonth} value={t.conflictsPerMonth} />
              <span className="text-base font-normal text-[#94a3b8]">/month</span>
            </p>
            <p className="mt-2 text-sm text-[#94a3b8]">
              ≈ <span className="font-medium text-[#64748b]">€<NumberTicker key={t.conflictCost} value={t.conflictCost} />/mo</span> in avoided losses
            </p>
          </div>

          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-6">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
              <Zap className="h-4 w-4 text-amber-400" />
            </div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#94a3b8]">Admin overhead</p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-[#0f172a]">
              €<NumberTicker key={t.adminCost} value={t.adminCost} />
              <span className="text-base font-normal text-[#94a3b8]">/mo</span>
            </p>
            <p className="mt-2 text-sm text-[#94a3b8]">
              eliminated in <span className="font-medium text-[#64748b]">manual coordination</span>
            </p>
          </div>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-xl border border-[#2563eb]/30 bg-[#f8fafc] px-6 py-5">
          <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#2563eb]" />
          <div className="flex items-center justify-between pl-2">
            <div>
              <p className="text-sm font-medium text-[#0f172a]">Estimated monthly savings</p>
              <p className="mt-0.5 text-[11px] text-[#94a3b8]">Based on industry averages for your team size</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold tabular-nums text-[#2563eb]">€<NumberTicker key={total} value={total} /></p>
              <p className="mt-0.5 text-[11px] text-[#94a3b8]">per month</p>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-[#cbd5e1]">
          Estimates based on industry averages. Actual savings vary by team and workflow.
        </p>
      </div>
    </section>
  )
}
