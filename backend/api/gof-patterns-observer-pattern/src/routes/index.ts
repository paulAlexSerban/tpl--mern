import express, { Router, Request, Response, NextFunction } from 'express';
import Subject from '../Subject';
import AsyncObserver from '../DataUpdatesObserver/AsyncObserver';

const dataSubject = new Subject();
const asyncObserver = new AsyncObserver();
dataSubject.attach(asyncObserver);

const router: Router = express.Router();

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.send(
        JSON.stringify({
            id: 1,
            name: 'John Doe',
            email: 'jon@dow.com',
        })
    );
});

router.get('/trigger-event', (req, res) => {
    const data = { message: 'Event Triggered', timestamp: Date.now() };
    dataSubject.notify(JSON.stringify(data));
    res.send('Event has been triggered and observers notified.');
});

export default router;
