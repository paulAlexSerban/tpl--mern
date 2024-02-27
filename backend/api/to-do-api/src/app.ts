import express, { Express } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import indexRouter from './routes/index';
import tasksRoute from './routes/tasks';

dotenv.config();

mongoose
    .connect('mongob://mongo-db:27017/ToDoAppDb')
    .then(() => console.log('Connected'))
    .catch(() => console.log('Not connected'));

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(tasksRoute);
app.use('/', indexRouter);

export default app;
