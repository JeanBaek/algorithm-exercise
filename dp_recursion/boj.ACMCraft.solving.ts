const fs = require("fs");
const filePath = "./boj.ACMCraft.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input: string[] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution([caseCount, ...data]: string[]) {
  const results: number[] = [];

  for (let i = 1; i <= +caseCount; i++) {
    // meta data
    const [buildingCount, ruleCount] = data[0].split(" ");
    const times = data[1].split(" ");
    const target = data[+buildingCount + 2];

    console.log({ buildingCount, ruleCount, times, target });

    const adjacency: { [key: string]: number[] } = {};
    const queue: number[] = [];
    const visited = Array(+buildingCount + 1).fill(false);
    let resultTime = 0;
    let isNoTarget = true;

    for (let j = 2; j < +ruleCount + 2; j++) {
      const [a, b] = data[j].split(" ");

      if (!queue.length) queue.push(+a);
      if ((a === target || b === target) && isNoTarget) isNoTarget = false;

      adjacency[a] = (adjacency[a] || []).concat(+b);
      adjacency[b] = (adjacency[b] || []).concat(+a);
    }

    if (isNoTarget) return results.push(+times[+target - 1]);

    while (queue.length) {
      const current = queue.shift();
      console.log({ queue, visited, current, resultTime });

      visited[current] = true;

      adjacency[current].filter((c) => !visited[c]);
      adjacency[current].forEach((c) => {
        if (visited[c]) resultTime += +times[current - 1];
      });

      queue.push(...adjacency[current].filter((c) => !visited[c]));

      if (current === +target) break;
    }

    results.push(resultTime);
    data = data.splice(+ruleCount + 3);
  }

  return results.join("\n");
}

console.log(solution(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
