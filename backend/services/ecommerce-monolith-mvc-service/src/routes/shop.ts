import express, { Router } from 'express';
import * as productsController from '../controllers/products';

const router: Router = express.Router();

// GET /:root
router.get('/', productsController.getProducts);

export default router;
