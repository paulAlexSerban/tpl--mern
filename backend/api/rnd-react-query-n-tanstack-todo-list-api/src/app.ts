import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import tasksRouter from './routes/tasks';
const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/tasks', tasksRouter);
app.use('/api', indexRouter);

export default app;
