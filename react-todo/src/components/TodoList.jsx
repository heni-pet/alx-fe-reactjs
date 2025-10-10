import React, { useState } from "react";

function AddTodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Write Tests", completed: false },
  ]);

  const handleAddTodo = (newTodo) => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
    }
  };

  const handleToggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo.text !== todoToDelete.text));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => handleToggleTodo(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
            <button onClick={(e) => {
              e.stopPropagation();
              handleDeleteTodo(todo);
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <AddTodoForm onAdd={handleAddTodo} />
    </div>
  );
}
