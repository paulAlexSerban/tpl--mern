import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

type CartItem = {
    id: string;
    title: string;
    quantity: number;
    total: number;
    price: number;
};

type Cart = {
    items: CartItem[];
    totalQuantity: number;
};

let cart: Cart = {
    items: [],
    totalQuantity: 0,
};

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    console.log('GET /cart');
    res.status(200).json(cart);
});

/* PUT */
router.put('/', function (req: Request, res: Response, next: NextFunction) {
    console.log('PUT /cart');
    cart = req.body;
    console.log({ cart });
    res.status(200).json(cart);
});

export default router;
