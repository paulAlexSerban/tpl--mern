import { Request, Response, NextFunction } from 'express';

const delayResponse = (req: Request, res: Response, next: NextFunction) => {
    const randomDelay = Math.floor(Math.random() * 1000) + 500;
    setTimeout(() => next(), randomDelay);
};

export default delayResponse;