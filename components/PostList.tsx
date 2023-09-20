'use client'

import Link from "next/link"
import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations"
import { formatDate } from "@/lib/utils"
import { allPosts, Post } from "contentlayer/generated"
import { compareDesc } from "date-fns"

// !! =================================== Change Data in `config/reading-list` ===================================

const GeneralCardSimple = ({ post }: { post: Post }) => {
    return (
        <a href={post.slug} className='cursor-pointer'>
            <div className='mb-2 flex flex-col sm:flex-row sm:items-center hover:scale-[1.01] hover:translate-x-1 transition-all duration-1'>
                {/* <Icons.FaFileAlt className='flex items-center justify-center text-gray-800 dark:text-gray-200 h-4 w-4' /> */}
                <p className='inline text-black dark:text-white font-[400]'>
                    {post.title}
                </p>
                {post.date && (
                    <p className="inline text-sm text-gray-600 dark:text-gray-400 sm:ml-2">
                        {formatDate(post.date)}
                    </p>
                )}
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
                className='text-2xl text-gray-800 dark:text-gray-200 font-display tracking-wide font-semibold mb-4'
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                Recent Writing:
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
        </div>
    )
}