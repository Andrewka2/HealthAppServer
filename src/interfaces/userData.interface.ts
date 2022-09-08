import { ObjectID } from "typeorm";

export interface UserData {
    firstName: string;
    lastName: string;
    // user: ObjectID;
    Phone: string;
    Email: string;
    AddressCity: string;
    AddressStreet: string;
    AddressBuilding: string;
    AddressAppartment: string;
  }
  