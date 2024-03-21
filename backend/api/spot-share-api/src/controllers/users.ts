import { NextFunction, Request, Response } from 'express';

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: 'get all users',
    });
};

const signup = async (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: 'create a new user',
    });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: 'login a user',
    });
};

export { getAllUsers, signup, login };
