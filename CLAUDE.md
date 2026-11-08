# 프로젝트 규칙 (Todolist)

## 언어
- 응답, 주석, 커밋 메시지, 문서: 한국어
- 변수명/함수명: 영어

## 스택
- Next.js(App Router), TypeScript, Tailwind CSS
- 들여쓰기 2칸

## 검증 명령어
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

## 루프 실행 방법
- 명령어와 `/goal` 사용법은 `docs/LOOP.md`를 따른다.
- `/goal`의 평가자는 대화 내용만 보므로, 검증 명령어의 실행 결과를 반드시 출력해서 보여준다.

## 루프 작업 규칙
- 한 번에 `TODO.md`의 항목 1개만 처리한다.
- 상태는 `TODO.md`, `PROGRESS.md`, git 기록에 남긴다.
- 요구사항은 `docs/SPEC.md`를 따른다. 명시되지 않은 기능은 추가하지 않는다.
- `docker-compose/`는 수정하지 않는다.
