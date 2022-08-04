const fs = require("fs");
const filePath = "./boj.2644.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = ([_, relation, __, ...relations]: string[]) => {
  const adjacencyList: { [key: string]: number[] } = relations.reduce(
    (p, d) => {
      const [adult, child] = d.split(" ");

      p[adult] = (p[adult] || []).concat(+child);
      p[child] = (p[child] || []).concat(+adult);

      return p;
    },
    {}
  );

  const [base, target] = relation.split(" ").map(Number);
  const visited: { [key: string]: true } = {};
  const stack = [[base, 0]]; // depth로 촌수 확인

  while (stack.length) {
    const [person, depth] = stack.pop();
    visited[person] = true;

    if (person === target) return depth;

    adjacencyList[person].forEach((next) => {
      if (!visited[next]) stack.push([next, depth + 1]);
    });
  }

  return -1;
};

console.log(solution(input));

export {};
