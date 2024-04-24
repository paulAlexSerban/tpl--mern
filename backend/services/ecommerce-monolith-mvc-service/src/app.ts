import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import adminRouter from './routes/admin';
import shopRouter from './routes/shop';

const app: Express = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/admin', adminRouter);
app.use('/', shopRouter);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404 | Page Not Found' });
});

export default app;
