module.exports = (app) => {
    const tasks = require('../../controllers/task/taskController');

    // Create a new Note
    app.post('/tasks', tasks.create);

    // Retrieve all Notes
    app.get('/tasks', tasks.findAll);

    // Retrieve a single Note with noteId
    app.get('/tasks/:taskId', tasks.findOne);

    // Update a Note with noteId
    app.put('/tasks/:taskId', tasks.update);

    // Delete a Note with noteId
    app.delete('/tasks/:taskId', tasks.delete);
}