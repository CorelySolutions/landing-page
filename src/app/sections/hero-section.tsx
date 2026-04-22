'use client'

import Image from 'next/image'
import {
  Package,
  Truck,
  FolderKanban,
  BarChart3,
  ArrowRight,
  AlertTriangle,
  XCircle,
  Bell,
  Sun,
  ChevronRight,
  Ticket,
  Container,
  Bot,
  Inbox,
  Trash2,
  Send,
  Settings2,
  Activity,
  Users,
  LayoutDashboard,
  Columns3,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedGradientText } from '@/registry/magicui/animated-gradient-text'
import { DotPattern } from '@/registry/magicui/dot-pattern'
import { WordRotate } from '@/registry/magicui/word-rotate'
import { Meteors } from '@/registry/magicui/meteors'
import { NumberTicker } from '@/registry/magicui/number-ticker'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-28">
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
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        <Meteors number={14} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse at center, #2563eb 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
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
        { icon: Trash2, label: 'Junk' as const },
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
        <div className="hidden w-48 shrink-0 flex-col border-r border-[#1a1f2e] bg-[#0d0f18] sm:flex">
          <div className="flex h-12 shrink-0 items-center gap-2 border-b border-[#1a1f2e] px-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white">
              <Image src="/CoreLogonoBG.png" alt="Corely" width={32} height={32} />
            </div>
            <span className="text-[12px] font-semibold text-white">Corely</span>
          </div>

          <div className="flex flex-col gap-0 overflow-y-auto p-2 pt-2">
            {navGroups.map((group) => (
              <div key={group.label} className="mb-2">
                <div className="mb-0.5 flex items-center justify-between px-2 py-1">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#475569]">
                    {group.label}
                  </span>
                  <ChevronRight className="h-2.5 w-2.5 rotate-90 text-[#475569]" />
                </div>
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

        <div className="flex flex-1 flex-col min-w-0">
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

          <div className="flex-1 overflow-hidden p-4 space-y-3">
            <div>
              <p className="text-[13px] font-semibold text-[#0f172a]">Good afternoon, Alex</p>
              <p className="text-[10px] text-[#94a3b8]">Monday, March 30</p>
            </div>

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

            <div className="grid grid-cols-3 gap-2">
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
