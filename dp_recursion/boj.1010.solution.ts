const fs = require("fs");
const filePath = "./boj.1010.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = ([len, ...data]: string[]) => {
  const dp: number[][] = Array.from({ length: 30 }).map(() => Array(30));

  for (let i = 1; i < 30; i++) {
    for (let j = 1; j < 30; j++) {
      if (i === 1) {
        dp[i][j] = j;
      } else if (i === j) {
        dp[i][j] = 1;
      } else if (j > i) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      }
    }
  }

  data.forEach((d) => {
    const [N, M] = d.split(" ");

    console.log(dp[N][M]);
  });
};

solution(input);

export {};
