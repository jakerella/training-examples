var express = require('express');
var router = express.Router();

var users = {};
var nextId = 0;

// /User

router.all('/:id([0-9]+)', function(req, res, next) {
    var user = users[req.params.id];
    
    if (!user) {
        next(new Error('No user by that ID!'));
        return;
    }
    
    req.user = user;
    
    next();
});

router.get('/', function(req, res, next) {
  res.json([13, 27, 42]);
});

router.get('/create', function(req, res, next) {
  res.render('create-user');
});

router.post('/', function(req, res, next) {
  var user = {
    id: ++nextId,
    name: req.body.name,
    pet: req.body.pet
  };
  users[user.id] = user;
  res.json(user);
});

router.get('/:id([0-9]+)', function(req, res, next) {
    
    if (req.user) {
        res.json(req.user);
    } else {
        var err = new Error('No user by that ID');
        err.status = 404;
        next(err);
    }
});

router.delete('/:id([0-9]+)', function(req, res, next) {
    var user = users[req.params.id];
    users[req.params.id] = null;
    res.json(user || null);
});

module.exports = router;
