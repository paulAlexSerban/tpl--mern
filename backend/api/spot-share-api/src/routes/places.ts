import express, { Router, Request, Response, NextFunction } from 'express';
import HttpError from '../models/http-error';
import { getPlaceById, getPlacesByUserId } from '../controllers/places';
const router: Router = express.Router();

/* GET */
router.get('/user/:uid', getPlacesByUserId);
router.get('/:pid', getPlaceById);

router.post('/', function (req: Request, res: Response, next: NextFunction) {
    res.json({
        message: 'create a new place',
    });
});

router.patch('/:pid', function (req: Request, res: Response, next: NextFunction) {
    res.json({
        message: 'update a place by id' + req.params.pid,
    });
});

router.delete('/:pid', function (req: Request, res: Response, next: NextFunction) {
    res.json({
        message: 'delete a place by id' + req.params.pid,
    });
});

export default router;
