import dotenv from 'dotenv';
import express, { Express } from 'express';
import { logger, delayResponse } from './middleware';
import { rootRouter, recipesRouter } from './routes';

dotenv.config();
const app: Express = express();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/recipes', delayResponse, recipesRouter);
app.use('/api/v1', rootRouter);

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

export default app;
