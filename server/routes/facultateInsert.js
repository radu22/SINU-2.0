const express = require('express');
const router = express.Router();
const facultateInsertController = require('../controllers/facultateInsertController')

router.post('/', facultateInsertController.insertNewFacultate);

module.exports = router;