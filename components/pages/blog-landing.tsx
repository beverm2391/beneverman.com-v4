"use client"

import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { cn } from "@/lib/utils"
import { formatDate } from "@/lib/utils"
import { motion } from "framer-motion"
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations"


export default function PageContent({ posts }) {
    // const posts = allPosts
    //     .filter((post) => post.published)
    //     .sort((a, b) => {
    //         return compareDesc(new Date(a.date), new Date(b.date))
    //     })
    return (
        <motion.div
            className="flex-1 space-y-4"
            initial="hidden"
            animate="show"
            // viewport={{ once: false }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.02,
                    },
                },
            }}
        >
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div>
                    <motion.h1
                        className={cn("inline-block text-4xl font-bold font-display",
                            "dark:text-white text-gray-800 lg:text-6xl mb-4"
                        )}variants={FADE_UP_ANIMATION_VARIANTS}
                        
                    >
                        Blog
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-300 font-medium"
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        Code experiments, writing, thoughts.
                    </motion.p>
                </div>
            </div>
            <div>
                {posts?.length ? (
                    <motion.div
                        className="flex gap-4 flex-col mt-12"
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        {posts.map((post, index) => (
                            <article
                                key={post._id}
                                className="group relative flex flex-col mt-1"
                            >
                                {/* {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={804}
                      height={452}
                      className="rounded-md border border-gray-200 bg-gray-200 transition-colors group-hover:border-gray-900"
                      priority={index <= 1}
                    />
                  )} */}
                                <h2 className="">{post.title}</h2>
                                {/* {post.description && (
                    <p className="text-gray-600 dark:text-gray-400">{post.description}</p>
                  )} */}
                                {post.date && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {formatDate(post.date)}
                                    </p>
                                )}
                                <Link href={post.slug} className="absolute inset-0">
                                    <span className="sr-only">View Article</span>
                                </Link>
                            </article>
                        ))}
                    </motion.div>
                ) : (
                    <p>No posts published.</p>
                )}
            </div>
        </motion.div>
    )
}