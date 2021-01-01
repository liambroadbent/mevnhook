
const express = require('express');
const router = express.Router();

    const todos = require('../controller/todocontroller.js');

    // Create a new todo
    router.post('/todos', todos.create);

    // Retrieve all todos
    router.get('/todos', todos.findAll);

    // Retrieve a single todo by id
    router.get('/todos/:id', todos.findOne);

    // Update a Todo with id
    router.put('/todos/:id', todos.update);

    // Delete a Todo by id
    router.delete('/todos/:id', todos.delete);

module.exports = router;