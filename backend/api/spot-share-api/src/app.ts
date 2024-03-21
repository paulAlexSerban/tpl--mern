import express, { Express, Response, NextFunction, Request } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from './routes';
import HttpError from './models/http-error';

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routes);

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    const error = new HttpError('404 - Not Found', 404);
    throw error;
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.errorCode || 500).json({ message: error.message });
});

export default app;
