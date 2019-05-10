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
