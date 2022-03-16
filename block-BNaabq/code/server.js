var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

// app.use('/', (req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });

app.use(logger('dev'));

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var count = req.cookies.count;
  if (count) {
    res.cookie('count', Number(count) + 1);
  } else {
    res.cookie('count', 1);
  }
  console.log(count);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/json', (req, res) => {
  // capture the data
  console.log(req.body);
});

app.listen(4000, () => {
  console.log('Port is listen for port 4k');
});
