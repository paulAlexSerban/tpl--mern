import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import cartRouter from './routes/cart';
import checkoutRouter from './routes/checkout';
import confirmationRouter from './routes/confirmation';
import contactRouter from './routes/contact';
import indexRouter from './routes/index';
import orderRouter from './routes/order';
import privacyRouter from './routes/privacy';
import productsRouter from './routes/products';

const app: Express = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/confirmation', confirmationRouter);
app.use('/contact', contactRouter);
app.use('/order', orderRouter);
app.use('/privacy', privacyRouter);
app.use('/products', productsRouter);

app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404 | Page Not Found', path: '/404' });
});

export default app;
