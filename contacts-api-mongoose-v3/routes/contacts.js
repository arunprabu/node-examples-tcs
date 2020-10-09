var express = require('express');
var contactService = require('../services/contactService');

var router = express.Router();



// POST contact 
router.post('/', function (req, res, next) {

  //1. connect to service and send the above req to service
  contactService.createContact(req , function(err, data ){
    console.log(err);
    console.log(data);
    res.json(data);
  } );
  //2. get the res from service
  

});

/* GET contacts listing. */
router.get('/', function (req, res, next) {
  contactService.getContacts( function(err, data ){
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  } )
  
});

//Search 

// GET Contact -- handling URL param - id 
router.get('/:contactId', function (req, res, next) {
  console.log("will fetch user with contactID is " + req.params.contactId);

  res.json( {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
  } );

});

// PUT Contact - Updating contact
router.put('/:contactId', function (req, res, next) {
  console.log(req.params.contactId);
  console.log(req.body);

  res.json({ status: 'Updated Successfully'});
});

// Delete


module.exports = router;
