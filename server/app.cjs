const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require('cors');

require("./config/discordConf.cjs");

const routes = require("./routes/login.cjs");
const app = express();


// Cors middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        // cookie: { secure: false },
    }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", routes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
