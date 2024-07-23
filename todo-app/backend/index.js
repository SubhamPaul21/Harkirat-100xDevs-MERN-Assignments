const express = require("express");
const app = express();

const { connectToMongoDatabase } = require('./db');
const { todo } = require('./models/todo');

const PORT = 3000;

const { todoDetailsSchema, todoIdSchema } = require("./types");

app.use(express.json());

// GET request to fetch all the existing todos
app.get("/todos", async (req, res) => {
    try {
        const todos = await todo.find({});
        res.json({
            todos: todos,
        });
    } catch (err) {
        res.json({
            message: `Failed to fetch todos`,
            error: `${err.message}`,
        });
    }
});

// POST request to add new todos to the list
app.post("/todos", async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        todoDetailsSchema.parse({
            title,
            description,
        });

        // Add todo to database and display in the todo list
        await todo.create({
            title,
            description,
            completed: false
        });

        // Show message to the user
        res.json({
            message: `Todo Created`,
        });
    } catch (err) {
        res.json({
            message: `Invalid todo details:`,
            error: `${err.message}`,
        });
    }
});

// Update request to update details of an existing todo
app.put("/todos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        todoIdSchema.parse({
            id,
        });

        const existingTodo = await todo.findById(id);
        if (existingTodo) {
            const title = req.body.title ? req.body.title : existingTodo.title;
            const description = req.body.description ? req.body.description : existingTodo.description;

            todoDetailsSchema.parse({
                title,
                description,
            });

            // Update todo in the database and display in the todo list
            await todo.findByIdAndUpdate(id, {
                title,
                description,
            });
        } else {
            throw new Error("Invalid todo id")
        }

        // Show message to the user
        res.json({
            message: `Updated todo with id ${id}`,
        });
    } catch (err) {
        res.json({
            message: `Invalid todo details`,
            error: `${err.message}`,
        });
    }
});

// Update request to update the complete state of an existing todo
app.put("/todos/completed/:id", async (req, res) => {
    try {
        const id = req.params.id;
        todoIdSchema.parse({
            id,
        });

        // Mark todo from the database as done based on the todo id
        await todo.findByIdAndUpdate(id, {
            completed: true
        });
        // Show message to the user
        res.json({
            message: `Todo with id ${id} marked as completed`,
        });
    } catch (err) {
        res.json({
            message: `Invalid todo id`,
            error: `${err.message}`,
        });
    }
});

// Delete request to delete a todo from the list
app.delete("/todos/:id", async (req, res) => {

    try {
        const id = req.params.id;
        todoIdSchema.parse({
            id,
        });
        // Delete todo from the database based on the todo id
        await todo.findByIdAndDelete(id);

        // Show message to the user
        res.json({
            message: `Deleted todo with id ${id}`,
        });
    } catch (err) {
        res.json({
            message: `Invalid todo id`,
            error: `${err.message}`,
        });
    }
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    const response = await connectToMongoDatabase();
    if (response == true) {
        console.log('MongoDB connected...');
    } else {
        console.error(response);
    }
});