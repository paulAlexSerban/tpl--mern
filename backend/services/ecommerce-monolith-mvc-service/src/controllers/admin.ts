import { Request, Response, NextFunction } from 'express';
import Product, { IProductImage } from '../models/product';

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    });
};

export const getAddProduct = (req: Request, res: Response, next: NextFunction) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCss: true,
        productCss: true,
        activeAddProduct: true,
    });
};

export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
    const { title, price, description, imageSrc, imageAlt } = req.body;
    const img: IProductImage = { src: imageSrc, alt: imageAlt };
    const product = new Product(title, price, description, img);
    product.save();
    res.redirect('/');
};
