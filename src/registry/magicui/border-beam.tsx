'use client'

import { cn } from '@/lib/utils'

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
}

/**
 * Renders an animated light that travels around the border of the parent element.
 * Parent must have `position: relative` and `overflow: hidden` (or `rounded-*`).
 */
export function BorderBeam({
  className,
  duration = 15,
  delay = 0,
  colorFrom = '#3b82f6',
  colorTo = '#1e40af',
  borderWidth = 1.5,
}: BorderBeamProps) {
  const id = `bb-${colorFrom.replace('#', '')}-${colorTo.replace('#', '')}`

  return (
    <svg
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full rounded-[inherit]',
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id={`${id}-grad`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
          <stop offset="0%" stopColor={colorFrom} stopOpacity="0" />
          <stop offset="40%" stopColor={colorFrom} stopOpacity="1" />
          <stop offset="60%" stopColor={colorTo} stopOpacity="1" />
          <stop offset="100%" stopColor={colorTo} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect
        className="border-beam-rect"
        x={borderWidth / 2}
        y={borderWidth / 2}
        width="calc(100% - var(--bw))"
        height="calc(100% - var(--bw))"
        rx="10"
        ry="10"
        fill="none"
        stroke={`url(#${id}-grad)`}
        strokeWidth={borderWidth}
        strokeDasharray="60 10000"
        style={
          {
            '--bw': `${borderWidth}px`,
            animation: `border-beam-travel ${duration}s linear infinite`,
            animationDelay: `${-delay}s`,
          } as React.CSSProperties
        }
      />
    </svg>
  )
}
