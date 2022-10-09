import { Schema } from 'mongoose';

export const ColorSchema = new Schema(
    {
        name: { type: String, required: true },
    },
    {
        timestamps: true
    }
)