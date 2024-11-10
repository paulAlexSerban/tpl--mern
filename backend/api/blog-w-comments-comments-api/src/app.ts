import dotenv from 'dotenv';
import express, { Express } from 'express';
import { logger } from './middleware';
import { rootRouter } from './routes';
import axios from 'axios';

const EVENT_BUS_URL = process.env.EVENT_BUS_URL || 'http://event-bus:5000/api';

dotenv.config();
const app: Express = express();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/comments', rootRouter);

type Comment = {
    id: string;
    content: string;
    postId: string;
    status: 'pending' | 'approved' | 'rejected';
};

app.post('/api/events', (req, res, next) => {
    console.log('Received event:', req.body.type);

    const { type, data } = req.body;

    if (type === 'CommentModerated') {
        console.log('Comment moderation status:', data.status);

        axios
            .post(`${EVENT_BUS_URL}/events`, {
                type: 'CommentUpdated',
                data,
            })
            .catch((err) => {
                console.error(err);
            });
    }

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
