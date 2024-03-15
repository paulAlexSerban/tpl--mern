import express, { Router, Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
const router: Router = express.Router();

const doWork = (duration: number) => {
    const start = Date.now();
    while (Date.now() - start < duration) {}
};

let start: number;
start = Date.now();

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('1:', Date.now() - start);
    });

    res.send(
        JSON.stringify({
            id: 1,
            name: 'John Doe',
            email: 'jon@dow.com',
        })
    );
});

export default router;
