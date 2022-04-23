const express = require('express');
const router = express.Router();
const studentInsertController = require('../controllers/studentInsertController')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/')
    .post( studentInsertController.insertNewStudent);

module.exports = router;