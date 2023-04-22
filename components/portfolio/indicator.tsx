import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export const Indicator = ({status, ...props }) => {
    return (
        <div
            className={cn(
                'text-xs transition-all rounded-lg opacity-90 flex flex-row gap-2 justify-center items-center',
                'text-gray-600 dark:text-gray-300',
                'px-2 py-1 bg-gray-100 shadow-sm dark:bg-gray-800 dark:border-[0px] border-gray-700'
                // 'border',
            )}
            {...props}
        >
            {props.children}
            <Circle className={cn(
                "h-2.5 w-2.5",
                status === 'inactive' && 'fill-red-500 text-red-600',
                status === 'active' && 'fill-green-500 text-green-600',
                )} />
        </div>
    )
};