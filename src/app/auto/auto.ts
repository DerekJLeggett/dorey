export interface IAutoType{
  type: string;
}
export interface IAutoManufacturer {
    Country: string;
    Mfr_CommonName?: string;
    Mfr_ID: number;
    Mfr_Name: string;
    VehicleTypes: IVehicleType[];
  }
  export interface IModel {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
  }
 export interface IAutoManufacturerDetails {
    Address: string;
    Address2?: string;
    City?: string;
    ContactEmail?: string;
    ContactFax?: any;
    ContactPhone?: string;
    Country: string;
    DBAs?: any;
    EquipmentItems: any[];
    LastUpdated: string;
    ManufacturerTypes: IManufacturerType[];
    Mfr_CommonName?: string;
    Mfr_ID: number;
    Mfr_Name: string;
    OtherManufacturerDetails?: string;
    PostalCode?: string;
    PrimaryProduct?: any;
    PrincipalFirstName?: string;
    PrincipalLastName?: any;
    PrincipalPosition?: string;
    StateProvince?: string;
    SubmittedName?: string;
    SubmittedOn?: string;
    SubmittedPosition?: string;
    VehicleTypes: (IVehicleType)[];
  }
export interface IVehicleType {
    IsPrimary: boolean;
    Name: string;
  }

export interface IMake {
  Make_ID: number;
  Make_Name: string;
  Mfr_Name: string;
}

export interface IManufacturerType {
    Name: string;
  }

  export interface IMakeByType {
      MakeId: number;
      MakeName: string;
      VehicleTypeId: number;
      VehicleTypeName: string;
  }
