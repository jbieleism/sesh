const User = require('../models/user');

module.exports.signup = (req, res) => {
  let user =  new User(req.body);
  user.save();

  res.json(req.body)
}

module.exports.login = (req, res) => {
  User.find(req.body, (err, results) => {
    if (err){
      console.log('Error in the authentication controller: ', err)
    }
    if (results && results.length === 1) {
      let userData = results[0];
      res.json({
        email: req.body.email,
        _id:  userData._id,
        username: userData.username,
        image: userData.image
      })
    }
  })
}