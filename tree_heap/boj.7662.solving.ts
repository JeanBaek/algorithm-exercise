// BOJ 7662 이중 우선순위 큐
const fs = require("fs");
const filePath = "./boj.7662.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

type CompareFunc = (parent: number, child: number) => boolean;

class PriorityQueue {
  heap: number[];
  compare: CompareFunc;

  constructor(compare: CompareFunc) {
    this.heap = [0];
    this.compare = compare;
  }

  enqueue(n: number) {
    this.heap.push(n);

    this.heapifyUp();
  }

  dequeue() {
    const max = this.heap[1];

    this.heap[1] = this.last();
    this.heap.pop();
    this.heapifyDown();

    return max;
  }

  heapifyUp() {
    let childIdx = this.len() - 1;
    let parentIdx = Math.floor(childIdx / 2);

    let child = this.heap[childIdx];
    let parent = this.heap[parentIdx];

    // FIXME: parent === child 경우는 어케 처리하지
    while (!this.compare(parent, child) && childIdx > 1) {
      // shift up
      this.heap[parentIdx] = child;
      this.heap[childIdx] = parent;

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
      this.compare(this.heap[leftChildIdx], this.heap[rightChildIdx])
        ? leftChildIdx
        : rightChildIdx;

    let parent = this.heap[parentIdx];
    let biggerChild = this.heap[biggerChildIdx];

    while (parentIdx < this.len() / 2 && !this.compare(parent, biggerChild)) {
      // shift down
      this.heap[parentIdx] = biggerChild;
      this.heap[biggerChildIdx] = parent;

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

  /**** Helper ****/

  top() {
    return this.heap[1];
  }

  last() {
    return this.heap[this.len() - 1];
  }

  len() {
    return this.heap.length;
  }

  isEmpty() {
    return this.len() < 2;
  }
}

function solution([caseCount, ...data]: string[]) {
  let i = 0;
  for (i = i; i < data.length; ) {
    const maxHeap = new PriorityQueue((parent, child) => parent > child);
    const minHeap = new PriorityQueue((parent, child) => parent < child);

    const values: { [key: string]: number } = {};

    for (let j = 1; j <= +data[i]; j++) {
      const [code, value] = data[i + j].split(" ");

      if (code === "I") {
        maxHeap.enqueue(+value);
        minHeap.enqueue(+value);
        values[value] = (values[value] || 0) + 1;
      } else if (code === "D") {
        if (value === "1") {
          // 최대값 삭제
          while (!maxHeap.isEmpty()) {
            const maxValue = maxHeap.dequeue();

            if (values[maxValue]) {
              values[maxValue]--;
              break;
            }
          }
        } else if (value === "-1") {
          // 최소값 삭제
          while (!minHeap.isEmpty()) {
            const minValue = minHeap.dequeue();

            if (values[minValue]) {
              values[minValue]--;
              break;
            }
          }
        }
      }
    }

    while (!maxHeap.isEmpty() && !values[maxHeap.top()]) maxHeap.dequeue();

    while (!minHeap.isEmpty() && !values[minHeap.top()]) minHeap.dequeue();

    if (maxHeap.isEmpty() && minHeap.isEmpty()) {
      console.log("EMPTY");
    } else {
      console.log(`${maxHeap.top()} ${minHeap.top()}`);
    }

    i += +data[i] + 1;
  }
}

solution(input);

export {};
