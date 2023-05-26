
type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
    _type: string;
}


interface Post extends Base {
    author: Author;
    categories: string[];
    body: Block[];
    mainImage: Image;
    slug: Slug;
    _id: string;
    title: string;
    description: string;
}


interface Author extends Base {
    name: string;
    slug: Slug;
    image: Image;
    bio: Block[];
    author: Author;
    categories: Category[];
    body: Block[];
    mainImage: Image;
    title: string;
    description: string;
}

interface Image {
    _type: "image";
    asset: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Block {
    _type: "block";
    _key: string;
    children:Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}


interface Span {
    _type: "span";
    _key: string;
    marks: string[];
    text: string;
}

interface Category extends Base {
    title: string;
    description: string;
}


interface MainImage {
    _type: "image";
    asset: Reference;
}


interface Title {
    _type: "string";
    current: string;
}