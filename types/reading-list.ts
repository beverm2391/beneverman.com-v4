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
    date?: {
        start: string;
        end?: string | null;
    };
    url?: string;
    title?: RichText[];
    status?: SelectProperty;
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

export type ParsedResult = {
    name: string;
    author: string | undefined;
    type: string | undefined;
    url: string | undefined;
    comments: string | undefined;
    status: string | undefined;
    date: string | undefined;
};