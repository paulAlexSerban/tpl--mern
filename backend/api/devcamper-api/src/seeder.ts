import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import BootcampSchema from './models/BootcampSchema';

/**
 * @TODO: move BootcampSchema to it's own node module - export it as JS module and use it in the seeder and the bootcamps controller
 * @TODO: move seeded to it's own node module
 */

// load env vars
dotenv.config();
const DB_URL = process.env.DB_LOCAL_URI;

if (!DB_URL) {
    console.log('No database URL provided');
    process.exit(1);
}

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB_URL, {});
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        const error = err as Error;
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/../../_data/bootcamps.json`, 'utf-8'));

// Import into DB
const importData = async () => {
    try {
        await BootcampSchema.create(bootcamps);
        console.log('Data Imported...');
        process.exit();
    } catch (err) {
        const error = err as Error;
        console.log(`Error: ${error.message}`);
    }
};

// Delete data
const deleteData = async () => {
    try {
        await BootcampSchema.deleteMany();
        console.log('Data Destroyed...');
        process.exit();
    } catch (err) {
        const error = err as Error;
        console.log(`Error: ${error.message}`);
    }
};

export { importData, deleteData };
