
const { checkTextMiddleware } = require("../app/middlewares/CheckTextMiddleware");
const fs = require('fs');
const { capitalizeHeading } = require('../app/helpers/string');
const newsRouter = require('./news');
const homesRouter = require('./homes');
const searchRouter = require('./search');
const qrcodeRouter = require('./qrcode');

module.exports.route = (app) => {
  app.get('/homes', homesRouter);

  app.use('/news', newsRouter);

  app.use('/search', searchRouter);

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

    fs.readFile('./test.txt', 'utf8', (err, data) => {
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

  app.get('/qrcode', checkTextMiddleware, qrcodeRouter);
}