// 백준 쉬운문제풀이 메모장으로 쓰는 파일
const fs = require("fs");
const filePath = "./boj.memo.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = ([meta, ...map]: string[]) => {
  const [h, w, block] = meta.split(" ");
  const count: { [key: string]: number } = {};
  const heights: number[] = [];
  const answers: { t: number; h: number }[] = [];

  map.forEach((d) =>
    d.split(" ").forEach((n) => (count[n] = (count[n] || 0) + 1))
  );
  heights.push(...Object.keys(count).map(Number));

  for (let curH = Math.min(...heights); curH <= Math.max(...heights); curH++) {
    let cutB = 0;
    let addB = 0;

    heights.forEach((g) => {
      const n = g - curH;

      if (n > 0) cutB += n * count[g];
      else if (n < 0) addB += -n * count[g];
    });

    if (+block + cutB >= addB) answers.push({ t: cutB * 2 + addB, h: curH });
  }

  const minT = Math.min(...answers.map(({ t }) => t));
  const result = answers
    .filter(({ t }) => t === minT)
    .sort((a, b) => b.h - a.h)[0];

  return `${result.t} ${result.h}`;
};

console.log(solution(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
