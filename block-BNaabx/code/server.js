var express = require('express');

var app = express();

var store = '';

app.use((req, res, next) => {
  let current = new Date();
  console.log(req.method, req.url, current);
  next();
});

// routes
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/stylesheet/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/stylesheet/style.css');
});

app.get('/image/tower', (req, res) => {
  res.sendFile(__dirname + '/public/image/tower.jpg');
});

app.post('/json', (req, res) => {
  console.log('initiated');

  setTimeout(() => {
    console.log(req.body, 'post/json');
    res.send(req.body);
  }, 0);
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    req.body = JSON.parse(store);
    console.log(req.body, 'start');
  });
});

app.listen(4000, () => {
  console.log('Port is listing for 4k');
});
