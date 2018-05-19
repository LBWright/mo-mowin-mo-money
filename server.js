const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const lots = require('./routes/api/lots');

const PORT = process.env.PORT || 5000;

const app = express();
//bodyParser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/lots', lots);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);

});