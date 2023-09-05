"use client"

import { Mdx } from "@/components/mdx"
import "@/styles/mdx.css"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { absoluteUrl, formatDate } from "@/lib/utils"
import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations"

export default function PageContent({ post, authors }: { post: any, authors: any }) {
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
                        staggerChildren: 0.05,
                    },
                },
            }}
        >
            <article className="container relative max-w-3xl py-6 lg:py-10">
                <Link
                    href="/blog"
                    className="absolute top-14 left-[-200px] hidden items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-500 xl:inline-flex"
                >
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    See all posts
                </Link>
                <motion.div
                    className='mb-8'
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    {post.date && (
                        <time dateTime={post.date} className="block text-sm text-slate-600 dark:text-slate-400">
                            Published on {formatDate(post.date)}
                        </time>
                    )}
                    <h1 className="font-display mt-2 inline-block text-4xl font-extrabold leading-tight text-slate-800 dark:text-white lg:text-5xl">
                        {post.title}
                    </h1>
                    {authors?.length ? (
                        <div className="mt-4 flex space-x-4">
                            {authors.map((author) =>
                                author ? (
                                    <Link
                                        key={author._id}
                                        href={`https://twitter.com/${author.twitter}`}
                                        className="flex items-center space-x-2 text-sm"
                                    >
                                        <Image
                                            src={author.avatar}
                                            alt={author.title}
                                            width={42}
                                            height={42}
                                            className="rounded-full"
                                        />
                                        <div className="flex-1 text-left leading-tight">
                                            <p className="font-medium text-slate-800 dark:text-white">{author.title}</p>
                                            <p className="text-[12px] text-slate-600 dark:text-slate-400">
                                                @{author.twitter}
                                            </p>
                                        </div>
                                    </Link>
                                ) : null
                            )}
                        </div>
                    ) : null}
                </motion.div>
                {post.image && (
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={720}
                        height={405}
                        className="my-8 rounded-md border border-color bg-slate-200 dark:bg-neutral-800 transition-colors group-hover:border-slate-900"
                        priority
                    />
                )}
                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    <Mdx code={post.body.code} />
                </motion.div>
                <hr className="my-4 border-color" />
                <div className="flex justify-center py-6 lg:py-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-500"
                    >
                        <Icons.chevronLeft className="mr-2 h-4 w-4" />
                        See all posts
                    </Link>
                </div>
            </article>
        </motion.div>
    )
}