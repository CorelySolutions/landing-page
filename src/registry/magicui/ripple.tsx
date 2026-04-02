import { cn } from '@/lib/utils'

interface RippleProps {
  mainCircleSize?: number
  numCircles?: number
  className?: string
}

export function Ripple({
  mainCircleSize = 180,
  numCircles = 6,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden',
        className,
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => (
        <span
          key={i}
          className="absolute rounded-full border border-[#3b82f6]/25"
          style={{
            width: mainCircleSize + i * 70,
            height: mainCircleSize + i * 70,
            animation: 'ripple-out 4s ease-out infinite',
            animationDelay: `${i * 0.65}s`,
          }}
        />
      ))}
    </div>
  )
}
