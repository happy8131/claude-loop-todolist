"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { Todo } from "../types/todo";

const STORAGE_KEY = "todos";

// 서버 렌더링 및 하이드레이션 시 사용하는 빈 목록 (참조를 고정해야 한다)
const EMPTY_TODOS: Todo[] = [];

// 마지막으로 파싱한 원본 문자열과 결과를 캐시한다
// (getSnapshot은 값이 같으면 항상 같은 참조를 반환해야 한다)
let cachedRaw: string | null = null;
let cachedTodos: Todo[] = EMPTY_TODOS;

const listeners = new Set<() => void>();

// 저장된 값이 올바른 Todo 배열인지 검사한다
function isTodoArray(value: unknown): value is Todo[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "string" &&
        typeof item.title === "string" &&
        typeof item.done === "boolean" &&
        typeof item.createdAt === "number",
    )
  );
}

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // 저장소 접근이 막힌 환경(시크릿 모드 등)에서는 빈 목록으로 동작한다
    return null;
  }
}

function getSnapshot(): Todo[] {
  const raw = readRaw();
  if (raw === cachedRaw) {
    return cachedTodos;
  }

  cachedRaw = raw;
  if (raw === null) {
    cachedTodos = EMPTY_TODOS;
    return cachedTodos;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    cachedTodos = isTodoArray(parsed) ? parsed : EMPTY_TODOS;
  } catch {
    // 손상된 데이터는 무시한다
    cachedTodos = EMPTY_TODOS;
  }
  return cachedTodos;
}

function getServerSnapshot(): Todo[] {
  return EMPTY_TODOS;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  // 다른 탭에서 변경된 경우에도 반영한다
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      listener();
    }
  };
  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

// 목록을 저장하고 구독자에게 알린다
function writeTodos(next: Todo[]): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // 저장 실패 시에도 현재 세션에서는 동작하도록 캐시만 갱신한다
    cachedRaw = null;
    cachedTodos = next;
  }
  listeners.forEach((listener) => listener());
}

export function useTodos() {
  const todos = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // 할 일 추가 (공백만 있는 제목은 무시하고 false를 반환한다)
  const addTodo = useCallback((title: string): boolean => {
    const trimmed = title.trim();
    if (trimmed === "") {
      return false;
    }

    const todo: Todo = {
      id: crypto.randomUUID(),
      title: trimmed,
      done: false,
      createdAt: Date.now(),
    };
    writeTodos([...getSnapshot(), todo]);
    return true;
  }, []);

  // 완료 여부 토글
  const toggleTodo = useCallback((id: string) => {
    writeTodos(
      getSnapshot().map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }, []);

  // 삭제
  const removeTodo = useCallback((id: string) => {
    writeTodos(getSnapshot().filter((todo) => todo.id !== id));
  }, []);

  return { todos, addTodo, toggleTodo, removeTodo };
}
