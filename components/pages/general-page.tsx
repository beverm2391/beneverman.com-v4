"use client"

import { Mdx } from "@/components/mdx"
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations"
import "@/styles/mdx.css"
import { motion } from "framer-motion"

export default function Page({ page }: { page: any }) {
    return (
        <motion.div
            className="container max-w-2xl py-6 lg:py-10"
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.02,
                    },
                },
            }}
        >
            <motion.div
                className="space-y-4"
                variants={FADE_UP_ANIMATION_VARIANTS}
                >
                <motion.h1
                    className="inline-block text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white lg:text-5xl"
                    variants={FADE_UP_ANIMATION_VARIANTS}    
                >
                    {page.title}
                </motion.h1>
                {page.description && (
                    <motion.p
                    className="text-xl text-slate-600 dark:text-slate-300"
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        {page.description}
                    </motion.p>
                )}
            </motion.div>
            {/* <hr className="my-4 border-color" /> */}
            <Mdx code={page.body.code} />
        </motion.div>
    )
}