// bring in the model for the payloads
const Company = require('../models/payloads.js');

// Create and Save a new Todo
exports.create = (req, res) => {

    // Create a Todo
    const company = new Company({
        payload: req.body
    });

    // Save Todo in the database
    company.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Todo."
        });
    });
};

// Retrieve and return all todos from the database.
exports.findAll = (req, res) => {
    Company.find()
    .then(companies => {
        res.send(companies);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving todos."
        });
    });
};

// Find a single todo with a id
exports.findOne = (req, res) => {
    company.findById(req.params.id)
    .then(company => {
        if(!company) {
            return res.status(404).send({
                message: "company not found with id " + req.params.id
            });            
        }
        res.send(company);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "company not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving company with id " + req.params.id
        });
    });
};

// Update a company identified by the id in the request
exports.update = (req, res) => {
    // Validate Request


    // Find company and update it with the request body
    company.findByIdAndUpdate(req.params.id, {
        title: req.body.name || "Untitled company",
        description: req.body.description
    }, {new: true})
    .then(company => {
        if(!company) {
            return res.status(404).send({
                message: "company not found with id " + req.params.id
            });
        }
        res.send(company);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "company not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating company with id " + req.params.id
        });
    });
};

// Delete a company with the specified id in the request
exports.delete = (req, res) => {
    company.findByIdAndRemove(req.params.id)
    .then(company => {
        if(!company) {
            return res.status(404).send({
                message: "company not found with id " + req.params.id
            });
        }
        res.send({message: "company deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "company not found with id " + req.params.company
            });                
        }
        return res.status(500).send({
            message: "Could not delete company with id " + req.params.id
        });
    });
};