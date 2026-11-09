// 할 일 한 건을 나타내는 타입
export type Todo = {
  id: string;
  title: string;
  done: boolean;
  createdAt: number;
};

// 목록 필터 종류
export type TodoFilter = "all" | "active" | "done";
