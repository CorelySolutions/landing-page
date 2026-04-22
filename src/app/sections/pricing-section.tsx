'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, Check, Minus, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { BorderBeam } from '@/registry/magicui/border-beam'
import { AnimatedGradientText } from '@/registry/magicui/animated-gradient-text'
import { FadeInUp } from './shared'

const plans = [
  {
    name: 'Starter', price: '49',
    description: 'For small teams getting started with event operations.',
    features: ['Up to 3 team members', '500 inventory items', '10 active projects', 'Fleet management (5 vehicles)', 'Basic reports', 'Email support'],
    cta: 'Get started', highlighted: false,
  },
  {
    name: 'Pro', price: '129',
    description: 'For growing companies that need full operational control.',
    features: ['Up to 15 team members', 'Unlimited inventory', 'Unlimited projects', 'Fleet management (unlimited)', 'Advanced reports & analytics', 'Kanban boards', 'Conflict detection & alerts', 'Priority support'],
    cta: 'Get started', highlighted: true,
  },
  {
    name: 'Enterprise', price: 'Custom',
    description: 'For large organisations with complex workflows.',
    features: ['Unlimited team members', 'Unlimited everything', 'Custom roles & permissions', 'Dedicated onboarding', 'SLA & uptime guarantee', 'Custom integrations', 'Dedicated account manager'],
    cta: 'Talk to us', highlighted: false,
  },
]

