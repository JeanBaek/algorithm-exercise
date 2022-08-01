function pivot(arr: number[], start: number, end: number) {
  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr: number[], l: number = 0, r: number = arr.length - 1) {
  // Should move the elements IN PLACE
  if (l < r) {
    let pivotIdx = pivot(arr, l, r);

    quickSort(arr, l, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, r);
  }

  return arr;
}

const arr = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(quickSort(arr));

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export {};
