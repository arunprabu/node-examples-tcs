var express = require('express');
var router = express.Router();

var authService = require('../services/authService');

/* POST signup. */
router.post('/signup', function(req, res, next){
  console.log(req.body);
  authService.signup(req, function(err, data){
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
})

/* POST login. */
router.post('/login', function(req, res, next) {
  console.log(req.body);
  authService.login(req, function(err, data){
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

module.exports = router;
