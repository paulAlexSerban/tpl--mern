import express, { Router, Request, Response, NextFunction } from 'express';
import recipes from '../../_data/recipes.json';
import StatsD from 'hot-shots';
const dogstatsd = new StatsD();
const router: Router = express.Router();

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    dogstatsd.increment('filtered-gallery-api.get');
    res.status(200).json(recipes);
});

export default router;
