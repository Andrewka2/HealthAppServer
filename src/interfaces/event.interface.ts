import { ObjectID } from "typeorm";

export interface EventData {
    name: string;
    type: string;
    desc: string;
    // specialization: ObjectID;
}