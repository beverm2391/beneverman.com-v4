import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

type IndicatorProps = {
    status: 'active' | 'inactive'
    badge?: boolean
    className?: string
    props?: any
    children?: React.ReactNode
}

export const Indicator = (props: IndicatorProps) => {
    return (
        <div
            className={cn(
                'text-xs font-medium transition-all rounded-lg opacity-90 max-w-max flex flex-row gap-2 justify-center items-center',
                'text-gray-600 dark:text-gray-300',
                'border-gray-700',
                props.badge && 'px-2 py-1 bg-gray-100 dark:bg-neutral-800 shadow-sm dark:shadow-none dark:border-[1.5px] dark:border-gray-600',
                props.className ? props.className : '',
            )}
            {...props}
        >
            <Circle className={cn(
                "h-2.5 w-2.5",
                props.status === 'inactive' && 'fill-red-500 text-red-500',
                props.status === 'active' && 'fill-green-500 text-green-500',
            )} />
            {props.children}
        </div>
    )
};