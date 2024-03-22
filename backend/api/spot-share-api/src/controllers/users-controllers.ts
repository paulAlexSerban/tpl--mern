import HttpError from '../models/HttpError';
import { Controller } from './.types';
import { v4 as uuidv4 } from 'uuid';
import { validationResult } from 'express-validator';
import UserSchema from '../models/UserSchema';

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
    let users = [];
    try {
        users = await UserSchema.find({}, '-password');
    } catch (err) {
        const error = new HttpError('Fetching users failed, please try again later.', 500);
        return next(error);
    }

    res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup: Controller = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError('Invalid inputs passed, please check your data.', 422);
        return next(error);
    }
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await UserSchema.findOne({
            email,
        });
    } catch (err) {
        const error = new HttpError('Signing up failed, please try again later.', 500);
        return next(error);
    }
    if (existingUser) {
        const error = new HttpError('User exists already, please login instead.', 422);
        return next(error);
    }
    const createdUser = new UserSchema({
        name,
        email,
        image: 'https://live.staticflickr.com/7631/26849088292_36fc52ee90_b.jpg',
        password,
        places: [],
    });
    try {
        await createdUser.save();
    } catch (err) {
        console.log(err);
        const error = new HttpError('Signing up failed, please try again.', 500);
        return next(error);
    }
    res.status(201).json({ user: createdUser.toObject({ getters: true }) });
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

    let existingUser;
    try {
        existingUser = await UserSchema.findOne({
            email,
        });
    } catch (err) {
        const error = new HttpError('Logging in failed, please try again later.', 500);
        return next(error);
    }
    if (!existingUser || existingUser.password !== password) {
        const error = new HttpError('Invalid credentials, could not log you in.', 401);
        return next(error);
    }
    res.json({ message: 'Logged in!' });
};

export { getUsers, signup, login };