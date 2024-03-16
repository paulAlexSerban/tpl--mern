import express, { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import dotenv from 'dotenv';
import { Strategy, StrategyOptions } from 'passport-google-oauth20';

dotenv.config();
const router: Router = express.Router();

const googleOAuthClientID = process.env.EMAILY_GOOGLE_OAUTH_CLIENT_ID;
const googleOAuthClientSecret = process.env.EMAILY_GOOGLE_OAUTH_CLIENT_SECRET;
const googleOAuthCallbackURL = process.env.EMAILY_GOOGLE_OAUTH_CALLBACK_URL;

if (!googleOAuthClientID || !googleOAuthClientSecret || !googleOAuthCallbackURL) {
    throw new Error('Missing Google OAuth configuration. Please check your environment variables.');
}

const strategyOptions: StrategyOptions = {
    clientID: googleOAuthClientID,
    clientSecret: googleOAuthClientSecret,
    callbackURL: googleOAuthCallbackURL,
};

passport.use(
    new Strategy(strategyOptions, (accessToken, refreshToken, profile, done) => {
        console.log({
            accessToken,
            refreshToken,
            profile,
        });
        return done(null, profile);
    })
);

/* GET */
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req: Request, res: Response) => {
        res.redirect('/api/surveys');
    }
);

export default router;
