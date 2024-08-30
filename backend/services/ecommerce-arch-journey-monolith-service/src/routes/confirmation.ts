import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('confirmation', {
        pageTitle: 'Confirmation',
        path: '/confirmation',
    });
});

export default router;
