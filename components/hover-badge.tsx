'use client '

import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { Badge } from '@/components/badge'
import { useMounted } from '@/hooks/use-mounted'
import { useState } from 'react'

export default function HoverBadge() {
    const mounted = useMounted()

    if (!mounted) return null // SSR else it'll throw a hydration mismatch error
    return (
        <HoverCard openDelay={100}>
            <HoverCardTrigger className='cursor-pointer'>
                <div className='relative inline-block'>
                    <div className='absolute inset-0 bg-rose-600 rounded-[8px] animate-ping2'></div>
                    <Badge className='font-semibold text-sm py-1 px-2 max-w-max max-h-max inline-block translate-y-[0rem] dark:translate-y-[-0.1rem] bg-rose-600'>
                        QuantHive
                    </Badge>
                </div>
            </HoverCardTrigger>
            <HoverCardContent>
                stuff
            </HoverCardContent>
        </HoverCard>
    )
}