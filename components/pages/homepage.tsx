"use client"

import ExternalLink from "@/components/ExternalLink";
import { motion } from "framer-motion"
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations";
import PostList from "@/components/PostList"
import { ParsedResult } from "@/types/reading-list";
import { ReadingListFeatured } from "../ReadingListData";
import { cn } from "@/lib/utils";

export default function HomePage({ works } : { works: ParsedResult[] }) {
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
            <motion.div className='flex flex-row items-center'>
                <motion.h2
                    className={cn("text-5xl sm:text-7xl",
                    //  'font-display',
                    // "font-helvetica font-semibold tracking-tight",
                    "heading-text",
                     "bg-gradient-to-tr dark:from-white dark:via-zinc-200 dark:to-white from-black via-zinc-800 to-black bg-clip-text text-transparent"
                    )}
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    Ben Everman
                </motion.h2>
                {/* <motion.div
                        className='flex flex-col justify-center items-center ml-6'
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        <Image src={avatar} alt="Ben Everman" width={60} height={60}
                            className={cn(
                                'rounded-full',
                                // 'border-[2px] ring-[1px] border-blue-500 ring-blue-300',
                                'border-[0px] border-white dark:border-black',
                            )}
                        />
                    </motion.div> */}
            </motion.div>
            {/* <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    <p>
                        I’m an MBA student set to graduate in Spring 2024. After graduation, I’d like to contribute to a company leveraging ML as a data scientist or software engineer. I’d do well in a high-ambiguity environment, such as a startup trying to go 0 to 1 with new technology.
                    </p>
                </motion.div> */}
            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <ul className='list-disc ml-4 leading-8'>
                    <li>See my code <ExternalLink href="https://www.github.com/beverm2391" arrow={false}>here</ExternalLink>.</li>
                    <li>Read about my experiments <ExternalLink href="/blog" arrow={false} target="_self">here</ExternalLink>.</li>
                    {/* <li>View my resume <ExternalLink href="/" arrow={false}>here</ExternalLink>.</li> */}
                    <li>Connect with me on <ExternalLink href="https://www.linkedin.com/in/beneverman/" arrow={false}>LinkedIn</ExternalLink></li>
                    <li>Contact me <ExternalLink href="mailto:evermanben@gmail.com" arrow={false} target="_self">here</ExternalLink>.</li>
                </ul>
            </motion.div>
            {/* <Separator/> */}
            <PostList />
            {/* <ReadingListSimple /> */}
            <ReadingListFeatured works={works} />
        </motion.div>
    )
}