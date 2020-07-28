export interface IShip {
    Name: string;
    Abbrev: string;
    Prefix: string;
    Hull: number;
    Type: string;
    UIC: number;
    Status: string;
    'Date Status Changed': string;
    Class: string;
    Force: string;
    '5030.8B Force': string;
    Category: string;
    Classification: string;
    ShipType: string;
    Link: string;
    MSCLink: string;
    DANFSLink: string;
    ShipHistoryReport: string;
    Homeport: string;
    Award: string;
    Keel: string;
    Launch: string;
    Delivery: string;
    Commission: string;
    Age: number;
}

export interface IShipType {
    Code: string;
    Name: string;
}