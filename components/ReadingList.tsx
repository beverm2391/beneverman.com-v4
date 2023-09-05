'use client'

import { Card, CardDescription, CardTitle } from "./ui/card"
import Link from "next/link"
import { Icons } from "./icons"
import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations"
import { Book, Article } from "@/types/reading-list"
import { Books, Articles } from "@/config/reading-list"

// !! =================================== Change Data in `config/reading-list` ===================================

const BookCard = ({ book }: { book: Book }) => {
    return (
        <Link
            href={book.url}
        >
            <Card className='p-4 gap-4 shadow-none hover:scale-[1.01] transition-all dark:border-slate-300 dark:bg-cod-gray-900'>
                <div className='flex flex-row gap-2 mb-2 items-center'>
                    {book.finished ?
                        <Icons.FaBook className='flex items-center justify-center text-gray-800 dark:text-gray-200 h-4 w-4' /> :
                        <Icons.FaBookOpen className='flex items-center justify-center text-gray-800 dark:text-gray-200 h-4 w-4' />
                    }
                    <CardTitle className=''>
                        {book.title}
                    </CardTitle>
                    <p className='text-sm text-gray-500'>
                        {book.author}
                    </p>
                </div>
                <CardDescription>
                    {book.desc}
                </CardDescription>
            </Card>
        </Link>
    )
}

const BookCardSimple = ({ book }: { book: Book }) => {
    return (
        <a href={book.url} className='cursor-pointer'>
            <div className='flex flex-row gap-2 mb-2 items-center hover:scale-[1.01] hover:translate-x-1 transition-all duration-1'>
                {!book.finished ?
                    <Icons.FaBookOpen className='flex items-center justify-center text-gray-800 dark:text-gray-200 h-4 w-4' /> :
                    <Icons.FaBook className='flex items-center justify-center text-gray-800 dark:text-gray-200 h-4 w-4' />
                }
                <p>
                    {book.title}
                </p>
                <p className='ml-1 text-sm text-gray-500'>
                    {book.author}
                </p>
            </div>
        </a>
    )
}

const ArticleCardSimple = ({ article }: { article: Article }) => {
    return (
        <a href={article.url} className='cursor-pointer'>
            <div className='gap-2 mb-2 flex flex-row items-center hover:scale-[1.01] hover:translate-x-1 transition-all duration-1'>
                {/* <Icons.FaFileAlt className='flex items-center justify-center text-gray-800 dark:text-gray-200 h-4 w-4' /> */}
                <div>
                    <p className='inline text-black font-[400]'>
                        {article.title}
                    </p>
                    <p className='ml-1 text-sm text-gray-500 inline'>
                        {article.author}
                    </p>
                </div>
            </div>
        </a>
    )
}



export default function ReadingList() {
    const BooksbyDate = Books.sort((a, b) => {
        return b.date.getTime() - a.date.getTime()
    })

    const ArticlesbyDate = Articles.sort((a, b) => {
        return b.date.getTime() - a.date.getTime()
    })

    return (
        <div>
            {/* <motion.h3
                className="text-xl mb-2 text-gray-600 dark:text-gray-300"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                Recent Reads:
            </motion.h3> */}
            <div className='flex flex-col gap-4'>
                <motion.h3
                    className='text-lg text-gray-600 dark:text-gray-300'
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    Books and Essays
                </motion.h3>
                <div className='flex flex-col'>
                    {BooksbyDate.map((book, i) => {
                        return (
                            <motion.div
                                variants={FADE_UP_ANIMATION_VARIANTS}
                                key={i}
                            >
                                <BookCardSimple key={i} book={book} />
                            </motion.div>
                        )
                    })}
                </div>
                <motion.h3
                    className='text-lg text-gray-600 dark:text-gray-300'
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    Journals and Articles
                </motion.h3>
                <div className="flex flex-col">
                    {ArticlesbyDate.map((article, i) => {
                        return (
                            <motion.div
                                variants={FADE_UP_ANIMATION_VARIANTS}
                                key={i}
                            >
                                <ArticleCardSimple key={i} article={article} />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}