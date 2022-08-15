/** Test Results: 
1. https://app.codility.com/demo/results/trainingT3HV2Y-C4Q/
2. https://app.codility.com/demo/results/trainingNYBT92-EQU/
3. https://app.codility.com/demo/results/training7JVCR9-2GR/
**/

function solution(A) {
  const intIndices = {};
  let dominatorIdx = -1;

  A.some((int, i) => {
    intIndices[int] = (intIndices[int] || 0) + 1;

    if (intIndices[int] > A.length / 2) {
      dominatorIdx = i;
      return true;
    }

    return false;
  });

  return dominatorIdx;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
