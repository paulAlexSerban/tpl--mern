import express, { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { randomBytes } from 'crypto';
const EVENT_BUS_URL = process.env.EVENT_BUS_URL || 'http://event-bus:5000/api';
const router: Router = express.Router();

type Post = {
    id: string;
    title: string;
};

/* POST */
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.body;
    const id = randomBytes(4).toString('hex');

    const post: Post = { id, title };

    axios
        .post(`${EVENT_BUS_URL}/events`, {
            type: 'PostCreated',
            data: post,
        })
        .catch((err) => {
            console.error(err);
        });

    res.status(201).json({ id, title });
});

export default router;
