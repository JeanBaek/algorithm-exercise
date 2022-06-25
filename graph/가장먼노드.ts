// 프로그래머스 [가장 먼 노드]
type Vertex = string | number;

class Graph {
  adjacencyList: { [key: Vertex]: Array<Vertex> } = {};

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: Vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1: Vertex, v2: Vertex) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeVertex(vertex: Vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();

      this.removeEdge(vertex, adjacencyVertex);
    }

    delete this.adjacencyList[vertex];
  }

  removeEdge(v1: Vertex, v2: Vertex) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
}

// const solution = (n: number, vertex: number[][]) => {
//   const graph = new Graph();
//   const queue = [];
//   const visited = new Array(vertex.length).fill(false);

//   vertex.forEach(([v1, v2]) => graph.addEdge(v1, v2));

//   const edgeCount = Object.keys(graph.adjacencyList).reduce((pre, cur) => {
//     pre[cur] = 0;

//     return pre;
//   }, {});

//   function addCount(adjacencyList: Array<Vertex>, parentEdgeCount) {
//     queue.push(...adjacencyList);

//     while (queue.length) {
//       const v = queue.shift();
//       if (v === 1 || visited[v]) break;

//       edgeCount[v] += 1 + parentEdgeCount;
//       visited[v] = true;

//       if (graph.adjacencyList[v])
//         addCount(graph.adjacencyList[v], edgeCount[v]);
//     }
//   }

//   addCount(graph.adjacencyList[1], 0);

//   console.log({ edgeCount });
// };

const solution = (n: number, vertex: number[][]) => {
  return bfs(1, vertex, n);
};

const bfs = (start, arr, end) => {
  const visited = new Array(end + 1).fill(false);
  const edgeCount = new Array(end + 1).fill(0);
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const head = queue.shift();
    const edges = edgeCount[head] + 1;

    for (let node of arr) {
      if (node[0] === head && !visited[node[1]]) {
        queue.push(node[1]);
        visited[node[1]] = true;
        edgeCount[node[1]] = edges;
      } else if (node[1] === head && !visited[node[0]]) {
        queue.push(node[0]);
        visited[node[0]] = true;
        edgeCount[node[0]] = edges;
      }
    }
  }

  const maxEdgeCount = Math.max(...edgeCount);

  return edgeCount.filter((vertex) => vertex === maxEdgeCount).length;
};

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
