const express = require("express");
const router = express.Router();
const passport = require("passport");

require("../config/googleConf.cjs");
require('../config/discordConf.cjs')

router.get("/", (req, res) => {
    req.logout(() => {
        res.redirect("/");
    });
});

router.get(
    "/google",
    passport.authenticate("google", { scope: ["email", "profile"] }),
);
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/",
        successRedirect: "/home",
    }),
    (req, res) => res.redirect("http://localhost:5173/home"),
);

router.get("/discord", passport.authenticate("discord"));
router.get(
    "/discord/callback",
    passport.authenticate("discord", {
        failureRedirect: "/",
        successRedirect: "/home",
    }),
);

router.get("/home", (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user });
    } else {
        res.redirect("/");
    }
});


module.exports = router;
