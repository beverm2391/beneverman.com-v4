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

//! NEW TYPES 1-12-2024
//  for notion db responee
type SelectProperty = {
    id: string;
    name: string;
    color: string;
};

type RichText = {
    type: string;
    text: {
        content: string;
        link: string | null;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    };
    plain_text: string;
    href: string | null;
};

type Property = {
    id: string;
    type: string;
    select?: SelectProperty;
    rich_text?: RichText[];
    created_time?: string;
    url?: string;
    title?: RichText[];
};

type User = {
    object: string;
    id: string;
};

export type DBItem = {
    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: User;
    last_edited_by: User;
    cover: null | string;
    icon: null | string;
    parent: {
        type: string;
        database_id: string;
    };
    archived: boolean;
    properties: {
        [key: string]: Property;
    };
    url: string;
    public_url: string | null;
};

// for parsed result
export type ParsedResult = {
    name: string,
    author: string | undefined,
    createdTime: string,
    type: string | undefined,
    url: string | undefined,
    comments: string | undefined,
}