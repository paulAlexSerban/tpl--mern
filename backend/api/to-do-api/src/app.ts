import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import indexRouter from './routes/index';
import tasksRoute from './routes/tasks';

dotenv.config();

const { DB_URI } = process.env;

if (!DB_URI) {
    console.error('No DB_URI provided');
    process.exit(1);
}

const connectDB = async () => {
    try {
        // Corrected the MongoDB connection URI scheme here
        const conn = await mongoose.connect(DB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        // Corrected error handling
        // Assert err is of type Error
        const error = err as Error;
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Call connectDB to establish database connection
connectDB();

const app: Express = express();

// CORS
app.use((req: Request, res: Response, next: NextFunction) => {
    // allows all origins
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Assuming you want tasksRoute to be prefixed, otherwise consider adding a prefix
// e.g., app.use('/tasks', tasksRoute); if tasksRoute should be under "/tasks"
// app.use('/', indexRouter);
app.use('/tasks', tasksRoute); // Adjusted for clarity and potential intended usage
app.use('/', indexRouter); // Adjusted for clarity and potential intended usage
// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

export default app;
