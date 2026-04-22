'use client'

import { BlurFade } from '@/registry/magicui/blur-fade'
import { FadeInUp } from './shared'

const steps = [
  { num: '01', title: 'Set up your organisation', description: 'Register your team, define roles and import your existing inventory in minutes.' },
  { num: '02', title: 'Create projects and assign resources', description: 'Add projects, select equipment and assign drivers and vehicles.' },
  { num: '03', title: 'Monitor in real time', description: 'Real-time dashboard with alerts, team activity and the status of every project.' },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-[#e2e8f0] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-14 text-center">
          <p className="text-sm font-medium text-[#2563eb]">How it works</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Up and running in less than a day
          </h2>
        </FadeInUp>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <BlurFade key={s.num} delay={i * 0.12} inView>
              <div className="relative">
                {i < steps.length - 1 && (
                  <div aria-hidden className="absolute left-[calc(50%+1.5rem)] top-5 hidden h-px w-[calc(100%-3rem)] bg-[#e2e8f0] sm:block" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb] text-sm font-bold tabular-nums text-white shadow-md shadow-[#2563eb]/30">
                    <span aria-hidden className="pointer-events-none absolute text-7xl font-black text-white/[0.06] select-none">{s.num}</span>
                    {s.num}
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-[#0f172a]">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#64748b]">{s.description}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
