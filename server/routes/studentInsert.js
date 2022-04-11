const express = require('express');
const router = express.Router();
const studentInsertController = require('../controllers/studentInsertController')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/')
    .post(verifyJWT, studentInsertController.insertNewStudent);

module.exports = router;