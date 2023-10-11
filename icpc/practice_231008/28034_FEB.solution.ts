const fs = require("fs");
const filepath = "./28034_FEB.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution([N, S]: string[]): number[] {
    const excitementLevels: Set<number> = new Set(); // 서로 다른 흥분 수준을 저장하는 집합
    let consecutiveCount: number = 1;

    excitementLevels.add(consecutiveCount);

    for (let i = 1; i < Number(N); i++) {
        if (S[i] === S[i - 1]) {
            consecutiveCount++;
        } else {
            // 'B' 또는 'E' 문자에서 다른 문자로 바뀌는 경우
            if (consecutiveCount >= 2) {
                excitementLevels.add(consecutiveCount);
            }
            consecutiveCount = 1;
        }
    }

    // 마지막 연속 부분 처리
    if (consecutiveCount >= 2) {
        excitementLevels.add(consecutiveCount);
    }

    // 서로 다른 흥분 수준을 정렬하여 배열로 변환
    const sortedExcitementLevels: number[] = Array.from(excitementLevels).sort((a, b) => a - b);
    return sortedExcitementLevels;


}

// 흥분 수준 찾기
const excitementLevels: number[] = solution(input)

// 서로 다른 흥분 수준 개수와 흥분 수준 출력
console.log(excitementLevels.length);
for (const level of excitementLevels) {
    console.log(level);
}


export {}

