const express = require('express')
const router = express.Router();
const passport = require('passport')

require('../config/googleConf.cjs')


router.get('/google', passport.authenticate('google', {scope: ['email', 'profile']}))
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/'
}), (req, res) => res.redirect('http://localhost:5173/home'))

module.exports = router