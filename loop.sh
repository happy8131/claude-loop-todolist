#!/usr/bin/env bash
# 루프 실행 스크립트: DONE 파일이 생기거나 최대 횟수에 도달하면 종료
MAX_ITER=${1:-10}

for ((i = 1; i <= MAX_ITER; i++)); do
  echo "=== 회차 $i / $MAX_ITER ==="
  claude -p "$(cat PROMPT.md)" --max-turns 30

  if [ -f DONE ]; then
    echo "모든 작업 완료"
    exit 0
  fi
done

echo "최대 반복 횟수($MAX_ITER)에 도달했습니다."
