const Feature = require('../../models/featureModel.js');
const Project = require('../../models/projectModel.js');
const User = require('../../models/userModel.js');


exports.create = (req, res) => {
var featuresres = [];
    for(var i=0;i<req.body.features.length;i++){
        Feature.findById(req.body.features[i].replace(/^"|"$/g, ''), function(err,feature){
            console.log(feature);
                    var featureres = new Feature({
                        _id:feature._id,
                        title:feature.title ,
                        project:feature.project,
                       deadline:feature.deadline,
                        tasks:feature.tasks,
                        iscompleted:feature.iscompleted
                        
                    });
            featuresres.push(featureres);
            

    });

}

var teamres = [];
    for( i=0;i<req.body.features.length;i++){
        User.findById(req.body.team[i].replace(/^"|"$/g, ''), function(err,member){
            console.log(member);
                    var memberres = new User({
                        _id:member._id,
                        name:member.name ,
                        email:member.email,
                       password:member.password,
                        dob:member.dob,
                        owner_of:member.owner_of,
                        working_on:member.working_on
                        
                    });
            teamres.push(memberres);
            

    });

}

User.findById(req.body.userId.replace(/^"|"$/g, ''), function(err,owner){
        var ownerres = new User({
            _id:owner._id,
            name:owner.name ,
            email:owner.email,
           password:owner.password,
            dob:owner.dob,
            owner_of:owner.owner_of,
            working_on:owner.working_on
            
        });


        const project = new Project({
            title: req.body.title,
            features:featuresres,
            team:teamres,
            owner:ownerres,
            iscompleted:false,
            deadline:req.body.deadline
    
        });
        project.save(function (err) {
           
        });



});

        
    };
       

exports.findAll = (req, res) => {
    Project.find().exec(function (err, projects) {
    if (err) return (err);
    res.send(projects);
    // prints "The author is Ian Fleming"
  });
};

exports.findOne = (req, res) => {
    Project.findById(req.params.projectId)
    .then(project=> {
        if(!project) {
            return res.status(404).send({
                message: "project not found with id " + req.params.projectId
            });            
        }
        res.send(project);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "project not found with id " + req.params.projectId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving project with id " + req.params.projectId
        });
    });
};

exports.update = (req, res) => {
    // Validate Request
    if(!req.body.title) {
        return res.status(400).send({
            message: "project fields content can not be empty"
        });
    }

    var team = new User( User.findById(req.body.ownerId));
    
    Project.findByIdAndUpdate(req.body.projectId, {
        title: req.body.title,
        team:team,
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
