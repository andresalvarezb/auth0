const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
},
    (request, accessToken, refreshToken, profile, done) => {
        return done(null, profile);
    }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'emails', 'name', 'picture.type(large)']
},
    (accessToken, refreshToken, profile, cb) => {
        return cb(null, profile)
    }
))

passport.serializeUser((user, done) => done(null, user))

passport.deserializeUser((user, done) => done(null, user))