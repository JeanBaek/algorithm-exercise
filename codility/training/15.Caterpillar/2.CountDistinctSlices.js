// Test Result: https://app.codility.com/demo/results/trainingBHEAWK-AGA/

// 재풀이 예정

const dp = [0];
function triangular(n) {
  while (dp[n] === undefined) {
    const len = dp.length;
    dp.push(dp[dp.length - 1] + len);
  }

  return dp[n];
}

function solution(M, A) {
  // A를 forEach 돌면서 자신의 다음에 중복이 있을때까지 count++;
  // triangular(count)를 totalCount에 +; , reset count
  // return totalCount

  let totalCount = 0;
  let count = 0;

  A.forEach((n, i, arr) => {
    count++;

    if (i + 1 === arr.length || n === arr[i + 1]) {
      totalCount += triangular(count);
      count = 0;
    }
  });

  return totalCount;
}

console.log(solution(6, [3, 4, 5, 5, 2]));