const comparisonSections = [
  {
    title: 'Team',
    rows: [
      { feature: 'Team members', starter: '3', pro: '15', enterprise: 'Unlimited' },
      { feature: 'Admin roles', starter: 'Basic', pro: 'Basic', enterprise: 'Custom' },
      { feature: 'Role-based access', starter: true, pro: true, enterprise: true },
      { feature: 'Custom permissions', starter: false, pro: false, enterprise: true },
      { feature: 'Single Sign-On (SSO)', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    title: 'Inventory',
    rows: [
      { feature: 'Inventory items', starter: '500', pro: 'Unlimited', enterprise: 'Unlimited' },
      { feature: 'Scan in / scan out', starter: true, pro: true, enterprise: true },
      { feature: 'Conflict detection', starter: false, pro: true, enterprise: true },
      { feature: 'Expiry & document alerts', starter: false, pro: true, enterprise: true },
    ],
  },
  {
    title: 'Projects',
    rows: [
      { feature: 'Active projects', starter: '10', pro: 'Unlimited', enterprise: 'Unlimited' },
      { feature: 'Picking lists', starter: true, pro: true, enterprise: true },
      { feature: 'Kanban boards', starter: false, pro: true, enterprise: true },
      { feature: 'Equipment auto-assign', starter: false, pro: true, enterprise: true },
    ],
  },
  {
    title: 'Fleet',
    rows: [
      { feature: 'Vehicles', starter: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
      { feature: 'Driver management', starter: true, pro: true, enterprise: true },
      { feature: 'Document expiry alerts', starter: false, pro: true, enterprise: true },
      { feature: 'Route assignments', starter: true, pro: true, enterprise: true },
    ],
  },
  {
    title: 'Reports & Analytics',
    rows: [
      { feature: 'Basic analytics', starter: true, pro: true, enterprise: true },
      { feature: 'Advanced analytics', starter: false, pro: true, enterprise: true },
      { feature: 'Revenue per project', starter: false, pro: true, enterprise: true },
      { feature: 'Custom dashboards', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    title: 'Support',
    rows: [
      { feature: 'Email support', starter: true, pro: true, enterprise: true },
      { feature: 'Priority support', starter: false, pro: true, enterprise: true },
      { feature: 'Dedicated onboarding', starter: false, pro: false, enterprise: true },
      { feature: 'Dedicated account manager', starter: false, pro: false, enterprise: true },
      { feature: 'SLA & uptime guarantee', starter: false, pro: false, enterprise: true },
      { feature: 'Custom integrations', starter: false, pro: false, enterprise: true },
    ],
  },
]

function CellValue({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  if (value === true)
    return <span className="inline-flex items-center justify-center"><Check className={cn('h-4 w-4', highlight ? 'text-[#2563eb]' : 'text-emerald-400')} strokeWidth={2.5} /></span>
  if (value === false)
    return <span className="inline-flex items-center justify-center"><Minus className="h-4 w-4 text-[#2a3a4a]" strokeWidth={2} /></span>
  return <span className={cn('text-sm font-medium tabular-nums', highlight ? 'text-[#2563eb]' : 'text-[#64748b]')}>{value}</span>
}

function PricingComparison() {
  const [open, setOpen] = useState(false)
  const planNames = ['Starter', 'Pro', 'Enterprise']
  const proIndex = 1

  return (
    <div className="mt-10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="mx-auto flex items-center gap-2 text-sm text-black font-bold hover:text-[#64748b] transition-colors duration-150"
        aria-expanded={open}
      >
        {open ? 'Hide feature comparison' : 'Compare all features'}
        <ChevronRight className={cn('h-4 w-4 transition-transform duration-200', open && 'rotate-90')} />
      </button>

      {open && (
        <div className="mt-8 overflow-x-auto rounded-xl border border-[#e2e8f0]">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#e2e8f0]">
                <th className="px-4 py-3.5 text-left text-xs font-medium text-[#94a3b8] w-[40%]">Feature</th>
                {planNames.map((p, i) => (
                  <th key={p} className={cn('px-4 py-3.5 text-center text-xs font-semibold w-[20%]', i === proIndex ? 'text-[#2563eb] bg-[#2563eb]/10' : 'text-[#94a3b8]')}>
                    <span className="flex flex-col items-center gap-1">
                      {p}
                      {i === proIndex && (
                        <span className="rounded-full bg-[#2563eb]/30 px-2 py-0.5 text-[10px] font-semibold text-[#60a5fa]">Popular</span>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonSections.map((section, si) => (
                <React.Fragment key={section.title}>
                  <tr className={cn(si > 0 && 'border-t border-[#e2e8f0]')}>
                    <td colSpan={4} className="px-4 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">{section.title}</td>
                  </tr>
                  {section.rows.map((row, ri) => (
                    <tr key={row.feature} className={cn('group transition-colors duration-100', ri < section.rows.length - 1 && 'border-b border-[#e2e8f0]/40', 'hover:bg-slate-50')}>
                      <td className="px-4 py-3 text-sm text-[#64748b] group-hover:text-[#cbd5e1] transition-colors duration-100">{row.feature}</td>
                      <td className="px-4 py-3 text-center"><CellValue value={row.starter} /></td>
                      <td className="px-4 py-3 text-center bg-[#2563eb]/[0.06]"><CellValue value={row.pro} highlight /></td>
                      <td className="px-4 py-3 text-center"><CellValue value={row.enterprise} /></td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="border-t border-[#e2e8f0] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-14 text-center">
          <p className="text-sm font-medium text-[#2563eb]">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Choose the right plan for your team.
          </h2>
          <p className="mt-4 text-base text-[#64748b]">No hidden fees. Cancel anytime.</p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-[#e2e8f0] bg-white p-1">
            <button
              onClick={() => setAnnual(false)}
              className={cn('rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150', !annual ? 'bg-[#e2e8f0] text-[#0f172a]' : 'text-[#94a3b8] hover:text-[#64748b]')}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn('flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150', annual ? 'bg-[#e2e8f0] text-[#0f172a]' : 'text-[#94a3b8] hover:text-[#64748b]')}
            >
              Annually
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">-25%</span>
            </button>
          </div>
        </FadeInUp>

        <div className="grid gap-4 sm:grid-cols-3">
          {plans.map((plan) => {
            const displayPrice = plan.price === 'Custom' ? 'Custom' : annual ? String(Math.round(Number(plan.price) * 0.75)) : plan.price
            return (
              <div
                key={plan.name}
                className={cn(
                  'relative flex flex-col rounded-xl border p-6 transition-all duration-200',
                  plan.highlighted
                    ? 'border-[#2563eb]/60 bg-white ring-1 ring-[#2563eb]/20 shadow-lg shadow-[#2563eb]/10'
                    : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1] hover:shadow-md hover:shadow-slate-200/80',
                )}
              >
                {plan.highlighted && (
                  <>
                    <BorderBeam size={250} duration={10} colorFrom="#3b82f6" colorTo="#a78bfa" borderWidth={1.5} />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full border border-[#2563eb]/40 bg-white px-3 py-1 text-[11px] font-semibold">
                        <AnimatedGradientText>Most popular</AnimatedGradientText>
                      </span>
                    </div>
                  </>
                )}

                <div className="mb-6">
                  <p className="text-sm font-semibold text-[#0f172a]">{plan.name}</p>
                  <div className="mt-3 flex items-end gap-1">
                    {displayPrice === 'Custom' ? (
                      <span className="text-3xl font-bold text-[#0f172a]">Custom</span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold tabular-nums text-[#0f172a]">€{displayPrice}</span>
                        <span className="mb-1 text-sm text-[#64748b]">/month</span>
                      </>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-[#64748b]">{plan.description}</p>
                </div>

                <ul className="mb-8 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#64748b]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={cn(
                    'transition-colors duration-150',
                    plan.highlighted
                      ? 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white border-0'
                      : 'bg-transparent border border-[#e2e8f0] text-[#64748b] hover:border-[#cbd5e1] hover:text-[#0f172a] hover:bg-slate-100',
                  )}
                >
                  <Link href={plan.price === 'Custom' ? 'mailto:hello@corely.pt' : '/signup'}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>

        <PricingComparison />
      </div>
    </section>
  )
}
