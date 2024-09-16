const express = require("express");
const router = express.Router();
const passport = require("passport");

// require("../config/googleConf.cjs");
// require("../config/discordConf.cjs");

// init session

router.get("/discord", passport.authenticate("discord"));
// router.get(
//     "/google",
//     passport.authenticate("google", { scope: ["email", "profile"] }),
// );

// callbacks
// router.get(
//     "/google/callback",
//     passport.authenticate("google", { failureRedirect: "/" }),
//     (req, res) => res.redirect(process.env.FRONTED_URL + "/home"),
// );

router.get(
    "/discord/callback",
    passport.authenticate("discord", { failureRedirect: "/" }),
    (req, res) => res.redirect(process.env.FRONTED_URL + "/home"),
);

// get user profile
router.get("/auth/user", (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ error: "User not authenticated" });
    }
});

// log out
router.get("/auth/logout", (req, res) => {
    req.logout(() => {
        res.redirect(process.env.FRONTEND_URL);
    });
});

// // get home
// router.get("/home", (req, res) => {
//     if (req.isAuthenticated()) {
//         res.json({ user: req.user });
//     } else {
//         res.redirect("/");
//     }
// });

// router.get("/", (req, res) => {
//     req.logout(() => {
//         res.redirect("/");
//     });
// });

module.exports = router;
