import dotenv from 'dotenv';
import express, { Express } from 'express';
import { logger } from './middleware';
import { rootRouter } from './routes';

dotenv.config();
const app: Express = express();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', rootRouter);

app.post('/api/events', (req, res, next) => {
    console.log('Received event:', req.body.type);

    res.status(200).json({ message: 'Event received!' });
});

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

export default app;