import { Drawer } from 'vaul';
import { MainNavItem } from "types"
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BsList } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { FADE_BLUR_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/config/animations';

interface MobileNavProps {
    items: MainNavItem[]
    children?: React.ReactNode
}

export default function MobileNav({ items, children }: MobileNavProps) {
    // useLockBody();
    return (
        <Drawer.Root>
            <Drawer.Trigger
                className='md:hidden'
            // asChild
            >
                <BsList className='w-6 h-6' />
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/10 transition-all" />
                <Drawer.Content className="flex flex-col fixed bottom-0 left-0 right-0 bg-white h-[calc(100dvh-7rem)] dark:bg-zinc-800">
                    <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 dark:bg-gray-500 mt-4" />
                    <nav className="p-8">
                        <motion.ul
                            className="grid grid-flow-row auto-rows-max text-2xl font-semibold text-zinc-900 dark:text-zinc-100"
                            initial="hidden"
                            animate="show"
                            variants={{
                                show: {
                                    transition: {
                                        delayChildren: 0.2,
                                        staggerChildren: 0.07,
                                    },
                                },
                            }}
                        >
                            {items.map((item, index) => (
                                <motion.li
                                    variants={FADE_UP_ANIMATION_VARIANTS}
                                    key={index}
                                >
                                    <Drawer.Close asChild>
                                        <Link
                                            href={item.disabled ? "#" : item.href}
                                            className={cn(
                                                "flex w-full items-center rounded-md p-2 hover:underline",
                                                item.disabled && "cursor-not-allowed opacity-60"
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    </Drawer.Close>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>
                    {children}
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>
    );
}