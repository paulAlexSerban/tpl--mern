import path from 'path';
import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Routes Import
import adminRouter from './routes/admin';
import shopRouter from './routes/shop';

// Controllers Import
import * as errorController from './controllers/error';

// Express App
const app: Express = express();

// View Engine Setup
const viewsPath = path.join(__dirname, './views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// Routes
app.use('/admin', adminRouter);
app.use('/', shopRouter);

// Error handling
app.use(errorController.get404);

export default app;
