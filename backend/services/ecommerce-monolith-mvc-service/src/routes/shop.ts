import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

import { products } from './admin';

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
});

export default router;
