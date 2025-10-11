import React from "react";

export default function DeleteTodo({ todos = [], onDelete }) {
  if (todos.length === 0) return <p>No todos available.</p>;

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.text}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
