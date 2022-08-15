const fs = require("fs");
const filepath = "boj.1463.input.txt";
const input = +fs.readFileSync(filepath).toString().trim();

function solution(N: number) {
  const minCount = [0, 0, 1, 1, 2, 3, 2, 3, 3, 2, 3];

  if (N < 11) return minCount[N];

  for (let i = 11; i <= N; i++) {
    const dividedNums = [i - 1];

    if (i % 2 === 0) dividedNums.push(i / 2);
    if (i % 3 === 0) dividedNums.push(i / 3);

    minCount.push(Math.min(...dividedNums.map((n) => minCount[n])) + 1);
  }

  return minCount[N];
}

console.log(solution(input));

export {};
