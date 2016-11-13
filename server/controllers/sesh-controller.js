var Sesh = require('../models/sesh')



module.exports.postSesh = function(req, res){

  var sesh = new Sesh(req.body);
  sesh.save();

  Sesh.find({})
    .sort({date: -1}).exec(function(err, allSeshes){

      if (err){
        res.error(err);
      }
      else {
        res.send(allSeshes);
      }
    })




}