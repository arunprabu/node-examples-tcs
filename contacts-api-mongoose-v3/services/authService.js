const passport = require('passport');

var User = require("../models/user");

exports.signup = function(req, callback){ // 1. get the req from routes
  
  
  console.log(req.body);
  
  // create a new user 
  let userDao = new User(req.body);
  userDao.setPassword(req.body.password);

  // Note: If you are not getting p/w from the user. try generating temp password 
  // using npm i generate-password
  console.log(userDao);

  // Note: if your schema is non-strict -- delete the password prop from userDao using js
  let resp;
  //2. exec query to create a new user 
  userDao.save( (err, data) =>{
    if(!err){
      console.log(data);
      resp = {
        status: 'Account has been created'
      }
    }else{
      console.log(err);
      resp = data;
    }
    // Note: Send a mail -- notify the user that the account has been created. 
    callback(err, resp);
    
  })
}

exports.login = function(req, callback){
  console.log(req.body);

  //auth flow with passport
	passport.authenticate('local', function(err, user, info){
		// If Passport throws/catches an error
		if (err) {
			callback(err);
		}

		// If a user is found
		if(user){      
			
			var userData = {  
												email : user.email,
												createdBy: user.createdBy,
												createdOn: user.createdOn,
												updatedBy: user.updatedBy,
												updatedOn: user.updatedOn,
												token: user.generateJWT()
										 }
			callback(err, userData);
		} else {
			// If user is not found, send the following from routes
			//res.status(401).json(info);
			callback(err, info);
		}
	})(req, callback);
	// login 
	// ask the user to reset the p/w and after rest, 
	// change the status to VERIFIED
	// when the user changes the p/w -- 
	// that will also be be encrypted and saved 
}