import HomePage from "@/components/pages/homepage"
import { queryDBPagination, parseResponse } from "@/lib/fetch-works"
import { ParsedResult } from "@/types/reading-list"
import { cache } from 'react'

export const revalidate = 60 // 60 seconds
// 0 = always revalidate
// false = never revalidate
// number = seconds to revalidate

const getData = cache(async () => {

    const READING_LIST_DB_ID = process.env.READING_LIST_DB_ID 
    if (!READING_LIST_DB_ID) {
        throw new Error('Missing READING_LIST_DB_ID environment variable.')
    }

    // SANITY IS CHECKED
    // console.log('apiKey', apiKey)
    // console.log('READING_LIST_DB_ID', READING_LIST_DB_ID)

    const response = await queryDBPagination(READING_LIST_DB_ID)
    const parsedResponse = parseResponse(response)
    return parsedResponse
})

export default async function Home() {
    const data: ParsedResult[] = await getData()
    console.log('data', data)

    return (
        <section className="container max-w-3xl flex flex-col gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-12 lg:pb-12">
            <HomePage works={data}/>
        </section>
    )
}