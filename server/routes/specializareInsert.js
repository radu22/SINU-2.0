const express = require('express');
const router = express.Router();
const specializareInsertController = require('../controllers/specializareInsertController')

router.post('/', specializareInsertController.insertNewSpecializare);

module.exports = router;