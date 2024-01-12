import { Client } from "@notionhq/client"
import { DBItem, ParsedResult } from '@/types/reading-list'

// ! Env Vars ==================================

// console.log(process.env)
// console.log(process.env.NOTION_TOKEN)
const apiKey = process.env.NOTION_TOKEN
const READING_LIST_DB_ID = process.env.READING_LIST_DB_ID 

if (!apiKey) {
    throw new Error('Missing NOTION_TOKEN environment variable.')
}
if (!READING_LIST_DB_ID) {
    throw new Error('Missing READING_LIST_DB_ID environment variable.')
}

// ? sanity.... wish I had it
// console.log(apiKey)
// console.log(READING_LIST_DB_ID)

// ! Setup ==================================
const notion = new Client({ auth: apiKey })

// ! Funky Functions ==================================
export const fetchDB = async (database_id: string) => {
    try {
        return await notion.databases.retrieve({ database_id: database_id })
    } catch (error) {
        throw new Error(`Error fetching database with ID: ${database_id}. Message: ${error}`)
    }
}

export const queryDB = async (database_id: string) => {
    try {
        return await notion.databases.query({ 
            database_id: database_id,
            sorts: [{ property: 'Created time', direction: 'descending'}], // newest first
        })
    } catch (error) {
        throw new Error(`Error querying database with ID: ${database_id}. Message: ${error}`)
    }
}

export async function queryDBPagination(): Promise<any[]> {
    let allResults: DBItem[] = [];
    let hasMore = true;
    let startCursor: string | undefined = undefined;

    while (hasMore) {
        try {
            const response = await notion.databases.query({
                database_id: READING_LIST_DB_ID as string, // shoulnt be undefined because of the error throw earlier
                start_cursor: startCursor,
                sorts: [{ property: 'Created time', direction: 'descending' }],
            })

            if (response.results.length > 0) {
                allResults = allResults.concat(response.results as DBItem[]);
            }

            startCursor = response.next_cursor ?? undefined;
            hasMore = response.has_more;
        } catch (error) {
            console.error(error);
            throw new Error(`Error querying database with ID: ${READING_LIST_DB_ID}: ${error}`);
        }
    }

    return allResults as DBItem[];
}

export function parseResponse(results: DBItem[]): ParsedResult[] {
    return results.map((page: DBItem) => ({
        name: page.properties['Name']?.title?.[0]?.plain_text || '',
        author: page.properties['Author']?.rich_text?.[0]?.plain_text,
        createdTime: new Date(page.properties['Created time']?.created_time ?? new Date()),
        type: page.properties['Type']?.select?.name,
        url: page.properties['URL']?.url,
    }));
}
