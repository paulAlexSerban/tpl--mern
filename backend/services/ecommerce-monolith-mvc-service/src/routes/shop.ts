import express, { Router } from 'express';
import * as shopController from '../controllers/shop';

const router: Router = express.Router();

// GET /:root
router.get('/', shopController.getIndex);
// GET /:root/products
router.get('/products', shopController.getProducts);
// GET /:root/products/:pid
router.get('/products/:pid');
// GET /:root/cart
router.get('/cart', shopController.getCart);
// POST /:root/checkout
router.get('/checkout', shopController.getCheckout);

export default router;
