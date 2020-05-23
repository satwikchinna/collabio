const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    password:String,
    dob:Date,
    email:String,
    owner_of:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    working_on:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]

}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
