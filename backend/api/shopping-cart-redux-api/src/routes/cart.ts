import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

let cart: never[] = [];

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    console.log('GET /cart');
    res.status(200).json(cart as any);
});

/* PUT */
router.put('/', function (req: Request, res: Response, next: NextFunction) {
    console.log('PUT /cart');
    cart = req.body;
    console.log({ cart });
    res.status(200).json(cart);
});

export default router;
