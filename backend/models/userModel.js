const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    password:String,
    dob:Date,
    email:String,

}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
