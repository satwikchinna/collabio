const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: String,
    team: [{
        type: Number,
    }],
    deadline:Date
}, {
    timestamps: true
});
module.exports = mongoose.model('Project', ProjectSchema);
