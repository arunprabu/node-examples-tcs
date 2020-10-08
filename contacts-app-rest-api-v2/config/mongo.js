const MongoClient = require('mongodb').MongoClient;
// DB Connection URL
const DB_URL = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'contactsDB';
var db;
var contactList;

// Use connect method to connect to the server
MongoClient.connect(DB_URL, function(err, client) {
  console.log("Connected successfully to server");
 
  db = client.db(dbName);
  
  findContacts(db, function(data) {
    console.log("Fetched Contacts");
    contactList = data;
  })
  client.close();
});

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

exports.contactsList;

exports.db;