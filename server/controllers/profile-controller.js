var User = require('../models/user.js');
var path = require('path');
var fs = require('fs');


//function delivers photo file to uploads dir
module.exports.updatePhoto = function(req, res){

  var file = req.files.file;
  var userId = req.body.userId;
  var tempPath = file.path;
  var uploadDate = new Date();
  var targetPath = path.join(__dirname, '../../uploads/' + userId + uploadDate + file.name);
  var savePath = "/uploads/" + userId + uploadDate + file.name;

  fs.rename(tempPath, targetPath, function(err){
    if (err){
      console.log("There has been a grave error: ", err)
    }
    else{
      console.log("File Successfully moved")
      User.findById(userId, function(err, userData){
        var user = userData;
        user.image = savePath;
        user.save(function(err){
          if (err){
            console.log("Failed to save")
            res.json({status: 500})
          }
          else{
            console.log("Save successful");
            res.json({status: 200})
          }

        })
      })
    }
  })
};




//Function will update username in database through the model
module.exports.updateUsername = function(req, res){

  var username = req.body.username;
  var userId = req.body.userId;

  User.findById(userId, function(err, userData){

    var user = userData;
    user.username = username;

    user.save(function(error){
      if (err){
        console.log("Failed to save username");
        res.json({status: 500});
      }
      else {
        console.log("Successfully updated username");
        console.log("This is the user: ", userData);

        res.json({status: 200})
      }
    })
  })

};





module.exports.updateBio = function(req, res){

  var bio = req.body.bio;
  var userId = req.body.userId;

  User.findById(userId, function(err, userData){

    var user = userData;
    user.bio = bio;
    user.save(function(error){

      if (err){
        console.log("Failed to save bio");
        res.json({status: 500});
      }
      else{
        console.log("Successfully saved bio request to db");
        res.json({status: 200});
      }
    });

  });


}




















































































