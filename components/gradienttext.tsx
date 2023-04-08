import { cn } from '@/lib/utils'

export default function GradientText(props) {
    return (
        <span
            {...props}
            className={cn(
                props.gradient === 0 ? '' :
                'decoration-clone bg-clip-text text-transparent bg-gradient-to-r',
                props.gradient === 1 ? 'from-yellow-400 via-red-500 to-pink-500' : '',
                props.gradient === 2 ? 'from-purple-400 via-pink-500 to-red-500' : '',
                props.gradient === 3 ? 'from-green-400 to-blue-500' : '',
                { [props.className]: props.className}
            )}
        >
            {props.children}
        </span>
    )
}