var express = require('express');
var router = express.Router();
var employeesList = require("../data/employees.json")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(employeesList);
});

// working with URL param - id
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  res.send('will send user details');
})

module.exports = router;
