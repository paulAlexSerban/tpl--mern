import { sign, verify, JwtPayload } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { NotAuthError } from './errors';
import { NextFunction, Request as ExpressRequest, Response } from 'express';
const KEY = 'supersecret';

interface Request extends ExpressRequest {
    token?: JwtPayload;
}

function createJSONToken(email: string) {
    return sign({ email }, KEY, { expiresIn: '1h' });
}

function validateJSONToken(token: string) {
    return verify(token, KEY);
}

function isValidPassword(password: string, storedPassword: string) {
    // return compare(password, storedPassword);
    return password === storedPassword;
}

function checkAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('CHECKING AUTH.');
    if (req.method === 'OPTIONS') {
        return next();
    }
    if (!req.headers.authorization) {
        console.log('NOT AUTH. AUTH HEADER MISSING.');
        return next(new NotAuthError('Not authenticated.'));
    }
    const authFragments = req.headers.authorization.split(' ');

    if (authFragments.length !== 2 || authFragments[0].toLowerCase() !== 'bearer') {
        console.log('NOT AUTH. AUTH HEADER INVALID.');
        return next(new NotAuthError('Not authenticated.'));
    }
    const authToken = authFragments[1];

    if (!authToken) {
        console.log('NOT AUTH. AUTH TOKEN MISSING.');
        return next(new NotAuthError('Not authenticated.'));
    }

    try {
        const validatedToken = validateJSONToken(authToken);

        req.token = validatedToken as JwtPayload;
    } catch (error) {
        console.log('NOT AUTH. TOKEN INVALID.');
        return next(new NotAuthError('Not authenticated.'));
    }
    next();
}

export { createJSONToken, validateJSONToken, isValidPassword, checkAuthMiddleware };
