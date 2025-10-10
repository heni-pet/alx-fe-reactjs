// src/App.jsx
import React from 'react';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        maxWidth: '500px',
        margin: '0 auto'
      }}
    >
      <h1>React Todo List</h1>
      <TodoList />
    </div>
  );
}
