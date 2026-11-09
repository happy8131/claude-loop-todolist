"use client";

import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import type { TodoFilter } from "../types/todo";
import { countRemaining, filterTodos } from "../utils/filterTodos";
import TodoFilterBar from "./TodoFilterBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
  const [filter, setFilter] = useState<TodoFilter>("all");

  const visibleTodos = filterTodos(todos, filter);

  return (
    <div className="flex flex-col gap-4">
      <TodoForm onAdd={addTodo} />
      <TodoFilterBar
        filter={filter}
        remaining={countRemaining(todos)}
        onChange={setFilter}
      />
      <TodoList
        todos={visibleTodos}
        onToggle={toggleTodo}
        onRemove={removeTodo}
      />
    </div>
  );
}
