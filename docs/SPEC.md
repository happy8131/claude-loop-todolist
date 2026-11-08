# Todolist 요구사항 (SPEC)

## 목표
간단한 Todolist 웹앱. Next.js(App Router) + TypeScript + Tailwind CSS.

## 기능
1. 할 일 추가 (빈 문자열 불가)
2. 할 일 완료/미완료 토글
3. 할 일 삭제
4. 필터: 전체 / 진행중 / 완료
5. 남은 할 일 개수 표시
6. 새로고침 후에도 데이터 유지 (localStorage)

## 데이터 모델
```ts
type Todo = {
  id: string;
  title: string;
  done: boolean;
  createdAt: number;
};
```

## 비기능 요구
- 들여쓰기 2칸, 코드 주석은 한국어
- 컴포넌트는 `app/components/`, 훅은 `app/hooks/`에 둔다
- 접근성: 버튼/체크박스에 label 제공

## 완료 기준
- `npm run lint`, `npx tsc --noEmit`, `npm run build` 모두 통과
- 위 기능 1~6이 브라우저에서 동작
