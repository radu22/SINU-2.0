const express = require('express');
const router = express.Router();
const materieInsertController = require('../controllers/materieInsertController')

router.post('/', materieInsertController.insertNewMaterie);

module.exports = router;