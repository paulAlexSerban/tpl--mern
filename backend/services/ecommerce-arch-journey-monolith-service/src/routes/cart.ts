import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();
import { cart } from '../data';

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('cart', {
        pageTitle: 'Cart',
        path: '/cart',
        cart,
    });
});

export default router;
