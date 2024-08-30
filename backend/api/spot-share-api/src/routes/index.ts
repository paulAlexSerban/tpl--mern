import express, { Router, Request, Response, NextFunction } from 'express';

import placesRouter from './places-routes';
import usersRouter from './users-routes';

const router: Router = express.Router();

router.use('/places', placesRouter);
router.use('/users', usersRouter);

export default router;
