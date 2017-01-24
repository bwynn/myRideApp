const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const flash = require('flash');
const session = require('express-session');

// config
const PORT = process.env.PORT || 3000;
const DB = require('./config/db');

const OPTIONS = {
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000,
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000,
    }
  },
};

// mongo hookup
mongoose.connect(/*MONGOLAB_URI || */DB.db);

// header config for heroku deployment
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] == 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// define and set up connection options
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(express.static('public'));

// authentication initialization
app.use(session({secret: 'pL3x82_9d'}));
app.use(passport.initialize());
app.use(passport.session());

// routes
require('./routes/routes')(app, passport);

// server
app.listen(PORT);

console.log("Port running on " + PORT);

exports = module.exports = app;
