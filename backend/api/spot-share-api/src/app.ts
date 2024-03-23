import express, { Express, Response, NextFunction, Request } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from './routes';
import HttpError from './models/HttpError';

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * CORS - Cross-Origin Resource Sharing
 * only needed if the frontend and backend are on different servers with different ports (e.g. localhost:3000 and localhost:5000)
 * as the frontend and backend are behind a proxy, this is not needed
 */
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Accept');
//     next();
// });

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
