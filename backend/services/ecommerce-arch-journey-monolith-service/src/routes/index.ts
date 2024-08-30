import express, { Router, Request, Response, NextFunction } from 'express';
import { products } from '../data';
const router: Router = express.Router();

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('index', {
        pageTitle: 'HomePage',
        category: 'Electronics',
        products,
        path: '/',
    });
});

export default router;
