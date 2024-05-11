import { products } from './../../../ecommerce-arch-journey-monolith-service/src/data';
import { Request, Response, NextFunction } from 'express';

import Product from '../models/product';

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCss: true,
        });
    });
};

export const getAddProduct = (req: Request, res: Response, next: NextFunction) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCss: true,
        productCss: true,
        activeAddProduct: true,
    });
};

export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
    const { title, price, description } = req.body;
    const product = new Product(title, price, description);
    product.save();
    res.redirect('/');
};
