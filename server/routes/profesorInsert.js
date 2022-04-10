const express = require('express');
const router = express.Router();
const profesorInsertController = require('../controllers/profesorInsertController')

router.post('/', profesorInsertController.insertNewProfesor);

module.exports = router;