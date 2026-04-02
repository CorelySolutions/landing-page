'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface WordRotateProps {
  words: string[]
  duration?: number
  className?: string
}

export function WordRotate({ words, duration = 2800, className }: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, duration)
    return () => clearInterval(interval)
  }, [words.length, duration])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        className={cn('inline-block', className)}
        initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  )
}
