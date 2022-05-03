const express = require('express');
const router = express.Router();
const verifyCnpController = require('../controllers/verifyCnpController')

router.post('/', verifyCnpController.verifyCnp);

module.exports = router;