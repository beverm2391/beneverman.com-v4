'use client'

import Link from "next/link"
import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations"
import { formatDate } from "@/lib/utils"
import { allPosts, Post } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

// !! =================================== Change Data in `config/reading-list` ===================================

const GeneralCardSimple = ({ post }: { post: Post }) => {
    return (
        <a href={post.slug} className='cursor-pointer'>
            <div className='mb-2 flex flex-col sm:flex-row sm:items-center text-black dark:text-white hover:text-blue-600 dark:hover:text-gray-400'>
                {/* <Icons.FaFileAlt className='flex items-center justify-center text-gray-800 dark:text-gray-200 h-4 w-4' /> */}
                <div>
                    <p className='inline font-[400]'>
                        {post.title}
                    </p>
                    {post.date && (
                        <p className="inline text-sm text-gray-600 dark:text-gray-400 ml-2">
                            {formatDate(post.date)}
                        </p>
                    )}
                </div>
            </div>
        </a>
    )
}

export default function PostList() {
    const days = 180
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    // sort and filter to get posts within the last `days` days
    const posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    }).filter((post) => {
        const postDate = new Date(post.date);
        return postDate >= cutoff && post.published;
    })

    return (
        <div>
            <motion.h3
                className={cn(
                    'text-4xl text-gray-800 dark:text-gray-200 mb-4',
                    'font-display tracking-wide font-semibold'
                )}
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                Featured Writing:
            </motion.h3>
            <ul className='flex flex-col gap-0'>
                {posts.map((post, index) => (
                    <motion.li
                        key={index}
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        <GeneralCardSimple post={post} />
                    </motion.li>
                ))}
            </ul>
            <motion.p
                className='mt-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-400'
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <Link href="/blog">
                    See the full list here{' '}
                    <ArrowRight className='inline h-4 w-4' />
                </Link>
            </motion.p>
        </div>
    )
}