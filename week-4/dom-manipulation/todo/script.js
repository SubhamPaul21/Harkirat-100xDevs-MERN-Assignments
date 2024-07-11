function addTodoItem() {
    const todoTitle = document.getElementById("todo_title").value;
    const todoDescription = document.getElementById("todo_description").value;

    const todoItems = document.getElementById("todo_items");
    todoItems.style.border = "2px solid black";
    // create new todo div element and add todo details inside it
    const newTodoDiv = document.createElement("div");
    const newTodoTitleElement = document.createElement("p");
    newTodoTitleElement.textContent = todoTitle;
    const newTodoDescriptionElement = document.createElement("p");
    newTodoDescriptionElement.textContent = todoDescription;

    // create button inside todo items and add functionality
    const newTodoButton = document.createElement("button");
    newTodoButton.innerText = "Mark as DONE!";
    newTodoButton.onclick = function () {
        newTodoButton.style.color = "#00ff00";
        newTodoButton.innerText = "DONE";
    }

    // manipulate DOM and add todo items
    newTodoDiv.appendChild(newTodoTitleElement);
    newTodoDiv.appendChild(newTodoDescriptionElement);
    newTodoDiv.appendChild(newTodoButton);

    // add particular todos inside todo items div
    todoItems.appendChild(newTodoDiv);

    clearInputFields();
}

function clearInputFields() {
    // clear title and description field
    document.getElementById("todo_title").value = "";
    document.getElementById("todo_description").value = "";
}