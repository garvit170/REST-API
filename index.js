const express = require('express');
const app=express();
//const db=require('./config/mongoose');
const port = 4500;
const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const movies = require('./routes/movies') ;
// const users = require('./routes/users');
var jwt = require('jsonwebtoken');

//app.set('secretKey', 'something'); // jwt secret token


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//======== use express router ===============
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error encountered in running the server: ${err}`);
        //interpolation string
        return;
    }
    console.log(`Server is running on port: ${port}`);
});