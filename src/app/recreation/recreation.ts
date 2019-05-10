export interface IOrganization {
    OrgAbbrevName: string;
    OrgJurisdictionType: string;
    OrgType: string;
    LastUpdatedDate: string;
    OrgURLText: string;
    OrgURLAddress: string;
    OrgImageURL: string;
    OrgParentID: number;
    OrgID: number;
    OrgName: string;
}

export interface IRecreationalArea {
    RecAreaMapURL: string;
    LastUpdatedBy: number;
    RecAreaReservationURL: string;
    RecAreaFeeDescription: string;
    RecAreaName: string;
    RecAreaDescription: string;
    Keywords: string;
    RecAreaEmail: string;
    RecAreaLatitude: number;
    StayLimit: string;
    GEOJSON: IGEOJSON;
    LastUpdatedDate: string;
    RecAreaID: number;
    RecAreaLongitude: number;
    RecAreaDirections: string;
    RecAreaPhone: string;
    OrgRecAreaID: string;
}

interface IGEOJSON {
    COORDINATES: number[];
    TYPE: string;
}
