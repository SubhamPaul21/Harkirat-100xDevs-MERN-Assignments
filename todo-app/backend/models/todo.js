const mongoose = require("mongoose");

// Define the Todo Schema
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

// Create the Todo Model
const todo = mongoose.model('todos', todoSchema);

// Export the Todo Model
module.exports = {
    todo
};