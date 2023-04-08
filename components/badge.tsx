import { cn } from "@/lib/utils"

export function Badge({ children, ...props }: any) {
    const badgeColors = [
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-red-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-indigo-500',
        'bg-gray-500',
    ]

    const gradients = [
        'from-yellow-400 via-red-500 to-pink-500',
        'from-purple-400 via-pink-500 to-red-500',
        'from-green-400 to-blue-500',
    ]

    const gradientbg = 'decoration-clone bg-gradient-to-r'
    const gradienttext = 'text-transparent bg-clip-text'

    const randomColor = badgeColors[Math.floor(Math.random() * badgeColors.length)]
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]

    return (
        <p
            {...props}
            className={cn('px-2 py-1 transition-all rounded-lg text-white font-medium translate-y-[.2rem] shadow-sm',
                props.color ? props.color :
                    props.gradient ? randomGradient : randomColor,
                props.gradient ? gradientbg : '',
                props.className
            )}
        >
            {children}
        </p>
    )
}