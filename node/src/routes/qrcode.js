const express = require('express');
const { qrcodeController,QRCode } = require('../app/controllers/QrcodeController')
const router = express.Router();



//newsController.index

router.use('/', qrcodeController, QRCode)

module.exports = router;