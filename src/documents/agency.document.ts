import { Document } from "mongoose";

export interface IAgency extends Document {
    name: string;
    phone: string;
    address: string;
}