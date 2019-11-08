module.exports = (app) => {
    const flights = require('../controllers/flight.controller.js');

    // Create a new Note
    app.post('/api/flights', flights.create);

    // Retrieve all Notes
    app.get('/api/flights', flights.findAll);

    // Retrieve a single Note with flightId
    app.get('/api/flights/:flightId', flights.findOne);

    // Update a Note with flightId
    app.put('/api/flights/:flightId', flights.update);

    // Delete a Note with flightId
    app.delete('/api/flights/:flightId', flights.delete);
}