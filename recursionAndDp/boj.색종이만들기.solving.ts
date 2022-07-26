const fs = require("fs");
const filePath = "./BOJ.색종이만들기.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input: string[] = fs.readFileSync(filePath).toString().trim().split("\n");

const parsing = ([len, ...nums]: string[]) => {
  return { len: +len, nums: nums.map((n) => n.split(" ").map(Number)) };
};

const solution = ({ len, nums }: { len: number; nums: number[][] }) => {
  const count = [0, 0];

  const getConfetti = (n: number, x: number, y: number) => {
    let total = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        total += nums[x + i][y + j];
      }
    }

    if (total === 0) count[0]++;
    else if (total === n ** 2) count[1]++;
    else {
      n /= 2;

      getConfetti(n, x, y);
      getConfetti(n, x + n, y);
      getConfetti(n, x, y + n);
      getConfetti(n, x + n, y + n);
    }
  };

  getConfetti(len, 0, 0);

  return count.join("\n");
};

console.log(solution(parsing(input)));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
