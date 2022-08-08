// DP

function solution(b) {
  const colLen = b.length;
  const rowLen = b[0].length;

  // 길이가 1인 정사각형 솎아내기
  if (colLen === 1 && rowLen === 1 && b[0][0] === 1) return 1;

  let result = 0;

  // 길이가 2 이상인 정사각형 찾아내기
  for (let c = 1; c < colLen; c++) {
    for (let r = 1; r < rowLen; r++) {
      if (b[c][r] === 1) {
        // 왼쪽(←), 왼쪽상단(↖︎), 위쪽(↑)의 최소값 구함
        const min = Math.min(b[c][r - 1], b[c - 1][r - 1], b[c - 1][r]);

        b[c][r] = min + 1; // DP
      }

      if (result < b[c][r]) result = b[c][r];
    }
  }

  return result ** 2;
}
