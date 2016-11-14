const Sesh = require('../models/sesh')



module.exports.postSesh = (req, res) => {

  let sesh = new Sesh(req.body);
  sesh.save();

  Sesh.find({})
    .sort({date: -1}).exec((err, allSeshes) => {

      if (err){
        res.error(err);
      }
      else {
        res.json(allSeshes);
      }
    });
}

module.exports.getSeshes = (req, res) => {

  Sesh.find({})
      .sort({date: -1})
      .exec((err, allSeshes) => {
        if (err){
          console.log("there is an error on line 28: ", err)
        }
        else{
          res.json(allSeshes)
        }
      })


}