var express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/json', (req, res) => {
  // capture the data
  console.log(req.body);
});

app.listen(4000, () => {
  console.log('Port is listening for port 4k');
});
