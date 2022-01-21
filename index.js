const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');


app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
//extracts style and scripts from sub page into the layout

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use app express router 



app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err) {
    if (err) {
        console.log(`Error in running the server :  $ { err }`);

    }
    console.log(`server is running on port : ${port}`);
});