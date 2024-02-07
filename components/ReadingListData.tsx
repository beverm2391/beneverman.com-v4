'use client'

import Link from "next/link"
import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations"
import { formatDate } from "@/lib/utils"
import { ParsedResult } from "@/types/reading-list"
import { cn } from "@/lib/utils"
import { FaStarOfLife, FaStar } from "react-icons/fa";
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
                    {/* {(work.comments && work.status == 'Done') && <FaStar className='h-3 w-3 mr-2 inline rotate-[-5deg] translate-y-[-1px]' />} */}
                    {work.comments && <FaStar className='h-3 w-3 mr-2 inline rotate-[-5deg] translate-y-[-1px]' />}
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
                    {/* <FaStar className='h-3 w-3 inline rotate-[-5deg] text-gray-700 dark:text-gray-300' /> */}
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
    // Assuming "date" is in "YYYY-MM-DD" format
    const currentMonthAndYear = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date());
    const currentYearMonth = new Date().toISOString().slice(0, 7); // "YYYY-MM"

    const hasComments = works.filter(work => {
        return work.comments && work.comments.length > 0 && work.date && work.date.startsWith(currentYearMonth);
    });

    return (
        <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex flex-col mb-4"
        >
            <motion.h3
                className={cn('text-4xl text-gray-800 dark:text-gray-200 mb-2', "heading-text")}
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
                    {hasComments.map((work, index) => (
                        <motion.li
                            variants={FADE_UP_ANIMATION_VARIANTS}
                            key={index}
                        >
                            <GeneralCardSimple work={work} />
                        </motion.li>
                    ))}
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
    );
}

export function ReadingListInProgress({ works }: { works: ParsedResult[] }) {
    const inProgress = works.filter(work => work.status === 'In progress');
    return (
        <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex flex-col mb-4"
        >
            <motion.h3
                className={cn('text-4xl text-gray-800 dark:text-gray-200 mb-2', "heading-text")}
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                Currently Reading:
            </motion.h3>
            {inProgress.length === 0 ?
                <p className='mt-4 text-gray-600 dark:text-gray-300'>
                    Nothing! Giving the brain a break.
                </p>
                :
                <ul className='flex flex-col gap-2 mt-4' >
                    {inProgress.map((work, index) => (
                        <motion.li
                            variants={FADE_UP_ANIMATION_VARIANTS}
                            key={index}
                        >
                            <GeneralCardSimple work={work} />
                        </motion.li>
                    ))}
                </ul>
            }
            <motion.p
                className='mt-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-400'
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <Link href="/reading-list">
                    See past reads on the bookshelf{' '}
                    <ArrowRight className='inline h-4 w-4' />
                </Link>
            </motion.p>
        </motion.div>
    );
}

function getMonthName(dateString: string): string {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dateParts = dateString.split('-'); // Splits the dateString into [YYYY, MM, DD]
    const monthIndex = parseInt(dateParts[1], 10) - 1; // Converts MM to a zero-based index
    return monthNames[monthIndex]; // Returns the month name
}

// ! =================================== Component  ===================================
export function ReadingListData({ works }: { works: ParsedResult[] }) {

    const byMonth = works.filter(work => work.status !== 'In progress').reduce((acc, work) => {
        // Extracts the year and month as 'YYYY-MM' format then converts month number to month name
        const yearMonth = work.date ? work.date.split('-').slice(0, 2) : ['Unknown', '01']; // ['YYYY', 'MM']
        const monthName = getMonthName(yearMonth.join('-')); // Converts 'YYYY-MM' to month name
        const yearMonthName = `${yearMonth[0]} ${monthName}`; // Combines year and month name

        if (!acc[yearMonthName]) {
            acc[yearMonthName] = [];
        }
        acc[yearMonthName].push(work);
        return acc;
    }, {} as { [key: string]: ParsedResult[] });

    const countThisMonth = (targetMonthName: string, works: ParsedResult[]) => {
        // Filter works for the specified month name
        works = works.filter(work => {
            if (!work.date) return false;
            const yearMonth = work.date.split('-').slice(0, 2).join('-'); // 'YYYY-MM'
            const monthName = getMonthName(yearMonth); // Get month name from 'YYYY-MM'
            const year = work.date.split('-')[0]; // Extract year
            return `${year} ${monthName}` === targetMonthName; // Match against 'Year MonthName'
        });

        const count = {
            books: 0,
            articles: 0,
            journals: 0,
            essays: 0,
        };

        works.forEach(work => {
            if (work.type === 'book') {
                count.books++;
            } else if (work.type === 'article') {
                count.articles++;
            } else if (work.type === 'journal') {
                count.journals++;
            } else if (work.type === 'essay') {
                count.essays++;
            }
        });
        return count;
    };

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
                            // 'font-display tracking-wide',
                            'heading-text'
                        )}
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        Bookshelf
                    </motion.h3>
                    <motion.p
                        className='mb-8 text-gray-600 dark:text-gray-300'
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
                                    className='flex flex-row items-center gap-2 font-medium'
                                    variants={FADE_UP_ANIMATION_VARIANTS}
                                >
                                    <hr className='w-1/2 border-gray-300 dark:border-gray-400' />
                                    <p className='text-sm text-gray-800 dark:text-gray-200'>{month.split(" ")[1]}</p>
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