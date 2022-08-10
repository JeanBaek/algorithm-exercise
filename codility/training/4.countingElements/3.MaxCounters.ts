/** Test Results
1. https://app.codility.com/demo/results/trainingVWVVWA-J3K/
2. https://app.codility.com/demo/results/trainingMMYBG8-HCN/
**/

function solution(N, A) {
  let increasedNums = Array(N).fill(0);
  let maxNum = Number.MIN_SAFE_INTEGER;
  let maxCounter = Number.MIN_SAFE_INTEGER;

  A.forEach((x) => {
    if (x <= N) increase(x - 1);
    else if (x === N + 1) setMaxCounter();
  });

  function increase(x) {
    if (increasedNums[x] < maxCounter) increasedNums[x] = maxCounter;

    increasedNums[x]++;
    maxNum = Math.max(maxNum, increasedNums[x]);
  }

  function setMaxCounter() {
    maxCounter = maxNum;
  }

  return increasedNums.map((n) => (n > maxCounter ? n : maxCounter));
}

export {};
