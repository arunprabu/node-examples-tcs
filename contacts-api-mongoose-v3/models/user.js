var mongoose = require('./mongo'); //importing connection config
var autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

//schema -- Users is a collection 
var User = new Schema(
  {
    userId: {
      type: Number,
      unique: true
    },
    name: String,
    email: {
      type: String,
      unique: true
    },
    hash: String,
    salt: String,
    isEmailVerified: Boolean,
    status: Boolean,
    createdBy: String,
    createdOn: { type: Date, default: Date.now },
    updatedBy: String,
    updatedOn: { type: Date, default: Date.now }
  });

//util method to encrypt password using salt -- 
// get the relevant hash for the password
User.methods.setPassword = function (password) {
  // create salt to be applied on the password to get the hash
  this.salt = crypto.randomBytes(16).toString('hex');
  console.log(this.salt);
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  console.log(this.hash);
}

// validatePassword 
// take in password as input 
//validating password and returning true or false
User.methods.validatePassword = function(password) {
	const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
	return this.hash === hash;
};

// generate the token if the email and password are matching 
User.methods.generateJWT = function() {
	const today = new Date();
	const expirationDate = new Date(today);
	expirationDate.setDate(today.getDate() + 60);

	return jwt.sign({
		email: this.email,
		id: this._id,
		exp: parseInt(expirationDate.getTime() / 1000, 10),
	}, 'secret');
}

User.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 1 });
module.exports = mongoose.model('User', User);