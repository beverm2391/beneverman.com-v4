import Link from "next/link"

import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string
  disabled?: boolean
}

export function Card({
  href,
  className,
  children,
  disabled,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-lg border-2 border-slate-200 dark:border-slate-400 bg-white dark:bg-neutral-900 p-6 shadow-md transition-shadow hover:shadow-lg",
        "dark:hover:ring-1 dark:ring-slate-300",
        disabled && "cursor-not-allowed opacity-60 dark:hover:ring-0",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2 [&>p]:text-slate-600 dark:[&>p]:text-slate-300 [&>h4]:!mt-0 [&>h3]:!mt-0">
          {children}
        </div>
      </div>
      {href && (
        <Link href={disabled ? "#" : href} className="absolute inset-0">
          <span className="sr-only">View</span>
        </Link>
      )}
    </div>
  )
}
