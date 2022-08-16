function solution([N, ...data]: string[]) {
  const matrix = data.map((d) => d.split(" ")) as ("-1" | "0" | "1")[][];
  const count = { "-1": 0, "0": 0, "1": 0 };

  function addCountIfSameNum(n: number, x: number, y: number) {
    const num: "-1" | "0" | "1" = matrix[y][x];
    let numCount = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[y + j][x + i] === num) {
          numCount++;
        } else break;
      }
    }

    if (numCount === n * n) count[num]++;
    else {
      n /= 3;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          addCountIfSameNum(n, x + i * n, y + j * n);
        }
      }
    }
  }

  addCountIfSameNum(+N, 0, 0);

  return [count["-1"], count["0"], count["1"]].join("\n");
}

const fs = require("fs");
const filepath = "./boj.1780.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

console.log(solution(input));

export {};
