import path from 'path';
import express from 'express';

// import rootDir from '../util/path';

const router = express.Router();

const products: any[] = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title,
    });
    res.redirect('/');
});

export { router, products };
