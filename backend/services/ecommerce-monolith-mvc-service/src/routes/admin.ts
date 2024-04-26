import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

export const products = [
    {
        id: 'p1',
        title: 'Create a NodeJS App',
        price: 100,
        description: 'Learn how to create a NodeJS app from scratch',
        img: {
            src: 'https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png',
            alt: 'NodeJS Book',
        },
    },
    {
        id: 'p2',
        title: 'Create a React App',
        price: 150,
        description: 'Learn how to create a React app from scratch',
        img: {
            src: 'https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png',
            alt: 'React Book',
        },
    },
    {
        id: 'p3',
        title: 'Create a Vue App',
        price: 200,
        description: 'Learn how to create a Vue app from scratch',
        img: {
            src: 'https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png',
            alt: 'Vue Book',
        },
    },
    {
        id: 'p4',
        title: 'Create an Angular App',
        price: 250,
        description: 'Learn how to create an Angular app from scratch',
        img: {
            src: 'https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png',
            alt: 'Angular Book',
        },
    },
];

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('admin', { pageTitle: 'Admin', path: '/admin' });
});

router.get('/add-product', function (req: Request, res: Response, next: NextFunction) {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

router.post('/add-product', function (req: Request, res: Response, next: NextFunction) {
    products.push({
        id: 'p' + (products.length + 1),
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        img: {
            src: 'https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png',
            alt: 'Book',
        },
    });
    res.redirect('/');
});

export default router;
