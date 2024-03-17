import mongoose from 'mongoose';
import logger from '../utils/miscLogger';

const { DB_LOCAL_URI, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } = process.env;

const DB_URL = DB_LOCAL_URI;

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
