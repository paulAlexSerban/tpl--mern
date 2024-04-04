import express, { Express, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import HttpError from './models/HttpError';
import indexRouter from './routes/index';
import eventsRouter from './routes/events';

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter);
app.use('/api/events', eventsRouter);

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.errorCode || 500).json({ message: error.message });
});

export default app;
