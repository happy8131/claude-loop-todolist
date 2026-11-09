import type { Todo } from "../types/todo";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <p className="py-8 text-center text-zinc-500 dark:text-zinc-400">
        표시할 할 일이 없습니다.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center gap-3 py-3">
          <input
            id={`todo-${todo.id}`}
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
            className="h-5 w-5 shrink-0 cursor-pointer accent-blue-600"
          />
          <label
            htmlFor={`todo-${todo.id}`}
            className={`min-w-0 flex-1 cursor-pointer break-words ${
              todo.done
                ? "text-zinc-400 line-through dark:text-zinc-500"
                : "text-zinc-900 dark:text-zinc-50"
            }`}
          >
            {todo.title}
          </label>
          <button
            type="button"
            onClick={() => onRemove(todo.id)}
            aria-label={`"${todo.title}" 삭제`}
            className="shrink-0 rounded-md px-2 py-1 text-sm text-zinc-500 transition-colors hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/40 dark:hover:bg-red-950/40"
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
