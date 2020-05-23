const Task = require('../../models/taskModel.js');
const User = require('../../models/userModel.js');

exports.create = (req, res) => {
   

    // Create a Note
    
    
var userres ;
 User.findById(req.body.userId.replace(/^"|"$/g, ''), function(err,user){
        userres = new User({
            _id:user._id,
            name:user.name || "",
            email:user.email || "",
            password:user.password|| "",
            dob:user.dob|| "",
            owner_of:user.owner_of|| [],
            working_on:user.working_on|| []
        });
         const task = new Task({
            title: req.body.title,
            assigned_to:userres,
            deadline:req.body.deadline,
            iscompleted:false
    
        });
        task.save(function (err) {
            Task.populate(task, {path:"assigned_to"}, function(err, task) {
                console.log(task.assigned_to);
             });
        })

        res.send("Task added");
      } );
    console.log(userres);
       
};

exports.findAll = (req, res) => {
    Task.find().populate('assigned_to').exec(function (err, tasks) {
    if (err) return (err);
    res.send(tasks);
    // prints "The author is Ian Fleming"
  });
};

exports.findOne = (req, res) => {
    Task.findById(req.params.taskId)
    .then(task=> {
        if(!task) {
            return res.status(404).send({
                message: "task not found with id " + req.params.taskId
            });            
        }
        res.send(task);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "task not found with id " + req.params.taskId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving task with id " + req.params.taskId
        });
    });
};

exports.update = (req, res) => {
    // Validate Request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Task fields content can not be empty"
        });
    }

    // Find note and update it with the request body
    Task.findByIdAndUpdate(req.params.taskId, {
        title: req.body.title,
        assigned_to:req.body.userId,
        deadline:req.body.deadline
    }, {new: true})
    .then(task => {
        if(!task) {
            return res.status(404).send({
                message: "task not found with id " + req.params.taskId
            });
        }
        res.send(task);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.taskId
        });
    });
};

exports.delete = (req, res) => {
    Task.findByIdAndRemove(req.params.taskId)
    .then(task => {
        if(!task) {
            return res.status(404).send({
                message: "task not found with id " + req.params.taskId
            });
        }
        res.send({message: "Task deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "task not found with id " + req.params.taskId
            });                
        }
        return res.status(500).send({
            message: "Could not delete task with id " + req.params.taskId
        });
    });
};
