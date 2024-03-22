import mongoose, { Schema, Document } from 'mongoose';

interface IPlaceSchema extends Document {
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    location: {
        lat: number;
        lng: number;
    };
    creator: Schema.Types.ObjectId;
}

const PlaceSchema: Schema<IPlaceSchema> = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    location: {
        lat: {
            type: Number,
            required: true,
        },
        lng: {
            type: Number,
            required: true,
        },
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
});

export default mongoose.model<IPlaceSchema>('Place', PlaceSchema);
