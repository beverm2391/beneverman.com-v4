import { cn } from "@/lib/utils"
import { FC, memo } from "react"


export const Code: FC<any> = memo(({ className, ...props }) => {
    return (
        <code
            className={cn(
                "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm bg-slate-200 dark:bg-gray-800 dark:text-gray-100",
                className
            )}
            {...props}
        />
    )
})