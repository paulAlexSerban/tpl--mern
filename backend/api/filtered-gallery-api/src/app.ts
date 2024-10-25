import express, { Express, NextFunction, Request, Response } from 'express';
import logger from './middleware/logger';
import dotenv from 'dotenv';
import indexRouter from './routes/index';
import recipesRouter from './routes/recipes';

dotenv.config();
const app: Express = express();
app.use(logger);

app.use(express.json());

// Form data
app.use(express.urlencoded({ extended: false }));

const delayResponse = (req: Request, res: Response, next: NextFunction) => {
    setTimeout(() => next(), 1000);
};

app.use('/api/v1/recipes', delayResponse, recipesRouter);
app.use('/api/v1', indexRouter);

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

export default app;
