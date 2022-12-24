const momgoose = require('mongoose');

const userSchema = new momgoose.Schema({
    firstName: String,
    lastName: String
});

const User = momgoose.model('User', userSchema);

module.exports.User = User