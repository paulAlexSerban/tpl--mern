import express, { Router } from 'express';

import { getAllUsers, signup, login } from '../controllers/users';

const router: Router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', signup);
router.post('/login', login);

export default router;
