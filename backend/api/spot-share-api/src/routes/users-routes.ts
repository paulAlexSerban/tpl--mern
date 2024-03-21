import express, { Router } from 'express';
import { getUsers, signup, login } from '../controllers/users-controllers';
import { check } from 'express-validator';

const router: Router = express.Router();

router.get('/', getUsers);
router.post(
    '/signup',
    [check('name').not().isEmpty(), check('email').normalizeEmail().isEmail(), check('password').isLength({ min: 6 })],
    signup
);
router.post('/login', [check('email').normalizeEmail().isEmail(), check('password').isLength({ min: 6 })], login);

export default router;
