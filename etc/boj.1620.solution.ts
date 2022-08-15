const fs = require("fs");
const filepath = "./boj.1620.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution([meta, ...data]: string[]) {
  const [pocketmonCount, questionCount] = meta.split(" ");

  const pocketmons = [null, ...data.slice(0, +pocketmonCount)];
  const pocketmonNo = new Map(pocketmons.map((p, i) => [p, i]));
  const questions = data.slice(+pocketmonCount);

  return questions.map((q) => pocketmons[+q] || pocketmonNo.get(q)).join("\n");
}

console.log(solution(input));

export {};
