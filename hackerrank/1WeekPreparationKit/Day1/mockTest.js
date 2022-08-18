// Result (Click "View Report"): https://www.hackerrank.com/interview/preparation-kits/one-week-preparation-kit/one-week-day-one/challenges

// find the median
function solution(arr) {
  return arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
}
