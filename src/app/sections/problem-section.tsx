'use client'

import { AlertTriangle, XCircle, Bell } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BlurFade } from '@/registry/magicui/blur-fade'
import { FadeInUp } from './shared'

const problems = [
  {
    icon: <AlertTriangle className="h-5 w-5 text-[#f59e0b]" />,
    tag: 'Spreadsheets',
    title: 'Your inventory lives in 12 different files',
    body: "V2_final_REAL.xlsx gets corrupted, emailed to the wrong person, or goes stale the moment someone makes a change. You never know what\u2019s actually available.",
    bg: 'bg-[#fffbeb]',
    border: 'border-[#fde68a]',
    tagColor: 'bg-[#fef3c7] text-[#92400e]',
  },
  {
    icon: <XCircle className="h-5 w-5 text-[#ef4444]" />,
    tag: 'Siloed tools',
    title: 'Booking, fleet and projects never talk to each other',
    body: 'Your team uses one app for scheduling, another for gear, another for drivers — and nothing syncs. Conflicts slip through. Clients get surprised.',
    bg: 'bg-[#fff1f2]',
    border: 'border-[#fecdd3]',
    tagColor: 'bg-[#fee2e2] text-[#991b1b]',
  },
  {
    icon: <Bell className="h-5 w-5 text-[#8b5cf6]" />,
    tag: 'Manual coordination',
    title: 'Half your day is Slack messages and phone calls',
    body: '"Is truck 3 free on Friday?" "Did the PA system get checked?" Coordinating via chat is slow, error-prone, and leaves no record anyone can trust.',
    bg: 'bg-[#faf5ff]',
    border: 'border-[#e9d5ff]',
    tagColor: 'bg-[#ede9fe] text-[#5b21b6]',
  },
]

export function ProblemSection() {
  return (
    <section className="border-t border-[#e2e8f0] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1 text-xs font-medium text-[#64748b]">
            Sound familiar?
          </span>
        </FadeInUp>
        <FadeInUp className="mb-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Running events on spreadsheets<br className="hidden sm:block" /> is costing you more than you think
          </h2>
        </FadeInUp>
        <FadeInUp className="mb-16 text-center">
          <p className="mx-auto max-w-xl text-base text-[#64748b]">
            Every missed conflict, every duplicated booking, every frantic call before showtime — they all trace back to the same root cause.
          </p>
        </FadeInUp>

        <div className="grid gap-6 sm:grid-cols-3">
          {problems.map((p, i) => (
            <BlurFade key={p.tag} delay={0.12 + i * 0.08} inView>
              <div className={cn('relative flex h-full flex-col rounded-2xl border p-6', p.bg, p.border)}>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                    {p.icon}
                  </div>
                  <span className={cn('rounded-full px-2 py-0.5 text-xs font-semibold', p.tagColor)}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#0f172a]">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[#64748b]">{p.body}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        <FadeInUp className="mt-10 text-center">
          <p className="text-sm font-medium text-[#0f172a]">
            There&apos;s a better way.{' '}
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('features')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
              }}
              className="cursor-pointer text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
            >
              See how Corely fixes this →
            </a>
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
