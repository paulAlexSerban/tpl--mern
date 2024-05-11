import express, { Router, Request, Response, NextFunction } from 'express';
import * as productsController from '../controllers/products';

const router: Router = express.Router();

/* GET */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('admin', { pageTitle: 'Admin', path: '/admin' });
});

// GET /admin/add-product
router.get('/add-product', productsController.getAddProduct);
// POST /admin/add-product
router.post('/add-product', productsController.postAddProduct);

export default router;
