const express = require('express');
const {searchController} = require('../app/controllers/SearchController')
const router = express.Router();



//newsController.index

router.use('/', searchController)

module.exports = router;