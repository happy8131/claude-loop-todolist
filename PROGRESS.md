# 진행 기록

회차마다 `날짜 | 항목 | 결과 | 메모` 형식으로 한 줄씩 추가한다.

| 날짜 | 항목 | 결과 | 메모 |
|---|---|---|---|
| 2026-11-09 | 1. Todo 타입 정의 | 통과 | `TodoFilter` 타입도 함께 정의 (항목 5에서 사용) |
| 2026-11-09 | 2. useTodos 훅 | 통과 | effect 내 setState 대신 useSyncExternalStore 사용 (React 19 lint 규칙 및 SSR 하이드레이션 대응) |
| 2026-11-09 | 3. TodoForm 컴포넌트 | 통과 | sr-only label 제공, 빈 입력 시 추가 버튼 비활성화 |
| 2026-11-09 | 4. TodoList 컴포넌트 | 통과 | 체크박스+label 연결, 삭제 버튼에 aria-label, 빈 목록 안내 문구 |
| 2026-11-09 | 5. 필터 및 남은 개수 | 통과 | TodoFilterBar 컴포넌트와 filterTodos/countRemaining 유틸 분리, 화면 조립은 항목 6 |
