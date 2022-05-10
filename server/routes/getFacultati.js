const express = require('express');
const router = express.Router();
const getGrupeController = require('../controllers/getGrupeController')

router.get('/', getGrupeController.getFacultati);

module.exports = router;