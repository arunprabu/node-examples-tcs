// 0. establish connection with db
var Contact = require("../models/contact");

// Create Contact
exports.createContact = function( req, callback ){

  // 1. construct db query 
  var contactDao = new Contact(req.body);
  
  // 2. executing the query
  contactDao.save((err, savedContact) => { // 3. get the data from db
    if (!err) {
      console.log(`Contact registered successfully with contactId:${savedContact.contactId}`);
    }
    // 4. send it back to routes
    callback(err, savedContact);
    
  });
  
}


//getall contacts
exports.getContacts = function(callback){

  Contact.find({}, function(err, contacts){
    if(!err){
      console.log("Fetched all contacts", contacts)
    }
    callback(err, contacts);
  });
}

//get contact by id 
// update contact 

//soft delete the contact - PUT 
//hard delet the contact - DELETE 

// search 
// filter 