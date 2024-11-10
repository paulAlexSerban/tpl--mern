import dotenv from 'dotenv';
import express, { Express, Request, Response, NextFunction } from 'express';
import { logger } from './middleware';
import axios from 'axios';
const EVENT_BUS_URL = process.env.EVENT_BUS_URL || 'http://event-bus:5000/api';

dotenv.config();
const app: Express = express();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/events', async (req: Request, res: Response, next: NextFunction) => {
    console.log('Received event:', req.body.type);

    const { type, data } = req.body;

    if (type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';
        console.log('Comment moderation status:', status);

        await axios
            .post(`${EVENT_BUS_URL}/events`, {
                type: 'CommentModerated',
                data: {
                    id: data.id,
                    content: data.content,
                    postId: data.postId,
                    status,
                },
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
