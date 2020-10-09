var express = require('express');
var router = express.Router();
//var mongo = require("../config/mongo");

const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'contactsDB';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  insertDocuments(db, function() {
    client.close();
  });
});

/* GET contacts . */
router.get('/', function (req, res, next) {

  // 1. connect to the db.
    //  1.1 what's the db URL  -- localhost
    //  1.2 What's the DB port number -- 27017
    //  1.3 What's the DB? -- contactsDB
    //  1.4 Using what driver? - Official Mongodb Client  -- npm i mongodb 
  // 2. execute a query to fetch all contacts
  
  dbConnection();
  console.log(dbCon);
  const findContacts = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('contacts');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
      
    });
  }



});

module.exports = router;
