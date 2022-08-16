const fs = require("fs");
const filepath = "./boj.17219.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution([meta, ...data]: string[]) {
  const [pwCount, questionCount] = meta.split(" ");
  const passwords = new Map(
    data.slice(0, +pwCount).map((p) => {
      const [site, pw] = p.split(" ");

      return [site, pw];
    })
  );
  const questions = data.slice(+pwCount);

  return questions.map((q) => passwords.get(q)).join("\n");
}

console.log(solution(input));

export {};
