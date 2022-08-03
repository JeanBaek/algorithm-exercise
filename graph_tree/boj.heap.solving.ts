// BOJ 11286
const fs = require("fs");
const filePath = "boj.heap.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class MinHeap {
  hp: number[] = [0];
  hash: { [key: string]: boolean } = {};

  enqueue(n: number) {
    console.log("enqueue", { hp: this.hp, hash: this.hash });
    // 똑같은 애가 없을때만 넣어야 함
    if (this.hash[n]) return;

    this.hash[n] = true;
    this.hp.push(n);

    let c = this.hp.length - 1;
    let p = Math.floor(c / 2);

    while (c > 1 && this.hp[c] < this.hp[p]) {
      const temp = this.hp[p];
      this.hp[p] = this.hp[c];
      this.hp[c] = temp;

      c = p;
      p = Math.floor(c / 2);
    }
  }

  dequeue() {
    console.log("dequeue", { hp: this.hp, hash: this.hash });
    if (this.length() <= 1) return 0;

    let deleteNum = this.hp[1];
    this.hash[deleteNum] = false;
    this.hp[1] = this.hp[this.length() - 1];
    this.hp.pop();

    let p = 1;
    let lc = p * 2;
    let rc = p * 2 + 1;
    let m = () => {
      if (this.length() <= rc || this.hp[lc] < this.hp[rc]) return lc;

      return rc;
    };

    while (this.hp[p] > this.hp[lc] || this.hp[p] > this.hp[rc]) {
      const minC = m();
      const temp = this.hp[p];
      this.hp[p] = this.hp[minC];
      this.hp[minC] = temp;

      p = minC;
      lc = p * 2;
      rc = p * 2 + 1;
    }

    return deleteNum;
  }

  length() {
    return this.hp.length;
  }
}

const solving = ([count, ...nums]: string[]) => {
  const minHeap = new MinHeap();
  const result: number[] = [];

  nums.forEach((n) => {
    if (+n === 0) result.push(minHeap.dequeue());
    else minHeap.enqueue(+n);
  });

  return result.join("\n");
};

console.log(solving(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
