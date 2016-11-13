var mongoose = require('mongoose');

module.exports = mongoose.model('Sesh', {
    user: String,
    userId: String,
    userImage: String,
    description: String,
    date: {type: Date, default: Date.now}
})