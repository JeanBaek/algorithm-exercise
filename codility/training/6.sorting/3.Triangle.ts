// Test Result: https://app.codility.com/demo/results/training99CRNU-HY7/

function solution(A: number[]) {
  if (A.length < 3) return 0;

  return +A.sort(increase).some((n, i) => {
    if (i + 2 >= A.length) return false;

    return n + A[i + 1] > A[i + 2];
  });
}

console.log(solution([1, 5, 6]));

function increase(a: number, b: number) {
  return a - b;
}

export {};
