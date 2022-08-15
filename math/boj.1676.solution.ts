const fs = require("fs");
const filepath = "./boj.1676.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = +fs.readFileSync(filepath).toString().trim();

function solution(N: number) {
  let count = 0;

  for (let i = 1; i <= N; i++) {
    let num = i;

    while (num % 5 === 0) {
      count++;
      num /= 5;
    }
  }

  return count;
}

console.log(solution(input));

export {};
