/** Test Results:
 1. https://app.codility.com/demo/results/trainingANF885-NXX/
2. https://app.codility.com/demo/results/trainingC4XGTS-R4W/
**/

function solution(A: number[]) {
  // 변수1: 숫자의 Min 합계
  // 변수2: Min 합계의 시작 인덱스
  let minSum = (A[0] + A[1]) / 2;
  let minStartIdx = 0;

  A.forEach((n, i, arr) => {
    const twoAverage = (n + arr[i + 1]) / 2;

    if (twoAverage < minSum) {
      minSum = twoAverage;
      minStartIdx = i;
    } else if ((n + arr[i + 1] + arr[i + 2]) / 3 < minSum) {
      minSum = (n + arr[i + 1] + arr[i + 2]) / 3;
      minStartIdx = i;
    }
  });

  return minStartIdx;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]));

export {};
