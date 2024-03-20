import express, { Router, Request, Response, NextFunction } from 'express';

import placesRouter from './places';
import usersRouter from './users';

const router: Router = express.Router();

router.use('/places', placesRouter);
router.use('/users', usersRouter);

export default router;
