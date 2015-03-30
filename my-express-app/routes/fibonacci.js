var express = require('express'),
    fib = require('../lib/fibonacci');

var router = express.Router();

router.get('/', function(req, res, next) {
    var min = req.query.minimum || 100;
    res.end('<h1>' + fib(min) + '</h1>');
});

module.exports = router;
