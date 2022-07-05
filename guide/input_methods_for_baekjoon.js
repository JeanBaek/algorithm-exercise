// 입력 받는 방법 3 (정제)
{
  const fs = require("fs");
  const filePath = "./exampleInput.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const parsingInput = (input) => {
    const lineCount = +input[0];
    const valueList = [];

    for (let i = 1; i < lineCount; ++i) {
      const arr = input[i].split(" ").map((item) => +item);

      valueList.push({ n: arr.shift(), value: arr });
    }

    return { lineCount, valueList };
  };

  const solution = (parsedInput) => {
    // 문제 풀이
  };

  solution(parsingInput(input));

  // ts 파일에만 추가
  /* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
  export {};
}

// 입력 받는 방법 1 (fs)
{
  const fs = require("fs");
  const filePath = "./exampleInput.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const solution = (input) => {
    // 문제 풀이
  };

  solution(+input[0]);

  // ts 파일에만 추가
  /* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
  export {};
}

// 입력 받는 방법 2 (readline)
{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", (line) => input.push(line.toString().trim())).on(
    "close",
    () => {
      solution(input);
      process.exit();
    }
  );
}
