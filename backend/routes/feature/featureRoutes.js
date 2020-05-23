module.exports = (app) => {
    const features = require('../../controllers/feature/featureController');

    // Create a new Note
    app.post('/features', features.create);

    // Retrieve all Notes
    app.get('/features', features.findAll);

    // Retrieve a single Note with noteId
    app.get('/features/:featureId', features.findOne);

    // Update a Note with noteId
    app.put('/features/:featureId', features.update);

    // Delete a Note with noteId
    app.delete('/features/:featureId', features.delete);
}