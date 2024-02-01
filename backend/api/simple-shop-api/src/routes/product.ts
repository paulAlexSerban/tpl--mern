import express, { Router, Request, Response, NextFunction } from 'express';
import { v4 as uuid } from 'uuid';
const router: Router = express.Router();

type Product = {
    id: string;
    name: string;
    price: number;
};

const DUMMY_PRODUCTS: Product[] = []; // not a database, just some in-memory storage for now

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ products: DUMMY_PRODUCTS });
});

/* POST */

router.post('/', function (req: Request, res: Response, next: NextFunction) {
    const { name, price } = req.body;

    if (!name || name.trim().length === 0 || !price || price <= 0) {
        return res.status(422).json({
            message: 'Invalid input, please enter a valid title and price.',
        });
    }

    const createdProduct = {
        id: uuid(),
        name,
        price,
    };

    DUMMY_PRODUCTS.push(createdProduct);

    res.status(201).json({ message: 'Created new product.', product: createdProduct });
});

export default router;
