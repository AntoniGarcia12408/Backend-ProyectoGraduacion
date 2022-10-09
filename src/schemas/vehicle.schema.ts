import { Schema } from 'mongoose';

export const VehicleSchema = new Schema(
    {
        chassis: { type: String, required: true },
        agencyId: { type: String, required: true },
        customerId: { type: String, required: true },
        colorId: { type: String, required: true },
        brandId: { type: String, required: true },
        typeId: { type: String, required: true },
    },
    {
        timestamps: true
    }
)