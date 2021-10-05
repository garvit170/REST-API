const express = require('express');
const app=express();
const db=require('./config/mongoose');
const port = 4500;
const morgan = require('morgan');
var jwt = require('jsonwebtoken');

app.set('secretKey', 'something'); // jwt secret token


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//======== use express router ===============
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error encountered in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});


  
  
  // express doesn't consider not found 404 as an error so we need to handle 404 it explicitly
  // handle 404 error
  app.use(function(req, res, next) {
      let err = new Error('Not Found');
      err.status = 404;
      next(err);
  });
  
  // handle errors
  app.use(function(err, req, res, next) {
      console.log(err);
      
    if(err.status === 404)
        res.status(404).json({message: "Not found"});
    else	
      res.status(500).json({message: "Something looks wrong :( !!!"});
  
  });