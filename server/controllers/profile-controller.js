var User = require('../models/user.js');
var path = require('path');
var fs = require('fs');


module.exports.updatePhoto = function(req, res){

  var file = req.files.file;
  var userId = req.body.userId;

  console.log("user " + userId + " submitting ", file)

  var tempPath = file.path;
  var uploadDate = new Date().toISOString;
  var targetPath = path.join(__dirname + '../../uploads/' + userId + uploadDate + file.name)

};
