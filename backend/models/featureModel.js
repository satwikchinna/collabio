const mongoose = require('mongoose');
const Task = require('../models/taskModel.js');
const FeatureSchema = mongoose.Schema({
    title: String,
    deadline:Date,
    tasks:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    tasks:[Task.schema]
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Feature', FeatureSchema);
