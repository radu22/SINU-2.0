const express = require('express');
const router = express.Router();
const userDetailsController = require('../controllers/userDetailsController')

router.post('/', userDetailsController.getUserDetails);

module.exports = router;