import { Document } from "mongoose";

export interface IVehicleType extends Document {
    name: string;
}