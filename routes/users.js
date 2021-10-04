const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.post('/register', usersController.create);
router.post('/authenticate', usersController.authenticate);

module.exports = router;