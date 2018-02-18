var express = require('express');
var router = require('./router');
var app = express();

app.use('/?', (req, res, next) => {
  console.log(`${req.method} received to ${req.url}`);
  next();
});

app.use(express.static(__dirname + '/../client/dist'));

app.use('/?', router);

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

