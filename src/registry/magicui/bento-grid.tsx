import { ArrowRightIcon } from "lucide-react"
import { ComponentPropsWithoutRef, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

interface BentoCardProps {
  name: string
  className: string
  background: ReactNode
  description: string
  href?: string
  cta?: string
}

const BentoGrid = ({ children, className }: BentoGridProps) => (
  <div className={cn("grid w-full auto-rows-[20rem] grid-cols-3 gap-4", className)}>
    {children}
  </div>
)

const BentoCard = ({ name, className, background, description, href = "#", cta = "Learn more" }: BentoCardProps) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col overflow-hidden rounded-xl",
      "border border-[oklch(0.25_0.03_270)] bg-[oklch(0.16_0.02_280)]",
      "transform-gpu",
      className,
    )}
  >
    <div className="absolute inset-0">
      {background}
      {/* gradient mask so background fades out before text */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.16_0.02_280)]" style={{ top: '35%' }} />
    </div>
    <div className="pointer-events-none relative z-10 mt-auto flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <h3 className="text-base font-semibold text-[oklch(0.92_0.01_280)]">
        {name}
      </h3>
      <p className="text-sm text-[oklch(0.5_0.01_280)]">{description}</p>
    </div>
    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-[oklch(0.65_0.15_270)] hover:text-[oklch(0.8_0.15_270)]">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[oklch(0.5_0.1_270)/5]" />
  </div>
)

export { BentoGrid, BentoCard }
