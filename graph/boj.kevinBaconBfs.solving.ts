const fs = require("fs");
const filePath = "./boj.kevinBaconBfs.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const initFloyd = (userLen: number, adjacency: { [key: string]: number[] }) => {
  const floyd: number[][] = [];

  for (let i = 0; i < userLen; i++) {
    floyd.push(new Array(userLen).fill(Infinity));
    floyd[i][i] = 0;
  }

  Object.entries(adjacency).forEach(([a, bList]) => {
    bList.forEach((b) => (floyd[+a - 1][b - 1] = 1));
  });

  return floyd;
};

const setFloyd = (userLen: number, adjacency: { [key: string]: number[] }) => {
  const floyd = initFloyd(userLen, adjacency);

  for (let i = 0; i < userLen; i++) {
    for (let j = 0; j < userLen; j++) {
      if (i === j) continue;

      for (let k = 0; k < userLen; k++) {
        const isNotInf = floyd[j][i] !== Infinity && floyd[i][k] !== Infinity;
        // 아래 부분 이해 안됌. 왜 저 인덱스들을 보는거지?
        if (isNotInf && floyd[j][k] > floyd[j][i] + floyd[i][k]) {
          floyd[j][k] = floyd[j][i] + floyd[i][k];
        }
      }
    }
  }

  return floyd;
};

const minKevinBaconUser = (floyd: number[][]) => {
  let idx = 0;
  let sum = floyd[idx].reduce((a, b) => a + b);
  let min = sum;

  for (let i = 1; i < floyd.length; i++) {
    sum = floyd[i].reduce((a, b) => a + b);
    if (min <= sum) continue;

    min = sum;
    idx = i;
  }

  return idx + 1;
};

const solution = ([len, ...friends]: string[]) => {
  const [userLen, connectLen] = len.split(" ");
  const adjacency = friends.reduce((pre: { [key: string]: number[] }, f) => {
    const [A, B] = f.split(" ");

    pre[A] = (pre[A] || []).concat(+B);
    pre[B] = (pre[B] || []).concat(+A);

    return pre;
  }, {});

  const floyd = setFloyd(+userLen, adjacency);
  return minKevinBaconUser(floyd);
};

console.log(solution(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
