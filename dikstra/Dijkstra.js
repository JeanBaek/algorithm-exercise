// !! 다익스트라 개념은 이해되는데, 로직은 아직 이해 안됨. 한 달 뒤에 다시 볼 예정
// 가중그래프여야 dijkstra 가능
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v];
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  dijkstra(start, finish) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = []; // return at end
    let smallest;

    // build up initial state
    for (const v in this.adjacencyList) {
      if (v === start) {
        distances[v] = 0;
        queue.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        queue.enqueue(v, Infinity);
      }

      previous[v] = null;
    }

    // as long as there is something to visit
    while (queue.list.length) {
      smallest = nodes.dequeue();

      if (smallest === finish) {
        // WE ARE DONE
        // Build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let nextIdx in this.adjacencyList[smallest]) {
          let next = this.adjacencyList[smallest][nextIdx];
          let candidate = distances[smallest] + next.weight;
          let nextNode = next.node;

          if (candidate < distances[nextNode]) {
            distances[nextNode] = candidate;
            // 여기서부터 로직 다시 짜기
          }
        }
      }
    }
  }
}

class PriorityQueue {
  // 최소경로 탐색용이니 최소힙으로 구현함
  constructor() {
    this.list = [0];
  }

  enqueue(v) {
    this.list.push(v);
    this.heapifyUp();
  }

  dequeue() {
    const min = this.list[1];
    this.list[1] = this.list[this.list.length - 1];
    this.list.pop();

    this.heapifyDown();

    return min;
  }

  heapifyUp() {
    let c = this.values.length - 1;
    let p = Math.floor(c / 2);

    while (c > 1 && this.list[c] < this.list[p]) {
      const temp = this.list[c];
      this.list[c] = this.list[p];
      this.list[p] = temp;

      c = p;
      p = Math.floor(c / 2);
    }
  }

  heapifyDown() {
    let p = 1;
    let lc = p * 2;
    let rc = p * 2 + 1;
    let maxc = this.list[lc] < this.list[rc] ? rc : lc;

    while (lc < this.list.length && this.list[p] > this.list[maxc]) {
      // shift down
      const temp = this.list[p];
      this.list[p] = this.list[maxc];
      this.list[maxc] = temp;

      // 기준 데이터 업데이트
      p = maxc;
      lc = p * 2;
      rc = p * 2 + 1;
      maxc = this.list[lc] < this.list[rc] ? rc : lc;
    }
  }
}
