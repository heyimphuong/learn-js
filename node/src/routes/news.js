const express = require('express');
const { newsController } = require('../app/controllers/NewsController');
const router = express.Router();



//newsController.index

router.use('/', newsController )

module.exports = router;