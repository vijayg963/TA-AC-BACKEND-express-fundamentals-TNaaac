var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

// middleware
app.use(logger('dev'));

app.use((req, res, next) => {
  // if requested url is /admin throw error
  if (req.url === 'admin') {
    return next('Unauthorized');
  }
  // other let it pass to next middleware by simply calling next()
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/about', (req, res) => {
  console.log('about page');
});

app.use((req, res, next) => {
  res.send('page not found ');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.send(err);
});

app.listen(3000, () => {
  console.log('Port is listing for 3k');
});
