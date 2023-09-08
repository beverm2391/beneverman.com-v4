export type Book = {
    title: string,
    desc?: string,
    author: string,
    url: string,
    date: Date,
    finished?: boolean
}

export type Article = {
    title: string,
    desc?: string,
    author: string,
    url: string,
    date: Date,
}

export type Work = {
    title: string,
    desc?: string,
    author: string
    url: string,
    type: "book" | "essay" | "journal" | "article",
}

export type List = {
    lastUpdated: string,
    data: Array<Work>
}