const express = require('express');
const { homesController } = require('../app/controllers/HomesController');
const router = express.Router();


router.use('/', homesController)

module.exports = router;