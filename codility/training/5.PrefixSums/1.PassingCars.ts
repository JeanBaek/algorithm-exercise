/** Test Results: 
1. https://app.codility.com/demo/results/training4FGCS9-698/
2. https://app.codility.com/demo/results/trainingVZ25WD-8F4/
**/

function solution(A: Array<0 | 1>) {
  let goToEastCount = 0;
  let pairCount = 0;

  A.forEach((car) => {
    if (car === 0) goToEastCount++;
    else pairCount += goToEastCount;
  });

  return pairCount > 1000000000 ? -1 : pairCount;
}

export {};
