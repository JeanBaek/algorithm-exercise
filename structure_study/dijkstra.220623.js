class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// NOTE: naive version
class PriorityQueue {
  constructor() {
    // type Values = Array<{ value: string, priority: number }>
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// NOTE: better time complexiry version
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }

//   enqueue(value, priority) {
//     this.values.push(new Node(value, priority));
//     this.bubbleUp();
//   }

//   dequeue() {
//     const min = this.values[0];
//     const end = this.values.pop();

//     if (this.values.length) {
//       this.values[0] = end;
//       this.sinkDown();
//     }
//   }

//   bubbleUp() {
//     let endIndex = this.values.length - 1;
//     const element = this.values[endIndex];

//     while (endIndex) {
//       let parentIndex = Math.floor((endIndex - 1) / 2);
//       let parent = this.values[parentIndex];

//       if (element.priority >= parentIndex.priority) break;

//       this.values[parentIndex] = element;
//       this.values[endIndex] = parent;
//       endIndex = parentIndex;
//     }
//   }
// }

// 가중치 무방향 그래프
class WeightedGraph {
  constructor() {
    // type { [ key: string ]: { node: string, weight: number } }
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1].some((el) => el.node === v2))
      this.adjacencyList[v1].push({ node: v2, weight });
    if (!this.adjacencyList[v2].some((el) => el.node === v1))
      this.adjacencyList[v2].push({ node: v1, weight });
  }

  dijkstra(startingVertex, finishingVertex) {
    const queue = new PriorityQueue();
    // 기준노드로부터 떨어져 있는 가중치 저장
    const distances = Object.keys(this.adjacencyList).reduce((pre, vertex) => {
      const initialWeight = vertex === startingVertex ? 0 : Infinity;

      queue.enqueue(vertex, initialWeight);
      pre[vertex] = initialWeight;

      return pre;
    }, {});
    // 가장 빨리 갈 수 있는 경로 기준으로 이전에 방문한 노드
    const previous = Object.keys(this.adjacencyList).reduce((pre, cur) => {
      pre[cur] = null;
      return pre;
    }, {});
    let smallestNode = null;
    const resultPath = [];

    while (queue.values.length) {
      smallestNode = queue.dequeue().value;

      console.log({
        distances,
        "distances[smallestNode]": distances[smallestNode],
      });

      if (!smallestNode) break;
      else if (smallestNode === finishingVertex) {
        while (previous[smallestNode]) {
          resultPath.push(smallestNode);
          smallestNode = previous[smallestNode];
        }

        break;
      } else if (distances[smallestNode] !== Infinity) {
        for (let adjacencyIndex in this.adjacencyList[smallestNode]) {
          let nextVertex = this.adjacencyList[smallestNode][adjacencyIndex];

          // NOTE: calculate new distance to adjacencyVertex
          let candidate = distances[smallestNode] + nextVertex.weight;

          if (distances[nextVertex.node] > candidate) {
            // NOTE: updating new smallest distance to adjacencyVertex
            distances[nextVertex.node] = candidate;
            // NOTE: updating previous - how we got to adjacencyVertex
            previous[nextVertex.node] = smallestNode;
            // NOTE: enqueue in priority queue with new priority
            queue.enqueue(nextVertex.node, candidate);
          }
        }
      }
    }

    return [smallestNode, ...resultPath.reverse()];
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// console.log({ graph: JSON.stringify(graph) }, graph.adjacencyList.A);
console.log(graph.dijkstra("A", "E"));
