'use client'

import { motion } from "framer-motion";
import { Badge } from "../badge";

const quotes = [
    {
        text: "He who speaks does not know. He who knows does not speak.",
        author: "Lao Tzu"
    },
    {
        text: "I knew today was a bad day to quit sniffing glue.",
        author: "Airplane"
    },
    {
        text: "I'd rather have a bottle in front of me than a frontal lobotomy.",
        author: "Tom Waits"
    },
    {
        text: "The worst thing about prison was the Dementors. They were flying all over the place and they were scary and then they'd come down and they'd suck the soul out of your body and it hurt!",
        author: "Prison Mike"
    },
    {
        text: "Software and cathedrals are much the same. First we build them, then we pray.",
        author: "Sam Redwine"
    }
];

function Quote({ text, author }: { text: string; author: string }) {
    return (
        <div className="flex flex-row gap-4 justify-center px-4 overflow-y-visible">
            {/* <Image
                className="object-contain object-center"
                src={`/logos/${icon}`}
                alt={name}
                width={180}
                height={120}
            /> */}
            <p className='font-serif italic whitespace-nowrap'>
                "{text}"
            </p>
            <p className='whitespace-nowrap font-medium font-serif overflow-visible flex items-center'>
                {/* <Badge className="translate-y-[-0rem] bg-gray-500">{author}</Badge> */}
                - {author}
            </p>
        </div>
    );
}

export default function Carousel() {
    // higher is slower
    const duration = 15 * quotes.length;

    const animation1 = {
        x: ["0%", "-100%"],
        transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
        },
    };
    const animation2 = {
        x: ["100%", "0%"],
        transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
        },
    };

    return (
        <>
            <motion.div className="relative flex overflow-x-hidden my-4">
                <div className="w-12 h-full absolute left-0 top-0 z-10 bg-gradient-to-r from-white to-white/0 dark:from-neutral-900 dark:to-neutral-900/0"></div>
                <motion.div animate={animation1} className="flex">
                    {quotes.map((quote, index) => {
                        return <Quote key={index} text={quote.text} author={quote.author} />;
                    })}
                </motion.div>
                <motion.div animate={animation2} className="flex absolute top-0">
                    {quotes.map((quote, index) => {
                        return <Quote key={index} text={quote.text} author={quote.author} />;
                    })}
                </motion.div>
                <div className="w-24 h-full absolute right-0 top-0 z-10 bg-gradient-to-l from-white to-white/0 dark:from-neutral-900 dark:to-neutral-900/0"></div>
            </motion.div>
        </>
    );
}