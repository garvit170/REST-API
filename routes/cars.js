const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars');


router.post('/', carsController.create);
router.get('/', carsController.getAll);
router.get('/:carId', carsController.getById);
router.put('/:carId', carsController.updateById);
router.delete('/:carId', carsController.deleteById);



module.exports = router;

