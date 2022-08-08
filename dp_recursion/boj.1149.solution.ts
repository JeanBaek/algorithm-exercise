const fs = require("fs");
const filePath = "./boj.1149.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution([len, ...data]: string[]) {
  const arr = data.map((d) => d.split(" ").map(Number));

  for (let i = 1; i < +len; i++) {
    arr[i][0] += Math.min(arr[i - 1][1], arr[i - 1][2]);
    arr[i][1] += Math.min(arr[i - 1][0], arr[i - 1][2]);
    arr[i][2] += Math.min(arr[i - 1][0], arr[i - 1][1]);
  }

  return Math.min(...arr[+len - 1]);
}

console.log(solution(input));

export {};
