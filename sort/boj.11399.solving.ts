const fs = require("fs");
const filePath = "./boj.11399.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 오늘은 퀵소트 연습~
function solution([headCount, data]: string[]) {
  const arr: number[][] = [];

  data.split(" ").forEach((n, i) => arr.push([i + 1, +n]));
  quickSort(arr);

  const pseudoFib: number[] = [];

  arr.forEach(([m, t], i) => pseudoFib.push(t + (i ? pseudoFib[i - 1] : 0)));

  return pseudoFib.reduce((p, n) => p + n, 0);
}

console.log(solution(input));

export {};

function quickSort(arr: number[][], l: number = 0, r: number = arr.length - 1) {
  if (l < r) {
    const pivot = pivotHelper(arr, l, r);

    quickSort(arr, l, pivot - 1);
    quickSort(arr, pivot + 1, r);
  }

  return arr;
}

function pivotHelper(arr: number[][], start: number, end: number) {
  const pivot = arr[start][1];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i][1]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);

  return swapIdx;
}

function swap(arr: number[][], i: number, j: number) {
  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}
