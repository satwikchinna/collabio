const Feature = require('../../models/featureModel.js');
const Project = require('../../models/projectModel.js');
const Task = require('../../models/taskModel.js');


exports.create = (req, res) => {
var tasksres = [];
    for(var i=0;i<req.body.tasks.length;i++){
        Task.findById(req.body.tasks[i].replace(/^"|"$/g, ''), function(err,task){
            console.log(task);
                    var taskres = new Task({
                        _id:task._id,
                        title:task.title ,
                       assigned_to:task.assigned_to,
                        deadline:task.deadline,
                        iscompleted:task.iscompleted
                        
                    });
            tasksres.push(taskres);
            

    });

}

Project.findById(req.body.projectId.replace(/^"|"$/g, ''), function(err,project){
        var projectres = new Project({
            _id:project._id,
            title:project.title ,
            features:project.features,
            team:project.team,
            owner:project.owner,
            deadline:project.deadline,
            iscompleted:project.iscompleted
            
        });


        const feature = new Feature({
            title: req.body.title,
            project:projectres,
            deadline:req.body.deadline,
            tasks:tasksres,
            iscompleted:false
    
        });
        feature.save(function (err) {
           
        });



});

        
    };
       

exports.findAll = (req, res) => {
    Feature.find().populate('project').exec(function (err, features) {
    if (err) return (err);
    res.send(features);
    // prints "The author is Ian Fleming"
  });
};

exports.findOne = (req, res) => {
    Feature.findById(req.params.featureId)
    .then(feature=> {
        if(!feature) {
            return res.status(404).send({
                message: "feature not found with id " + req.params.featureId
            });            
        }
        res.send(feature);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "feature not found with id " + req.params.featureId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving feature with id " + req.params.featureId
        });
    });
};

exports.update = (req, res) => {
    // Validate Request
    if(!req.body.title) {
        return res.status(400).send({
            message: "feature fields content can not be empty"
        });
    }

    // Find note and update it with the request body
    var project = new Project( Project.findById(req.params.projectId));
    Feature.findByIdAndUpdate(req.params.featureId, {
        title: req.body.title,
        project:project,
        deadline:req.body.deadline
    }, {new: true})
    .then(feature => {
        if(!feature) {
            return res.status(404).send({
                message: "feature not found with id " + req.params.featureId
            });
        }
        res.send(feature);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Feature not found with id " + req.params.featureId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.featureId
        });
    });
};

exports.delete = (req, res) => {
    Feature.findByIdAndRemove(req.params.featureId)
    .then(feature => {
        if(!feature) {
            return res.status(404).send({
                message: "feature not found with id " + req.params.featureId
            });
        }
        res.send({message: "feature deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "feature not found with id " + req.params.featureId
            });                
        }
        return res.status(500).send({
            message: "Could not delete feature with id " + req.params.featureId
        });
    });
};
