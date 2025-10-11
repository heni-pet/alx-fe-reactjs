// src/components/TodoList.jsx
import React, { useState } from "react"
import AddTodoForm from "./AddTodoForm"

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a Todo App", completed: false },
    { text: "Write Tests", completed: false },
  ])

  const addTodo = (text) => {
    if (!text.trim()) return
    setTodos([...todos, { text, completed: false }])
  }

  const toggleTodo = (index) => {
    setTodos(todos.map((t, i) => i === index ? { ...t, completed: !t.completed } : t))
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            data-testid="toggle-item"
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation()
                deleteTodo(index)
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
