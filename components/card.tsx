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
        "group relative rounded-lg border border-gray-200 dark:border-gray-400 bg-white dark:bg-neutral-900 p-6",
        "dark:hover:ring-1 dark:ring-gray-300",
        disabled && "cursor-not-allowed opacity-60 dark:hover:ring-0",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2 [&>p]:text-gray-600 dark:[&>p]:text-gray-300 [&>h4]:!mt-0 [&>h3]:!mt-0">
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
