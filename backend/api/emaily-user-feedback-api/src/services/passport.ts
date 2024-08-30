import passport from 'passport';
import dotenv from 'dotenv';
import { Strategy, StrategyOptions } from 'passport-google-oauth20';

import User from '../models/UserSchema';

dotenv.config();

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
    proxy: true,
};

passport.serializeUser((user: any, done) => {
    // user.id is the _id property of the user document from MongoDB, NOT the googleId or profile.id
    // this makes possible to use any OAuth provider, not just Google, as the user.id is unique in the
    // database and can be used to identify the user
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    const user = await User.findById(id);
    done(null, user);
});

/**
 * NOTE
 * Google Profile ID - identifies a user coming to us from OAuth flow
 * User Model ID - identifies a user who is stored in the database
 *
 * OAuth's only purpose is to allow someone to sign-in. After that, we use owr own internal ID's
 */

passport.use(
    new Strategy(strategyOptions, async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
            // User already exists, use the existing user
            return done(null, existingUser);
        }

        const newUser = await User.create({ googleId: profile.id });
        if (newUser) {
            // New user created, use the new user
            return done(null, newUser);
        }

        // Error creating new user
        return done(null, profile);
    })
);

const passportConfig = {
    initialize: passport.initialize(),
    session: passport.session(),
};

export default passportConfig;
