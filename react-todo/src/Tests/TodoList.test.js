import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  const todos = ["Learn React", "Build a Todo App", "Write Tests"];
  todos.forEach(todo => {
    const elements = screen.getAllByText(todo);
    expect(elements[0]).toBeInTheDocument();
  });
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  const newTodos = screen.getAllByText("New Task");
  expect(newTodos[0]).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todoItems = screen.getAllByTestId("toggle-item");
  const firstTodo = todoItems[0];

  expect(firstTodo).toHaveStyle("text-decoration: none");

  fireEvent.click(firstTodo);
  expect(firstTodo).toHaveStyle("text-decoration: line-through");

  fireEvent.click(firstTodo);
  expect(firstTodo).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText("Delete");

  // Delete the first todo
  fireEvent.click(deleteButtons[0]);

  // Check if it's deleted from DeleteTodo list
  const deletedTodo = screen.queryByText("Learn React", { selector: "ul + ul li" });
  expect(deletedTodo).toBeNull();

  // Check if it still exists in ToggleTodo list
  const toggleTodo = screen.queryAllByText("Learn React", { selector: "[data-testid='toggle-item']" });


});
