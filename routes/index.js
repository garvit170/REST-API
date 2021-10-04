const express = require('express');
const router=express.Router();

router.get('/',function(req,res){
    return res.json({
        "name" : "Basic NodeJS APi",
        "purpose" : "To demonstarte CRUD operations",
        "Authentication" : "Required for movies routes,users is a public route" 
    });
});

// router.use('/users',require('./users'));    //public route
// router.use('/posts',require('./movies'));   //private route

module.exports=router;