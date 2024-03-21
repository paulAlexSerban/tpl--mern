import { Router } from 'express';
import {
    getPlaceById,
    getPlacesByUserId,
    createNewPlace,
    updatePlaceById,
    deletePlaceById,
} from '../controllers/places-controllers';

const router: Router = Router();

router.get('/user/:uid', getPlacesByUserId);
router.get('/:pid', getPlaceById);
router.post('/', createNewPlace);
router.patch('/:pid', updatePlaceById);
router.delete('/:pid', deletePlaceById);

export default router;
