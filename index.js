const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 5000;

// connection to mongoDB
mongoose.connect(
    keys.mongoURI,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);

// exporting the models
require('./Models/Student');

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// register route
app.use(require('./routes/auth'))

// log success message on connection
mongoose.connection.on('connected', () => {
    console.log("yeah, connected to mongoDB");
});

// log error message on failure
mongoose.connection.on('error', (err) => {
    console.log("err connecting to mongoDB");
});

app.listen(PORT, () => {
    console.log(`server currently running on port ${PORT}`);
});
