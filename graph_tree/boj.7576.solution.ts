const fs = require("fs");
const filePath = "./boj.7576.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const FORWARD = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

const solution = ([meta, ...data]: string[]) => {
  const [R, C] = meta.split(" ").map(Number);
  const matrix = Array.from({ length: C }).map((_, i) =>
    data[i].split(" ").map(Number)
  );
  const visited: boolean[][] = Array.from({ length: C }).map(() =>
    Array(R).fill(false)
  );
  const queue: number[][] = [];

  // 모든 토마토 익어있으면 0 출력
  const tomatoType = new Set();
  matrix.forEach((m) => m.forEach((v) => tomatoType.add(v)));

  if (!tomatoType.has(0)) return 0;

  for (let i = 0; i < C; i++) {
    for (let j = 0; j < R; j++) {
      if (visited[i][j] || matrix[i][j] === -1) continue;
      if (matrix[i][j]) {
        queue.push([i, j]);
      } else {
        // 내가 0 인데 주변이 모두 -1 || undefined 면, return -1;
        const isIsolated = FORWARD.every(([c, r]) => {
          const outOfRange = i + c < 0 || i + c >= C || j + r < 0 || j + r >= R;

          return outOfRange || matrix[i + c][j + r] === -1;
        });

        if (isIsolated) return -1;
      }
    }
  }

  // bfs
  let minDay = 0;
  let head = 0;

  while (queue.length > head) {
    const size = queue.length - head; // 이거 왜 두는거지?

    for (let s = 0; s < size; s++) {
      const [y, x] = queue[head++];

      visited[y][x] = true;

      FORWARD.forEach(([c, r]) => {
        const outOfRange = y + c < 0 || y + c >= C || x + r < 0 || x + r >= R;

        if (outOfRange) return;
        if (visited[y + c][x + r]) return;

        visited[y + c][x + r] = true;

        // 1, -1 거르기
        if (matrix[y + c][x + r] === 0) {
          matrix[y + c][x + r] = 1;
          queue.push([y + c, x + r]);
        }
      });
    }

    minDay++;
  }

  return minDay - 1; // 왜 minDay - 1 해야 제값이 나오지?
};

export {};
