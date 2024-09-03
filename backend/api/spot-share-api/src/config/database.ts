import mongoose from 'mongoose';
import logger from '../utils/miscLogger';

const DATABASE_URI = process.env.DATABASE_URI;

if (!DATABASE_URI) {
    logger.error('No database URL provided');
    process.exit(1);
}

const connectDB = async () => {
    let attempts = 0;
    while (attempts < 5) {
        try {
            const conn = await mongoose.connect(DATABASE_URI, {});
            logger.info(`MongoDB Connected: ${conn.connection.host}`);
            break; // Exit loop if connection is successful
        } catch (err) {
            const error = err as Error;
            attempts++;
            logger.error(`Attempt ${attempts} - Failed to connect to MongoDB: ${error.message}`);
            if (attempts < 5) {
                logger.info(`Retrying in 5 seconds...`);
                await new Promise((res) => setTimeout(res, 5000));
            } else {
                logger.error('Max retries reached. Failed to connect to MongoDB');
                process.exit(1);
            }
        }
    }
};

export default connectDB;
