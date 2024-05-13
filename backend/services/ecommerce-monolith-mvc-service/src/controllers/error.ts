import { Request, Response, NextFunction } from 'express';

export const get404 = (req: Request, res: Response, next: NextFunction) => {
    const path = req.path;
    res.status(404).render('404', { pageTitle: '404 | Page Not Found', path });
};
