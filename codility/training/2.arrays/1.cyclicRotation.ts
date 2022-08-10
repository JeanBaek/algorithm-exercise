// Test result: https://app.codility.com/demo/results/trainingK7U4NS-VWR/

function solution(A: number[], K: number) {
  if (A.length === 0) return A;

  for (let i = 0; i < K; i++) {
    A.push(A.shift());
  }

  return A;
}

// console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([], 3));

export {};
