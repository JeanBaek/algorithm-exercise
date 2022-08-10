// Test result: https://app.codility.com/demo/results/trainingKH4T5R-2Q4/

function solution(A: number[]) {
  const isNotPermutation = A.sort(ascending).some((n, i) => {
    return n !== i + 1;
  });

  return +!isNotPermutation;
}

function ascending(a: number, b: number) {
  return a - b;
}

export {};
