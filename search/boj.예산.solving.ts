// 백준 [2512] 예산. 이진탐색, 매개변수탐색
const fs = require("fs");
const filePath = "./boj.예산.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = ([budgetCount, naiveBudgets, total]: string[]) => {
  const budgets = naiveBudgets
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let sumBudgets = budgets.reduce((p, n) => (p += n), 0);
  let medium = budgets[Math.ceil(+budgetCount / 2)];

  // 다 합해도 총예산 이하면, 요청예산 중 최댓값 출력
  if (sumBudgets <= +total) return budgets[+budgetCount - 1];

  while (medium) {
    sumBudgets = budgets.reduce((p, n) => (p += n <= medium ? n : medium), 0);

    if (sumBudgets <= +total) {
      // medium 수를 늘려도 total보다 작은지 확인하여 medium 최적화
      if (
        budgets.reduce((p, n) => (p += n <= medium + 1 ? n : medium + 1), 0) <=
        +total
      )
        medium++;
      else break;
    } else {
      // 총예산과 sumBudgets 차이값을 요청예산 수만큼 나누어 medium에서 빼준다
      // medium - 1 보다 빠르게 최적값을 찾아갈 수 있음
      medium += Math.floor((+total - sumBudgets) / +budgetCount);
    }
  }

  return medium;
};

console.log(solution(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
