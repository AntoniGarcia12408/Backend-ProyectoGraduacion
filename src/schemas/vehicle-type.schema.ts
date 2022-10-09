import { Schema } from 'mongoose';

export const VehicleTypeSchema = new Schema(
    {
        name: { type: String, required: true },
    },
    {
        timestamps: true
    }
)