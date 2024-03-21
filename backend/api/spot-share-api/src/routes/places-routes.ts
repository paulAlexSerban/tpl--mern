import { Router } from 'express';
import {
    getPlaceById,
    getPlacesByUserId,
    createNewPlace,
    updatePlaceById,
    deletePlaceById,
} from '../controllers/places-controllers';
import { check } from 'express-validator';

const router: Router = Router();

router.get('/user/:uid', getPlacesByUserId);
router.get('/:pid', getPlaceById);
router.post(
    '/',
    [check('title').not().isEmpty(), check('description').isLength({ min: 5 }), check('address').not().isEmpty()],
    createNewPlace
);
router.patch('/:pid', [check('title').not().isEmpty(), check('description').isLength({ min: 5 })], updatePlaceById);
router.delete('/:pid', deletePlaceById);

export default router;
