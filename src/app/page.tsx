'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect, useRef, forwardRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Package,
  Menu,
  X,
  Truck,
  FolderKanban,
  Users,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Boxes,
  Zap,
  Globe,
  Brain,
  LayoutDashboard,
  Columns3,
  AlertTriangle,
  XCircle,
  Bell,
  Sun,
  ChevronRight,
  Ticket,
  Container,
  Bot,
  ClipboardList,
  Check,
  Minus,
  ArrowUp,
  Quote,
  Star,
  Inbox,
  Trash2,
  Send,
  Settings2,
  Activity,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedBeam } from '@/registry/magicui/animated-beam'
import { NumberTicker } from '@/registry/magicui/number-ticker'
import { Marquee } from '@/registry/magicui/marquee'
import { BorderBeam } from '@/registry/magicui/border-beam'
import { Meteors } from '@/registry/magicui/meteors'
import { BlurFade } from '@/registry/magicui/blur-fade'
import { AnimatedGradientText } from '@/registry/magicui/animated-gradient-text'
import { DotPattern } from '@/registry/magicui/dot-pattern'
import { WordRotate } from '@/registry/magicui/word-rotate'
import { Ripple } from '@/registry/magicui/ripple'

// ── Design tokens ─────────────────────────────────────────────────
// bg-white   page base
// bg-white   surface / card
// bg-[#f1f5f9]   elevated surface
// border-[#e2e8f0]  separator
// text-white        primary text
// text-[#64748b]    muted text
// text-[#2563eb]    blue accent
// bg-[#2563eb]      blue button bg
// ─────────────────────────────────────────────────────────────────

// ─── Nav ─────────────────────────────────────────────────────────

function LandingNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#waitlist' },
  ]

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
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 opacity-90 transition-opacity duration-150 hover:opacity-100"
        >
          <Image src="/CoreLogonoBG.png" alt="Corely" width={36} height={36} className="rounded-lg" />
          <span className="text-sm font-semibold text-[#0f172a]">Corely</span>
        </Link>

        {/* Desktop nav */}
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

        {/* Separator + CTA */}
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

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-[#64748b] transition-colors hover:text-[#0f172a] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
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

// ─── Back to top ──────────────────────────────────────────────────

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 400) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#64748b] shadow-lg transition-all duration-200 hover:border-[#2563eb]/30 hover:text-[#0f172a] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}

// ─── Waitlist form ────────────────────────────────────────────────

