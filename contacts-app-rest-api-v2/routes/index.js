var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("My Home Page");
});

// POST Method
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send(
    {
      "id": 2,
      "name": req.body.name,
      "email": req.body.email,
      "phone": req.body.phone,
      "username": req.body.username
    }
  );
});


module.exports = router;
