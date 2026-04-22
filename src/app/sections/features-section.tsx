'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Package,
  Truck,
  FolderKanban,
  Users,
  BarChart3,
  Bell,
  Check,
  AlertTriangle,
  XCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { BorderBeam } from '@/registry/magicui/border-beam'
import { DotPattern } from '@/registry/magicui/dot-pattern'
import { FadeInUp } from './shared'

// ── Feature preview backgrounds ──────────────────────────────────

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
          <div key={i} className="flex items-center gap-3 rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 shadow-sm">
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
        <div key={i} className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-white px-3 py-2.5 shadow-sm">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2563eb]/10">
            <Truck className="h-4 w-4 text-[#2563eb]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#0f172a]">{t.plate}</p>
            <p className="truncate text-[10px] text-[#94a3b8]">{t.driver} · {t.route}</p>
          </div>
          <span className={cn(
            'rounded-full px-2 py-0.5 text-[10px] font-medium',
            t.status === 'On route' ? 'bg-emerald-500/10 text-emerald-600'
              : t.status === 'Available' ? 'bg-[#2563eb]/10 text-[#2563eb]'
              : 'bg-amber-500/10 text-amber-600',
          )}>
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
        <div key={m.name} className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-white px-3 py-2.5 shadow-sm">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white" style={{ backgroundColor: m.color }}>
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
      <div className="grid grid-cols-3 gap-2">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-[#e2e8f0] bg-white p-2.5 shadow-sm">
            <p className="text-[9px] text-[#94a3b8]">{k.label}</p>
            <p className="mt-0.5 text-sm font-bold text-[#0f172a]">{k.value}</p>
            <p className={cn('text-[9px] font-medium', k.up ? 'text-emerald-500' : 'text-rose-500')}>{k.change}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-end gap-1.5 rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div className="w-full overflow-hidden rounded-t-sm bg-[#2563eb]/10" style={{ height: `${h * 0.7}px` }}>
              <div className="w-full rounded-t-sm bg-[#2563eb]" style={{ height: `${h}%`, opacity: 0.6 + i * 0.06 }} />
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
    conflict: { dot: 'bg-red-500', text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' },
    warning:  { dot: 'bg-amber-500', text: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-100' },
    info:     { dot: 'bg-[#3b82f6]', text: 'text-[#2563eb]', bg: 'bg-[#eff6ff]', border: 'border-[#dbeafe]' },
  }
  return (
    <div className="absolute inset-0 flex flex-col gap-2.5 overflow-hidden p-6 pt-14">
      {alerts.map((a, i) => {
        const s = styleMap[a.type as keyof typeof styleMap]
        return (
          <div key={i} className={cn('flex items-start gap-3 rounded-xl border px-3.5 py-3 shadow-sm', s.bg, s.border)}>
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

// ── Feature list ─────────────────────────────────────────────────

const featureList = [
  { icon: Package, name: 'AV Inventory', description: 'Real-time stock control. Scan in, scan out. Conflicts detected automatically before they happen.', Preview: InventoryBackground },
  { icon: Truck, name: 'Fleet Management', description: 'Vehicles, drivers and documents. Routes, assignments and expiry alerts in one place.', Preview: FleetBackground },
  { icon: FolderKanban, name: 'Projects & Picking', description: 'From quote to delivery — phases, picking lists and automated equipment assignment.', Preview: ProjectBackground },
  { icon: Users, name: 'Team & Roles', description: 'Admin, Warehouse and Commercial — each sees only what they need.', Preview: TeamBackground },
  { icon: BarChart3, name: 'Reports & Analytics', description: 'Utilisation rates, revenue per project and team trends. Metrics that matter.', Preview: ReportsBackground },
  { icon: Bell, name: 'Alerts & Conflicts', description: 'Automatic detection of inventory conflicts, expiring documents and at-risk projects.', Preview: AlertsBackground },
]

const FEATURE_AUTO_MS = 4500

export function FeaturesSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % featureList.length), FEATURE_AUTO_MS)
    return () => clearInterval(id)
  }, [])

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
          <div className="flex flex-col gap-1">
            {featureList.map((f, i) => {
              const isActive = active === i
              return (
                <button
                  key={f.name}
                  onClick={() => setActive(i)}
                  className={cn(
                    'group flex w-full cursor-pointer items-start gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-200',
                    isActive
                      ? 'border border-[#e2e8f0] bg-white shadow-sm'
                      : 'border border-transparent hover:bg-white/70',
                  )}
                >
                  <div className={cn(
                    'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200',
                    isActive
                      ? 'bg-[#2563eb] text-white shadow-md shadow-[#2563eb]/30'
                      : 'bg-slate-100 text-[#64748b] group-hover:bg-[#e2e8f0]',
                  )}>
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={cn('text-sm font-semibold transition-colors duration-150', isActive ? 'text-[#0f172a]' : 'text-[#64748b]')}>
                      {f.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#94a3b8] line-clamp-2">
                      {f.description}
                    </p>
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

          <div className="relative h-[440px] overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-lg shadow-slate-200/70 lg:sticky lg:top-20">
            <BorderBeam size={360} duration={14} colorFrom="#3b82f6" colorTo="#a78bfa" borderWidth={1.5} />

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

            <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
              {featureList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    'cursor-pointer rounded-full transition-all duration-300',
                    active === i ? 'w-4 h-1.5 bg-[#2563eb]' : 'w-1.5 h-1.5 bg-[#cbd5e1] hover:bg-[#94a3b8]',
                  )}
                  aria-label={featureList[i].name}
                />
              ))}
            </div>

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
