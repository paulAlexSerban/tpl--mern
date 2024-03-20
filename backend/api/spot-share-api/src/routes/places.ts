import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

/* GET */
router.get('/user/:id', function (req: Request, res: Response, next: NextFunction) {
    res.json({
        message: 'retrive a list of all places for a given user id' + req.params.id,
    });
});

router.post('/:pid', function (req: Request, res: Response, next: NextFunction) {
    res.json({
        message: 'get a specific place by id' + req.params.pid,
    });
});

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
