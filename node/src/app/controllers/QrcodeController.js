const QRCode = require('qrcode');
module.exports.qrcodeController = (req, res, next) => {
  const text = req.query.text;
  if (text.startsWith('https://xvideos.com')) {
    res.send('May khong duoc share web bay ba');
    return;
  }

  if (text.startsWith('https://pornhub.com')) {
    res.send('May khong duoc share web bay ba');
    return;
  }
  next();
}, 
module.exports.QRCode = (req, res) => {
  const text = req.query.text;

  QRCode.toDataURL(text, { color: { light: '#33FFFF', dark: '#fff' }, width: 500 })
    .then(url => {
      var base64Data = url.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
      var img = Buffer.from(base64Data, 'base64');

      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
      });
      res.end(img);
    })
    .catch(err => {
      console.error(err)
    })
}