const fs = require("fs");

const input = fs
  .readFileSync("./input.txt") // file path: '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const parsingInput = (input: Array<string>) => {
  const [n, m] = input[0].split(" ").map((el) => +el);
  const valueList = input[1].split(" ").map((el) => +el);

  return { n, m, valueList };
};

const solution = ({
  n,
  m,
  valueList,
}: {
  n: number;
  m: number;
  valueList: Array<number>;
}) => {
  let start = 0;
  let end = 0;

  let sumValue = valueList[0];
  let result = 0;

  while (start < n && end < n) {
    if (sumValue === m) {
      result++;
      sumValue += valueList[++end];
    } else if (sumValue < m) {
      sumValue += valueList[++end];
    } else {
      sumValue -= valueList[start++];
    }
  }

  return result;
};

console.log(solution(parsingInput(input)));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
