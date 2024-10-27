import express, { Router, Request, Response, NextFunction } from 'express';
import recipes from '../../_data/recipes.json';
const router: Router = express.Router();

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.status(200).json(recipes);
});

export default router;
