// 백준 쉬운문제풀이 메모장으로 쓰는 파일
const fs = require("fs");
const filePath = "./boj.memo.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = ([meta, ...data]: string[]) => {
  const [height, width] = meta.split(" ");
  const map = data.map((d) => d.split(""));
  const col: boolean[] = new Array(+height).fill(false);
  const row: boolean[] = new Array(+width).fill(false);

  for (let h = 0; h < +height; h++) {
    for (let w = 0; w < +width; w++) {
      if (map[h][w] === ".") continue;

      col[h] = true;
      row[w] = true;
    }
  }

  return Math.max(
    col.reduce((p, b) => (p += +!b), 0),
    row.reduce((p, b) => (p += +!b), 0)
  );
};

console.log(solution(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
