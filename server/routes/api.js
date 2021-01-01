const express = require('express');
const router = express.Router();

	
// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));

// });

// router.post('/', (req, res) => {
//   res.send('Received a POST HTTP method');
//   // console.log(JSON.stringify(req.body));
//   const users = require('../models/users');
//   // this uses the model to add to mongodb
//   users.insertMany(
//     req.body
//   )
//   .then(() => {
//     console.log('then');
//   })
//   .catch((error) => {
//       console.log(error);
//       res.status(500);
//   });
// });

const payloads = require('../controller/payloadcontroller.js');

    // Create a new todo
    router.post('/', payloads.create);

    // Retrieve all payloads
    router.get('/', payloads.findAll);

    // Retrieve a single todo by id
    router.get('/:id', payloads.findOne);

    // Update a Todo with id
    router.put('/:id', payloads.update);

    // Delete a Todo by id
    router.delete('/:id', payloads.delete);

module.exports = router;

