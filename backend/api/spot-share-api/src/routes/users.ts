import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.json({
        message: 'get all users',
    });
});

router.post('/signup', function (req: Request, res: Response, next: NextFunction) {
    res.json({
        message: 'create a new user',
    });
});

router.post('/login', function (req: Request, res: Response, next: NextFunction) {
    res.json({
        message: 'login a user',
    });
});

export default router;
