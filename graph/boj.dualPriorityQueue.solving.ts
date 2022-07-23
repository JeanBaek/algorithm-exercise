// BOJ 7662 이중 우선순위 큐
const fs = require("fs");
const filePath = "./boj.dualPriorityQueue.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class PQueue {
  q: number[] = [0];

  enqueue(n: number) {
    this.q.push(n);

    let c = this.q.length - 1;
    let p = Math.floor(c / 2);
    let temp = 0;

    // O(n logn)
    while (c > 1 && this.q[c] > this.q[p]) {
      temp = this.q[p];
      this.q[p] = this.q[c];
      this.q[c] = temp;

      c = p;
      p = Math.floor(c / 2);
    }
  }

  dequeue(code: "MAX" | "MIN") {
    if (this.length() < 2) return;

    if (code === "MAX") this.deleteMax();
    else this.deleteMin();
  }

  deleteMax() {
    this.q[1] = this.q[this.length() - 1];
    this.q.pop();

    this.heapify();
  }

  deleteMin() {
    //1. for문을 돌면서 2^i 와 2^i+1 사이에 this.length가 있으면 break;
    //2. break 상태의 2^i부터 마지막까지 for loop을 돌면서 가장 작은 요소가 있는 index 기억
    //3. 해당 index에 = this.q[this.length() - 1] 재할당
    //4. this.q.pop();
    //5. this.heapify();

    this.q[this.minIdx()] = this.q[this.length() - 1];
    this.q.pop();
    this.heapify();
  }

  heapify() {
    let p = 1;
    let lc = p * 2;
    let rc = p * 2 + 1;
    let max = () => {
      if (this.length() <= rc || this.q[lc] > this.q[rc]) return lc;

      return rc;
    };

    let maxC = 0;
    let temp = 0;

    // O(n logn)
    while (this.q[p] < this.q[lc] || this.q[p] < this.q[rc]) {
      maxC = max();
      temp = this.q[p];
      this.q[p] = this.q[maxC];
      this.q[maxC] = temp;

      p = maxC;
      lc = p * 2;
      rc = p * 2 + 1;
    }
  }

  max() {
    return this.q[1];
  }

  min() {
    return this.q[this.minIdx()];
  }

  minIdx() {
    // let i = 1;
    // // O(n logn)
    // for (i = 1; i <= Math.sqrt(this.length()); ) {
    //   if (2 ** i > this.length()) break;
    //   if (2 ** i <= this.length() && this.length() <= 2 ** (i + 1)) break;

    //   i++;
    // }

    // let min = 1;
    // // O(n)
    // for (let j = 2 ** i; j < this.length(); j++) {
    //   if (this.q[min] > this.q[j]) min = j;
    // }

    // return min;

    const len = this.length();
    let min = 1;
    // O(n)
    for (let i = len - Math.ceil(Math.sqrt(len / 2)); i < len; i++) {
      if (this.q[min] > this.q[i]) min = i;
    }

    return min;
  }

  length() {
    return this.q.length;
  }
}

const solving = ([count, ...data]: string[]) => {
  const result: string[] = [];

  // O(n^3) loop ^ 2 + split
  for (let i = 0; i < +count; i++) {
    const [len, ...orders] = data;
    const queue = new PQueue();

    for (let j = 0; j < +len; j++) {
      const [code, n] = orders[j].split(" ");

      if (code === "I") queue.enqueue(+n);
      else {
        if (+n > 0) queue.dequeue("MAX");
        else queue.dequeue("MIN");
      }
    }

    if (queue.length() < 2) result.push("EMPTY");
    else result.push(`${queue.max()} ${queue.min()}`);

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
