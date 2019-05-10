export interface ICountry {
    Code: string;
    Code2: string;
    Continent: string;
    Name: string;
    Population: string;
    SurfaceArea: string;
    Languages: Language[];
}

interface Language {
    Language: string;
    IsOfficial: string;
    Percentage: string;
}

export interface IState {
    State: string;
    StateCode: string;
    Cities: City[];
}

interface City {
    City: string;
    Population: string;
}
