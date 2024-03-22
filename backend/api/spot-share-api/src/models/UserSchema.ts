import mongoose, { Schema, Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Max Schwarz',
        email: 'test@test.com',
        password: 'testers',
    },
    {
        id: 'u2',
        name: 'Manuel Lorenz',
        email: 'test@tesing.com',
        password: 'testing',
    },
];

interface IUserSchema extends Document {
    name: string;
    email: string;
    password: string;
    image: string;
    places: mongoose.Types.ObjectId[];
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
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'Place',
        },
    ],
});

UserSchema.plugin(uniqueValidator);

export default mongoose.model<IUserSchema>('User', UserSchema);
