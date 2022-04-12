const express = require('express');
const router = express.Router();
const rezultatExamenInsertController = require('../controllers/rezultatExamenInsertController')

router.post('/', rezultatExamenInsertController.insertNewRezultatExamen);

module.exports = router;