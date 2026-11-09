import type { TodoFilter } from "../types/todo";

type TodoFilterBarProps = {
  filter: TodoFilter;
  remaining: number;
  onChange: (filter: TodoFilter) => void;
};

const FILTERS: { value: TodoFilter; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "active", label: "진행중" },
  { value: "done", label: "완료" },
];

export default function TodoFilterBar({
  filter,
  remaining,
  onChange,
}: TodoFilterBarProps) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <p className="text-zinc-600 dark:text-zinc-400" aria-live="polite">
        남은 할 일 {remaining}개
      </p>
      <div role="group" aria-label="할 일 필터" className="flex gap-1">
        {FILTERS.map(({ value, label }) => {
          const selected = filter === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange(value)}
              aria-pressed={selected}
              className={`rounded-md px-3 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                selected
                  ? "bg-blue-600 text-white"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
