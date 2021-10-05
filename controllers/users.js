const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// =========== New User Creation ========================
module.exports.create = function(req,res){
    User.findOne({email: req.body.email},function(err, user){
        if(err){console.log('Error in finding user in database'); return;}

        if(!user){
            User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            },function(err, user){
                if(err)
                    next(err);
                else{
                    return res.json({
                        staus: "success",
                        message: "User Added successfully",
                        data: "null"
                    });
                }        
            });
        }else{
            return res.json({
                staus: "Failure",
                message: "Email id already exists",
                data: "null"
            });
        }
    });
}

//========== Authenticating User Requests  ====================
module.exports.authenticate = function(req,res,next){
    User.findOne({email:req.body.email}, function(err, user){
        if (err) {
            next(err);
        } else {
            if (user != null && bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({ id: user._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                return res.json({
                    status: "success",
                    message: "user found",
                    data: {
                        user: user,
                        token: token
                    }
                });
            } else {
                return res.json({
                    status: "error",
                    message: "Invalid email/password!",
                    data: null
                });
            }
        }
    });
}
