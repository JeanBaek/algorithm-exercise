// 백준 [2579] 계단오르기

const fs = require("fs");
const filePath = "./BOJ.계단오르기.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const parsingInput = ([stairCount, ...stairScores]: Array<number>): [
  number,
  Array<number>
] => {
  return [+stairCount, [0, ...stairScores.map(Number)]];
};

const solution = ([stairCount, scoreList]: [number, Array<number>]) => {
  const dpList: Array<number> = new Array(stairCount + 1);
  dpList[0] = scoreList[0];
  dpList[1] = scoreList[1];
  dpList[2] = scoreList[1] + scoreList[2];

  // Tabulation 방식
  scoreList.forEach((score, i) => {
    if (i <= 2) return;
    console.log({
      2: dpList[i - 2],
      3: dpList[i - 3],
      1: scoreList[i - 1],
    });
    dpList[i] = Math.max(
      score + dpList[i - 2],
      score + scoreList[i - 1] + dpList[i - 3]
    );
  });
  console.log({ "dpList.length": dpList.length, dpList });
  return dpList[stairCount];
};

console.log(solution(parsingInput(input)));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
