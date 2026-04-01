'use client'

import Link from 'next/link'
import React, { useState, useEffect, useRef, forwardRef } from 'react'
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
import { BentoGrid, BentoCard } from '@/registry/magicui/bento-grid'

// ── Design tokens ─────────────────────────────────────────────────
// bg-[#0a0a0a]   page base
// bg-[#111111]   surface / card
// bg-[#161616]   elevated surface
// border-[#1e293b]  separator
// text-white        primary text
// text-[#94a3b8]    muted text
// text-[#3b82f6]    blue accent
// bg-[#1e40af]      blue button bg
// ─────────────────────────────────────────────────────────────────

// ─── Nav ─────────────────────────────────────────────────────────

function LandingNav() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const offset = 64 // fixed navbar height + small buffer
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1e293b] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/landing" className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1e40af]">
            <Package className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">Corely</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="text-sm text-[#94a3b8] transition-colors duration-150 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-[#94a3b8] transition-colors hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-[#1e293b] bg-[#0a0a0a] px-6 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="rounded-md px-3 py-2 text-sm text-[#94a3b8] transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" size="sm" asChild className="w-full border-[#1e293b] text-[#94a3b8] bg-transparent hover:bg-white/5 hover:text-white">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button size="sm" asChild className="w-full bg-[#1e40af] hover:bg-[#1d4ed8] text-white border-0">
              <Link href="/signup">Get started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

// ─── Waitlist form ────────────────────────────────────────────────

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'}/waitlist`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        },
      )
      if (res.ok || res.status === 409) setSubmitted(true)
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
        <p className="text-xs text-[#475569]">We'll email you when we open access.</p>
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
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="h-11 flex-1 rounded-lg border border-[#1e293b] bg-white/[0.04] px-4 text-sm text-white placeholder-[#475569] outline-none transition-colors duration-150 focus:border-[#3b82f6]/60 focus:ring-1 focus:ring-[#3b82f6]/30"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#1e40af] px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1d4ed8] disabled:opacity-60"
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
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:justify-start">
        <span className="flex items-center gap-1.5 text-xs text-[#475569]">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#3b82f6]" />
          Free during early access
        </span>
        <span className="flex items-center gap-1.5 text-xs text-[#475569]">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#3b82f6]" />
          No credit card required
        </span>
        <span className="flex items-center gap-1.5 text-xs text-[#475569]">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#3b82f6]" />
          Cancel anytime
        </span>
      </div>
    </form>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pb-24 pt-28">
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[360px] w-[600px] rounded-full opacity-[0.10]"
        style={{ background: 'radial-gradient(ellipse at center, #2563eb 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Text — centred */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-6 border-[#1e293b] bg-white/[0.04] text-[#94a3b8] text-xs font-normal px-3 py-1"
          >
            <Zap className="mr-1.5 h-3 w-3 text-[#3b82f6]" />
            Early Access · Waitlist now open
          </Badge>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Run the ops.{' '}
            <br />
            <span className="text-[#3b82f6]">Not spreadsheets.</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-[#94a3b8] sm:text-lg">
            Inventory, fleet, projects, warehouse and team — one platform built for companies with operations in the field.
          </p>

          {/* Waitlist form */}
          <div className="mt-10">
            <WaitlistForm />
          </div>

          {/* Secondary CTA */}
          <div className="mt-4">
            <Button
              size="sm"
              variant="ghost"
              asChild
              className="text-[#475569] hover:text-[#94a3b8] hover:bg-transparent h-9 px-0 text-xs transition-colors duration-150"
            >
              <a href="#features">See features →</a>
            </Button>
          </div>
        </div>

        {/* Dashboard mockup — below text */}
        <div className="mt-16 overflow-hidden rounded-xl border border-[#1e293b] shadow-2xl shadow-black/60">
          <DashboardMockup />
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

  const navItems = [
    { icon: LayoutDashboard, label: 'Home', active: true },
    { icon: Package, label: 'Inventory' },
    { icon: FolderKanban, label: 'Projects' },
    { icon: Columns3, label: 'Boards' },
    { icon: Truck, label: 'Fleet' },
    { icon: Ticket, label: 'Tickets' },
    { icon: BarChart3, label: 'Reports' },
    { icon: Bot, label: 'Agent' },
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
    <div className="bg-[#0a0a0a] text-left overflow-hidden" style={{ fontFamily: 'inherit' }}>
      {/* Fake browser chrome */}
      <div className="flex h-9 items-center justify-between border-b border-[#1e293b] bg-[#111111] px-4">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-[#1e293b] bg-[#0d0d0d] px-3 py-0.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
          <span className="text-[9px] text-[#475569]">app.corely.io</span>
        </div>
        <div className="w-16" />
      </div>

      <div className="flex" style={{ minHeight: 480 }}>
        {/* Sidebar */}
        <div className="hidden w-48 shrink-0 flex-col border-r border-[#1a1f2e] bg-[#0d0f18] sm:flex">
          {/* Logo */}
          <div className="flex h-12 items-center gap-2 border-b border-[#1a1f2e] px-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1e40af]">
              <Package className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-[12px] font-semibold text-white">Corely</span>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-0.5 p-2 pt-3">
            <p className="mb-1 px-2 text-[9px] font-semibold uppercase tracking-widest text-[#334155]">Dashboard</p>
            {navItems.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={cn(
                  'flex items-center gap-2 rounded-md px-2 py-1.5',
                  active ? 'bg-white/10 text-white' : 'text-[#475569]',
                )}
              >
                <Icon className="h-3 w-3 shrink-0" />
                <span className="text-[10px] font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Topbar */}
          <div className="flex h-12 shrink-0 items-center justify-between border-b border-[#1e293b] bg-[#0a0a0a] px-4">
            <div className="flex items-center gap-1.5 text-[10px] text-[#475569]">
              <span>Dashboard</span>
              <ChevronRight className="h-2.5 w-2.5" />
              <span className="text-white font-medium">Home</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-md border border-[#1e293b] bg-[#111111] p-0.5">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-[#1a1a1a]">
                  <Sun className="h-2.5 w-2.5 text-white" />
                </div>
              </div>
              <div className="relative flex h-6 w-6 items-center justify-center rounded-md hover:bg-[#1a1a1a]">
                <Bell className="h-3 w-3 text-[#475569]" />
                <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-[#ef4444] text-[7px] font-bold text-white">3</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden p-4 space-y-3">
            {/* Page title */}
            <div>
              <p className="text-[13px] font-semibold text-white">Good afternoon, Alex</p>
              <p className="text-[10px] text-[#475569]">Monday, March 30</p>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-4 gap-2">
              {kpis.map((k) => {
                const Icon = k.icon
                return (
                  <div key={k.label} className="rounded-lg border border-[#1e293b] bg-[#111111] p-2.5">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[9px] text-[#475569] leading-tight">{k.label}</p>
                        <p className="mt-0.5 text-[18px] font-semibold tabular-nums leading-none" style={{ color: k.value === '3' ? '#ef4444' : 'white' }}>{k.value}</p>
                        <p className="mt-1 text-[8px] text-[#334155] leading-tight">{k.sub}</p>
                      </div>
                      <div className="rounded-md bg-white/5 p-1.5">
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
              <div className="col-span-2 rounded-lg border border-[#1e293b] bg-[#111111]">
                <div className="border-b border-[#1e293b] px-3 py-2">
                  <p className="text-[10px] font-semibold text-[#94a3b8]">Upcoming projects</p>
                </div>
                <div className="divide-y divide-[#1a2235]">
                  {projects.map((p) => (
                    <div key={p.name} className="flex items-center gap-2.5 px-3 py-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#1e40af]/20">
                        <FolderKanban className="h-2.5 w-2.5 text-[#3b82f6]" />
                      </div>
                      <p className="flex-1 truncate text-[10px] font-medium text-white">{p.name}</p>
                      <span className="text-[9px] text-[#475569]">{p.items} items</span>
                      <span
                        className="rounded-full px-1.5 py-0.5 text-[8px] font-semibold"
                        style={{ backgroundColor: `${statusColor[p.status]}18`, color: statusColor[p.status] }}
                      >
                        {statusLabel[p.status]}
                      </span>
                      <span className="shrink-0 text-[9px] text-[#334155]">{p.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alerts panel */}
              <div className="rounded-lg border border-[#1e293b] bg-[#111111]">
                <div className="flex items-center justify-between border-b border-[#1e293b] px-3 py-2">
                  <p className="text-[10px] font-semibold text-[#94a3b8]">Active alerts</p>
                  <span className="rounded-full bg-[#ef4444]/10 px-1.5 py-0.5 text-[8px] font-bold text-[#ef4444]">3</span>
                </div>
                <div className="divide-y divide-[#1a2235]">
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
                        <p className="truncate text-[9px] font-medium text-white">{a.title}</p>
                        <p className="truncate text-[8px] text-[#475569]">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity feed */}
            <div className="rounded-lg border border-[#1e293b] bg-[#111111]">
              <div className="border-b border-[#1e293b] px-3 py-2">
                <p className="text-[10px] font-semibold text-[#94a3b8]">Recent Activity</p>
              </div>
              <div className="divide-y divide-[#1a2235]">
                {activities.map((a) => (
                  <div key={a.name} className="flex items-center gap-2.5 px-3 py-2">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#1e40af]/20 text-[8px] font-bold text-[#3b82f6]">
                      {a.initials}
                    </div>
                    <p className="flex-1 truncate text-[9px] text-[#94a3b8]">
                      <span className="font-semibold text-white">{a.name}</span> {a.action}
                    </p>
                    <span className="shrink-0 text-[8px] text-[#334155]">{a.time} ago</span>
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
        'z-10 flex h-20 w-20 items-center justify-center rounded-xl border border-[#1e293b] bg-[#111111] text-[#3b82f6] transition-colors duration-200 hover:border-[#3b82f6]/40 hover:bg-[#161616]',
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
        'bg-[#0a0a0a] px-8 py-10 text-center transition-all duration-700 ease-out',
        delayClass,
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
      )}
    >
      <p className="text-3xl font-bold tabular-nums text-white sm:text-4xl">{value}</p>
      <p className="mt-1.5 text-sm text-[#94a3b8]">{label}</p>
    </div>
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
    <section className="border-t border-[#1e293b] bg-[#111111] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-14 text-center">
          <p className="text-sm font-medium text-[#3b82f6]">The solution</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One platform. Full infrastructure control.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#94a3b8]">
            Every part of your operation — inventory, fleet, projects, team — connected and visible in real time.
          </p>
        </FadeInUp>

        <div
          ref={containerRef}
          className="relative mx-auto flex h-[500px] w-full max-w-3xl items-center justify-center overflow-hidden p-10"
        >
          <div className="flex w-full flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center gap-2">
              <p className="text-[11px] font-medium text-[#475569]">Agents</p>
              <div className="flex flex-col gap-2">
                <NodeCircle ref={div1Ref}><BrandIcons.googleSheets /></NodeCircle>
                <NodeCircle ref={div2Ref}><BrandIcons.googleDrive /></NodeCircle>
                <NodeCircle ref={div3Ref}><BrandIcons.whatsapp /></NodeCircle>
                <NodeCircle ref={div4Ref}><BrandIcons.gmail /></NodeCircle>
                <NodeCircle ref={div5Ref}><BrandIcons.notion /></NodeCircle>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[11px] font-medium text-[#475569]">AI Processing</p>
              <NodeCircle ref={div6Ref} className="rounded-2xl">
                <Brain className="h-8 w-8" />
              </NodeCircle>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[11px] font-medium text-[#475569]">Dashboard</p>
              <NodeCircle ref={div7Ref} className="rounded-2xl">
                <LayoutDashboard className="h-8 w-8" />
              </NodeCircle>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[11px] font-medium text-[#475569]">Users</p>
              <NodeCircle ref={div8Ref}>
                <Users className="h-8 w-8" />
              </NodeCircle>
            </div>
          </div>

          <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
          <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
          <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
          <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
          <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} />
          <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div8Ref} />
        </div>
      </div>
    </section>
  )
}

// ─── Bento backgrounds ────────────────────────────────────────────

function InventoryBackground() {
  const items = ['XLR Cable 10m', 'Moving Head 5', 'LED Panel', 'Subwoofer', 'DMX Controller', 'Truss 3m']
  return (
    <div className="absolute inset-0 overflow-hidden p-5 opacity-60">
      <div className="grid grid-cols-2 gap-1.5">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg border border-[#1e293b] bg-[#111111] px-2.5 py-1.5"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            <span className="truncate text-xs text-[#94a3b8]">{item}</span>
            <span className="ml-auto text-[10px] text-[#475569]">In stock</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FleetBackground() {
  const trucks = [
    { plate: 'AA-00-BB', driver: 'John', status: 'On route' },
    { plate: 'CC-11-DD', driver: 'Richard', status: 'Available' },
    { plate: 'EE-22-FF', driver: 'Ana', status: 'Loading' },
  ]
  return (
    <div className="absolute inset-0 flex flex-col gap-2 overflow-hidden p-5 opacity-60">
      {trucks.map((t, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl border border-[#1e293b] bg-[#111111] px-3 py-2.5"
        >
          <Truck className="h-4 w-4 shrink-0 text-[#3b82f6]" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white">{t.plate}</p>
            <p className="text-[10px] text-[#475569]">{t.driver}</p>
          </div>
          <span
            className={cn(
              'rounded-full px-2 py-0.5 text-[10px] font-medium',
              t.status === 'On route'
                ? 'bg-emerald-500/10 text-emerald-400'
                : t.status === 'Available'
                ? 'bg-[#1e40af]/20 text-[#3b82f6]'
                : 'bg-amber-500/10 text-amber-400',
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
    { label: 'Picking', pct: 72 },
    { label: 'Transport', pct: 40 },
    { label: 'Setup & Show', pct: 10 },
  ]
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-3 overflow-hidden px-6 py-5 opacity-60">
      <p className="text-xs font-semibold text-white">Summer Festival 2025</p>
      {phases.map((p) => (
        <div key={p.label}>
          <div className="mb-1 flex justify-between text-[10px] text-[#475569]">
            <span>{p.label}</span>
            <span>{p.pct}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[#1e293b]">
            <div className="h-full rounded-full bg-[#3b82f6]" style={{ width: `${p.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function TeamBackground() {
  const members = [
    { initials: 'MR', name: 'Michael.R', role: 'Admin', color: '#1e40af' },
    { initials: 'AC', name: 'Ana.C', role: 'Warehouse', color: '#0e7490' },
    { initials: 'JS', name: 'John.S', role: 'Commercial', color: '#7c3aed' },
  ]
  return (
    <div className="absolute inset-0 flex flex-col gap-2 overflow-hidden p-5 opacity-60">
      {members.map((m) => (
        <div
          key={m.name}
          className="flex items-center gap-3 rounded-xl border border-[#1e293b] bg-[#111111] px-3 py-2"
        >
          <div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white"
            style={{ backgroundColor: m.color }}
          >
            {m.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white">{m.name}</p>
          </div>
          <span className="rounded-full bg-white/5 border border-[#1e293b] px-2 py-0.5 text-[10px] text-[#94a3b8]">
            {m.role}
          </span>
        </div>
      ))}
    </div>
  )
}

function ReportsBackground() {
  const bars = [65, 80, 55, 90, 70, 85, 60]
  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-2 overflow-hidden px-6 pb-6 pt-10 opacity-60">
      {bars.map((h, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1">
          <div className="w-full overflow-hidden rounded-t-sm" style={{ height: `${h * 0.9}px` }}>
            <div
              className="w-full h-full rounded-t-md bg-[#1e40af]"
              style={{ opacity: 0.5 + i * 0.07 }}
            />
          </div>
          <span className="text-[9px] text-[#475569]">{labels[i]}</span>
        </div>
      ))}
    </div>
  )
}

function AlertsBackground() {
  const alerts = [
    { type: 'conflict', label: 'Double-booking: LED Panel', time: '2 min ago' },
    { type: 'warning', label: 'Driver licence expires soon', time: '1 h ago' },
    { type: 'info', label: 'Project Gala confirmed', time: '3 h ago' },
  ]
  const styles = {
    conflict: { bar: 'bg-red-500',   text: 'text-red-400',   bg: 'bg-red-500/10',   border: 'border-red-500/20' },
    warning:  { bar: 'bg-amber-500', text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    info:     { bar: 'bg-[#3b82f6]', text: 'text-[#3b82f6]', bg: 'bg-[#1e40af]/10', border: 'border-[#1e40af]/20' },
  }
  return (
    <div className="absolute inset-0 flex flex-col gap-2.5 overflow-hidden p-5 opacity-60">
      {alerts.map((a, i) => {
        const s = styles[a.type as keyof typeof styles]
        return (
          <div
            key={i}
            className={cn('flex items-start gap-2.5 rounded-xl border px-3 py-2.5', s.bg, s.border)}
          >
            <div className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', s.bar)} />
            <div className="flex-1 min-w-0">
              <p className={cn('truncate text-xs font-medium', s.text)}>{a.label}</p>
              <p className="text-[10px] text-[#475569]">{a.time}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Features Section ─────────────────────────────────────────────

function FeaturesSection() {
  return (
    <section id="features" className="border-t border-[#1e293b] bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-14 text-center">
          <p className="text-sm font-medium text-[#3b82f6]">Features</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything your operation needs
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            Built for companies with physical operations — not a generic ERP.
          </p>
        </FadeInUp>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[18rem]">
          <BentoCard
            name="AV Inventory"
            className="col-span-1 lg:col-span-2"
            background={<InventoryBackground />}
            description="Real-time stock control. Scan in, scan out. Conflicts detected automatically before they happen."
            href="#"
            cta="Explore inventory"
          />
          <BentoCard
            name="Fleet Management"
            className="col-span-1"
            background={<FleetBackground />}
            description="Vehicles, drivers and documents. Routes, assignments and expiry alerts in one place."
            href="#"
            cta="See fleet"
          />
          <BentoCard
            name="Projects & Picking"
            className="col-span-1"
            background={<ProjectBackground />}
            description="From quote to delivery — phases, picking lists and automated equipment assignment."
            href="#"
            cta="View projects"
          />
          <BentoCard
            name="Team & Roles"
            className="col-span-1"
            background={<TeamBackground />}
            description="Admin, Warehouse and Commercial — each sees only what they need."
            href="#"
            cta="Manage team"
          />
          <BentoCard
            name="Reports & Analytics"
            className="col-span-1 lg:col-span-1"
            background={<ReportsBackground />}
            description="Utilisation rates, revenue per project and team trends. Metrics that matter."
            href="#"
            cta="Open reports"
          />
          <BentoCard
            name="Alerts & Conflicts"
            className="col-span-1 sm:col-span-2 lg:col-span-3"
            background={<AlertsBackground />}
            description="Automatic detection of inventory conflicts, expiring documents and at-risk projects."
            href="#"
            cta="View alerts"
          />
        </BentoGrid>
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
    <section id="how-it-works" className="border-t border-[#1e293b] bg-[#111111] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-14 text-center">
          <p className="text-sm font-medium text-[#3b82f6]">How it works</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Up and running in less than a day
          </h2>
        </FadeInUp>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[calc(50%+1.5rem)] top-5 hidden h-px w-[calc(100%-3rem)] bg-[#1e293b] sm:block"
                />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#1e40af]/40 bg-[#1e40af]/10 text-sm font-bold tabular-nums text-[#3b82f6]">
                  {s.num}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#94a3b8]">{s.description}</p>
              </div>
            </div>
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
    <section className="border-t border-[#1e293b] bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeInUp className="mb-12 text-center">
          <p className="text-sm font-medium text-[#3b82f6]">Corely vs Spreadsheets</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Leave the files behind.
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            Spreadsheets weren&apos;t built to manage live operations. Corely was.
          </p>
        </FadeInUp>

        <div className="overflow-hidden rounded-xl border border-[#1e293b]">
          {/* Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr] border-b border-[#1e293b] bg-[#0d0d0d]">
            <div className="px-5 py-3.5 text-[11px] font-medium uppercase tracking-widest text-[#334155]" />
            <div className="px-5 py-3.5 text-[11px] font-medium uppercase tracking-widest text-[#334155]">
              Spreadsheets
            </div>
            <div className="flex items-center gap-2 px-5 py-3.5 bg-[#1e40af]/[0.08] border-l border-[#1e293b]">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#3b82f6]">Corely</span>
            </div>
          </div>

          {/* Rows */}
          {vsRows.map((row, i) => (
            <div
              key={row.feature}
              className={cn(
                'group grid grid-cols-[2fr_1fr_1fr] transition-colors duration-100 hover:bg-white/[0.02]',
                i < vsRows.length - 1 && 'border-b border-[#1e293b]/50',
              )}
            >
              {/* Feature */}
              <div className="px-5 py-4 text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors duration-100">
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
                    <X className="h-3.5 w-3.5 shrink-0 text-[#334155]" strokeWidth={2.5} />
                    <span className="text-sm text-[#334155]">{row.sheets}</span>
                  </>
                )}
              </div>

              {/* Corely cell */}
              <div className="flex items-center gap-2 px-5 py-4 bg-[#1e40af]/[0.06] border-l border-[#1e293b]/50">
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
    <section className="border-t border-[#1e293b] bg-[#111111] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeInUp className="mb-12 text-center">
          <p className="text-sm font-medium text-[#3b82f6]">Cost savings</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See how much you can save.
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            Switching to Corely pays for itself. Select your team size to see the estimate.
          </p>
        </FadeInUp>

        {/* Team size selector */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex gap-1 rounded-xl border border-[#1e293b] bg-[#0d0d0d] p-1">
            {savingsTiers.map((st, i) => (
              <button
                key={st.label}
                onClick={() => setTier(i)}
                className={cn(
                  'flex cursor-pointer flex-col items-center rounded-lg px-5 py-2.5 text-center transition-colors duration-150',
                  tier === i
                    ? 'bg-[#1e293b] text-white'
                    : 'text-[#475569] hover:text-[#94a3b8]',
                )}
              >
                <span className="text-sm font-semibold">{st.label}</span>
                <span className={cn('text-[11px] transition-colors duration-150', tier === i ? 'text-[#64748b]' : 'text-[#334155]')}>{st.sublabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Savings cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Time saved */}
          <div className="rounded-xl border border-[#1e293b] bg-[#0d0d0d] p-6">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e40af]/20">
              <Bell className="h-4 w-4 text-[#3b82f6]" />
            </div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#475569]">Time saved</p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-white">
              {t.hoursPerWeek}h
              <span className="text-base font-normal text-[#475569]">/week</span>
            </p>
            <p className="mt-2 text-sm text-[#475569]">
              ≈ <span className="font-medium text-[#94a3b8]">€{timeSavings.toLocaleString()}/mo</span> in recovered labour
            </p>
          </div>

          {/* Conflicts avoided */}
          <div className="rounded-xl border border-[#1e293b] bg-[#0d0d0d] p-6">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
            </div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#475569]">Conflicts avoided</p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-white">
              {t.conflictsPerMonth}
              <span className="text-base font-normal text-[#475569]">/month</span>
            </p>
            <p className="mt-2 text-sm text-[#475569]">
              ≈ <span className="font-medium text-[#94a3b8]">€{t.conflictCost.toLocaleString()}/mo</span> in avoided losses
            </p>
          </div>

          {/* Admin overhead */}
          <div className="rounded-xl border border-[#1e293b] bg-[#0d0d0d] p-6">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
              <Zap className="h-4 w-4 text-amber-400" />
            </div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#475569]">Admin overhead</p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-white">
              €{t.adminCost.toLocaleString()}
              <span className="text-base font-normal text-[#475569]">/mo</span>
            </p>
            <p className="mt-2 text-sm text-[#475569]">
              eliminated in <span className="font-medium text-[#94a3b8]">manual coordination</span>
            </p>
          </div>
        </div>

        {/* Total */}
        <div className="relative mt-4 overflow-hidden rounded-xl border border-[#1e40af]/30 bg-[#0d0d0d] px-6 py-5">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#1e40af]"
          />
          <div className="flex items-center justify-between pl-2">
            <div>
              <p className="text-sm font-medium text-white">Estimated monthly savings</p>
              <p className="mt-0.5 text-[11px] text-[#475569]">Based on industry averages for your team size</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold tabular-nums text-[#3b82f6]">€{total.toLocaleString()}</p>
              <p className="mt-0.5 text-[11px] text-[#475569]">per month</p>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-[#334155]">
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
    <section className="border-t border-[#1e293b] bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-px bg-[#1e293b] overflow-hidden rounded-xl sm:grid-cols-4">
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
    <section className="border-t border-[#1e293b] bg-[#111111] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
          <FadeInUp className="flex-1">
            <p className="text-sm font-medium text-[#3b82f6]">Everything included</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              No extra modules. No surprises.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#94a3b8]">
              A single subscription with access to every feature. Your team never pays more to grow.
            </p>
          </FadeInUp>
          <div className="w-full flex-1">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-[#94a3b8]">
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
    <section id="pricing" className="border-t border-[#1e293b] bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInUp className="mb-14 text-center">
          <p className="text-sm font-medium text-[#3b82f6]">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose the right plan for your team.
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            No hidden fees. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-[#1e293b] bg-[#111111] p-1">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150',
                !annual ? 'bg-[#1e293b] text-white' : 'text-[#475569] hover:text-[#94a3b8]',
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                'flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150',
                annual ? 'bg-[#1e293b] text-white' : 'text-[#475569] hover:text-[#94a3b8]',
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
                'relative flex flex-col rounded-xl border p-6 transition-colors duration-200',
                plan.highlighted
                  ? 'border-[#1e40af]/60 bg-[#111111] ring-1 ring-[#1e40af]/20'
                  : 'border-[#1e293b] bg-[#111111] hover:border-[#2d3d55]',
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[#1e40af] px-3 py-1 text-[11px] font-semibold text-white">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm font-semibold text-white">{plan.name}</p>
                <div className="mt-3 flex items-end gap-1">
                  {displayPrice === 'Custom' ? (
                    <span className="text-3xl font-bold text-white">Custom</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold tabular-nums text-white">€{displayPrice}</span>
                      <span className="mb-1 text-sm text-[#94a3b8]">/month</span>
                    </>
                  )}
                </div>
                <p className="mt-2 text-sm text-[#94a3b8]">{plan.description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#94a3b8]">
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
                    ? 'bg-[#1e40af] hover:bg-[#1d4ed8] text-white border-0'
                    : 'bg-transparent border border-[#1e293b] text-[#94a3b8] hover:border-[#2d3d55] hover:text-white hover:bg-white/5',
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
        <Check className={cn('h-4 w-4', highlight ? 'text-[#3b82f6]' : 'text-emerald-400')} strokeWidth={2.5} />
      </span>
    )
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="h-4 w-4 text-[#2a3a4a]" strokeWidth={2} />
      </span>
    )
  return (
    <span className={cn('text-sm font-medium tabular-nums', highlight ? 'text-white' : 'text-[#94a3b8]')}>
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
        className="mx-auto flex items-center gap-2 text-sm text-white font-bold hover:text-[#94a3b8] transition-colors duration-150"
        aria-expanded={open}
      >
        {open ? 'Hide feature comparison' : 'Compare all features'}
        <ChevronRight className={cn('h-4 w-4 transition-transform duration-200', open && 'rotate-90')} />
      </button>

      {open && (
        <div className="mt-8 overflow-x-auto rounded-xl border border-[#1e293b]">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#1e293b]">
                <th className="px-4 py-3.5 text-left text-xs font-medium text-[#475569] w-[40%]">Feature</th>
                {plans.map((p, i) => (
                  <th
                    key={p}
                    className={cn(
                      'px-4 py-3.5 text-center text-xs font-semibold w-[20%]',
                      i === proIndex
                        ? 'text-[#3b82f6] bg-[#1e40af]/10'
                        : 'text-[#475569]',
                    )}
                  >
                    <span className="flex flex-col items-center gap-1">
                      {p}
                      {i === proIndex && (
                        <span className="rounded-full bg-[#1e40af]/30 px-2 py-0.5 text-[10px] font-semibold text-[#60a5fa]">
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
                  <tr className={cn(si > 0 && 'border-t border-[#1e293b]')}>
                    <td
                      colSpan={4}
                      className="px-4 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-widest text-[#475569]"
                    >
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row, ri) => (
                    <tr
                      key={row.feature}
                      className={cn(
                        'group transition-colors duration-100',
                        ri < section.rows.length - 1 && 'border-b border-[#1e293b]/40',
                        'hover:bg-white/[0.02]',
                      )}
                    >
                      <td className="px-4 py-3 text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors duration-100">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.starter} />
                      </td>
                      <td className="px-4 py-3 text-center bg-[#1e40af]/[0.06]">
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
    <section id="faq" className="border-t border-[#1e293b] bg-[#111111] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeInUp className="mb-12 text-center">
          <p className="text-sm font-medium text-[#3b82f6]">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            Can&apos;t find the answer you&apos;re looking for?{' '}
            <a href="mailto:hello@corely.pt" className="text-[#3b82f6] underline-offset-4 hover:underline transition-colors duration-150">
              Reach out to us.
            </a>
          </p>
        </FadeInUp>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-lg border border-[#1e293b] bg-[#0d0d0d] px-5 transition-colors duration-150 hover:border-[#2d3d55]"
            >
              <AccordionTrigger className="text-sm font-medium text-white hover:no-underline py-4 hover:text-[#3b82f6] transition-colors duration-150">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[#94a3b8] pb-4">
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
    <section id="contact" className="border-t border-[#1e293b] bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Card with subtle blue border and glow */}
        <div className="relative overflow-hidden rounded-2xl border border-[#1e40af]/20 bg-[#111111] px-8 py-16 text-center sm:px-16">
          {/* Subtle background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[200px] w-[400px] rounded-full opacity-[0.08]"
            style={{ background: 'radial-gradient(ellipse at center, #3b82f6 0%, transparent 70%)' }}
          />
          <FadeInUp className="relative">
            <Globe className="mx-auto mb-5 h-8 w-8 text-[#3b82f6]" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to organise your operation?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#94a3b8]">
              Start today. No credit card required. Support team available for onboarding.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="h-12 flex-1 rounded-lg border border-[#1e293b] bg-[#0d0d0d] px-4 text-sm text-white placeholder-[#475569] outline-none transition-colors duration-150 focus:border-[#3b82f6]"
              />
              <Button
                size="lg"
                className="gap-2 bg-[#1e40af] hover:bg-[#1d4ed8] text-white border-0 px-6 h-12 text-sm font-medium transition-colors duration-150 whitespace-nowrap"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#3b82f6]" />
                Free during early access
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#3b82f6]" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#3b82f6]" />
                Cancel anytime
              </span>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#0a0a0a] py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1e40af]">
              <Package className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Corely Solution</span>
          </div>
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} Corely Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#334155] font-medium">Legal</span>
            <span className="text-[#1e293b]">·</span>
            <a href="#" className="text-xs text-[#475569] transition-colors duration-150 hover:text-[#94a3b8]">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#475569] transition-colors duration-150 hover:text-[#94a3b8]">
              Terms of Service
            </a>
          </div>
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
    html.style.backgroundColor = '#0a0a0a'
    body.style.backgroundColor = '#0a0a0a'
    html.style.colorScheme = 'dark'
    return () => {
      html.style.backgroundColor = prevHtmlBg
      body.style.backgroundColor = prevBodyBg
      html.style.colorScheme = prevHtmlCs
    }
  }, [])

  return (
    <div className="dark min-h-screen bg-[#0a0a0a]">
      <LandingNav />
      <main>
        <HeroSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <VSSpreadsheets />
        <CostSavingsSection />
        <StatsSection />
        <ChecklistSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
