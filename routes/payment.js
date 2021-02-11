var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('payment', { title: "Simone's Academy" });
});

router.post('/', function(req, res, next) {
    res.render('payment', { title: "Simone's Academy" });
  });
module.exports = router;
