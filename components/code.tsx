import { cn } from "@/lib/utils"

export default function Code({ className, ...props }) {
    return (
        <code
            className={cn(
                "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
                className
            )}
            {...props}
        />
    )
}
