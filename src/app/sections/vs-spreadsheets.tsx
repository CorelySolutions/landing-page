'use client'

import { AlertTriangle, X, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BorderBeam } from '@/registry/magicui/border-beam'
import { FadeInUp } from './shared'

const vsRows = [
  { feature: 'Real-time inventory control',   sheets: 'Manual, outdated',   corely: 'Automatic' },
  { feature: 'Equipment conflict detection',   sheets: "Doesn't exist",      corely: 'Automatic' },
  { feature: 'Fleet and driver management',    sheets: 'Separate files',     corely: 'Integrated' },
  { feature: 'Document expiry alerts',         sheets: "Doesn't exist",      corely: 'Automatic' },
  { feature: 'Project picking lists',          sheets: 'Made by hand',       corely: 'Auto-generated', sheetsPartial: true },
  { feature: 'Role-based team access',         sheets: "Doesn't exist",      corely: 'Admin / Warehouse / Commercial' },
  { feature: 'Reports and analytics',          sheets: 'Manual, slow',       corely: 'Real time', sheetsPartial: true },
] as const

export function VSSpreadsheets() {
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
          <div className="grid grid-cols-[2fr_1fr_1fr] border-b border-[#e2e8f0] bg-[#f8fafc]">
            <div className="px-5 py-3.5 text-[11px] font-medium uppercase tracking-widest text-[#cbd5e1]" />
            <div className="px-5 py-3.5 text-[11px] font-medium uppercase tracking-widest text-[#cbd5e1]">Spreadsheets</div>
            <div className="flex items-center gap-2 px-5 py-3.5 bg-[#2563eb]/[0.08] border-l border-[#e2e8f0]">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#2563eb]">Corely</span>
            </div>
          </div>

          {vsRows.map((row, i) => (
            <div
              key={row.feature}
              className={cn(
                'group grid grid-cols-[2fr_1fr_1fr] transition-colors duration-100 hover:bg-slate-50',
                i < vsRows.length - 1 && 'border-b border-[#e2e8f0]/50',
              )}
            >
              <div className="px-5 py-4 text-sm text-[#64748b] group-hover:text-[#cbd5e1] transition-colors duration-100">{row.feature}</div>
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
