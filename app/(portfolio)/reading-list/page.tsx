import { Client } from "@notionhq/client"
import { queryDBPagination, parseResponse } from "@/lib/fetch-works"
import ReadingListData from "@/components/ReadingListData"
import { ParsedResult } from "@/types/reading-list"

// export const revalidate = 3600 // 1 hour

async function getData() {

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
}

export default async function Page() {
    const data: ParsedResult[] = await getData()
    console.log('data', data)

    return (
        <section className="container max-w-2xl flex flex-col gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-12 lg:pb-12">
           <ReadingListData works={data} />
        </section>
    )
}