const matchsticks = {
  2: [1],
  3: [7],
  4: [4],
  5: [2, 3, 5],
  6: [0, 6, 9],
  7: [8],
};

function solution([caseLen, ...cases]: string[]) {}

function getBiggest(n: number) {
  let result = n % 2 ? "7" : "1";

  for (let i = 0; i < Math.floor(n / 2); i++) {
    result += 1;
  }

  return Number(result);
}

function getSmallest(n: number) {}

const fs = require("fs");
const filePath = "./boj.coin.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

export {};
