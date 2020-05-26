module.exports = (app) => {
    const projects = require('../../controllers/project/projectController');

    // Create a new Note
    app.post('/projects', projects.create);

    // Retrieve all Notes
    app.get('/projects', projects.findAll);

    // Retrieve a single Note with noteId
    app.get('/projects/:projectId', projects.findOne);

    // Update a Note with noteId
    app.put('/projects/:projectId', projects.update);

    // Delete a Note with noteId
    app.delete('/projects/:projectId', projects.delete);
}