import mongoose from 'mongoose';
import logger from '../utils/miscLogger';

const { DB_URI } = process.env;


if (!DB_URI) {
    logger.error('No database URL provided');
    process.exit(1);
}

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB_URI, {});
        logger.info(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        const error = err as Error;
        logger.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
