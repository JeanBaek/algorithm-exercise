// find the median
function solution(arr) {
  return arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
}
