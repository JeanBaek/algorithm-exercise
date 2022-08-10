/** Test results:
1. https://app.codility.com/demo/results/trainingR99TEA-QMS/
2. https://app.codility.com/demo/results/trainingPWDGQB-UQP/
**/

function solution(A: number[]) {
  // O(N) 가즈아~
  // 1. P가 1(idx)일 때를 첫 계산으로
  // 2. P < A.length 조건에서 iterate 하면서 왼쪽 + A[P] / 오른쪽 - A[P]
  // 3. 그 과정에서 계속 갱신 minDiff = Math.min(minDiff, 왼쪽 - 오른쪽);

  let leftSum = A[0];
  let rightSum = A.reduce((a, b) => a + b) - leftSum;
  let minDiff = Math.abs(leftSum - rightSum);

  for (let P = 2; P < A.length - 1; P++) {
    leftSum += A[P - 1];
    rightSum -= A[P - 1];
    minDiff = Math.min(minDiff, Math.abs(leftSum - rightSum));
  }

  return minDiff;
}

// console.log(solution([3, 1, 2, 4, 3]));
// console.log(solution([1, 2]));
console.log(solution([1000, -1000]));
// console.log(solution([-34, 16]));
// console.log(solution([0, -2000]));
// console.log(solution([-1000, -999, -998]));

export {};
