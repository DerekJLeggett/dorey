export interface IPark {
    states: string;
    latLong: string;
    description: string;
    designation: string;
    images: IParkImages[];
    parkCode: string;
    id: string;
    directionsInfo: string;
    directionsUrl: string;
    fullName: string;
    url: string;
    weatherInfo: string;
    name: string;
}
export interface IParkImages {
    credit: string;
    altText: string;
    title: string;
    id: number;
    caption: string;
    url: string;
}
