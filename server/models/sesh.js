var mongoose = require('mongoose');

module.exports = mongoose.model('Sesh', {
  image: String,
  user: String,
  title: String,
  location: String,
  description: String,
  date: {type: Date, default: Date.now}

})