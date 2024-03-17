import express, { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router: Router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/api' }));

router.get('/current_user', (req: Request, res: Response) => {
    res.send(req.user);
});

router.get('/logout', (req: Request, res: Response) => {
    req.logout((err) => {
        if (err) {
            res.status(500).json({ message: 'Error logging out' });
        }
        res.status(200).json({ message: 'Logged out', user: req.user });
    });
});

export default router;
