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
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <ToggleTodo todos={todos} onToggle={toggleTodo} />
      <DeleteTodo todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
