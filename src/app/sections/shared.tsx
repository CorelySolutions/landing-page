'use client'

import { useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { NumberTicker } from '@/registry/magicui/number-ticker'

export function useFadeInUp() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

export function FadeInUp({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useFadeInUp()
  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function StatItem({ value, label, delayClass }: { value: string; label: string; delayClass?: string }) {
  const { ref, inView } = useFadeInUp()
  return (
    <div
      ref={ref}
      className={cn(
        'group bg-white px-8 py-10 text-center transition-all duration-700 ease-out hover:bg-[#f8fafc]',
        delayClass,
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
      )}
    >
      <p className="text-3xl font-extrabold tabular-nums text-[#0f172a] sm:text-4xl">
        {/^\d+$/.test(value) ? <NumberTicker value={Number(value)} /> : value}
      </p>
      <p className="mt-1.5 text-xs font-medium text-[#94a3b8] uppercase tracking-wide">{label}</p>
    </div>
  )
}
