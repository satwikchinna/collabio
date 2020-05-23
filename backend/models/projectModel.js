const mongoose = require('mongoose');
const User = require('./userModel');
const Features = require('./featureModel');


const ProjectSchema = mongoose.Schema({
    title: String,
    iscompleted:Boolean,
    team: [{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }],
    team: [User.schema],
    features: [{
        type: mongoose.Types.ObjectId,
        ref:'Features'
    }],
    features:[Features.schema],

    deadline:Date,
    owner: {type:mongoose.Types.ObjectId,
    ref:'User'},
    owner:User.schema
}, {
    timestamps: true
});
module.exports = mongoose.model('Project', ProjectSchema);
