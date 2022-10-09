import { Document } from "mongoose";

export interface IVehicle extends Document {
    chassis: string;
    agencyId: string;
    customerId: string;
    colorId: string;
    brandId: string;
    typeId: string;
}