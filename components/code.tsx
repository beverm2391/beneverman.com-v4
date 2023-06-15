import { cn } from "@/lib/utils"

export default function Code({ className, ...props }) {
    return (
        <code
            className={cn(
                "relative rounded border border-color bg-gray-200 dark:bg-gray-800 py-[0.2rem] px-[0.3rem] font-mono text-sm text-slate-600 dark:text-slate-100",
                className
            )}
            {...props}
        />
    )
}