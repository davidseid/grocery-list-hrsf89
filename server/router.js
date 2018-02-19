var express = require('express');
var router = express.Router();
var db = require('../database');

console.log(db.saveToDatabase);

router.use((req, res, next) => {
  console.log('router working');
  next();
});

router.post('/', (req, res) => {
  console.log('post handler in router works');
  db.saveToDatabase(req.body.data, (err, response) => {
    if (err) {
      console.log('error');
    }
    res.send();
  });
  // asynchronously write this to the database
  // 
});


module.exports = router;