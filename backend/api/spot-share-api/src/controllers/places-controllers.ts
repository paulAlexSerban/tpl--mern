import { Controller } from './.types';
import HttpError from '../models/HttpError';
import { v4 as uuidv4 } from 'uuid';
import { validationResult } from 'express-validator';
import { getCoordsForAddress } from '../utils/location';
import PlaceSchema from '../models/PlaceSchema';
import UserSchema from '../models/UserSchema';
import mongoose from 'mongoose';
import { ObjectId } from 'mongoose';
const DUMMY_PLACES = [
    {
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',

        creator: 'u1',
    },
    {
        title: 'Emp State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',

        creator: 'u2',
    },
];

const getPlaceById: Controller = async (req, res, next) => {
    const placeId = req.params.pid;
    let place;

    try {
        place = await PlaceSchema.findById(placeId);
    } catch (err) {
        const error = new HttpError('Something went wrong, could not find a place.', 500);
        return next(error);
    }

    if (!place) {
        const error = new HttpError('Could not find places for the provided user id.', 404);
        return next(error);
    }

    return res.status(200).json({ place: place.toObject({ getters: true }) });
};

const getPlacesByUserId: Controller = async (req, res, next) => {
    const userId = req.params.uid;
    let places;
    try {
        places = await PlaceSchema.find({ creator: userId });
    } catch (err) {
        const error = new HttpError('Fetching places failed, please try again later.', 500);
        return next(error);
    }

    if (!places || places.length === 0) {
        return next(new HttpError('Could not find places for the provided user id.', 404));
    }

    return res.status(200).json({ places: places.map((place) => place.toObject({ getters: true })) });
};

const createNewPlace: Controller = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError('Invalid inputs passed, please check your data.', 422);
        return next(error);
    }
    const { title, description, imageUrl, address, creator } = req.body;
    let coordinates;

    try {
        coordinates = await getCoordsForAddress(address);
    } catch (error) {
        return next(error);
    }

    const createdPlace = new PlaceSchema({
        title,
        description,
        imageUrl,
        address,
        location: coordinates,
        creator
    });

    let user;
    try {
        user = await UserSchema.findById(creator);
    } catch (err) {
        const error = new HttpError('Creating place failed, please try again.', 500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError('Could not find user for provided id.', 404);
        return next(error);
    }



    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdPlace.save({ session: sess });
        console.log(createdPlace);
        user.places.push(createdPlace._id);

        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        console.log(err);
        const error = new HttpError('Creating place failed, please try again.', 500);
        return next(error);
    }

    return res.status(201).json({ place: createdPlace });
};

const updatePlaceById: Controller = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError('Invalid inputs passed, please check your data.', 422);
        return next(error);
    }
    const placeId = req.params.pid;
    const { title, description } = req.body;
    let place;
    try {
        place = await PlaceSchema.findById(placeId);
    } catch (err) {
        const error = new HttpError('Something went wrong, could not update place.', 500);
        return next(error);
    }
    if (!place) {
        const error = new HttpError('Could not find place for the provided id.', 404);
        return next(error);
    }
    place.title = title;
    place.description = description;
    try {
        await place.save();
    } catch (err) {
        const error = new HttpError('Something went wrong, could not update place.', 500);
        return next(error);
    }
    return res.status(200).json({ place: place.toObject({ getters: true }) });
};

const deletePlaceById: Controller = async (req, res, next) => {
    const placeId = req.params.pid;
    let place;
    try {
        place = await PlaceSchema.findByIdAndDelete(placeId);
    } catch (err) {
        const error = new HttpError('Something went wrong, could not delete place.', 500);
        return next(error);
    }
    if (!place) {
        const error = new HttpError('Could not find place for the provided id.', 404);
        return next(error);
    }
    return res.status(200).json({ message: 'Deleted place.' });
};

export { getPlaceById, getPlacesByUserId, createNewPlace, updatePlaceById, deletePlaceById };
