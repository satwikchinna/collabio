const Project = require('../../models/projectModel.js');

exports.create = (req, res) => {
   

    // Create a Note
    console.log(req.body)
    const project = new Project({
        name:req.body.name,
    password:req.body.password,
    dob:req.body.dob,
    email:req.body.email,
    });

    // Save Note in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

exports.findAll = (req, res) => {
    User.find()
    .then(users => {
       
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};

exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "User fields content can not be empty"
        });
    }

    // Find note and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
        name:req.body.name,
        password:req.body.password,
        dob:req.body.dob,
        email:req.body.email,
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "project not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.userId
        });
    });
};

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.noteId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};
