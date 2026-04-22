'use client'

import { Globe, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'
import { BorderBeam } from '@/registry/magicui/border-beam'
import { Ripple } from '@/registry/magicui/ripple'
import { FadeInUp } from './shared'
import { WaitlistForm } from './waitlist-form'

export function CTASection() {
  return (
    <section id="waitlist" className="border-t border-[#e2e8f0] bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-[#2563eb]/20 bg-white px-8 py-16 text-center shadow-xl shadow-slate-200/80 sm:px-16">
          <BorderBeam size={400} duration={18} colorFrom="#3b82f6" colorTo="#a78bfa" borderWidth={1.5} />
          <Ripple mainCircleSize={120} numCircles={7} />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[180px] w-[360px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(ellipse at center, #3b82f6 0%, transparent 70%)' }}
          />
          <FadeInUp className="relative">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb] shadow-lg shadow-[#2563eb]/30">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Ready to organise your operation?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#64748b]">
              Start today. No credit card required. Support team available for onboarding.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#94a3b8]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                SOC 2 compliant
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                GDPR ready
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-[#2563eb]" />
                Setup in &lt;24 h
              </span>
            </div>
            <div className="mt-10 text-left">
              <WaitlistForm />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
