import { Router } from 'express';
import {
    getPlaceById,
    getPlacesByUserId,
    createNewPlace,
    updatePlaceById,
    deletePlaceById,
} from '../controllers/places-controllers';
import { check } from 'express-validator';
import fileUpload from '../middlewares/file-upload';
import checkAuth from '../middlewares/check-auth';
const router: Router = Router();

router.get('/user/:uid', getPlacesByUserId);
router.get('/:pid', getPlaceById);

// all routes above this line will NOT require authentication

router.use(checkAuth);

router.post(
    '/',
    fileUpload.single('image'),
    [check('title').not().isEmpty(), check('description').isLength({ min: 5 }), check('address').not().isEmpty()],
    createNewPlace
);
router.patch('/:pid', [check('title').not().isEmpty(), check('description').isLength({ min: 5 })], updatePlaceById);
router.delete('/:pid', deletePlaceById);

export default router;
