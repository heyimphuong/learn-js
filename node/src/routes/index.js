const QRCode = require('qrcode');
const { checkTextMiddleware } = require("../app/middlewares/CheckTextMiddleware");
const fs = require('fs');
const { capitalizeHeading } = require('../app/helpers/string');

module.exports.route = (app) => {
  app.get('/home', (req, res) => {
    res.render('home');
  });

  // app.get('/news', (req, res) => {
  //   res.render('news');
  // });

  app.get('/search', (req, res) => {
    res.render('search')
  });

  app.post('/search', (req, res) => {
    console.log(req.body)
    res.send('')
  });

  app.get('/string', (req, res) => {

    // const content = 'Some content!';

    // fs.writeFile('./test1.txt', content, err => {
    //   if (err) {
    //     console.error(err);
    //   }
    //   // file written successfully
    // });

    fs.readFile('./test.txt','utf8', (err, data) => {
      if (err) throw err;

      res.send(capitalizeHeading(data))
    return


    // const lines = data.split('\n');


    // const filteredLines = lines.filter(line => {
    //   return /^(#|##|###)/.test(line) ;
    // });

    // console.log(filteredLines.join('\n')); 

    // res.render('readfile')
  });
})

app.get('/qrcode', checkTextMiddleware, (req, res, next) => {
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
}, (req, res) => {
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
})
}