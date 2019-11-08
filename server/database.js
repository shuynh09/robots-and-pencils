// Configuring the database
const { COSMOSDB_CONNSTR, COSMODDB_USER, COSMOSDB_PASSWORD } = require('./config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(COSMOSDB_CONNSTR, { auth: { user: COSMODDB_USER, password: COSMOSDB_PASSWORD }, useNewUrlParser: true }).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});