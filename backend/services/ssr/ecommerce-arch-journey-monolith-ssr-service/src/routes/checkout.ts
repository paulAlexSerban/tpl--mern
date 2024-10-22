import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();
import { cart } from '../data';

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
        cart,
    });
});

export default router;
