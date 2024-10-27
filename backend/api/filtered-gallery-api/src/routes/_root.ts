import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ success: true, msg: 'Hello World!' });
});

export default router;
