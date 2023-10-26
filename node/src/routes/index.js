
const { checkTextMiddleware } = require("../app/middlewares/CheckTextMiddleware");
const fs = require('fs');
const { capitalizeHeading } = require('../app/helpers/string');
const newsRouter = require('./news');
const siteRouter = require('./site');
const qrcodeRouter = require('./qrcode');

module.exports.route = (app) => {
  
  app.use('/', siteRouter);

  app.use('/news', newsRouter);

  app.get('/search', siteRouter);

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