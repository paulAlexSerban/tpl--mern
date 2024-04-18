import { Router } from 'express';
import { getAll, get, add, replace, remove } from '../data/event';
import { isValidText, isValidDate, isValidImageUrl } from '../util/validation';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const events = await getAll();
        setTimeout(() => {
            res.json({ events: events });
        }, 1000);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const event = await get(req.params.id);
        res.json({ event: event });
    } catch (error) {
        next(error);
    }
});

type Errors = {
    [key: string]: string;
};

router.post('/', async (req, res, next) => {
    const data = req.body;

    let errors: Errors = {};

    if (!isValidText(data.title)) {
        errors.title = 'Invalid title.';
    }

    if (!isValidText(data.description)) {
        errors.description = 'Invalid description.';
    }

    if (!isValidDate(data.date)) {
        errors.date = 'Invalid date.';
    }

    if (!isValidImageUrl(data.image)) {
        errors.image = 'Invalid image.';
    }

    if (Object.keys(errors).length > 0) {
        return res.status(422).json({
            message: 'Adding the event failed due to validation errors.',
            errors,
        });
    }

    try {
        await add(data);
        setTimeout(() => {
            res.status(201).json({ message: 'Event saved.', event: data });
        }, 1000);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', async (req, res, next) => {
    const data = req.body;

    let errors: Errors = {};

    if (!isValidText(data.title)) {
        errors.title = 'Invalid title.';
    }

    if (!isValidText(data.description)) {
        errors.description = 'Invalid description.';
    }

    if (!isValidDate(data.date)) {
        errors.date = 'Invalid date.';
    }

    if (!isValidImageUrl(data.image)) {
        errors.image = 'Invalid image.';
    }

    if (Object.keys(errors).length > 0) {
        return res.status(422).json({
            message: 'Updating the event failed due to validation errors.',
            errors,
        });
    }

    try {
        await replace(req.params.id, data);
        res.json({ message: 'Event updated.', event: data });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await remove(req.params.id);
        res.json({ message: 'Event deleted.' });
    } catch (error) {
        next(error);
    }
});

export default router;
