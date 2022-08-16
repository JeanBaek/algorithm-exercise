const fs = require("fs");
const filepath = "./boj.9375.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution([caseCount, ...data]: string[]) {
  const testCases: string[][] = [];
  const result: number[] = [];

  // data parsing
  let i = 0;
  for (i = i; i < +data.length; ) {
    const endIdx = i + +data[i] + 1;

    testCases.push(data.slice(i + 1, endIdx));
    i = endIdx;
  }

  testCases.forEach((c) => {
    const set: { [key: string]: string[] } = {};

    c.forEach((s) => {
      const [clothes, type] = s.split(" ");

      set[type] = (set[type] ?? []).concat(clothes);
    });

    const numberOfCases =
      [...Object.values(set)].reduce((a, b) => (a *= b.length + 1), 1) - 1;

    result.push(numberOfCases);
  });

  return result.join("\n");
}

console.log(solution(input));

export {};
