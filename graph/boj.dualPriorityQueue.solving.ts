// BOJ 7662 이중 우선순위 큐
const fs = require("fs");
const filePath = "./boj.dualPriorityQueue.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class DualQueue {
  heap: number[];
  compare: (p: number, c: number) => boolean;

  constructor(compare: (p: number, c: number) => boolean) {
    this.heap = [0];
    this.compare = compare;
  }

  /**** Default functions ****/

  enqueue(n: number) {
    this.heap.push(n);

    if (n === 97 && this.compare(2, 1)) console.log("I 97 1", this.heap, n);

    this.heapifyUp();
    if (n === 97 && this.compare(2, 1)) console.log("I 97 2", this.heap, n);
  }

  dequeue() {
    if (this.empty()) return;

    const deleteValue = this.heap[1];

    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    if (this.length() > 3) this.heapifyDown();

    return deleteValue;
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

    while (lc < this.length() && this.compare(targetCItem, pItem)) {
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

  /**** Helper functions ****/

  top() {
    return this.heap[1];
  }

  empty() {
    return this.length() < 2;
  }

  length() {
    return this.heap.length;
  }
}

const solving = ([count, ...data]: string[]) => {
  const result: string[] = [];

  // O(n^3) loop ^ 2 + split
  for (let i = 0; i < +count; i++) {
    const [len, ...orders] = data;
    const maxHeap = new DualQueue((p, c) => p > c);
    const minHeap = new DualQueue((p, c) => p < c);
    const valid = {};

    for (let j = 0; j < +len; j++) {
      const [code, n] = orders[j].split(" ");
      console.log({
        "[code, n]": [code, n],
        maxHeap: maxHeap.heap,
        minHeap: minHeap.heap,
        valid,
      });

      if (code === "I") {
        maxHeap.enqueue(+n);
        minHeap.enqueue(+n);

        valid[n] = (valid[n] || 0) + 1;
      } else {
        if (+n > 0) {
          while (!maxHeap.empty()) {
            const value = maxHeap.dequeue();
            console.log("maxHeap v", value);

            if (valid[value]) {
              valid[value]--;
              break;
            }
          }
        } else {
          while (!minHeap.empty()) {
            const value = minHeap.dequeue();
            console.log("minHeap v", value);

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
    console.log({ maxHeap: maxHeap.heap, minHeap: minHeap.heap });

    if (maxHeap.empty() && minHeap.empty()) result.push("EMPTY");
    else result.push(`${maxHeap.top()} ${minHeap.top()}`);

    data = orders.slice(+len);
  }

  return result.join("\n");
};

console.log(solving(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
