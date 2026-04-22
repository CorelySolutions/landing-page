'use client'

import React, { useRef, forwardRef } from 'react'
import { Brain, LayoutDashboard, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedBeam } from '@/registry/magicui/animated-beam'
import { FadeInUp } from './shared'

const BrandIcons = {
  googleSheets: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z" />
    </svg>
  ),
  googleDrive: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z" />
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

export function SolutionSection() {
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
