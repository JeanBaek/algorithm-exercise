// Test Result: https://app.codility.com/demo/results/trainingF9BJ23-PYF/

function solution(A: number[]) {
  A.sort((a, b) => a - b);
  const len = A.length;
  const last = len - 1;

  if (len === 3) return multiplyBy(A[0], A[1], A[2]);

  // 모든 수가 음수거나 양수면 가장 위에서 3개 곱

  if (A[last] <= 0 || 0 <= A[0])
    return multiplyBy(A[last], A[last - 1], A[last - 2]);

  // 가장 아래 숫자 2개가 음수이고, 가장 위에서 -1, -2 인덱스에 있는 숫자 2개가 음수 혹은 양수면

  if (isAllNegative([A[0], A[1]])) {
    if (
      isAllNegative([A[last - 1], A[last - 2]]) ||
      isAllPositive([A[last - 1], A[last - 2]])
    ) {
      // 각각의 합의 절대값 비교 => return 절대값 더 큰 수 * 가장 큰수

      if (Math.abs(A[0] + A[1]) > Math.abs(A[last - 1] + A[last - 2])) {
        return multiplyBy(A[0], A[1], A[last]);
      } else {
        return multiplyBy(A[last], A[last - 1], A[last - 2]);
      }
    } else {
      return multiplyBy(A[0], A[1], A[last]);
    }
  }

  // 아니면 가장 위 숫자 3개 곱
  return multiplyBy(A[last], A[last - 1], A[last - 2]);
}

function multiplyBy(a: number, b: number, c: number) {
  return a * b * c;
}

function isAllNegative(nums: number[]) {
  return nums.every(isNegative);
}

function isAllPositive(nums: number[]) {
  return nums.every(isPositive);
}

function isPositive(n: number) {
  return Math.sign(n) === 1;
}

function isNegative(n: number) {
  return Math.sign(n) === -1;
}

export {};

// console.log(solution([-3, -2, -1, -4, -5])); // -6
// console.log(solution([3, 2, 1, 1, 2])); // 12
// console.log(solution([-100, -99, 1])); // 9900
// console.log(solution([-10000, 0, 1, -999])); // 9990000
// console.log(solution([-10000, 0, -20, -888])); // 0
// console.log(solution([-99, -98, -97, 0])); // 0

console.log(solution([-99, -98, -96, -95])); // -893760
console.log(solution([0, 1, 2, 3])); // 6
console.log(solution([-2, -1, 0, 1, 2])); // 4
console.log(solution([-2, -1, 1, 10])); // 20
console.log(solution([-2, -1, 1, 8, 9, 10])); // 720
console.log(solution([-3, -2, -1, 9, 10])); // 60
console.log(solution([-4, -3, -2, -1, 10])); // 120
console.log(solution([-9, 0, 1, 2])); // 0
