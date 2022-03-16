var express = require('express');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');

var app = express();

app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.post('/new', (req, res) => {
  res.json(req.body);
});

app.get('/users/username', (req, res) => {
  var username = req.params.username;
  res.send(username);
});

app.listen(3000, () => {
  console.log('Port is listen for port 3k');
});