function sanitizeEmail(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[<>'";&\\]/g, '')
    .slice(0, 254)
}

const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const lastSubmitRef = useRef(0)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const sanitized = sanitizeEmail(email)
    if (!sanitized) return

    if (!EMAIL_RE.test(sanitized)) {
      setError('Please enter a valid email address.')
      return
    }

    const now = Date.now()
    if (now - lastSubmitRef.current < 5000) {
      setError('Please wait a few seconds before trying again.')
      return
    }
    lastSubmitRef.current = now

    setLoading(true)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'}/waitlist`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: sanitized }),
        },
      )
      if (res.ok || res.status === 409) setSubmitted(true)
      else setError('Something went wrong. Please try again.')
    } catch {
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-2 py-3">
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">You're on the list! See you soon.</span>
        </div>
        <p className="text-xs text-[#94a3b8]">We'll email you when we open access.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value.replace(/[<>]/g, ''))}
          placeholder="your@email.com"
          className="h-11 flex-1 rounded-lg border border-[#e2e8f0] bg-slate-100 px-4 text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none transition-colors duration-150 focus:border-[#3b82f6]/60 focus:ring-1 focus:ring-[#2563eb]/30"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1d4ed8] disabled:opacity-60"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <>
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-xs text-red-500">{error}</p>
      )}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:justify-start">
        <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" />
          Free during early access
        </span>
        <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" />
          No credit card required
        </span>
        <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" />
          Cancel anytime
        </span>
      </div>
    </form>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-28">
      {/* Dot pattern — fades out below the fold */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="text-slate-200"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 65%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 65%)',
        }}
      />
      {/* Meteors */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        <Meteors number={14} />
      </div>
      {/* Radial blue glow — centre top */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse at center, #2563eb 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Text — centred */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white px-3 py-1 shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <AnimatedGradientText className="text-xs font-medium">
              Early Access · Waitlist now open
            </AnimatedGradientText>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0f172a] sm:text-5xl md:text-[64px]">
            Run the ops.{' '}
            <br />
            <span className="text-[#2563eb]">Not spreadsheets.</span>
          </h1>

          {/* Animated audience line */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#94a3b8]">
            <span className="shrink-0">Built for</span>
            <span className="inline-block w-[210px] overflow-hidden text-left">
              <WordRotate
                words={['event production companies', 'fleet managers', 'warehouse teams', 'live operations', 'field service teams']}
                className="font-semibold text-[#2563eb]"
              />
            </span>
          </div>

          <p className="mt-5 text-base leading-relaxed text-[#64748b] sm:text-lg">
            Inventory, fleet, projects and team — one platform built for companies with physical operations.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#waitlist"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('waitlist')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
              }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-6 text-sm font-semibold text-white shadow-sm shadow-[#2563eb]/30 transition-all duration-150 hover:bg-[#1d4ed8] hover:shadow-md hover:shadow-[#2563eb]/40"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('features')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-1 text-xs text-[#94a3b8] transition-colors duration-150 hover:text-[#64748b]"
            >
              See features <ChevronRight className="h-3 w-3" />
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-[#94a3b8]">
            <div className="flex -space-x-2">
              {['RF', 'AS', 'MC', 'JP', 'LB'].map((initials, i) => (
                <div
                  key={initials}
                  className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold text-white"
                  style={{ backgroundColor: ['#2563eb', '#0e7490', '#7c3aed', '#059669', '#c2410c'][i] }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <span>
              <span className="font-semibold text-[#64748b]">200+</span> ops teams on the waitlist
            </span>
            <span className="hidden sm:inline text-[#e2e8f0]">·</span>
            <span className="hidden sm:inline">No credit card required</span>
          </div>
        </div>

        {/* Dashboard mockup — below text */}
        <div className="relative mt-16">
          <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-2xl shadow-slate-300/60">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  const kpis = [
    { label: 'Active projects', value: '12', sub: 'in progress or confirmed', icon: FolderKanban, iconColor: '#3b82f6' },
    { label: 'Equipment in field', value: '348', sub: 'allocated units', icon: Package, iconColor: '#3b82f6' },
    { label: 'Drivers on route', value: '7', sub: 'out of 9 drivers', icon: Truck, iconColor: '#3b82f6' },
    { label: 'Alerts', value: '3', sub: 'Require attention', icon: AlertTriangle, iconColor: '#ef4444' },
  ]

  const projects = [
    { name: 'Sudowest Festival', date: 'Apr 15', status: 'confirmed', items: 42 },
    { name: 'Arena Lisboa', date: 'Apr 22', status: 'in-progress', items: 87 },
    { name: 'NOS Alive Prep', date: 'Apr 28', status: 'confirmed', items: 31 },
    { name: 'MEO Arena Show', date: 'May 3', status: 'draft', items: 12 },
  ]

  const alerts = [
    { severity: 'critical', title: 'Conflict: JBL SRX 900', desc: 'Booked in Arena Lisboa and Sudowest' },
    { severity: 'warning', title: 'Insurance expiring — 12-AB-34', desc: 'Scania R450 · expires in 8 days' },
    { severity: 'warning', title: 'License expiring — Rui Faria', desc: 'Expires in 14 days' },
  ]

  const activities = [
    { initials: 'RF', name: 'Rui Faria', action: 'added 4 speakers to Arena Lisboa', time: '2 min' },
    { initials: 'MG', name: 'Maria Gomes', action: 'confirmed departure of Truck 03', time: '5 min' },
    { initials: 'AL', name: 'André Lima', action: 'created project Sudowest Festival', time: '12 min' },
    { initials: 'JP', name: 'João Pedro', action: 'updated Audio inventory', time: '18 min' },
  ]

  const navGroups = [
    {
      label: 'Dashboard',
      items: [
        { icon: LayoutDashboard, label: 'Home', active: true },
        { icon: Package, label: 'Inventário' },
        { icon: FolderKanban, label: 'Projectos' },
        { icon: Columns3, label: 'Boards' },
        { icon: BarChart3, label: 'Relatórios' },
        { icon: Truck, label: 'Frota' },
        { icon: Container, label: 'Cais' },
        { icon: Bot, label: 'Agent' },
        { icon: Ticket, label: 'Tickets' },
      ],
    },
    {
      label: 'Inbox',
      items: [
        { icon: Inbox, label: 'Inbox' },
        { icon: ClipboardList, label: 'Drafts' },
        { icon: Trash2, label: 'Junk' },
        { icon: Send, label: 'Sent' },
      ],
    },
    {
      label: 'Organização',
      items: [
        { icon: Settings2, label: 'Administração' },
        { icon: Users, label: 'Membros' },
        { icon: Activity, label: 'Logs' },
      ],
    },
  ]

  const statusColor: Record<string, string> = {
    confirmed: '#22c55e',
    'in-progress': '#f97316',
    draft: '#64748b',
  }
  const statusLabel: Record<string, string> = {
    confirmed: 'Confirmed',
    'in-progress': 'In progress',
    draft: 'Draft',
  }

  return (
    <div className="bg-white text-left overflow-hidden" style={{ fontFamily: 'inherit' }}>
      {/* Fake browser chrome */}
      <div className="flex h-9 items-center justify-between border-b border-[#e2e8f0] bg-white px-4">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-3 py-0.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
          <span className="text-[9px] text-[#94a3b8]">app.corely.io</span>
        </div>
        <div className="w-16" />
      </div>

      <div className="flex" style={{ minHeight: 480 }}>
        {/* Sidebar */}
        <div className="hidden w-48 shrink-0 flex-col border-r border-[#1a1f2e] bg-[#0d0f18] sm:flex">
          {/* Logo */}
          <div className="flex h-12 shrink-0 items-center gap-2 border-b border-[#1a1f2e] px-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white">
              <Image src="/CoreLogonoBG.png" alt="Corely" width={32} height={32} />
            </div>
            <span className="text-[12px] font-semibold text-white">Corely</span>
          </div>

          {/* Nav groups */}
          <div className="flex flex-col gap-0 overflow-y-auto p-2 pt-2">
            {navGroups.map((group) => (
              <div key={group.label} className="mb-2">
                {/* Group header */}
                <div className="mb-0.5 flex items-center justify-between px-2 py-1">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#475569]">
                    {group.label}
                  </span>
                  <ChevronRight className="h-2.5 w-2.5 rotate-90 text-[#475569]" />
                </div>
                {/* Group items */}
                {group.items.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={cn(
                      'flex items-center gap-2 rounded-md px-2 py-1.5',
                      active ? 'bg-[#1e2235] text-white' : 'text-[#64748b] hover:text-[#94a3b8]',
                    )}
                  >
                    <Icon className="h-3 w-3 shrink-0" />
                    <span className="text-[10px] font-medium">{label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Topbar */}
          <div className="flex h-12 shrink-0 items-center justify-between border-b border-[#e2e8f0] bg-white px-4">
            <div className="flex items-center gap-1.5 text-[10px] text-[#94a3b8]">
              <span>Dashboard</span>
              <ChevronRight className="h-2.5 w-2.5" />
              <span className="font-medium text-[#0f172a]">Home</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-md border border-[#e2e8f0] bg-white p-0.5">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-[#f1f5f9]">
                  <Sun className="h-2.5 w-2.5 text-[#64748b]" />
                </div>
              </div>
              <div className="relative flex h-6 w-6 items-center justify-center rounded-md hover:bg-[#f1f5f9]">
                <Bell className="h-3 w-3 text-[#94a3b8]" />
                <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-[#ef4444] text-[7px] font-bold text-white">3</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden p-4 space-y-3">
            {/* Page title */}
            <div>
              <p className="text-[13px] font-semibold text-[#0f172a]">Good afternoon, Alex</p>
              <p className="text-[10px] text-[#94a3b8]">Monday, March 30</p>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-4 gap-2">
              {kpis.map((k) => {
                const Icon = k.icon
                return (
                  <div key={k.label} className="rounded-lg border border-[#e2e8f0] bg-white p-2.5">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[9px] text-[#94a3b8] leading-tight">{k.label}</p>
                        <p className="mt-0.5 text-[18px] font-semibold tabular-nums leading-none" style={{ color: k.value === '3' ? '#ef4444' : '#0f172a' }}>
                          {/^\d+$/.test(k.value) ? (
                            <NumberTicker value={Number(k.value)} />
                          ) : k.value}
                        </p>
                        <p className="mt-1 text-[8px] text-[#94a3b8] leading-tight">{k.sub}</p>
                      </div>
                      <div className="rounded-md bg-slate-100 p-1.5">
                        <Icon className="h-3 w-3" style={{ color: k.iconColor }} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Middle row: projects + alerts */}
            <div className="grid grid-cols-3 gap-2">
              {/* Upcoming projects */}
              <div className="col-span-2 rounded-lg border border-[#e2e8f0] bg-white">
                <div className="border-b border-[#e2e8f0] px-3 py-2">
                  <p className="text-[10px] font-semibold text-[#64748b]">Upcoming projects</p>
                </div>
                <div className="divide-y divide-[#f1f5f9]">
                  {projects.map((p) => (
                    <div key={p.name} className="flex items-center gap-2.5 px-3 py-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#2563eb]/20">
                        <FolderKanban className="h-2.5 w-2.5 text-[#2563eb]" />
                      </div>
                      <p className="flex-1 truncate text-[10px] font-medium text-[#0f172a]">{p.name}</p>
                      <span className="text-[9px] text-[#94a3b8]">{p.items} items</span>
                      <span
                        className="rounded-full px-1.5 py-0.5 text-[8px] font-semibold"
                        style={{ backgroundColor: `${statusColor[p.status]}18`, color: statusColor[p.status] }}
                      >
                        {statusLabel[p.status]}
                      </span>
                      <span className="shrink-0 text-[9px] text-[#cbd5e1]">{p.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alerts panel */}
              <div className="rounded-lg border border-[#e2e8f0] bg-white">
                <div className="flex items-center justify-between border-b border-[#e2e8f0] px-3 py-2">
                  <p className="text-[10px] font-semibold text-[#64748b]">Active alerts</p>
                  <span className="rounded-full bg-[#ef4444]/10 px-1.5 py-0.5 text-[8px] font-bold text-[#ef4444]">3</span>
                </div>
                <div className="divide-y divide-[#f1f5f9]">
                  {alerts.map((a) => (
                    <div key={a.title} className="flex items-start gap-2 px-3 py-2">
                      <div
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded"
                        style={{ backgroundColor: a.severity === 'critical' ? '#ef444418' : '#f9731618' }}
                      >
                        {a.severity === 'critical'
                          ? <XCircle className="h-2.5 w-2.5 text-[#ef4444]" />
                          : <AlertTriangle className="h-2.5 w-2.5 text-[#f97316]" />
                        }
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-[9px] font-medium text-[#0f172a]">{a.title}</p>
                        <p className="truncate text-[8px] text-[#94a3b8]">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity feed */}
            <div className="rounded-lg border border-[#e2e8f0] bg-white">
              <div className="border-b border-[#e2e8f0] px-3 py-2">
                <p className="text-[10px] font-semibold text-[#64748b]">Recent Activity</p>
              </div>
              <div className="divide-y divide-[#f1f5f9]">
                {activities.map((a) => (
                  <div key={a.name} className="flex items-center gap-2.5 px-3 py-2">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#2563eb]/20 text-[8px] font-bold text-[#2563eb]">
                      {a.initials}
                    </div>
                    <p className="flex-1 truncate text-[9px] text-[#64748b]">
                      <span className="font-semibold text-[#0f172a]">{a.name}</span> {a.action}
                    </p>
                    <span className="shrink-0 text-[8px] text-[#cbd5e1]">{a.time} ago</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Solution ─────────────────────────────────────────────────────

const BrandIcons = {
  googleDrive: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z" />
    </svg>
  ),
  googleSheets: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z" />
    </svg>
  ),
  whatsapp: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  ),
  gmail: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  ),
  notion: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
    </svg>
  ),
}

const NodeCircle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        'z-10 flex h-20 w-20 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-[#2563eb] transition-colors duration-200 hover:border-[#3b82f6]/40 hover:bg-[#f1f5f9]',
        className,
      )}
    >
      {children}
    </div>
  ),
)
NodeCircle.displayName = 'NodeCircle'

// ─── Scroll animation primitives ──────────────────────────────────

function useFadeInUp() {
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

function FadeInUp({ children, className }: { children: React.ReactNode; className?: string }) {
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

function StatItem({ value, label, delayClass }: { value: string; label: string; delayClass?: string }) {
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

// ─── Logo Strip ───────────────────────────────────────────────────

const logos = [
  'Construction',
  'Logistics & Fleet',
  'Utilities',
  'Project Management',
  'Facility Management',
  'Field Services',
  'Telecommunications',
  'Energy & Environment',
]

function LogoStripSection() {
  return (
    <div className="border-t border-[#e2e8f0] bg-white py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-[#cbd5e1]">
        Trusted by teams across
      </p>
      <Marquee pauseOnHover repeat={3} className="[--duration:30s] [--gap:2rem]">
        {logos.map((logo) => (
          <div
            key={logo}
            className="flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-5 py-2"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            <span className="whitespace-nowrap text-xs font-medium text-[#94a3b8]">{logo}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────

const testimonials = [
  {
    quote: "We went from 3 spreadsheets and constant phone calls to having everything in one place. The team actually uses it.",
    name: 'Ricardo Ferreira',
    role: 'Operations Director',
    company: 'Construção Atlântica',
    initials: 'RF',
  },
  {
    quote: "The inventory conflict detection alone saved us from a project delay that would have cost €8,000. It paid for itself on day one.",
    name: 'Ana Sousa',
    role: 'Project Manager',
    company: 'TechField Services',
    initials: 'AS',
  },
  {
    quote: "We gave warehouse access to the logistics team and field access to drivers. Setup took less than an hour. No training needed.",
    name: 'Miguel Costa',
    role: 'Fleet & Logistics Manager',
    company: 'Logística Norte',
    initials: 'MC',
  },
]

function TestimonialsSection() {
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

function ProblemSection() {
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

function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const div8Ref = useRef<HTMLDivElement>(null)

  return (
    <section className="border-t border-[#e2e8f0] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-14 text-center">
          <p className="text-sm font-medium text-[#2563eb]">The solution</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            One platform. Full infrastructure control.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#64748b]">
            Every part of your operation — inventory, fleet, projects, team — connected and visible in real time.
          </p>
        </FadeInUp>

        <div
          ref={containerRef}
          className="relative mx-auto flex h-[500px] w-full max-w-3xl items-center justify-center overflow-hidden p-10"
        >
          <div className="flex w-full flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center gap-2">
              <p className="text-[11px] font-medium text-[#94a3b8]">Agents</p>
              <div className="flex flex-col gap-2">
                <NodeCircle ref={div1Ref}><BrandIcons.googleSheets /></NodeCircle>
                <NodeCircle ref={div2Ref}><BrandIcons.googleDrive /></NodeCircle>
                <NodeCircle ref={div3Ref}><BrandIcons.whatsapp /></NodeCircle>
                <NodeCircle ref={div4Ref}><BrandIcons.gmail /></NodeCircle>
                <NodeCircle ref={div5Ref}><BrandIcons.notion /></NodeCircle>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[11px] font-medium text-[#94a3b8]">AI Processing</p>
              <NodeCircle ref={div6Ref} className="rounded-2xl">
                <Brain className="h-8 w-8" />
              </NodeCircle>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[11px] font-medium text-[#94a3b8]">Corely</p>
              <NodeCircle ref={div7Ref} className="rounded-2xl">
                <LayoutDashboard className="h-8 w-8" />
              </NodeCircle>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[11px] font-medium text-[#94a3b8]">Users</p>
              <NodeCircle ref={div8Ref}>
                <Users className="h-8 w-8" />
              </NodeCircle>
            </div>
          </div>

          <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3.5} delay={0} curvature={-60} gradientStartColor="#3b82f6" gradientStopColor="#2563eb" />
          <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3.5} delay={0} curvature={-30} gradientStartColor="#3b82f6" gradientStopColor="#2563eb" />
          <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3.5} delay={0} curvature={0}   gradientStartColor="#3b82f6" gradientStopColor="#2563eb" />
          <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} duration={3.5} delay={0} curvature={30}  gradientStartColor="#3b82f6" gradientStopColor="#2563eb" />
          <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3.5} delay={0} curvature={60}  gradientStartColor="#3b82f6" gradientStopColor="#2563eb" />
          <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3.5} delay={0} gradientStartColor="#2563eb" gradientStopColor="#a78bfa" />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div8Ref} duration={3.5} delay={0} gradientStartColor="#a78bfa" gradientStopColor="#7c3aed" />
        </div>
      </div>
    </section>
  )
}

// ─── Bento backgrounds ────────────────────────────────────────────

function InventoryBackground() {
  const items = [
    { name: 'XLR Cable 10m', qty: 24, status: 'In stock' },
    { name: 'Moving Head 5', qty: 8, status: 'In stock' },
    { name: 'LED Panel', qty: 12, status: 'Low stock' },
    { name: 'Subwoofer', qty: 6, status: 'In stock' },
    { name: 'DMX Controller', qty: 3, status: 'Reserved' },
    { name: 'Truss 3m', qty: 18, status: 'In stock' },
  ]
  const statusColor: Record<string, string> = {
    'In stock': 'text-emerald-500',
    'Low stock': 'text-amber-500',
    'Reserved': 'text-[#2563eb]',
  }
  return (
    <div className="absolute inset-0 overflow-hidden p-6 pt-14">
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 shadow-sm"
          >
            <div className="h-2 w-2 rounded-full bg-[#3b82f6] shrink-0" />
            <span className="flex-1 truncate text-xs font-medium text-[#0f172a]">{item.name}</span>
            <span className="text-[10px] tabular-nums text-[#94a3b8]">×{item.qty}</span>
            <span className={`text-[10px] font-medium ${statusColor[item.status]}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FleetBackground() {
  const trucks = [
    { plate: 'AA-00-BB', driver: 'João Faria', route: 'Lisbon → Porto', status: 'On route' },
    { plate: 'CC-11-DD', driver: 'Ricardo Lopes', route: 'Available', status: 'Available' },
    { plate: 'EE-22-FF', driver: 'Ana Martins', route: 'Loading at warehouse', status: 'Loading' },
    { plate: 'GG-33-HH', driver: 'Pedro Costa', route: 'Porto → Braga', status: 'On route' },
  ]
  return (
    <div className="absolute inset-0 flex flex-col gap-2 overflow-hidden p-6 pt-14">
      {trucks.map((t, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-white px-3 py-2.5 shadow-sm"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2563eb]/10">
            <Truck className="h-4 w-4 text-[#2563eb]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#0f172a]">{t.plate}</p>
            <p className="truncate text-[10px] text-[#94a3b8]">{t.driver} · {t.route}</p>
          </div>
          <span
            className={cn(
              'rounded-full px-2 py-0.5 text-[10px] font-medium',
              t.status === 'On route'
                ? 'bg-emerald-500/10 text-emerald-600'
                : t.status === 'Available'
                ? 'bg-[#2563eb]/10 text-[#2563eb]'
                : 'bg-amber-500/10 text-amber-600',
            )}
          >
            {t.status}
          </span>
        </div>
      ))}
    </div>
  )
}

function ProjectBackground() {
  const phases = [
    { label: 'Pre-production', pct: 100 },
    { label: 'Equipment picking', pct: 72 },
    { label: 'Transport & loading', pct: 40 },
    { label: 'Setup & show day', pct: 10 },
  ]
  const items = [
    { name: 'Sound system', qty: 12, done: true },
    { name: 'Lighting rig', qty: 8, done: true },
    { name: 'Stage risers', qty: 4, done: false },
  ]
  return (
    <div className="absolute inset-0 flex flex-col gap-4 overflow-hidden p-6 pt-14">
      <div className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
        <p className="mb-3 text-xs font-semibold text-[#0f172a]">NOS Alive 2025 · Progress</p>
        <div className="space-y-2.5">
          {phases.map((p) => (
            <div key={p.label}>
              <div className="mb-1 flex justify-between text-[10px] text-[#94a3b8]">
                <span>{p.label}</span>
                <span className="font-medium text-[#64748b]">{p.pct}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[#f1f5f9]">
                <div className="h-full rounded-full bg-[#3b82f6]" style={{ width: `${p.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-sm">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-[#94a3b8]">Picking list</p>
        <div className="space-y-1.5">
          {items.map((item) => (
            <div key={item.name} className="flex items-center gap-2 text-xs">
              <div className={cn('h-3.5 w-3.5 shrink-0 rounded', item.done ? 'bg-emerald-500 flex items-center justify-center' : 'border-2 border-[#e2e8f0]')}>
                {item.done && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
              </div>
              <span className={item.done ? 'text-[#94a3b8] line-through' : 'text-[#0f172a]'}>{item.name}</span>
              <span className="ml-auto text-[10px] text-[#94a3b8]">×{item.qty}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TeamBackground() {
  const members = [
    { initials: 'MR', name: 'Miguel Rodrigues', role: 'Admin', color: '#1e40af', perms: ['All access'] },
    { initials: 'AC', name: 'Ana Carvalho', role: 'Warehouse', color: '#0e7490', perms: ['Inventory', 'Picking'] },
    { initials: 'JS', name: 'João Santos', role: 'Commercial', color: '#7c3aed', perms: ['Projects', 'Reports'] },
    { initials: 'PF', name: 'Pedro Ferreira', role: 'Driver', color: '#059669', perms: ['Fleet', 'Schedule'] },
  ]
  return (
    <div className="absolute inset-0 flex flex-col gap-2 overflow-hidden p-6 pt-14">
      {members.map((m) => (
        <div
          key={m.name}
          className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-white px-3 py-2.5 shadow-sm"
        >
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white"
            style={{ backgroundColor: m.color }}
          >
            {m.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#0f172a]">{m.name}</p>
            <div className="mt-0.5 flex gap-1">
              {m.perms.map((p) => (
                <span key={p} className="rounded bg-[#f1f5f9] px-1.5 py-0.5 text-[9px] text-[#64748b]">{p}</span>
              ))}
            </div>
          </div>
          <span className="rounded-full border border-[#e2e8f0] bg-white px-2 py-0.5 text-[10px] font-medium text-[#64748b]">
            {m.role}
          </span>
        </div>
      ))}
    </div>
  )
}

function ReportsBackground() {
  const bars = [65, 80, 55, 90, 70, 85, 60]
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const kpis = [
    { label: 'Revenue / project', value: '€3,420', change: '+12%', up: true },
    { label: 'Avg utilisation', value: '78%', change: '+5%', up: true },
    { label: 'Items on loan', value: '142', change: '-3', up: false },
  ]
  return (
    <div className="absolute inset-0 flex flex-col gap-4 overflow-hidden p-6 pt-14">
      {/* KPI row */}
      <div className="grid grid-cols-3 gap-2">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-[#e2e8f0] bg-white p-2.5 shadow-sm">
            <p className="text-[9px] text-[#94a3b8]">{k.label}</p>
            <p className="mt-0.5 text-sm font-bold text-[#0f172a]">{k.value}</p>
            <p className={cn('text-[9px] font-medium', k.up ? 'text-emerald-500' : 'text-rose-500')}>{k.change}</p>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div className="flex flex-1 items-end gap-1.5 rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div className="w-full overflow-hidden rounded-t-sm bg-[#2563eb]/10" style={{ height: `${h * 0.7}px` }}>
              <div
                className="w-full rounded-t-sm bg-[#2563eb]"
                style={{ height: `${h}%`, opacity: 0.6 + i * 0.06 }}
              />
            </div>
            <span className="text-[8px] text-[#94a3b8]">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AlertsBackground() {
  const alerts = [
    { type: 'conflict', label: 'Double-booking: LED Panel', detail: 'NOS Alive & Arena Lisboa overlap', time: '2 min ago' },
    { type: 'warning', label: 'Driver licence expiring', detail: 'João Faria — expires in 8 days', time: '1 h ago' },
    { type: 'warning', label: 'Insurance expiring', detail: 'Truck CC-11-DD — expires in 12 days', time: '2 h ago' },
    { type: 'info', label: 'Project confirmed', detail: 'Sudowest Festival 2025 — 42 items assigned', time: '3 h ago' },
  ]
  const styleMap = {
    conflict: { dot: 'bg-red-500',   text: 'text-red-600',    bg: 'bg-red-50',    border: 'border-red-100',   badge: 'bg-red-100 text-red-600' },
    warning:  { dot: 'bg-amber-500', text: 'text-amber-700',  bg: 'bg-amber-50',  border: 'border-amber-100', badge: 'bg-amber-100 text-amber-700' },
    info:     { dot: 'bg-[#3b82f6]', text: 'text-[#2563eb]',  bg: 'bg-[#eff6ff]', border: 'border-[#dbeafe]', badge: 'bg-[#dbeafe] text-[#2563eb]' },
  }
  return (
    <div className="absolute inset-0 flex flex-col gap-2.5 overflow-hidden p-6 pt-14">
      {alerts.map((a, i) => {
        const s = styleMap[a.type as keyof typeof styleMap]
        return (
          <div
            key={i}
            className={cn('flex items-start gap-3 rounded-xl border px-3.5 py-3 shadow-sm', s.bg, s.border)}
          >
            <div className={cn('mt-1.5 h-2 w-2 shrink-0 rounded-full', s.dot)} />
            <div className="flex-1 min-w-0">
              <p className={cn('text-xs font-semibold', s.text)}>{a.label}</p>
              <p className="truncate text-[10px] text-[#64748b]">{a.detail}</p>
            </div>
            <span className="shrink-0 text-[9px] text-[#94a3b8]">{a.time}</span>
          </div>
        )
      })}
    </div>
  )
}

// ─── Features Section ─────────────────────────────────────────────

const featureList = [
  {
    icon: Package,
    name: 'AV Inventory',
    description: 'Real-time stock control. Scan in, scan out. Conflicts detected automatically before they happen.',
    Preview: InventoryBackground,
  },
  {
    icon: Truck,
    name: 'Fleet Management',
    description: 'Vehicles, drivers and documents. Routes, assignments and expiry alerts in one place.',
    Preview: FleetBackground,
  },
  {
    icon: FolderKanban,
    name: 'Projects & Picking',
    description: 'From quote to delivery — phases, picking lists and automated equipment assignment.',
    Preview: ProjectBackground,
  },
  {
    icon: Users,
    name: 'Team & Roles',
    description: 'Admin, Warehouse and Commercial — each sees only what they need.',
    Preview: TeamBackground,
  },
  {
    icon: BarChart3,
    name: 'Reports & Analytics',
    description: 'Utilisation rates, revenue per project and team trends. Metrics that matter.',
    Preview: ReportsBackground,
  },
  {
    icon: Bell,
    name: 'Alerts & Conflicts',
    description: 'Automatic detection of inventory conflicts, expiring documents and at-risk projects.',
    Preview: AlertsBackground,
  },
]

const FEATURE_AUTO_MS = 4500

function FeaturesSection() {
  const [active, setActive] = useState(0)

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % featureList.length), FEATURE_AUTO_MS)
    return () => clearInterval(id)
  }, [])

  function handleSelect(i: number) {
    setActive(i)
  }

  const ActivePreview = featureList[active].Preview

  return (
    <section id="features" className="relative border-t border-[#e2e8f0] bg-[#f8fafc] py-24">
      <DotPattern
        width={24}
        height={24}
        cx={1}
        cy={1}
        cr={1}
        className="text-slate-300/50"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-14 text-center">
          <p className="text-sm font-medium text-[#2563eb]">Features</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Everything your operation needs
          </h2>
          <p className="mt-4 text-base text-[#64748b]">
            Built for companies with physical operations — not a generic ERP.
          </p>
        </FadeInUp>

        <div className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:gap-10 lg:items-start">
          {/* ── Feature tab list ────── */}
          <div className="flex flex-col gap-1">
            {featureList.map((f, i) => {
              const isActive = active === i
              return (
                <button
                  key={f.name}
                  onClick={() => handleSelect(i)}
                  className={cn(
                    'group flex w-full cursor-pointer items-start gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-200',
                    isActive
                      ? 'border border-[#e2e8f0] bg-white shadow-sm'
                      : 'border border-transparent hover:bg-white/70',
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200',
                      isActive
                        ? 'bg-[#2563eb] text-white shadow-md shadow-[#2563eb]/30'
                        : 'bg-slate-100 text-[#64748b] group-hover:bg-[#e2e8f0]',
                    )}
                  >
                    <f.icon className="h-4 w-4" />
                  </div>
                  {/* Label + description + progress */}
                  <div className="flex-1 min-w-0">
                    <p className={cn('text-sm font-semibold transition-colors duration-150', isActive ? 'text-[#0f172a]' : 'text-[#64748b]')}>
                      {f.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#94a3b8] line-clamp-2">
                      {f.description}
                    </p>
                    {/* Auto-advance progress bar */}
                    {isActive && (
                      <div className="mt-2.5 h-0.5 w-full overflow-hidden rounded-full bg-[#e2e8f0]">
                        <div
                          key={active}
                          className="h-full w-full origin-left bg-[#2563eb]"
                          style={{ animation: `feature-progress ${FEATURE_AUTO_MS}ms linear forwards` }}
                        />
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* ── Animated preview panel ────── */}
          <div className="relative h-[440px] overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-lg shadow-slate-200/70 lg:sticky lg:top-20">
            <BorderBeam size={360} duration={14} colorFrom="#3b82f6" colorTo="#a78bfa" borderWidth={1.5} />

            {/* Floating feature chip */}
            <div className="absolute left-4 top-4 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`chip-${active}`}
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="flex items-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white px-3 py-1 shadow-sm"
                >
                  {React.createElement(featureList[active].icon, { className: 'h-3.5 w-3.5 text-[#2563eb]' })}
                  <span className="text-xs font-semibold text-[#0f172a]">{featureList[active].name}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot counter — bottom right */}
            <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
              {featureList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={cn(
                    'cursor-pointer rounded-full transition-all duration-300',
                    active === i ? 'w-4 h-1.5 bg-[#2563eb]' : 'w-1.5 h-1.5 bg-[#cbd5e1] hover:bg-[#94a3b8]',
                  )}
                  aria-label={featureList[i].name}
                />
              ))}
            </div>

            {/* Preview content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`preview-${active}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <ActivePreview />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── How it works ─────────────────────────────────────────────────

const steps = [
  {
    num: '01',
    title: 'Set up your organisation',
    description: 'Register your team, define roles and import your existing inventory in minutes.',
  },
  {
    num: '02',
    title: 'Create projects and assign resources',
    description: 'Add projects, select equipment and assign drivers and vehicles.',
  },
  {
    num: '03',
    title: 'Monitor in real time',
    description: 'Real-time dashboard with alerts, team activity and the status of every project.',
  },
]

function HowItWorksSection() {
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
                  <div
                    aria-hidden
                    className="absolute left-[calc(50%+1.5rem)] top-5 hidden h-px w-[calc(100%-3rem)] bg-[#e2e8f0] sm:block"
                  />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb] text-sm font-bold tabular-nums text-white shadow-md shadow-[#2563eb]/30">
                    <span aria-hidden className="pointer-events-none absolute text-7xl font-black text-white/[0.06] select-none">
                      {s.num}
                    </span>
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

// ─── VS Spreadsheets ──────────────────────────────────────────────

const vsRows = [
  { feature: 'Real-time inventory control',   sheets: 'Manual, outdated',   corely: 'Automatic' },
  { feature: 'Equipment conflict detection',   sheets: "Doesn't exist",      corely: 'Automatic' },
  { feature: 'Fleet and driver management',    sheets: 'Separate files',     corely: 'Integrated' },
  { feature: 'Document expiry alerts',         sheets: "Doesn't exist",      corely: 'Automatic' },
  { feature: 'Project picking lists',          sheets: 'Made by hand',       corely: 'Auto-generated', sheetsPartial: true },
  { feature: 'Role-based team access',         sheets: "Doesn't exist",      corely: 'Admin / Warehouse / Commercial' },
  { feature: 'Reports and analytics',          sheets: 'Manual, slow',       corely: 'Real time', sheetsPartial: true },
] as const

function VSSpreadsheets() {
  return (
    <section className="border-t border-[#e2e8f0] bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeInUp className="mb-12 text-center">
          <p className="text-sm font-medium text-[#2563eb]">Corely vs Spreadsheets</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Leave the files behind.
          </h2>
          <p className="mt-4 text-base text-[#64748b]">
            Spreadsheets weren&apos;t built to manage live operations. Corely was.
          </p>
        </FadeInUp>

        <div className="relative overflow-hidden rounded-xl border border-[#e2e8f0]">
          <BorderBeam size={300} duration={12} colorFrom="#3b82f6" colorTo="#1e40af" borderWidth={1} />
          {/* Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr] border-b border-[#e2e8f0] bg-[#f8fafc]">
            <div className="px-5 py-3.5 text-[11px] font-medium uppercase tracking-widest text-[#cbd5e1]" />
            <div className="px-5 py-3.5 text-[11px] font-medium uppercase tracking-widest text-[#cbd5e1]">
              Spreadsheets
            </div>
            <div className="flex items-center gap-2 px-5 py-3.5 bg-[#2563eb]/[0.08] border-l border-[#e2e8f0]">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#2563eb]">Corely</span>
            </div>
          </div>

          {/* Rows */}
          {vsRows.map((row, i) => (
            <div
              key={row.feature}
              className={cn(
                'group grid grid-cols-[2fr_1fr_1fr] transition-colors duration-100 hover:bg-slate-50',
                i < vsRows.length - 1 && 'border-b border-[#e2e8f0]/50',
              )}
            >
              {/* Feature */}
              <div className="px-5 py-4 text-sm text-[#64748b] group-hover:text-[#cbd5e1] transition-colors duration-100">
                {row.feature}
              </div>

              {/* Spreadsheets cell */}
              <div className="flex items-center gap-2 px-5 py-4">
                {'sheetsPartial' in row && row.sheetsPartial ? (
                  <>
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-[#f97316]/70" strokeWidth={2} />
                    <span className="text-sm text-[#f97316]/80">{row.sheets}</span>
                  </>
                ) : (
                  <>
                    <X className="h-3.5 w-3.5 shrink-0 text-[#cbd5e1]" strokeWidth={2.5} />
                    <span className="text-sm text-[#cbd5e1]">{row.sheets}</span>
                  </>
                )}
              </div>

              {/* Corely cell */}
              <div className="flex items-center gap-2 px-5 py-4 bg-[#2563eb]/[0.06] border-l border-[#e2e8f0]/50">
                <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" strokeWidth={2.5} />
                <span className="text-sm font-medium text-emerald-400">{row.corely}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Cost Savings ─────────────────────────────────────────────────

const savingsTiers = [
  {
    label: 'Small',
    sublabel: 'Up to 5 people',
    hoursPerWeek: 6,
    conflictsPerMonth: 2,
    conflictCost: 180,
    adminCost: 240,
  },
  {
    label: 'Medium',
    sublabel: '6 – 15 people',
    hoursPerWeek: 18,
    conflictsPerMonth: 6,
    conflictCost: 520,
    adminCost: 680,
  },
  {
    label: 'Large',
    sublabel: '15+ people',
    hoursPerWeek: 40,
    conflictsPerMonth: 14,
    conflictCost: 1200,
    adminCost: 1600,
  },
] as const

function CostSavingsSection() {
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

        {/* Team size selector */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex gap-1 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-1">
            {savingsTiers.map((st, i) => (
              <button
                key={st.label}
                onClick={() => setTier(i)}
                className={cn(
                  'flex cursor-pointer flex-col items-center rounded-lg px-5 py-2.5 text-center transition-colors duration-150',
                  tier === i
                    ? 'bg-[#e2e8f0] text-[#0f172a]'
                    : 'text-[#94a3b8] hover:text-[#64748b]',
                )}
              >
                <span className="text-sm font-semibold">{st.label}</span>
                <span className={cn('text-[11px] transition-colors duration-150', tier === i ? 'text-[#64748b]' : 'text-[#cbd5e1]')}>{st.sublabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Savings cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Time saved */}
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

          {/* Conflicts avoided */}
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

          {/* Admin overhead */}
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

        {/* Total */}
        <div className="relative mt-4 overflow-hidden rounded-xl border border-[#2563eb]/30 bg-[#f8fafc] px-6 py-5">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#2563eb]"
          />
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

// ─── Stats ────────────────────────────────────────────────────────

const stats = [
  { value: '< 2 min', label: 'To set up your first project' },
  { value: '8', label: 'Core modules at launch' },
  { value: '3', label: 'Role-based access levels' },
  { value: 'Free', label: 'During early access' },
]

function StatsSection() {
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

// ─── Checklist ────────────────────────────────────────────────────

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

function ChecklistSection() {
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

// ─── Pricing ──────────────────────────────────────────────────────

const plans = [
  {
    name: 'Starter',
    price: '49',
    description: 'For small teams getting started with event operations.',
    features: [
      'Up to 3 team members',
      '500 inventory items',
      '10 active projects',
      'Fleet management (5 vehicles)',
      'Basic reports',
      'Email support',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '129',
    description: 'For growing companies that need full operational control.',
    features: [
      'Up to 15 team members',
      'Unlimited inventory',
      'Unlimited projects',
      'Fleet management (unlimited)',
      'Advanced reports & analytics',
      'Kanban boards',
      'Conflict detection & alerts',
      'Priority support',
    ],
    cta: 'Get started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organisations with complex workflows.',
    features: [
      'Unlimited team members',
      'Unlimited everything',
      'Custom roles & permissions',
      'Dedicated onboarding',
      'SLA & uptime guarantee',
      'Custom integrations',
      'Dedicated account manager',
    ],
    cta: 'Talk to us',
    highlighted: false,
  },
]

function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="border-t border-[#e2e8f0] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-14 text-center">
          <p className="text-sm font-medium text-[#2563eb]">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Choose the right plan for your team.
          </h2>
          <p className="mt-4 text-base text-[#64748b]">
            No hidden fees. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-[#e2e8f0] bg-white p-1">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150',
                !annual ? 'bg-[#e2e8f0] text-[#0f172a]' : 'text-[#94a3b8] hover:text-[#64748b]',
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                'flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150',
                annual ? 'bg-[#e2e8f0] text-[#0f172a]' : 'text-[#94a3b8] hover:text-[#64748b]',
              )}
            >
              Annually
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                -25%
              </span>
            </button>
          </div>
        </FadeInUp>

        <div className="grid gap-4 sm:grid-cols-3">
          {plans.map((plan) => {
            const displayPrice =
              plan.price === 'Custom'
                ? 'Custom'
                : annual
                ? String(Math.round(Number(plan.price) * 0.75))
                : plan.price
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

        {/* Feature comparison table */}
        <PricingComparison />
      </div>
    </section>
  )
}

const comparisonSections = [
  {
    title: 'Team',
    rows: [
      { feature: 'Team members',           starter: '3',          pro: '15',         enterprise: 'Unlimited' },
      { feature: 'Admin roles',            starter: 'Basic',      pro: 'Basic',      enterprise: 'Custom' },
      { feature: 'Role-based access',      starter: true,         pro: true,         enterprise: true },
      { feature: 'Custom permissions',     starter: false,        pro: false,        enterprise: true },
      { feature: 'Single Sign-On (SSO)',   starter: false,        pro: false,        enterprise: true },
    ],
  },
  {
    title: 'Inventory',
    rows: [
      { feature: 'Inventory items',        starter: '500',        pro: 'Unlimited',  enterprise: 'Unlimited' },
      { feature: 'Scan in / scan out',     starter: true,         pro: true,         enterprise: true },
      { feature: 'Conflict detection',     starter: false,        pro: true,         enterprise: true },
      { feature: 'Expiry & document alerts', starter: false,      pro: true,         enterprise: true },
    ],
  },
  {
    title: 'Projects',
    rows: [
      { feature: 'Active projects',        starter: '10',         pro: 'Unlimited',  enterprise: 'Unlimited' },
      { feature: 'Picking lists',          starter: true,         pro: true,         enterprise: true },
      { feature: 'Kanban boards',          starter: false,        pro: true,         enterprise: true },
      { feature: 'Equipment auto-assign',  starter: false,        pro: true,         enterprise: true },
    ],
  },
  {
    title: 'Fleet',
    rows: [
      { feature: 'Vehicles',               starter: '5',          pro: 'Unlimited',  enterprise: 'Unlimited' },
      { feature: 'Driver management',      starter: true,         pro: true,         enterprise: true },
      { feature: 'Document expiry alerts', starter: false,        pro: true,         enterprise: true },
      { feature: 'Route assignments',      starter: true,         pro: true,         enterprise: true },
    ],
  },
  {
    title: 'Reports & Analytics',
    rows: [
      { feature: 'Basic analytics',        starter: true,         pro: true,         enterprise: true },
      { feature: 'Advanced analytics',     starter: false,        pro: true,         enterprise: true },
      { feature: 'Revenue per project',    starter: false,        pro: true,         enterprise: true },
      { feature: 'Custom dashboards',      starter: false,        pro: false,        enterprise: true },
    ],
  },
  {
    title: 'Support',
    rows: [
      { feature: 'Email support',          starter: true,         pro: true,         enterprise: true },
      { feature: 'Priority support',       starter: false,        pro: true,         enterprise: true },
      { feature: 'Dedicated onboarding',   starter: false,        pro: false,        enterprise: true },
      { feature: 'Dedicated account manager', starter: false,     pro: false,        enterprise: true },
      { feature: 'SLA & uptime guarantee', starter: false,        pro: false,        enterprise: true },
      { feature: 'Custom integrations',    starter: false,        pro: false,        enterprise: true },
    ],
  },
]

function CellValue({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center">
        <Check className={cn('h-4 w-4', highlight ? 'text-[#2563eb]' : 'text-emerald-400')} strokeWidth={2.5} />
      </span>
    )
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="h-4 w-4 text-[#2a3a4a]" strokeWidth={2} />
      </span>
    )
  return (
    <span className={cn('text-sm font-medium tabular-nums', highlight ? 'text-[#2563eb]' : 'text-[#64748b]')}>
      {value}
    </span>
  )
}

function PricingComparison() {
  const [open, setOpen] = useState(false)
  const plans = ['Starter', 'Pro', 'Enterprise']
  const proIndex = 1 // which plan is highlighted

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
                {plans.map((p, i) => (
                  <th
                    key={p}
                    className={cn(
                      'px-4 py-3.5 text-center text-xs font-semibold w-[20%]',
                      i === proIndex
                        ? 'text-[#2563eb] bg-[#2563eb]/10'
                        : 'text-[#94a3b8]',
                    )}
                  >
                    <span className="flex flex-col items-center gap-1">
                      {p}
                      {i === proIndex && (
                        <span className="rounded-full bg-[#2563eb]/30 px-2 py-0.5 text-[10px] font-semibold text-[#60a5fa]">
                          Popular
                        </span>
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
                    <td
                      colSpan={4}
                      className="px-4 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]"
                    >
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row, ri) => (
                    <tr
                      key={row.feature}
                      className={cn(
                        'group transition-colors duration-100',
                        ri < section.rows.length - 1 && 'border-b border-[#e2e8f0]/40',
                        'hover:bg-slate-50',
                      )}
                    >
                      <td className="px-4 py-3 text-sm text-[#64748b] group-hover:text-[#cbd5e1] transition-colors duration-100">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.starter} />
                      </td>
                      <td className="px-4 py-3 text-center bg-[#2563eb]/[0.06]">
                        <CellValue value={row.pro} highlight />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.enterprise} />
                      </td>
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

// ─── FAQ ──────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Is Corely only for live event companies?',
    a: 'No. Corely is built for any company with physical operations — production, logistics, warehouse, dock or fleet management. If you manage equipment, vehicles and teams in the field, Corely is for you.',
  },
  {
    q: 'How does inventory conflict detection work?',
    a: 'When you assign equipment to a project, Corely automatically checks if that item is already reserved for another project during the same period. If there is a conflict, you receive an alert before the problem even happens.',
  },
  {
    q: 'Can I control what each team member can see and do?',
    a: 'Yes. Corely features 3 access roles: Admin (full access), Warehouse (inventory and picking), and Sales (projects and reports). Each role sees only what is necessary for their work.',
  },
  {
    q: 'What documents does fleet management track?',
    a: 'Inspections, insurance, tachographs, licenses, and any other document you configure. Corely notifies you whenever a document is about to expire.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'Most teams are up and running in less than a day. The Corely team is available to assist with the initial setup at no additional cost.',
  },
  {
    q: 'Is there a trial period?',
    a: 'During early access, Corely is completely free — no credit card, no time limit.',
  },
]

function FAQSection() {
  return (
    <section id="faq" className="border-t border-[#e2e8f0] bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeInUp className="mb-12 text-center">
          <p className="text-sm font-medium text-[#2563eb]">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-[#64748b]">
            Can&apos;t find the answer you&apos;re looking for?{' '}
            <a href="mailto:hello@corely.pt" className="text-[#2563eb] underline-offset-4 hover:underline transition-colors duration-150">
              Reach out to us.
            </a>
          </p>
        </FadeInUp>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-lg border border-[#e2e8f0] last:border-b bg-[#f8fafc] px-5 transition-colors duration-150 hover:border-[#cbd5e1]"
            >
              <AccordionTrigger className="cursor-pointer py-4 text-sm font-medium text-[#0f172a] transition-colors duration-200 hover:text-[#2563eb] hover:no-underline [&[data-state=open]]:text-[#2563eb]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[#64748b] pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section id="waitlist" className="border-t border-[#e2e8f0] bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-[#2563eb]/20 bg-white px-8 py-16 text-center shadow-xl shadow-slate-200/80 sm:px-16">
          <BorderBeam size={400} duration={18} colorFrom="#3b82f6" colorTo="#a78bfa" borderWidth={1.5} />
          {/* Ripple rings */}
          <Ripple mainCircleSize={120} numCircles={7} />
          {/* Subtle top glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[180px] w-[360px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(ellipse at center, #3b82f6 0%, transparent 70%)' }}
          />
          <FadeInUp className="relative">
            {/* Icon cluster */}
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb] shadow-lg shadow-[#2563eb]/30">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Ready to organise your operation?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#64748b]">
              Start today. No credit card required. Support team available for onboarding.
            </p>
            {/* Trust indicators */}
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

// ─── Footer ───────────────────────────────────────────────────────

function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'FAQ', href: '#faq' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#waitlist' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
  }

  return (
    <footer className="border-t border-[#e2e8f0] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/CoreLogonoBG.png" alt="Corely" width={36} height={36} className="rounded-md" />
              <span className="text-sm font-semibold text-[#0f172a]">Corely Solution</span>
            </div>
            <p className="text-xs leading-relaxed text-[#94a3b8]">
              One platform for teams that run operations in the field. Inventory, fleet, projects — connected.
            </p>
            {/* Social */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-[#e2e8f0] text-[#94a3b8] transition-colors duration-150 hover:border-[#cbd5e1] hover:text-[#64748b]"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-[#e2e8f0] text-[#94a3b8] transition-colors duration-150 hover:border-[#cbd5e1] hover:text-[#64748b]"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.928l4.27 5.648 4.796-5.648zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#cbd5e1]">{title}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#94a3b8] transition-colors duration-150 hover:text-[#64748b]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#e2e8f0]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <p className="text-xs text-[#cbd5e1]">
            © {new Date().getFullYear()} Corely Solution. All rights reserved.
          </p>
          <p className="text-xs text-[#cbd5e1]">Built for field operations.</p>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────

export default function LandingPage() {
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const prevHtmlBg = html.style.backgroundColor
    const prevBodyBg = body.style.backgroundColor
    const prevHtmlCs = html.style.colorScheme
    html.style.backgroundColor = '#ffffff'
    body.style.backgroundColor = '#ffffff'
    html.style.colorScheme = 'light'
    return () => {
      html.style.backgroundColor = prevHtmlBg
      body.style.backgroundColor = prevBodyBg
      html.style.colorScheme = prevHtmlCs
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <LandingNav />
      <BackToTop />
      <main>
        <HeroSection />
        <LogoStripSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <VSSpreadsheets />
        <CostSavingsSection />
        <StatsSection />
        <TestimonialsSection />
        <ChecklistSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
