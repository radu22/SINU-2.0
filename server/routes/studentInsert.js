const express = require('express');
const router = express.Router();
const studentInsertController = require('../controllers/studentInsertController')

router.post('/', studentInsertController.insertNewStudent);

module.exports = router;