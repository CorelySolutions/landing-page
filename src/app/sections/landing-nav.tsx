'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#waitlist' },
]

export function LandingNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 12) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-50% 0px -45% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const offset = 64
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'border-b border-[#e2e8f0] bg-white/95 backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 opacity-90 transition-opacity duration-150 hover:opacity-100"
        >
          <Image src="/CoreLogonoBG.png" alt="Corely" width={36} height={36} className="rounded-lg" />
          <span className="text-sm font-semibold text-[#0f172a]">Corely</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => {
            const id = l.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className={`relative text-sm transition-colors duration-150 ${
                  isActive ? 'text-[#0f172a]' : 'text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute -bottom-[18px] left-0 right-0 h-px bg-[#3b82f6]" />
                )}
              </a>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="h-4 w-px bg-[#e2e8f0]" />
          <a
            href="#waitlist"
            onClick={(e) => scrollTo(e, '#waitlist')}
            className="inline-flex h-8 items-center justify-center rounded-lg bg-[#2563eb] px-4 text-xs font-semibold text-white ring-1 ring-[#2563eb]/25 transition-colors duration-150 hover:bg-[#1d4ed8] hover:ring-[#2563eb]/40"
          >
            Join waitlist
          </a>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-2 text-[#64748b] transition-colors hover:text-[#0f172a] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-[#e2e8f0] bg-white px-6 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {links.map((l) => {
              const id = l.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-[#0f172a]'
                      : 'text-[#64748b] hover:bg-slate-100 hover:text-[#0f172a]'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="#waitlist"
              onClick={(e) => scrollTo(e, '#waitlist')}
              className="flex h-9 items-center justify-center rounded-lg bg-[#2563eb] text-sm font-semibold text-white ring-1 ring-[#2563eb]/25 transition-colors duration-150 hover:bg-[#1d4ed8]"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
