const Car = require('../models/car');

//Add a new car to database (CRETAE)
module.exports.create = function(req,res,next){
    Car.create({
        name: req.body.name,
        maker: req.body.maker
    },function(err, car){
        if(err)
            next(err);
        else{
            return res.json({
                status: "success",
                message: "car added",
                data: car
            })
        }
    })
}


// get a car by Id (RESPONSE)
module.exports.getById = function(req,res){
    console.log(req.body);
    Car.findById(req.params.carId, function (err, car) {
        if (err) {
            next(err);
        } else {
            return res.json({
                status: "success",
                message: "Movie found!", 
                data: {
                    car: car
                }
            });
        }
    });
}

// get all cars (RESPONSE)
module.exports.getAll = function(req,res){
    let carsList = [];
    Car.find({}, function (err, cars) {
        if (err) {
            next(err);
        } else {
            for (let car of cars) {
                carsList.push({
                    id: car._id,
                    name: car.name, 
                    maker: car.maker
                });
            }
            return res.json({
                status: "success",
                message: "Returned the list of all acrs in database", 
                data: {
                    cars: carsList
                }
            });
        }
    });
}

// update a car by id (UPDATE)
module.exports.updateById = function(req,res){
    Car.findByIdAndUpdate(req.params.carId,{name: req.body.name,maker: req.body.maker},function(err, car){
        if(err)
            next(err);
        else {
            return res.json({
                status:"success", 
                message: "Car updated", 
                data: car
            });
        }
    });
}

// delete a car by id (DELETE)
module.exports.deleteById = function(req,res){
    Car.findByIdAndRemove(req.params.carId,function(err,car){
        if(err)
            next(err);
        else
            return res.json({
                status: "success",
                message: "Car deleted",
                data: car
            });
    });
}

