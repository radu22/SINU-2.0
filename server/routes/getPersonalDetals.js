const express = require('express');
const router = express.Router();
const personalDetailsController = require('../controllers/personalDetailsController')

router.post('/', personalDetailsController.getPersonalDetails);

module.exports = router;