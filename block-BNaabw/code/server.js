var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(cookieParser());
app.use(logger('dev'));

// route
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/form', (req, res, next) => {
  res.sendFile(__dirname + '/form.html');
});

app.post('/form', (req, res, next) => {
  res.json(req.body);
});

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/projects.html');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log('Port is listing for 4k');
});
