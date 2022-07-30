// 백준 실버2 [유기농 배추]
const fs = require("fs");
const filePath = "./boj.1012.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const CLOSE_PIXEL = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const solution = ([T, ...cases]: string[]) => {
  // meta data
  let [m, n, k] = [0, 0, 0];
  let farm: number[][] = [];
  let visited: boolean[][] = [];

  const dfs = (x: number, y: number) => {
    visited[x][y] = true;

    CLOSE_PIXEL.forEach(([xForward, yForward]) => {
      const nextX = xForward + x;
      const nextY = yForward + y;
      const isOutOfRange = nextX < 0 || nextY < 0 || nextX >= n || nextY >= m;

      if (isOutOfRange) return;
      if (farm[nextX][nextY] && !visited[nextX][nextY]) {
        dfs(nextX, nextY);
      }
    });
  };

  const solve = () => {
    let ans = 0;

    for (let x = 0; x < n; x++) {
      for (let y = 0; y < m; y++) {
        if (farm[x][y] && !visited[x][y]) {
          dfs(x, y);
          ans++;
        }
      }
    }

    console.log(ans);
  };

  for (let i = 0; i < +T; i++) {
    [m, n, k] = cases[0].split(" ").map(Number);
    // NOTE: 첫 시도 땐 Array(n).fill(Array(m).fill(0)) 으로 했는데, 이게 Array(n)의 모든 요소에 똑같은 배열주소값을 채워넣어서 계산이 잘못되는 이슈가 있었음
    // 그래서 아래와 같이 iterable한 n길이의 배열을 만들고, 이를 map으로 돌면서 새로운 m길이의 배열을 넣어주는 식으로 변경함
    farm = Array.from({ length: n }).map(() => Array(m).fill(0));
    visited = Array.from({ length: n }).map(() => Array(m).fill(false));

    for (let j = 1; j <= k; j++) {
      const [x, y] = cases[j].split(" ");
      farm[y][x] = 1;
    }

    solve();
    cases = cases.slice(k + 1);
  }
};

solution(input);

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
