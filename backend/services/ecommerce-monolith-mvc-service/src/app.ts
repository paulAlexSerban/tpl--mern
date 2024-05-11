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
app.set('views', 'src/views');
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

// Routes
app.use('/admin', adminRouter);
app.use('/', shopRouter);

// Error handling
app.use(errorController.get404);

export default app;
