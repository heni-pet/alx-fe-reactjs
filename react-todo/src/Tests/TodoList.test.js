import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // required for toBeInTheDocument and not.toBeInTheDocument
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  const todos = screen.getAllByText("Learn React");
  expect(todos[0]).toBeInTheDocument();
  expect(screen.getAllByText("Build a Todo App")[0]).toBeInTheDocument();
  expect(screen.getAllByText("Write Tests")[0]).toBeInTheDocument();
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
  const todo = screen.getAllByText("Learn React")[0];
  expect(todo).toHaveStyle("text-decoration: none");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText("Delete");

  // Delete first todo
  fireEvent.click(deleteButtons[0]);

  // The deleted item should no longer exist in the delete list
  const deletedTodo = screen.queryByText("Learn React", { selector: "ul + ul li" });
  expect(deletedTodo).toBeNull();

  // The same todo should still exist in the toggle list


});

