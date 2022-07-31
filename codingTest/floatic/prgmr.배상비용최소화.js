// 최대 우선순위 큐

class MaxHeap {
  constructor() {
    this.hp = [0];
  }

  /**** Default Functions ****/

  enqueue(n) {
    this.hp.push(n);
    this.heapifyUp();
  }

  dequeue() {
    const max = this.top();
    this.hp[1] = this.last();
    this.hp.pop();

    this.heapifyDown();

    return max;
  }

  reduceMax() {
    const max = this.dequeue();
    if (max > 0) this.enqueue(max - 1);
  }

  heapifyUp() {
    let childIdx = this.length() - 1;
    let parentIdx = Math.floor(childIdx / 2);

    let childItem = this.hp[childIdx];
    let parentItem = this.hp[parentIdx];

    while (childIdx > 1 && childItem > parentItem) {
      // Shift Up
      this.hp[childIdx] = parentItem;
      this.hp[parentIdx] = childItem;

      // 기준 데이터 업데이트
      childIdx = parentIdx;
      parentIdx = Math.floor(childIdx / 2);

      childItem = this.hp[childIdx];
      parentItem = this.hp[parentIdx];
    }
  }

  heapifyDown() {
    let parentIdx = 1;
    let leftChildIdx = parentIdx * 2;
    let rightChildIdx = parentIdx * 2 + 1;

    let parentItem = this.hp[parentIdx];
    let leftChildItem = this.hp[leftChildIdx];
    let rightChildItem = this.hp[rightChildIdx];

    let targetChildIdx =
      leftChildItem < rightChildItem ? rightChildIdx : leftChildIdx;
    let targetChildItem = this.hp[targetChildIdx];

    while (leftChildIdx < this.length() && parentItem < targetChildItem) {
      // Shift Down
      this.hp[parentIdx] = targetChildItem;
      this.hp[targetChildIdx] = parentItem;

      // 기준 데이터 업데이트
      parentIdx = targetChildIdx;
      leftChildIdx = parentIdx * 2;
      rightChildIdx = parentIdx * 2 + 1;

      parentItem = this.hp[parentIdx];
      leftChildItem = this.hp[leftChildIdx];
      rightChildItem = this.hp[rightChildIdx];

      targetChildIdx =
        leftChildItem > rightChildItem ? leftChildIdx : rightChildIdx;
      targetChildItem = this.hp[targetChildIdx];
    }
  }

  /**** Helpers ****/

  top() {
    return this.hp[1];
  }

  last() {
    return this.hp[this.length() - 1];
  }

  heap() {
    return this.hp;
  }

  length() {
    return this.hp.length;
  }
}

function solution(N, works) {
  // 1. maxHeap에 모두 enqueue();
  const maxHeap = new MaxHeap();

  works.forEach((w) => maxHeap.enqueue(w));

  // 2. N번 돌면서 maxHeap.reduceMax();
  for (let i = 0; i < N; i++) maxHeap.reduceMax();

  // 3. maxHeap.heap() 꺼내서 result += ** 2, 4. result 반환
  return maxHeap.heap().reduce((p, n, i) => {
    if (i) p += n ** 2;

    return p;
  }, 0);
}
