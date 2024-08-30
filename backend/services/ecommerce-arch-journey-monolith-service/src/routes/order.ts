import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();
import { orders } from '../data';

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('order', {
        pageTitle: 'Order',
        path: '/order',
        orders,
    });
});

export default router;
