// Test result: https://app.codility.com/demo/results/trainingKH4T5R-2Q4/

function solution(A) {
  const isNotPermutation = A.sort((a, b) => a - b).some((n, i, arr) => {
    if (n !== i + 1) return true;

    return false;
  });

  return +!isNotPermutation;
}

export {};
