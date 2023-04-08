import { cn } from "@/lib/utils"

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
        "border-slate-900 dark:border-slate-400/70 bg-slate-50 dark:bg-neutral-900/50": type === "default",
        "border-red-900 dark:border-red-400/70 bg-red-50 dark:bg-red-900/50": type === "danger",
        "border-yellow-900 dark:border-yellow-400/70 bg-yellow-50 dark:bg-yellow-900/50": type === "warning",
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  )
}
