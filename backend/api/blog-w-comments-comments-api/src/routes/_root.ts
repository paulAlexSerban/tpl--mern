import express, { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { randomBytes } from 'crypto';
const EVENT_BUS_URL = process.env.EVENT_BUS_URL || 'http://event-bus:5000/api';
const router: Router = express.Router();

type Comment = {
    id: string;
    content: string;
    postId: string;
    status: 'pending' | 'approved' | 'rejected';
};

/* POST */
router.post('/:pid', function (req: Request, res: Response, next: NextFunction) {
    const { content } = req.body;
    const { pid } = req.params;

    const id = randomBytes(4).toString('hex');
    const comment: Comment = { id, content, postId: pid, status: 'pending' };
    axios
        .post(`${EVENT_BUS_URL}/events`, {
            type: 'CommentCreated',
            data: comment,
        })
        .catch((err) => {
            console.error(err);
        });

    res.status(201).json({ id, content });
});

export default router;
