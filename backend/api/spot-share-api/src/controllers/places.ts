import { Request, Response, NextFunction } from 'express';
import HttpError from '../models/http-error';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: 'u1',
    },
    {
        id: 'p2',
        title: 'Emp State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: 'u2',
    },
];

const getPlaceById = async (req: Request, res: Response, next: NextFunction) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find((place) => place.id === placeId);

    if (!place) {
        const error = new HttpError('Could not find places for the provided user id.', 404);
        return next(error);
    }

    return res.status(200).json({
        message: 'get a place by id ' + placeId,
        place,
    });
};

const getPlacesByUserId = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.uid;
    const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

    if (!loadedPlaces || loadedPlaces.length === 0) {
        const error = new HttpError('Could not find places for the provided user id.', 404);
        return next(error);
    }
    return res.status(200).json({
        message: 'get all places by user id ' + userId,
        places: loadedPlaces,
    });
};

const createNewPlace = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, imageUrl, address, location, creator } = req.body;
    const createdPlace = {
        id: Math.random().toString(),
        title,
        description,
        imageUrl,
        address,
        location,
        creator,
    };
    DUMMY_PLACES.push(createdPlace);
    return res.status(201).json({ place: createdPlace });
};

export { getPlaceById, getPlacesByUserId };
