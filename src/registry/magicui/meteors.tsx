'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface MeteorsProps {
  number?: number
  className?: string
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([])

  useEffect(() => {
    const styles = Array.from({ length: number }, () => ({
      top: '-5%',
      left: `${Math.floor(Math.random() * 100)}%`,
      animationDelay: `${Math.random() * 1.5 + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 6)}s`,
    }))
    setMeteorStyles(styles)
  }, [number])

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            'pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-300 shadow-[0_0_0_1px_#00000008]',
            'before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-[#94a3b8] before:to-transparent before:content-[""]',
            className,
          )}
          style={style}
        />
      ))}
    </>
  )
}
