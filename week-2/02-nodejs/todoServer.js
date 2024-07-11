const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let todos = [
  {
    id: 12,
    title: "Buy groceries",
    completed: false,
    description: "I should buy groceries",
  },
];

app.get("/todos", (req, res) => {
  return res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo_id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === todo_id);
  if (todo) {
    return res.json(todo);
  } else {
    return res.status(404).send("Not found");
  }
});

app.post("/todos", (req, res) => {
  const todo = req.body;
  todo.id = Math.floor(Math.random() * 1000000);
  todos.unshift(todo);
  return res.status(201).json({ id: todo.id });
});

app.put("/todos/:id", (req, res) => {
  const todo_id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === todo_id);
  if (todo) {
    todo.title = req.body.title ? req.body.title : todo.title;
    todo.completed = req.body.completed ? req.body.completed : todo.completed;
    todo.description = req.body.description ? req.body.description : todo.description;
    return res.status(200).json(todo);
  } else {
    return res.status(404).send("Not found");
  }
});

app.delete("/todos/:id", (req, res) => {
  const todo_id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === todo_id);
  if (todo) {
    todos = todos.filter((todo) => todo.id !== todo_id);
    return res.status(200).json(todo);
  } else {
    return res.status(404).send("Not found");
  }
});

app.get("*", (req, res) => {
  return res.send("Hello World");
});

// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });

module.exports = app;