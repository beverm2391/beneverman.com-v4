import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export const Indicator = ({status, ...props }) => {
    return (
        <div
            className={cn(
                'text-xs font-medium transition-all rounded-lg opacity-90 flex flex-row gap-2 justify-center items-center',
                'text-gray-600 dark:text-gray-400',
                'border-gray-700',
                // 'bg-gray-100 dark:bg-gray-800',
                // 'border',
                // 'px-2 py-1',
            )}
            {...props}
        >
            <Circle className={cn(
                "h-2.5 w-2.5",
                status === 'inactive' && 'fill-red-500 text-red-500',
                status === 'active' && 'fill-green-500 text-green-500',
                )} />
                {props.children}
        </div>
    )
};