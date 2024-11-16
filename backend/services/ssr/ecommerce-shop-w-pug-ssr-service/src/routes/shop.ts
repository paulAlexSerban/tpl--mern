
import path from 'path';
import express from 'express';
const router = express.Router();

// import rootDir from './util/path';
import { products as adminProducts } from './admin';

router.get('/', (req, res, next) => {
  console.log(adminProducts);
  const products = adminProducts
  res.render('shop', {
    pageTitle: "Shop",
    prods: products,
    path: '/'
  });
});

export { router };