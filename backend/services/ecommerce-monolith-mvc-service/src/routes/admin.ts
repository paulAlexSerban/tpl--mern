import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('admin', { pageTitle: 'Admin', path: '/' });
});

router.get('/add-product', function (req: Request, res: Response, next: NextFunction) {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

export default router;
