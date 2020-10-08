var express = require('express');
var request = require('request');
var router = express.Router();

/* GET weather update from weather api. */
router.get('/', function(req, res, next) {
  
  // use request to show weather updates
  
  res.send("It's a task. Refer Edureka's portal");

});

module.exports = router;
