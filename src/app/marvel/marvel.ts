export interface ICharacter {
    id: number;
    name: string;
}
export interface ISeries {
    id: number;
    title: string;
    description?: string;
    resourceURI: string;
    urls: string[];
    startYear: number;
    endYear: number;
    rating: string;
    type: string;
    modified: string;
    thumbnail: string;
    Creators: string;
    Characters: string;
    stories: string;
    comics: string;
    events: string;
    next?: string;
    previous?: any;
}

export interface ICharacterById {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comics;
    series: Comics;
    stories: Stories;
    events: Comics;
    urls: Url[];
}

interface Url {
    type: string;
    url: string;
}

interface Stories {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
}

interface Item2 {
    resourceURI: string;
    name: string;
    type: string;
}

interface Comics {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

interface Item {
    resourceURI: string;
    name: string;
}

interface Thumbnail {
    path: string;
    extension: string;
}

