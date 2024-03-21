import HttpError from '../models/http-error';
import { Controller } from './.types';
import { v4 as uuidv4 } from 'uuid';
import { validationResult } from 'express-validator';
const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Max Schwarz',
        email: 'test@test.com',
        password: 'testers',
    },
    {
        id: 'u2',
        name: 'Manuel Lorenz',
        email: 'test@tesing.com',
        password: 'testing',
    },
];

const getUsers: Controller = async (req, res, next) => {
    res.json({ users: DUMMY_USERS });
};

const signup: Controller = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError('Invalid inputs passed, please check your data.', 422);
        return next(error);
    }
    const { name, email, password } = req.body;
    if (DUMMY_USERS.find((user) => user.email === email)) {
        const error = new HttpError('User exists already, please login instead.', 422);
        return next(error);
    }
    const createdUser = {
        id: uuidv4(),
        name,
        email,
        password,
    };
    DUMMY_USERS.push(createdUser);
    res.status(201).json({ user: createdUser });
};

const login: Controller = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError('Invalid inputs passed, please check your data.', 422);
        return next(error);
    }
    const { email, password } = req.body;
    if (!email || !password) {
        const error = new HttpError('Invalid inputs passed, please check your data.', 422);
        return next(error);
    }
    const identifiedUser = DUMMY_USERS.find((user) => user.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
        const error = new HttpError('Could not identify user, credentials seem to be wrong.', 401);
        return next(error);
    }
    res.json({ message: 'Logged in!' });
};

export { getUsers, signup, login };
