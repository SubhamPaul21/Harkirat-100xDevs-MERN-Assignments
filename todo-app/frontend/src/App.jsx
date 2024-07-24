import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  getTodos(setTodos);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div >
  )
}

async function getTodos(setTodos) {
  const todosResponse = await fetch("http://127.0.0.1:3000/todos");
  const todosJson = await todosResponse.json();
  console.log("todosJson: ", todosJson);
  setTodos(todosJson.todos);
}

export default App
