import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import fortunesRouter from './routes/fortunes';

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', fortunesRouter);

export default app;
