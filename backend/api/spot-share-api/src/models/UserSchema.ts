import mongoose, { Types, Schema, Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export interface IUserSchema extends Document {
    name: string;
    email: string;
    password: string;
    image: string;
    // By using Types.Array<Types.ObjectId>, you explicitly tell TypeScript that places
    // is a Mongoose array, which has methods like pull for removing elements based on their value.
    places: Types.Array<Types.ObjectId>;
}

const UserSchema: Schema<IUserSchema> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    image: {
        type: String,
        required: true,
    },
    places: [
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Place',
        },
    ],
});

UserSchema.plugin(uniqueValidator);

export default mongoose.model<IUserSchema>('User', UserSchema);
