import express, { Express, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import passport from './services/passport';
import authRouter from './routes/auth';
import indexRouter from './routes/index';
import connectDB from './config/database';
import cookieSession from 'cookie-session';
import dotenv from 'dotenv';
dotenv.config();

const COOKIE_KEY = process.env.EMAILY_COOKIE_KEY;

if (!COOKIE_KEY) {
    throw new Error('Missing COOKIE_KEY. Please check your environment variables.');
}

connectDB();
const app: Express = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // this just adds an extra layer of security to the cookie
        keys: [COOKIE_KEY],
    })
);

app.use(passport.initialize);
app.use(passport.session);

app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.session && !req.session.regenerate) {
        req.session.regenerate = (cb: (err: any) => void) => {
            cb(null);
            return {} as any;
        };
    }

    if (req.session && !req.session.save) {
        req.session.save = (cb: (err: any) => void) => {
            cb(null);
            return {} as any;
        };
    }
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use('/api/auth', authRouter);

app.use('/api', indexRouter);

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

export default app;
