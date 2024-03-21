import express, { Router } from 'express';

import { getUsers, signup, login } from '../controllers/users-controllers';

const router: Router = express.Router();

router.get('/', getUsers);
router.post('/signup', signup);
router.post('/login', login);

export default router;
