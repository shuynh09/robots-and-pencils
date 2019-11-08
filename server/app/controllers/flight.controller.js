const Flight = require('../models/flight.model.js');
const fs = require('fs');

// Create and Save a new Flight
exports.create = (req, res) => {

};

// Retrieve and return all flights from the database.
exports.findAll = (req, res) => {
    let query = req.query;
    let conditions = {};
    let filters = [];

    if (query.success) {
        filters.push({ 'rocket.first_stage.cores.land_success': query.success.toLowerCase() === 'true' })
    }

    if (query.reused && query.reused.toLowerCase() === 'true') {
        filters.push({ $or: [{ 'reuse.core': true }, { 'reuse.side_core1': true }, { 'reuse.side_core2': true }, { 'reuse.fairings': true }, { 'reuse.capsule': true }] })
    }

    if (query.reddit && query.reddit.toLowerCase() === 'true') {
        filters.push({ $or: [{ 'links.reddit_campaign': { $ne: null } }, { 'links.reddit_launch': { $ne: null } }, { 'links.reddit_recovery': { $ne: null } }, { 'links.reddit_media': { $ne: null } }] })
    }

    if (filters.length && filters.length > 1) {
        conditions = { $and: filters };
    } else if (filters.length && filters.length === 1) {
        conditions = filters[0];
    }

    Flight.find(conditions, '-_id links.mission_patch_small flight_number rocket.rocket_name rocket.rocket_type launch_date_utc links.article_link details')
        .then(flights => {
            console.log(flights.length);
            res.send(flights);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving flights."
            });
        });
};

// Find a single flight with a flightId
exports.findOne = (req, res) => {
    Flight.find({"flight_number" : 1}, function(err, foundFlights){
        res.send(foundFlights);
        foundFlights.forEach(f => console.log("Found Flights: " + JSON.stringify(f)));
    })
};

// Update a flight identified by the flightId in the request
exports.update = (req, res) => {

};

// Delete a flight with the specified flightId in the request
exports.delete = (req, res) => {

};