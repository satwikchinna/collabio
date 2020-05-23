const mongoose = require('mongoose');
const Project = require('../models/projectModel.js');
const Task = require('../models/taskModel.js');
const FeatureSchema = mongoose.Schema({
    title: String,
    project:{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    project:Project.schema,
    deadline:Date,
    tasks:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    tasks:[Task.schema],
    iscompleted:Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Feature', FeatureSchema);
