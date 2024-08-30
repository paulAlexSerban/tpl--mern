import { Schema, Document, model } from 'mongoose';

/**
 * NOTE
 * When using Mongoose with TypeScript, the context of this in schema methods
 * or hooks does not automatically infer the type of the document it represents.
 * You need to explicitly type this to let TypeScript know what properties and
 * methods are available on it.
 */
/**
 * Defines the structure of a User document, extending mongoose.Document.
 * This interface explicitly declares the properties of a User, making
 * them known to TypeScript.
 */

interface IUserSchema extends Document {
    googleId: string;
}

const UserSchema: Schema<IUserSchema> = new Schema({
    googleId: String,
});

export default model<IUserSchema>('users', UserSchema);
