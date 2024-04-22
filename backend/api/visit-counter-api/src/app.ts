import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { createClient } from 'redis';
import indexRouter from './routes/index';

const app: Express = express();

// Environment variables for Redis configuration
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379');

// Initialize Redis client with configuration
const client = createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(async (req: Request, res: Response, next) => {
    try {
        const visits = await client.get('visits');
        const visitCount = visits ? parseInt(visits) : 0;
        await client.set('visits', (visitCount + 1).toString());
    } catch (err) {
        console.error(err);
    }
    next();
});

app.get('/api/visit', async (req: Request, res: Response) => {
    try {
        const visits = await client.get('visits');
        res.send(`Number of visits is ${visits}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.use('/api', indexRouter);

export default app;
