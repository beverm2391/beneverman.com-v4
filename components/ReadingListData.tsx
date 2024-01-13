'use client'

import Link from "next/link"
import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations"
import { formatDate } from "@/lib/utils"
import { ParsedResult } from "@/types/reading-list"
import { cn } from "@/lib/utils"
import { FaStarOfLife } from "react-icons/fa";
import { ArrowRight } from "lucide-react"

// !! =================================== CARD  ===================================
const GeneralCardSimple = ({ work }: { work: ParsedResult }) => {
    return (
        <a
            href={work.url}
            className='cursor-pointer text-black dark:text-white hover:text-blue-600 dark:hover:text-gray-400'
            target="_blank"
        >
            <div className={cn('gap-2 mb-[2px] flex flex-row items-center',
                // 'hover:scale-[1.01] hover:translate-x-1 transition-all duration-1',
            )}>
                {/* <Icons.FaFileAlt className='flex items-center justify-center text-gray-800 dark:text-gray-200 h-4 w-4' /> */}
                <div>
                    {work.comments && <FaStarOfLife className='h-3 w-3 mr-2 inline rotate-[-5deg] translate-y-[-1px]' />}
                    <p className='inline font-[400]'>
                        {work.name}
                    </p>
                    <p className='ml-2 text-sm text-gray-500 dark:text-gray-400 inline'>
                        {work.author}
                    </p>
                    {work.type &&
                        <Badge className='inline' type={work.type}>
                            {work.type}
                        </Badge>
                    }
                </div>
            </div>
            {work.comments &&
                <div className={cn('mb-4 bg-transparent justify-center items-center mt-4 text-sm border border-gray-300 dark:border-gray-400 rounded-md p-2 shadow-sm',
                'text-black dark:text-white',
                )}>
                    {/* <FaStarOfLife className='h-3 w-3 inline rotate-[-5deg] text-gray-700 dark:text-gray-300' /> */}
                    <p className='inline ml-[4px]'>{work.comments}</p>
                </div>
            }
        </a>
    )
}

// !! =================================== Badge  ===================================
export function Badge({ children, ...props }: any) {

    const mapColor = (type: string) => {
        const colorMap = {
            'book': 'bg-blue-400/50 outline-blue-400',
            'article': 'bg-green-400/50 outline-green-400',
            'journal': 'bg-yellow-400/50 outline-yellow-400',
            'essay': 'bg-red-400/50 outline-red-400',
        }
        return colorMap[type] ? colorMap[type] : 'bg-gray-500'
    }

    return (
        <span
            {...props}
            className={cn('px-2 py-1 ml-3 inline text-xs transition-all rounded-md text-black dark:text-white font-medium translate-y-[.2rem]',
                mapColor(props.type),
                props.className
            )}
        >
            {children}
        </span>
    )
}

// !! =================================== ReadingListFeatured (for homepage)  ===================================
export function ReadingListFeatured({ works }: { works: ParsedResult[] }) {
    const hasComments = works.filter(work => work.comments && work.comments.length > 0 && formatDate(work.createdTime).split(' ')[0] === formatDate(new Date().toString()).split(' ')[0])
    const currentMonthAndYear = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date())

    return (
        <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex flex-col mb-4"
        >
            <motion.h3
                className={cn('text-4xl text-gray-800 dark:text-gray-200 mb-2',
                    'font-display tracking-wide',
                    // 'font-bold'
                )}
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                Featured Reading:
            </motion.h3>
            <p className='italic mb-4'>
                (from {currentMonthAndYear})
            </p>
            {hasComments.length === 0 ?
                <p className='mt-4 text-gray-600 dark:text-gray-300'>
                    No featured reads this month.
                </p>
                :
                <ul className='flex flex-col gap-2' >
                    {hasComments.map((work, i) => {
                        return (
                            <motion.li
                                variants={FADE_UP_ANIMATION_VARIANTS}
                                key={i}
                            >
                                <GeneralCardSimple work={work} />
                            </motion.li>
                        )
                    })}
                </ul>
            }
            <motion.p
                className='mt-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-400'
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <Link href="/reading-list">
                    See the full list here{' '}
                    <ArrowRight className='inline h-4 w-4' />
                </Link>
            </motion.p>
        </motion.div>
    )
}

// ! =================================== Component  ===================================
export function ReadingListData({ works }: { works: ParsedResult[] }) {

    const byMonth = works.reduce((acc, work) => {
        const month = formatDate(work.createdTime).split(' ')[0]
        if (!acc[month]) {
            acc[month] = []
        }
        acc[month].push(work)
        return acc
    }, {} as { [key: string]: ParsedResult[] })

    // console.log('byMonth', byMonth)

    const countThisMonth = (month: string, works: ParsedResult[]) => {
        works = works.filter(work => {
            return formatDate(work.createdTime).split(' ')[0] === month
        })

        const count = {
            books: 0,
            articles: 0,
            journals: 0,
            essays: 0,
        }

        works.forEach(work => {
            if (work.type === 'book') {
                count.books++
            } else if (work.type === 'article') {
                count.articles++
            } else if (work.type === 'journal') {
                count.journals++
            } else if (work.type === 'essay') {
                count.essays++
            }
        })
        return count
    }

    return (
        <motion.div
            className='flex flex-col gap-8'
            initial="hidden"
            animate="show"
            // viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.03,
                    },
                },
            }}
        >
            <div className='flex flex-col gap-0'>
                <div className="flex flex-col mb-4">
                    <motion.h3
                        className={cn('text-5xl sm:text-6xl text-gray-800 dark:text-gray-200 mb-8',
                            'font-display tracking-wide',
                        )}
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        Reading List
                    </motion.h3>
                    <motion.p
                        className='mb-8 text-xl text-gray-600 dark:text-gray-300 font-medium'
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        The books, articles, journals, and essays that I've read recently, organized by month. Ocassionally I'll include a comment or two about the work - those are usually my favorite reads.
                        {/* (marked with <FaStarOfLife className='h-3 w-3 inline text-gray-700 dark:text-gray-300 rotate-[-5deg]'/>) */}
                    </motion.p>
                </div>
                <div className='flex flex-col gap-0'>
                    {Object.keys(byMonth).map((month, i) => {
                        return (
                            <div
                                className='flex flex-col gap-2 mb-4'
                                key={i}
                            >
                                <motion.div
                                    className='flex flex row items-center gap-2 font-medium'
                                    variants={FADE_UP_ANIMATION_VARIANTS}
                                >
                                    <hr className='w-1/2 border-gray-300 dark:border-gray-400' />
                                    <p className='text-sm text-gray-800 dark:text-gray-200'>{month}</p>
                                    <hr className='w-1/2 border-gray-300 dark:border-gray-400' />
                                </motion.div>
                                {/* <div className='flex flex-row p-0 mb-2'>
                                    <Badge className='inline ml-0' type='book'>Books: {countThisMonth(month, works).books}</Badge>
                                    <Badge className='inline' type='article'>Articles: {countThisMonth(month, works).articles}</Badge>
                                    <Badge className='inline' type='journal'>Journals: {countThisMonth(month, works).journals}</Badge>
                                    <Badge className='inline' type='essay'>Essays: {countThisMonth(month, works).essays}</Badge>
                                </div> */}
                                <ul className='flex flex-col gap-2' >
                                    {byMonth[month].map((work, i) => {
                                        return (
                                            <motion.li
                                                variants={FADE_UP_ANIMATION_VARIANTS}
                                                key={i}
                                            >
                                                <GeneralCardSimple work={work} />
                                            </motion.li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.div >
    )
}