"use client";

import { useState } from "react";

type TodoFormProps = {
  // 추가에 성공하면 true를 반환한다
  onAdd: (title: string) => boolean;
};

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 공백만 입력된 경우 onAdd가 false를 반환하므로 입력값을 유지한다
    if (onAdd(title)) {
      setTitle("");
    }
  };

  const isEmpty = title.trim() === "";

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <label htmlFor="new-todo" className="sr-only">
        새 할 일
      </label>
      <input
        id="new-todo"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="할 일을 입력하세요"
        autoComplete="off"
        className="min-w-0 flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
      />
      <button
        type="submit"
        disabled={isEmpty}
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        추가
      </button>
    </form>
  );
}
