const express = require('express');
const router = express.Router();
const examenInsertController = require('../controllers/examenInsertController')

router.post('/', examenInsertController.insertNewExamen);

module.exports = router;