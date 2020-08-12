export interface IIndustry {
    "id": number;
    "name": string;
}
export interface ICompany {
    Company: string;
    url: string;
    Timings: Timing[];
}

interface Timing {
    browserName: string;
    completeTIme: string;
    networkLatency: string;
    pageLoadTime: string;
    redirectTime: string;
}