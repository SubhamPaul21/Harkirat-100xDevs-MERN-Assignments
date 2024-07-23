const express = require("express");
const app = express();
const PORT = 3000;

const { todoSchema, todoIdSchema } = require("./types");

app.use(express.json());

// GET request to fetch all the existing todos
app.get("/todos", (req, res) => {
    res.json({
        message: "Listing all the existing todos",
    });
});

// POST request to add new todos to the list
app.post("/todos", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    try {
        const todoDetails = todoSchema.parse({
            title,
            description,
        });

        // Add todo to database and display in the todo list

        // Show message to the user
        res.json({
            message: `Added todo with title ${title} and description
      ${description}`,
        });
    } catch (err) {
        res.json({
            message: `Invalid todo details:`,
            error: `${err.message}`,
        });
    }
});

// Update request to update an existing todo
app.put("/todos/:id", (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;

    try {
        const todoDetails = todoSchema.parse({
            title,
            description,
        });

        const todoIdDetails = todoIdSchema.parse({
            id,
        });

        // Update todo in the database and display in the todo list

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

// Delete request to delete a todo from the list
app.delete("/todos/:id", (req, res) => {
    const id = req.params.id;

    try {
        const todoIdDetails = todoIdSchema.parse({
            id,
        });
        // Delete todo from the database based on the todo id

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});