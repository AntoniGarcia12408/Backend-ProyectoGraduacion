import { Schema } from 'mongoose';

export const BrandSchema = new Schema(
    {
        name: { type: String, required: true },
    },
    {
        timestamps: true
    }
)