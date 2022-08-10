// Test Result: https://app.codility.com/demo/results/trainingWEYN55-UQV/

function solution(A: number[]) {
  const positiveNums = [...new Set(A.filter((n) => n > 0)).values()];
  let minPosNum = 1;

  if (positiveNums.length === 0) return minPosNum;

  const hasSmallest = positiveNums
    .sort((a, b) => a - b)
    .some((n, i) => {
      if (n !== i + 1) return !!(minPosNum = i + 1);

      return false;
    });

  return hasSmallest ? minPosNum : positiveNums.length + 1;
}

export {};
