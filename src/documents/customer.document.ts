import { Document } from "mongoose";

export interface ICustomer extends Document {
    identification: string;
    name: string;
    lastName: string;
}