const fs = require("fs");
const filename = "boj.11279.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filename).toString().trim().split("\n");

class MaxHeap {
  heap: number[];

  constructor() {
    this.heap = [0];
  }

  enqueue(n: number) {
    this.heap.push(n);
    this.heapifyUp();
  }

  dequeue() {
    if (this.len() < 2) return 0;

    const maxNum = this.heap[1];

    this.heap[1] = this.last();
    this.heap.pop();
    this.heapifyDown();

    return maxNum;
  }

  /**** Helper ****/

  heapifyUp() {
    let childIdx = this.len() - 1;
    let parentIdx = Math.floor(childIdx / 2);

    let child = this.heap[childIdx];
    let parent = this.heap[parentIdx];

    while (child > parent && childIdx > 1) {
      // shift up
      const temp = parent;
      this.heap[parentIdx] = child;
      this.heap[childIdx] = temp;

      // update variables
      childIdx = parentIdx;
      parentIdx = Math.floor(childIdx / 2);

      child = this.heap[childIdx];
      parent = this.heap[parentIdx];
    }
  }

  heapifyDown() {
    let parentIdx = 1;
    let leftChildIdx = parentIdx * 2;
    let rightChildIdx = parentIdx * 2 + 1;
    let biggerChildIdx =
      rightChildIdx >= this.len() ||
      this.heap[leftChildIdx] > this.heap[rightChildIdx]
        ? leftChildIdx
        : rightChildIdx;

    let parent = this.heap[parentIdx];
    let biggerChild = this.heap[biggerChildIdx];

    while (parent < biggerChild && parentIdx < this.len() / 2) {
      // shift down
      const temp = parent;
      this.heap[parentIdx] = biggerChild;
      this.heap[biggerChildIdx] = temp;

      // update variables
      parentIdx = biggerChildIdx;
      leftChildIdx = parentIdx * 2;
      rightChildIdx = parentIdx * 2 + 1;
      biggerChildIdx =
        rightChildIdx >= this.len() ||
        this.heap[leftChildIdx] > this.heap[rightChildIdx]
          ? leftChildIdx
          : rightChildIdx;

      parent = this.heap[parentIdx];
      biggerChild = this.heap[biggerChildIdx];
    }
  }

  /**** Etc ****/

  last() {
    return this.heap[this.len() - 1];
  }

  len() {
    return this.heap.length;
  }
}

function solution([count, ...nums]: string[]) {
  const maxHeap = new MaxHeap();
  const result: number[] = [];

  nums.forEach((n) => {
    if (+n > 0) maxHeap.enqueue(+n);
    else result.push(maxHeap.dequeue());
  });

  return result.join("\n");
}

console.log(solution(input));
export {};
