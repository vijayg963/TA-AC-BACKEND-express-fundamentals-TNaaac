var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use((err, req, res, next) => {});

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/form', (req, res, next) => {
  res.sendFile(__dirname + '/form.html');
});

app.get('/about', (req, res, next) => {
  res.send('My name is qwerty');
});

app.post('/form', (req, res, next) => {
  res.json(req.body);
});

app.post('/json', (req, res, next) => {
  console.log(req.body);
});

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

app.get('/user/:username', (req, res) => {
  var username = req.params.username;
  res.send(username);
});

app.listen(3000, () => {
  console.log('Port is listing for 3k');
});

app.use((err, req, res, next) => {
  res.status(404).send(err);
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});
