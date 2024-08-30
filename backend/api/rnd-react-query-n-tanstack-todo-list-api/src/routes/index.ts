import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.send(
        JSON.stringify({
            id: 1,
            name: 'RND React Query N TanStack ToDo List',
            email: 'jon@dow.com',
        })
    );
});

export default router;
