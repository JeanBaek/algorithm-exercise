function solution([meta, numString, ...problems]: string[]) {
  const sums = numString.split(" ").reduce((p: number[], c) => {
    p.push((p[p.length - 1] ?? 0) + +c);

    return p;
  }, []);
  const result: number[] = [];

  problems.forEach((p) => {
    const [start, end] = p.split(" ");

    result.push(sums[+end - 1] - (sums[+start - 2] ?? 0));
  });

  return result.join("\n");
}

const fs = require("fs");
const filepath = "./boj.11659.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

console.log(solution(input));

export {};
