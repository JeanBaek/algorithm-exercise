// Test Result: https://app.codility.com/c/feedback/demoZ8EW5M-Y68/

// 와.. 이전에 풀었던 건데도 (/codility/training/4.countingElements/4.MissingInteger) 코테라고 생각하고 풀려니 잘 안풀리네

// MissingInteger
function solution(A) {
  const uniqueNums = [...new Set(A.filter(positive))].sort(increase);

  const len = uniqueNums.length;
  let smallestPositiveNum = 1;

  if (len === 0) return smallestPositiveNum;

  const isNotConsecutive = uniqueNums.some((n, i, arr) => {
    if (i < len - 1 && n + 1 !== arr[i + 1]) {
      smallestPositiveNum = n + 1;
      return true;
    }

    return false;
  });

  return isNotConsecutive ? smallestPositiveNum : uniqueNums[len - 1] + 1;
}

function positive(n) {
  return n > 0;
}

function increase(a, b) {
  return a - b;
}

console.log(solution([1, 2, 3]));
console.log(solution([-2, -3, -17, 0]));
console.log(solution([0]));
console.log(solution([1]));
console.log(solution([-1]));
