import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();
import { products, categories } from '../data';

router.get('/:pid', function (req: Request, res: Response, next: NextFunction) {
    const pid = req.params.pid;
    console.log(pid);
    res.render('productDetails', {
        pageTitle: 'Product Details',
        path: '/products/:pid',
        product: products.find((p) => p.id === parseInt(pid)),
    });
});

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('products', {
        pageTitle: 'Products',
        path: '/products',
        products,
        categories,
    });
});

export default router;
