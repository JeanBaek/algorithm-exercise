// DP
// 와 진짜 어렵다.. 아래 블로그 참고했는데, 얘도 고민 깊게하고 이해해야할 듯
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-%EC%82%AC%EC%B9%99%EC%97%B0%EC%82%B0

function solution(arr) {
  const operLen = Math.ceil(arr.length / 2);
  const maxDP = Array.from({ length: operLen }).map(() =>
    Array(operLen).fill(-Infinity)
  );
  const minDP = Array.from({ length: operLen }).map(() =>
    Array(operLen).fill(Infinity)
  );

  for (let i = 0; i < operLen; i++) {
    maxDP[i][i] = +arr[i * 2];
    minDP[i][i] = +arr[i * 2];
  }

  for (let c = 1; c < operLen; c++) {
    for (let i = 0; i < operLen - c; i++) {
      const j = c + i;
      console.log({ c, i, j });

      for (let k = i; k < j; k++) {
        const maxCurrent = maxDP[i][j];
        const minCurrent = minDP[i][j];

        console.log({ k, maxDP, minDP, maxCurrent, minCurrent });

        if (arr[k * 2 + 1] === "+") {
          maxDP[i][j] = Math.max(maxCurrent, maxDP[i][k] + maxDP[k + 1][j]);
          minDP[i][j] = Math.min(minCurrent, minDP[i][k] + minDP[k + 1][j]);
        } else {
          maxDP[i][j] = Math.max(maxCurrent, maxDP[i][k] - minDP[k + 1][j]);
          minDP[i][j] = Math.min(minCurrent, minDP[i][k] - maxDP[k + 1][j]);
        }
      }
    }
  }

  return maxDP[0][operLen - 1];
}

const input = ["1", "-", "3", "+", "5", "-", "8"];
console.log(solution(input));
