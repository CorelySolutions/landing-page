import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'animate-gradient bg-gradient-to-r from-[#3b82f6] via-[#a78bfa] to-[#3b82f6] bg-[length:200%_auto] bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </span>
  )
}
