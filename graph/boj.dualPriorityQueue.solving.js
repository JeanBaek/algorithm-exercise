// BOJ 7662 이중 우선순위 큐
const fs = require("fs");
const filePath = "./boj.dualPriorityQueue.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Priority_Queue {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  empty() {
    return this.heap.length === 0;
  }

  top() {
    return this.heap[0];
  }

  push(item) {
    this.heap.push(item);

    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    const currentItem = this.heap[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentItem = this.heap[parentIndex];

      if (this.compare(parentItem, currentItem)) break;

      // shift up
      this.heap[currentIndex] = parentItem;
      currentIndex = parentIndex;
    }

    this.heap[currentIndex] = currentItem;
  }

  pop() {
    const last = this.heap.length - 1;
    this.heap[0] = this.heap[last];
    this.heap.pop();

    if (this.heap.length > 0) {
      this.heapifyDown();
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    const currentItem = this.heap[currentIndex];

    while (currentIndex < this.heap.length) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;

      if (leftChildIndex >= this.heap.length) break;

      const leftChildItem = this.heap[leftChildIndex];
      const rightChildItem =
        rightChildIndex < this.heap.length ? this.heap[rightChildIndex] : null;

      const bestIndex =
        rightChildItem !== null && this.compare(rightChildItem, leftChildItem)
          ? rightChildIndex
          : leftChildIndex;
      const bestItem = this.heap[bestIndex];

      if (this.compare(currentItem, bestItem)) break;

      // down
      this.heap[currentIndex] = bestItem;
      currentIndex = bestIndex;
    }

    this.heap[currentIndex] = currentItem;
  }
}

// 문제 풀이
let cursor = 0;
const t = +input[cursor++];

const log = [];
for (let i = 0; i < t; i++) {
  const k = +input[cursor++];
  const maxHeap = new Priority_Queue((a, b) => a > b);
  const minHeap = new Priority_Queue((a, b) => a < b); // 이 안에서 max, min 힙 구현해야겠음
  const valid = {};

  for (let j = 0; j < k; j++) {
    const [op, num] = input[cursor++].split(" ");

    if (op === "I") {
      minHeap.push(+num);
      maxHeap.push(+num);

      if (valid[+num]) {
        valid[+num]++;
      } else {
        valid[+num] = 1;
      }
    } else if (+num === 1) {
      while (!maxHeap.empty()) {
        const item = maxHeap.top();
        maxHeap.pop();

        if (valid[item] > 0) {
          valid[item]--;
          break;
        }
      }
    } else if (+num === -1) {
      while (!minHeap.empty()) {
        const item = minHeap.top();
        minHeap.pop();

        if (valid[item] > 0) {
          valid[item]--;
          break;
        }
      }
    }
  }

  while (!maxHeap.empty() && valid[maxHeap.top()] === 0) {
    maxHeap.pop();
  }

  while (!minHeap.empty() && valid[minHeap.top()] === 0) {
    minHeap.pop();
  }

  if (minHeap.empty() && maxHeap.empty()) {
    log.push("EMPTY");
  } else {
    log.push(`${maxHeap.top()} ${minHeap.top()}`);
  }
}

console.log(log.join("\n"));

/*** 여러번 실패한 내 시도...
class DualQueue {
  heap: number[];
  compare: (p: number, c: number) => boolean;

  constructor(compare: (p: number, c: number) => boolean) {
    this.heap = [0];
    this.compare = compare;
  }

  // Default functions

  enqueue(n: number) {
    this.heap.push(n);

    // if (n === 97 && this.compare(2, 1)) console.log("I 97 1", this.heap, n);

    this.heapifyUp();
    // if (n === 97 && this.compare(2, 1)) console.log("I 97 2", this.heap, n);
  }

  dequeue() {
    if (this.empty()) return;

    // const deleteValue = this.heap[1];

    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    if (this.heap.length > 3) this.heapifyDown();

    // return deleteValue;
  }

  heapifyUp() {
    // child, parent
    let c = this.heap.length - 1;
    let p = Math.floor(c / 2);

    let cItem = this.heap[c];
    let pItem = this.heap[p];

    // O(n logn)
    while (c > 1 && this.compare(cItem, pItem)) {
      // shift up
      this.heap[c] = pItem;
      this.heap[p] = cItem;

      // 기준 데이터 업데이트
      c = p; // 2
      p = Math.floor(c / 2);

      cItem = this.heap[c];
      pItem = this.heap[p];
    }
  }

  heapifyDown() {
    // parent, leftChild, rightChild
    let p = 1;
    let lc = p * 2;
    let rc = p * 2 + 1;

    let pItem = this.heap[p];
    let lcItem = this.heap[lc];
    let rcItem = this.heap[rc];

    let targetC = this.compare(rcItem, lcItem) ? rc : lc;
    let targetCItem = this.heap[targetC];

    while (lc < this.heap.length && this.compare(targetCItem, pItem)) {
      // shift down
      this.heap[p] = targetCItem;

      // 기준 데이터 업데이트
      p = targetC;
      lc = p * 2;
      rc = p * 2 + 1;

      pItem = this.heap[p];
      lcItem = this.heap[lc];
      rcItem = this.heap[rc];

      targetC = this.compare(rcItem, lcItem) ? rc : lc;
      targetCItem = this.heap[targetC];
    }
  }

  // Helper functions 

  top() {
    return this.heap[1];
  }

  empty() {
    return this.heap.length < 2;
  }
}
let [count, ...data] = input;
// const solving = ([count, ...data]: string[]) => {
const result: string[] = [];

// O(n^3) loop ^ 2 + split
for (let i = 0; i < +count; i++) {
  const [len, ...orders] = data;
  const maxHeap = new DualQueue((p, c) => p > c);
  const minHeap = new DualQueue((p, c) => p < c);
  const valid = {};

  for (let j = 0; j < +len; j++) {
    const [code, n] = orders[j].split(" ");
    // console.log({
    //   "[code, n]": [code, n],
    //   maxHeap: maxHeap.heap,
    //   minHeap: minHeap.heap,
    //   valid,
    // });

    if (code === "I") {
      maxHeap.enqueue(+n);
      minHeap.enqueue(+n);

      valid[n] = (valid[n] || 0) + 1;
    } else {
      if (+n > 0) {
        while (!maxHeap.empty()) {
          const value = maxHeap.top();
          maxHeap.dequeue();
          // console.log("maxHeap v", value);

          if (valid[value]) {
            valid[value]--;
            break;
          }
        }
      } else {
        while (!minHeap.empty()) {
          const value = minHeap.top();
          minHeap.dequeue();
          // console.log("minHeap v", value);

          if (valid[value]) {
            valid[value]--;
            break;
          }
        }
      }
    }
  }

  while (!maxHeap.empty() && !valid[maxHeap.top()]) maxHeap.dequeue();

  while (!minHeap.empty() && !valid[minHeap.top()]) minHeap.dequeue();
  // console.log({ maxHeap: maxHeap.heap, minHeap: minHeap.heap });

  if (maxHeap.empty() && minHeap.empty()) result.push("EMPTY");
  else result.push(`${maxHeap.top()} ${minHeap.top()}`);

  data = orders.slice(+len); // 얘 바꿔보자 cursor 둬서 slice 안 쓰도록 
}

console.log(result.join("\n"));
// };

// console.log(solving(input));
***/
/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
// export {};
