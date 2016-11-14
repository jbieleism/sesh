const User = require('../models/user.js');
const path = require('path');
const fs = require('fs');


//function delivers photo file to uploads dir
module.exports.updatePhoto = function(req, res){

  let file = req.files.file;
  let userId = req.body.userId;
  let tempPath = file.path;
  let uploadDate = new Date();
  let targetPath = path.join(__dirname, '../../uploads/' + userId + uploadDate + file.name);
  let savePath = "/uploads/" + userId + uploadDate + file.name;

  fs.rename(tempPath, targetPath, (err) => {
    if (err){
      console.log("There has been a grave error: ", err)
    }
    else{
      console.log("File Successfully moved")
      User.findById(userId, (err, userData) => {
        let user = userData;
        user.image = savePath;
        user.save((err) => {
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
module.exports.updateUsername = (req, res) => {

  let username = req.body.username;
  let userId = req.body.userId;

  User.findById(userId, (err, userData) => {

    let user = userData;
    user.username = username;

    user.save((error) => {
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




//function will update users bio
module.exports.updateBio = (req, res) => {

  let bio = req.body.bio;
  let userId = req.body.userId;

  User.findById(userId, (err, userData) => {

    let user = userData;
    user.bio = bio;
    user.save((error) => {

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




















































































