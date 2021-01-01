// Importing required modules
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

// parse env variables
require('dotenv').config();

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// bring in the database config and connect the database
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Database connected successfully ${db}`)

        // Defining route middleware
        app.use('/api', require('./routes/api'));
        app.use('/apitodo', require('./routes/todoroutes.js'));
    })
    .catch( err => {
        console.log(`Unable to connnect with the database ${err}`);
    });

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;