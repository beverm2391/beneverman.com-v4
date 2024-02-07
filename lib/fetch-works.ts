import { Client } from "@notionhq/client"
import { DBItem, ParsedResult } from '@/types/reading-list'

// ! Env Vars ==================================

const apiKey = process.env.NOTION_TOKEN
if (!apiKey) {
    throw new Error('Please set your NOTION_TOKEN in your .env file.')
}

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

export async function queryDBPagination(database_id: string): Promise<any[]> {
    let allResults: DBItem[] = [];
    let hasMore = true;
    let startCursor: string | undefined = undefined;

    while (hasMore) {
        try {
            const response = await notion.databases.query({
                database_id: database_id,
                start_cursor: startCursor,
                sorts: [{ property: 'Date', direction: 'descending' }],
            })

            if (response.results.length > 0) {
                allResults = allResults.concat(response.results as DBItem[]);
            }

            startCursor = response.next_cursor ?? undefined;
            hasMore = response.has_more;
        } catch (error) {
            throw new Error(`Error querying database with ID: ${database_id}: ${error}`);
        }
    }

    return allResults as DBItem[];
}

export function parseResponse(results: DBItem[]): ParsedResult[] {
    return results.map((page: DBItem) => ({
        name: page.properties['Name']?.title?.[0]?.plain_text || '',
        author: page.properties['Author']?.rich_text?.[0]?.plain_text,
        type: page.properties['Type']?.select?.name,
        url: page.properties['URL']?.url,
        comments: page.properties['Comments']?.rich_text?.[0]?.plain_text,
        status: page.properties['Status']?.status?.name,
        date: page.properties['Date']?.date?.start,
    }));
}
