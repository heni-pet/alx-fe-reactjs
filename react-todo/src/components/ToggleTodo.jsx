import React from "react";

export default function ToggleTodo({ todos = [], onToggle }) {
  if (todos.length === 0) return <p>No todos available.</p>;

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          data-testid="toggle-item"
          onClick={() => onToggle(index)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
