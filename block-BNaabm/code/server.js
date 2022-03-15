var express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/about', (req, res) => {
  res.send('Welcome to Express');
});

app.listen(4000, () => {
  console.log('Port is listening for port 4k');
});
