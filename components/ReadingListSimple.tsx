'use client'

import { Card, CardDescription, CardTitle } from "./ui/card"
import Link from "next/link"
import { Icons } from "./icons"
import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations"
import { Work } from "@/types/reading-list"
import { list } from "@/config/reading-list"
import { formatDate } from "@/lib/utils"

// !! =================================== Change Data in `config/reading-list` ===================================
const GeneralCardSimple = ({ work }: { work: Work }) => {
    return (
        <a href={work.url} className='cursor-pointer'>
            <div className='gap-2 mb-2 flex flex-row items-center hover:scale-[1.01] hover:translate-x-1 transition-all duration-1'>
                {/* <Icons.FaFileAlt className='flex items-center justify-center text-gray-800 dark:text-gray-200 h-4 w-4' /> */}
                <div>
                    <p className='inline text-black dark:text-white font-[400]'>
                        {work.title}
                    </p>
                    <p className='ml-2 text-sm text-gray-500 dark:text-gray-400 inline'>
                        {work.author}
                    </p>
                </div>
            </div>
        </a>
    )
}


export default function ReadingListSimple() {
    const works = list.data
    const lastUpdated = list.lastUpdated
    return (
        <div>
            {/* <motion.h3
                className="text-xl mb-2 text-gray-600 dark:text-gray-300"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                Recent Reads:
            </motion.h3> */}
            <div className='flex flex-col gap-0'>
                <motion.h3
                    className='text-2xl text-gray-800 dark:text-gray-200 font-display tracking-wide font-semibold mb-1'
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    Recent Reads:
                </motion.h3>
                <motion.p
                    className='text-gray-500 dark:text-gray-400 text-sm mb-4 italic'
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    last updated: {formatDate(lastUpdated)}
                </motion.p>
                <ul
                    className='flex flex-col gap-0'
                >
                    {works.map((work, i) => {
                        return (
                            <motion.li
                                variants={FADE_UP_ANIMATION_VARIANTS}
                                key={i}
                            >
                                <GeneralCardSimple key={i} work={work} />
                            </motion.li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}