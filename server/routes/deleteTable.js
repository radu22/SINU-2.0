const express = require('express');
const router = express.Router();
const deleteController = require('../controllers/deleteController')

router.post('/', deleteController.handleDelete);

module.exports = router;