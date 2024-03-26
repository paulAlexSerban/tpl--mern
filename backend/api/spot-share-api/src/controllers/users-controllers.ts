import HttpError from '../models/HttpError';
import { Controller } from './.types';
import { validationResult } from 'express-validator';
import UserSchema from '../models/UserSchema';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

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
    if (!req.file) {
        const error = new HttpError('Image file is required.', 422);
        return next(error);
    }

    const NUMBER_OF_SALTING_ROUNDS = 12;
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, NUMBER_OF_SALTING_ROUNDS);
    } catch (err) {
        const error = new HttpError('Could not create user, please try again.', 500);
        return next(error);
    }

    // if starts with dist, remove dist/src/public
    const filePath = req.file.path.replace(/^dist\/src\/public\//, '');
    const createdUser = new UserSchema({
        name,
        email,
        image: filePath,
        password: hashedPassword,
        places: [],
    });
    try {
        await createdUser.save();
    } catch (err) {
        console.log(err);
        const error = new HttpError('Signing up failed, please try again.', 500);
        return next(error);
    }
    let jwtToken;

    try {
        jwtToken = jwt.sign(
            { userId: createdUser.id, email: createdUser.email }, // payload - data to be encoded
            JWT_SECRET, // secret key for encoding the data in the payload (should be a long random string)
            {
                expiresIn: '1h', // options - expiration time for the token
            }
        );
    } catch (err) {
        const error = new HttpError('Signing up failed, please try again.', 500);
        return next(error);
    }

    res.status(201).json({
        userId: createdUser.id,
        email: createdUser.email,
        token: jwtToken,
    });
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

    if (!existingUser) {
        const error = new HttpError('Invalid credentials, could not log you in.', 401);
        return next(error);
    }

    let isValidPassword = false;

    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        const error = new HttpError('Could not log you in, please check your credentials and try again.', 500);
        return next(error);
    }

    if (!isValidPassword) {
        const error = new HttpError('Invalid credentials, could not log you in.', 403);
        return next(error);
    }

    let jwtToken;

    try {
        jwtToken = jwt.sign(
            { userId: existingUser.id, email: existingUser.email }, // payload - data to be encoded
            JWT_SECRET, // secret key for encoding the data in the payload (should be a long random string)
            {
                expiresIn: '1h', // options - expiration time for the token
            }
        );
    } catch (err) {
        const error = new HttpError('Logging-in  failed, please try again.', 500);
        return next(error);
    }

    res.json({
        message: 'Logged in!',
        userId: existingUser.id,
        email: existingUser.email,
        token: jwtToken,
    });
};

export { getUsers, signup, login };
