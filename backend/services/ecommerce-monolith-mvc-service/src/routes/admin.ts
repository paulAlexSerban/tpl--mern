import express, { Router, Request, Response, NextFunction } from 'express';
import * as shopController from '../controllers/shop';
import * as adminController from '../controllers/admin';
const router: Router = express.Router();

// GET /:root/admin/products
router.get('/products', adminController.getProducts);

// GET /:root/admin/add-product
router.get('/add-product', adminController.getAddProduct);
// POST /:root/admin/add-product
router.post('/add-product', adminController.postAddProduct);

export default router;
