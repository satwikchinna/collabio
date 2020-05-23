var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./routes/user/userRoutes.js')(app);
require('./routes/task/taskRoutes.js')(app);
require('./routes/feature/featureRoutes.js')(app);
// Connecting to the database
const dbConfig = require('./dbconfig.js');

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useCreateIndex:true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
