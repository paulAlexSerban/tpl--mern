import express, { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';

const POSTS_API_URL = process.env.POSTS_API_URL || 'http://posts-api:5000/api';
const COMMENTS_API_URL = process.env.COMMENTS_API_URL || 'http://comments-api:5000/api';
const QUERY_API_URL = process.env.QUERY_API_URL || 'http://query-api:5000/api';
const MODERATION_API_URL = process.env.MODERATION_API_URL || 'http://moderation-api:5000/api';
const router: Router = express.Router();

const events: any = [];

/* POST */
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const event = req.body;

    events.push(event);

    // axios.post(`${POSTS_API_URL}/events`, event).catch((err) => {
    //     console.log(err.message);
    // });
    axios.post(`${COMMENTS_API_URL}/events`, event).catch((err) => {
        console.log(err.message);
    });
    axios.post(`${MODERATION_API_URL}/events`, event).catch((err) => {
        console.log(err.message);
    });
    axios.post(`${QUERY_API_URL}/events`, event).catch((err) => {
        console.log(err.message);
    });

    res.status(200).json({ message: 'Event received and forwarded!' });
});

/* GET */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ events });
});

export default router;
