import express, { Router } from 'express';

import monstersRouter from './monsters';
import habitatsRouter from './habitats';
import livesRouter from './lives';

const router: Router = express.Router();

router.use('/monsters', monstersRouter);
router.use('/habitats', habitatsRouter);
router.use('/lives', livesRouter);

export default router;
