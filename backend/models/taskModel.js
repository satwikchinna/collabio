const mongoose = require('mongoose');
const User = require('../models/userModel.js');
const TaskSchema = mongoose.Schema({
    title: String,
    assigned_to:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    assigned_to:User.schema,
    deadline:Date,
    iscompleted:Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);
