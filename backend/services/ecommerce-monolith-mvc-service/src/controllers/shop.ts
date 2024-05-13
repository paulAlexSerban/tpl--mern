import { Request, Response, NextFunction } from 'express';
import Product from '../models/product';

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: '/products',
        });
    });
};

export const getIndex = (req: Request, res: Response, next: NextFunction) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    });
};

export const getCart = (req: Request, res: Response, next: NextFunction) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
    });
};

export const getCheckout = (req: Request, res: Response, next: NextFunction) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    });
};
