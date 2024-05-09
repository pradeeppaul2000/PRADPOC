const express = require('express');
const mongoose = require('mongoose');
const key = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require ('./models/users');
require('./services/passport');

mongoose.connect(key.mongoURI);
const app = express();
app.use(cookieSession({
    maxAge:30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require ('./routes/authroutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

