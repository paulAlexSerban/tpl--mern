import { Request, Response, NextFunction } from 'express';
import HttpError from '../models/HttpError';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export type ExtendedRequest = Request & { userData?: { userId: string } };

type CheckAuth = (req: ExtendedRequest, res: Response, next: NextFunction) => void;

const checkAuth: CheckAuth = (req, res, next) => {
    /**
     * The browser sends an OPTIONS request before the actual request to check if the server allows the request.
     * If the server does not allow the request, the browser will not send the actual request.
     */
    if (req.method === 'OPTIONS') {
        return next();
    }

    try {
        const token = req.headers.authorization?.split(' ')[1]; // Authorization: 'Bearer TOKEN' - indicates that the token is in the second position of the array

        if (!token) {
            throw new Error('Authentication failed!');
        }

        // verify the token
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.userData = { userId: (decodedToken as { userId: string }).userId };
        next();
    } catch (err) {
        const error = new HttpError((err as Error).message || 'Authentication failed!', 403);
        return next(error);
    }
};

export default checkAuth;
