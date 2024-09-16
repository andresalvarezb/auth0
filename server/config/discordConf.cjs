const passport = require('passport');
const DiscordStrategy = require("passport-discord").Strategy;

// var scopes = ["identify", "email", "guilds", "guilds.join"];

passport.use(
    new DiscordStrategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: process.env.DISCORD_CALLBACK_URL,
            scope: ['identify', 'email', 'guilds'],

        },
        (accessToken, refreshToken, profile, cb) => {
            return cb(null, profile);
        },
    ),
);


// Serializar y deserializar usuario
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));