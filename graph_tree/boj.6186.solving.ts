const fs = require("fs");
const filePath = "./boj.6186.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const FORWARD = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const solution = ([meta, ...data]: string[]) => {
  const [R, C] = meta.split(" ");
  const matrix = Array.from({ length: +R }).map((_, i) => data[i].split(""));
  const visited: boolean[][] = Array.from({ length: +R }).map(() =>
    Array(+C).fill(false)
  );
  let clumps = 0;

  // 1. nested loop 돌면서
  for (let i = 0; i < +R; i++) {
    for (let j = 0; j < +C; j++) {
      if (matrix[i][j] !== "#" || visited[i][j]) continue;

      dfs(i, j);
      clumps++;
    }
  }

  // 2. 본인이 #이고 not visited면,
  //  -> 변수+
  //  -> visited 처리
  //  -> 상하좌우에 재귀적으로 처리 (재귀함수 호출 전에 조건 확인 - stack overhead 방지)
  function dfs(i: number, j: number) {
    visited[i][j] = true;

    FORWARD.forEach(([r, c]) => {
      const outOfRange = i + r >= +R || i + r < 0 || j + c >= +C || j + c < 0;

      if (outOfRange) return;
      if (matrix[i + r][j + c] !== "#" || visited[i + r][j + c]) return;

      dfs(i + r, j + c);
    });
  }

  return clumps;
};

console.log(solution(input));

export {};
