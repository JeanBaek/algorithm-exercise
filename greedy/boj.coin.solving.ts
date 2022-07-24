const fs = require("fs");
const filePath = "./boj.coin.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = ([meta, ...coins]: string[]) => {
  const [coinLen, K] = meta.split(" ");

  let k = +K;
  let c = 0;
  let q = 0;
  let result = 0;

  for (let i = +coinLen - 1; i >= 0; i--) {
    // 동전
    c = +coins[i];
    // k를 동전의 가치로 나눈 몫을 q에 저장
    q = Math.floor(k / c);
    // 몫이 0이면 k보다 동전가치가 더 커서 사용할 수 없으니 next level
    if (q === 0) continue;

    // 사용 가능한 동전 개수 q를 result에 더해줌
    result += q;

    // k % c의 나머지를 k에 저장
    k = k % c;

    // 더 계산할 k가 없으면 종료
    if (k === 0) break;
  }

  return result;
};

console.log(solution(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
