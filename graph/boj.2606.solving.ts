const fs = require("fs");
const filePath = "./boj.2606.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = ([computerCount, connectCount, ...connections]: string[]) => {
  const adjacency = connections.reduce((p: { [key: string]: number[] }, c) => {
    const [A, B] = c.split(" ");
    p[A] = (p[A] || []).concat(+B);
    p[B] = (p[B] || []).concat(+A);

    return p;
  }, {});

  const stack = [1];
  const visited: boolean[] = new Array(+computerCount + 1).fill(false);

  while (stack.length) {
    const com = stack.pop();

    visited[com] = true;
    stack.push(...adjacency[com].filter((c) => !visited[c]));
  }

  return visited.filter((v) => v).length - 1;
};

console.log(solution(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
