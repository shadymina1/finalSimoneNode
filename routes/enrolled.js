var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('enrolled', { title: "Simone's Academy" });
});

module.exports = router;