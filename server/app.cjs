const express = require('express')
const session = require('express-session');
const passport = require('passport');
const loginRoutes = require('./routes/login.cjs')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json());
app.use(session({secret: 'claveSecreta', resave: false, saveUninitialized: true, cookie: {secure: false}}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())

app.use('/auth', loginRoutes)

app.listen(3000, () => console.log('Server runing on http://localhost:3000'))