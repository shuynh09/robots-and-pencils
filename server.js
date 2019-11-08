const express = require('express')
const cors = require('cors')
const path = require('path')

// Create the server
const app = express()

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

require('./server/app/routes/flight.routes')(app);
require('./server/database.js')

// Anything that doesn't match the above, send back the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// Choose the port and start the server
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})
