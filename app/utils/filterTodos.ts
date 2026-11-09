import type { Todo, TodoFilter } from "../types/todo";

// 선택한 필터에 맞는 할 일만 골라낸다
export function filterTodos(todos: Todo[], filter: TodoFilter): Todo[] {
  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.done);
    case "done":
      return todos.filter((todo) => todo.done);
    default:
      return todos;
  }
}

// 아직 끝내지 않은 할 일 개수
export function countRemaining(todos: Todo[]): number {
  return todos.filter((todo) => !todo.done).length;
}
