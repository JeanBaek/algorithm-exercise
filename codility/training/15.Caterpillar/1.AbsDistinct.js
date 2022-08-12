// Test Result: https://app.codility.com/demo/results/trainingX4T35S-EPQ/

function solution(A) {
  const uniqueNums = new Set();

  A.forEach((n) => {
    uniqueNums.add(Math.abs(n));
  });

  return uniqueNums.size;
}
