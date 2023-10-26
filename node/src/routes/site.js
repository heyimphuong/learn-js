const express = require('express');
const router = express.Router();
const  SiteController  = require('../app/controllers/SiteControler');

//newsController.index

router.use('/search', SiteController.search);
router.use('/',   SiteController.index);

module.exports = router;