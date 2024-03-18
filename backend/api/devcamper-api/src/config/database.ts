import mongoose from 'mongoose';
import logger from '../utils/miscLogger';
const DB_URL = process.env.DB_LOCAL_URI;

if (!DB_URL) {
    logger.error('No database URL provided');
    process.exit(1);
}
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB_URL, {});
        logger.info(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        const error = err as Error;
        logger.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
