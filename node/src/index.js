const path = require('path')
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { route } = require('./routes');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '../../')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//HTTP logger 
// app.use(morgan('tiny'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

// Routes init 
route(app);

app.use('*', (req, res) => {
  res.send("Not Found");
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));