import dotenv from 'dotenv';
import express, { Express, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { logger } from './middleware';

const EVENT_BUS_URL = process.env.EVENT_BUS_URL || 'http://event-bus:5000/api';

dotenv.config();
const app: Express = express();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

type Post = {
    id: string;
    title: string;
};

type Comment = {
    id: string;
    content: string;
    postId: string;
    status: 'pending' | 'approved' | 'rejected';
};

type PostCreatedEvent = {
    type: 'PostCreated';
    data: {
        id: string;
        title: string;
    };
};

type CommentCreatedEvent = {
    type: 'CommentCreated';
    data: {
        id: string;
        content: string;
        postId: string;
        status: 'pending' | 'approved' | 'rejected';
    };
};

type CommentUpdatedEvent = {
    type: 'CommentUpdated';
    data: {
        id: string;
        content: string;
        postId: string;
        status: 'pending' | 'approved' | 'rejected';
    };
};

type BlogEvent = PostCreatedEvent | CommentCreatedEvent | CommentUpdatedEvent;

const posts: Post[] = [];
const comments: Comment[] = [];

const postsWithComments: { id: string; post: Post; comments: Comment[] }[] = [];

const handleEvent = (event: BlogEvent) => {
    if (event.type === 'PostCreated') {
        const { id, title } = event.data;
        posts.push({ id, title });
        postsWithComments.push({ id, post: { id, title }, comments: [] });
    }

    if (event.type === 'CommentCreated') {
        const { id, content, postId, status } = event.data;
        comments.push({ id, content, postId, status });
        postsWithComments.forEach((pwc) => {
            if (pwc.id === postId) {
                pwc.comments.push({ id, content, postId, status });
            }
        });
    }

    if (event.type === 'CommentUpdated') {
        const { id, content, postId, status } = event.data;
        const comment = comments.find((c) => c.id === id);
        if (comment) {
            comment.status = status;
        }
        postsWithComments.forEach((pwc) => {
            if (pwc.id === postId) {
                const comment = pwc.comments.find((c) => c.id === id);
                if (comment) {
                    comment.status = status;
                }
            }
        });
    }

    if (event.type !== 'PostCreated' && event.type !== 'CommentCreated' && event.type !== 'CommentUpdated') {
        console.error('No event handler for event:');
    }
};

app.get('/api/query/posts', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ posts: postsWithComments });
});

app.post('/api/events', (req, res, next) => {
    console.log('Received event:', req.body.type);

    const event: BlogEvent = req.body;

    handleEvent(event);

    res.status(200).json({ message: 'Event received!' });
});

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

const fetchAllEvents = async () => {
    console.log('Fetching all events...');
    await axios
        .get(`${EVENT_BUS_URL}/events`)
        .then((response) => {
            response.data.events?.forEach((event: BlogEvent) => {
                handleEvent(event);
            });
        })
        .catch((err) => {
            console.error(err);
        });
};

fetchAllEvents();

export default app;
