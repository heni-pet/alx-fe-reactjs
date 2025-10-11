// src/Tests/TodoList.test.js
import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import TodoList from "./TodoList";

test("renders initial todos", () => {
  render(<TodoList />)
  expect(screen.getByText("Learn React")).toBeInTheDocument()
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument()
  expect(screen.getByText("Write Tests")).toBeInTheDocument()
})

test("adds a new todo", () => {
  render(<TodoList />)
  const input = screen.getByPlaceholderText("Add a todo")
  const button = screen.getByText("Add")

  fireEvent.change(input, { target: { value: "New Task" } })
  fireEvent.click(button)

  expect(screen.getByText("New Task")).toBeInTheDocument()
})

test("toggles todo completion", () => {
  render(<TodoList />)
  const todo = screen.getByText("Learn React")

  expect(todo).toHaveStyle("text-decoration: none")
  fireEvent.click(todo)
  expect(todo).toHaveStyle("text-decoration: line-through")
  fireEvent.click(todo)
  expect(todo).toHaveStyle("text-decoration: none")
})

test("deletes a todo", () => {
  render(<TodoList />)
  const deleteButtons = screen.getAllByText("Delete")
  const firstTodo = screen.getByText("Learn React")

  fireEvent.click(deleteButtons[0])


})
