import { Schema } from 'mongoose';

export const CustomerSchema = new Schema(
    {
        identification: { type: String, required: true },
        name: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    {
        timestamps: true
    }
)