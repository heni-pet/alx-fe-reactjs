import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import DeleteTodo from "./DeleteTodo";
import ToggleTodo from "./ToggleTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a Todo App", completed: false },
    { text: "Write Tests", completed: false },
  ]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm addTodo={addTodo} />

      <h3>Toggle Todos</h3>
      <ToggleTodo todos={todos} onToggle={toggleTodo} />

      <h3>Delete Todos</h3>
      <DeleteTodo todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
