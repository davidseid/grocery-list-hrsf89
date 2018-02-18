var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('router working');
  next();
});

router.post('/', (req, res) => {
  console.log('post handler in router works');
});


module.exports = router;