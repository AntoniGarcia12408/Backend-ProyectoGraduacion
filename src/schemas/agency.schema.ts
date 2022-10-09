import { Schema } from 'mongoose';

export const AgencySchema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true }
    },
    {
        timestamps: true
    }
)