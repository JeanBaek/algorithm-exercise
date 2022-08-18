function pivotSwap(arr: number[], start: number, end: number) {
  // first element를 pivot으로 잡았음

  const pivot = arr[start];
  let swapIdx = start;
  console.log({ arr, pivot, swapIdx });

  for (let i = start + 1; i <= end; i++) {
    console.log({ pivot, swapIdx, "arr[i]": arr[i] });
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
    let pivotIdx = pivotSwap(arr, l, r);

    quickSort(arr, l, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, r);
  }

  return arr;
}

const arr = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(quickSort(arr));

function swap(arr: number[], i: number, j: number) {
  console.log("SWAP", { "arr[i]": arr[i], "arr[j]": arr[j] });
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export {};
