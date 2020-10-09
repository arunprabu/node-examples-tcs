var express = require('express');
var router = express.Router();

// POST contact 
router.post('/', function (req, res, next) {

  console.log(req.body);
  let resp = req.body;
  resp.id = 3;
  
  res.json( resp );
  
});

/* GET contacts listing. */
router.get('/', function (req, res, next) {

  let contactList = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
    }];

  res.json(contactList);
});

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



module.exports = router;
