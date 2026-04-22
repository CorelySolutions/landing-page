'use client'

import { Quote, Star } from 'lucide-react'
import { BlurFade } from '@/registry/magicui/blur-fade'
import { FadeInUp } from './shared'

const testimonials = [
  {
    quote: "We went from 3 spreadsheets and constant phone calls to having everything in one place. The team actually uses it.",
    name: 'Ricardo Ferreira', role: 'Operations Director', company: 'Construção Atlântica', initials: 'RF',
  },
  {
    quote: "The inventory conflict detection alone saved us from a project delay that would have cost €8,000. It paid for itself on day one.",
    name: 'Ana Sousa', role: 'Project Manager', company: 'TechField Services', initials: 'AS',
  },
  {
    quote: "We gave warehouse access to the logistics team and field access to drivers. Setup took less than an hour. No training needed.",
    name: 'Miguel Costa', role: 'Fleet & Logistics Manager', company: 'Logística Norte', initials: 'MC',
  },
]

export function TestimonialsSection() {
  return (
    <section className="border-t border-[#e2e8f0] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-14 text-center">
          <p className="text-sm font-medium text-[#2563eb]">What teams say</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Built for people who run operations.
          </h2>
        </FadeInUp>

        <div className="grid gap-5 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <BlurFade key={t.name} delay={i * 0.1} inView>
              <div className="flex h-full flex-col justify-between rounded-xl border border-[#e2e8f0] bg-white p-6 transition-all duration-200 hover:border-[#cbd5e1] hover:shadow-md hover:shadow-slate-200/80">
                <div>
                  <div className="mb-4 flex gap-0.5">
                    {Array(5).fill(0).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <Quote className="mb-3 h-5 w-5 text-[#1e40af]/60" />
                  <p className="text-sm leading-relaxed text-[#64748b]">{t.quote}</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563eb]/20 text-xs font-bold text-[#2563eb]">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">{t.name}</p>
                    <p className="text-xs text-[#94a3b8]">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
