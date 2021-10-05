const express = require('express');
const router=express.Router();
var jwt = require('jsonwebtoken');

router.get('/',function(req,res){
    return res.json({
        name : "Basic NodeJS APi",
        purpose : "To demonstarte CRUD operations",
        Authentication : "Required for movies routes,users is a public route" 
    });
});

router.use('/users',require('./users'));    //public route
router.use('/cars', validateUser, require('./cars'));  //private route

module.exports = router;

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({
            status:"error", 
            message: err.message, 
            data:null
        });
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
}