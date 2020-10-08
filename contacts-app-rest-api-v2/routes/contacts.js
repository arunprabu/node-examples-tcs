var express = require('express');
var router = express.Router();
var mongo = require("../config/mongo");

/* GET contacts . */
router.get('/', function (req, res, next) {

  // 1. connect to the db.
    //  1.1 what's the db URL  -- localhost
    //  1.2 What's the DB port number -- 27017
    //  1.3 What's the DB? -- contactsDB
    //  1.4 Using what driver? - Official Mongodb Client  -- npm i mongodb 
  // 2. execute a query to fetch all contacts
  



  // 3. send the result 
  res.json([]);

});

module.exports = router;
