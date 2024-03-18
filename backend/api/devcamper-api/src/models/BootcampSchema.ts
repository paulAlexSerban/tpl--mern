import mongoose, { Schema, Document } from 'mongoose';
import slugify from 'slugify';
import logger from '../utils/miscLogger';
import geocoder from '../utils/geocoder';
/**
 * NOTE
 * When using Mongoose with TypeScript, the context of this in schema methods
 * or hooks does not automatically infer the type of the document it represents.
 * You need to explicitly type this to let TypeScript know what properties and
 * methods are available on it.
 */
/**
 * Defines the structure of a Bootcamp document, extending mongoose.Document.
 * This interface explicitly declares the properties of a Bootcamp, making
 * them known to TypeScript.
 */
interface IBootcampSchema extends Document {
    name: string;
    slug?: string;
    description: string;
    website?: string;
    phone?: string;
    email?: string;
    address: string;
    location?: {
        type: string;
        coordinates: number[];
        formattedAddress?: string;
        street?: string;
        city?: string;
        state?: string;
        zipcode?: string;
        country?: string;
    };
    careers: string[];
    averageRating?: number;
    averageCost?: number;
    photo?: string;
    housing?: boolean;
    jobAssistance?: boolean;
    jobGuarantee?: boolean;
    acceptGi?: boolean;
    createdAt?: Date;
}

/**
 * The BootcampSchema is now typed with <IBootcampSchema>, indicating that it corresponds
 * to documents that fit the IBootcampSchema interface.
 */
const BootcampSchema: Schema<IBootcampSchema> = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters'],
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    website: {
        type: String,
        match: [
            // eslint-disable-next-line no-useless-escape
            /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
            'Please use a valid URL with HTTP or HTTPS',
        ],
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number cannot be longer than 20 characters'],
    },
    email: {
        type: String,
        match: [
            // eslint-disable-next-line no-useless-escape
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
        ],
    },
    address: {
        type: String,
        required: [true, 'Please add an address'],
    },
    location: {
        // GeoJSON Point
        type: {
            type: String,
            enum: ['Point'],
            // required: true,
        },
        coordinates: {
            type: [Number],
            // required: true,
            index: '2dsphere',
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
    },
    careers: {
        // Array of strings
        type: [String],
        required: true,
        enum: ['Web Development', 'Mobile Development', 'UI/UX', 'Data Science', 'Business', 'Other'],
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating cannot be more than 10'],
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg',
    },
    housing: {
        type: Boolean,
        default: false,
    },
    jobAssistance: {
        type: Boolean,
        default: false,
    },
    jobGuarantee: {
        type: Boolean,
        default: false,
    },
    acceptGi: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

/**
 * The pre hook callback is typed with <IBootcampSchema>, which ensures this within the
 * function block is treated as an instance of IBootcampSchema. This allows TypeScript
 * to recognize this.name as a string, resolving the error.
 */
BootcampSchema.pre<IBootcampSchema>('save', function (next) {
    // check if the name field is modified before running the slugify
    // if it's not modified, we don't want to run the slugify
    if (!this.isModified('name')) {
        logger.info(`Name is not modified, so slugify will not run for ${this.name}`);
        next();
        return;
    }
    this.slug = slugify(this.name, { lower: true });
    logger.info(`Slugify ran for ${this.name} and the slug is ${this.slug}`);
    next();
});

// Geocode & create location field
// use function instead of arrow function to access this keyword
//
BootcampSchema.pre<IBootcampSchema>('save', async function (next) {
    const loc = await geocoder.geocode(this.address);
    // Destructure the first element of the loc array instead of using loc[0]
    const [geo] = loc;

    if (geo.latitude === undefined || geo.longitude === undefined) {
        logger.error(`Geocoder failed for ${this.address}`);
        next();
        return;
    }

    this.location = {
        type: 'Point',
        coordinates: [geo.longitude, geo.latitude],
        formattedAddress: geo.formattedAddress,
        street: geo.streetName,
        city: geo.city,
        state: geo.stateCode,
        zipcode: geo.zipcode,
        country: geo.countryCode,
    };
    // Do not save address in DB
    this.address = '';
    next();
});

export default mongoose.model<IBootcampSchema>('Bootcamp', BootcampSchema);
