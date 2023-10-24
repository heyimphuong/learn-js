const path = require('path')
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const QRCode = require('qrcode')

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname,'../../')));
//HTTP logger 
// app.use(morgan('tiny'));

//Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


app.get('/home', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
app.get('/search', (req, res) => {
  res.render('search');
})

app.get('/qrcode', (req, res) => {
  const text = req.query.text;
  if (text.startsWith('https://xvideos.com')) {
    res.send('May khong duoc share web bay ba');
    return;
  }
  
  if (text.startsWith('https://pornhub.com')) {
    res.send('May khong duoc share web bay ba');
    return;
  }
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

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));