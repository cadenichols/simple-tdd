var express = require('express');
var router = express.Router();

// MATH

// GET /math/add/5/6  --> 11

router.get('/add/:x/:y', function(req, res) {
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);

  res.send({result: x + y});
});


router.get('/multiply/:x/:y', function(req, res) {
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);

  res.send({result: x * y});
});

module.exports = router;
