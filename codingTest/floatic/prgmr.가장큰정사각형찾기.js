// DP
// 이거 진짜 이해 안됐음. 제대로 고민해봐야할듯

function solution(b) {
  const colLen = b.length;
  const rowLen = b[0].length;

  if (colLen === 1 && rowLen === 1 && b[0][0] === 1) return 1;

  let result = 0;

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
