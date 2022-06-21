// 입력 받는 방법 1 (fs)
{
  const fs = require("fs");
  let input = fs.readFileSync("./exampleInput.txt").toString().trim(); // file path: '/dev/stdin'

  input = input.split("\n");

  const testCaseNum = +input[0];

  for (let i = 1; i < testCaseNum; ++i) {
    const arr = input[i].split(" ").map((item) => +item);

    // 문제 풀이
  }
}

// 입력 받는 방법 2 (readline)
{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", () => input.push(line)).on("close", () => {
    solution(input);
    process.exit();
  });
}

// 입력 받는 방법 3 (정제)
const parsingInput = (input) => {
  const lineCount = +input[0];
  const valueList = [];

  for (let i = 1; i < lineCount; ++i) {
    const arr = input[i].split(" ").map((item) => +item);

    valueList.push({ n: arr.shift(), value: arr });
  }

  return { lineCount, valueList };
};
