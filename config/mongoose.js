//require the lbrary
const mongoose = require('mongoose');


//connect to the database
mongoose.connect('mongodb://localhost/social_db');


//acuire  the connection (to check if it is succesful)
const db = mongoose.connection;


//error
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


//up and running then print the massage
db.once('open', function() {
    console.log('connected to Dtabase :: MongoDB');
});

module.exports = db;