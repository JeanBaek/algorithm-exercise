const fs = require("fs");
const filePath = "./boj.9184.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input: string[]) {
  const result: string[] = [];
  // w 함수에서 a, b, c 는 최대 20까지 계산되기 때문에 20 + 1만큼 공간 만들어줌
  const memo = getArray(21).map(() =>
    getArray(21).map(() => getArray(21).fill(0))
  ) as number[][][];

  function getArray(length: number) {
    return Array.from({ length });
  }

  function w(a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

    // memo에 저장된 값이 있으면, 해당 값 반환
    if (memo[a][b][c]) return memo[a][b][c];

    if (a < b && b < c) {
      const m1 = (memo[a][b][c - 1] = w(a, b, c - 1));
      const m2 = (memo[a][b - 1][c - 1] = w(a, b - 1, c - 1));
      const m3 = (memo[a][b - 1][c] = w(a, b - 1, c));

      return (memo[a][b][c] = m1 + m2 - m3);
    }

    const m1 = (memo[a - 1][b][c] = w(a - 1, b, c));
    const m2 = (memo[a - 1][b - 1][c] = w(a - 1, b - 1, c));
    const m3 = (memo[a - 1][b][c - 1] = w(a - 1, b, c - 1));
    const m4 = (memo[a - 1][b - 1][c - 1] = w(a - 1, b - 1, c - 1));

    return m1 + m2 + m3 - m4;
  }

  for (let i = 0; i < input.length - 1; i++) {
    const [a, b, c] = input[i].split(" ");

    result.push(`w(${a}, ${b}, ${c}) = ${w(+a, +b, +c)}`);
  }

  return result.join("\n");
}

console.log(solution(input));

export {};
