require('dotenv').config()

module.exports = {
    COSMOSDB_CONNSTR: process.env.COSMOSDB_CONNSTR,
    COSMODDB_USER: process.env.COSMODDB_USER,
    COSMOSDB_PASSWORD: process.env.COSMOSDB_PASSWORD
}