// 무방향
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
    if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);

    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  depthFirstIterative(startingVertex) {
    const result = [];
    const stack = [startingVertex];
    const visited = {};
    let currentVertex = null;

    while (stack.length) {
      currentVertex = stack.pop();
      if (visited[currentVertex]) continue;

      visited[currentVertex] = true;
      result.push(currentVertex);
      stack.push(...this.adjacencyList[currentVertex]);
    }

    return result;
  }

  depthFirstRecursive(startingVertex) {
    const result = [];
    const visited = {};

    this.dfsRecursiveHelper(startingVertex, visited, result);

    return result;
  }

  breadthFirst(startingVertex) {
    const result = [];
    const queue = [startingVertex];
    const visited = {};
    let currentVertex = null;

    while (queue.length) {
      currentVertex = queue.shift();
      if (visited[currentVertex]) continue;

      visited[currentVertex] = true;
      result.push(currentVertex);
      queue.push(...this.adjacencyList[currentVertex]);
    }

    return result;
  }

  dfsRecursiveHelper(vertex, visited, result) {
    if (!vertex || visited[vertex]) return null;

    visited[vertex] = true;
    result.push(vertex);

    this.adjacencyList[vertex].forEach((adjacencyVertex) => {
      this.dfsRecursiveHelper(adjacencyVertex, visited, result);
    });
  }
}

/****
그래프 문제는 항상 비슷하게 출제.
따라서 아래 4개 정도를 고려하면 준비 끝-

1) 어떤 모양의 맵을 만들고
2) BFS/DFS 중 결정하고
3) visited 어떻게 체크할지
4) 전체 배열에 대해 진행 or 특정 점에서만 시작
****/

const solution = (n, edge) => {
  const visited = new Array(n + 1).fill(-1); // 방문했는지 체크하는 배열 => -1: 방문x, 0: 방문o
  const queue = [1]; // bfs를 하기위한 노드
  const adjList = new Array(n + 1).fill(null).map(() => Array()); // 간선 배열
  visited[0] = 0;
  visited[1] = 0;
  for (let i of edge) {
    adjList[i[0]].push(i[1]);
    adjList[i[1]].push(i[0]);
  }
  //모든 노드를 방문할때까지 계속한다.
  while (queue.length > 0) {
    //방문한 노드를 큐에서 뺀다.
    const node = queue.shift();
    //edge를 순회하며 다음 방문할 노드를 찾는다.
    //방문할 노드가 있다면
    if (adjList[node]) {
      adjList[node].forEach((n) => {
        //이미 방문했던 노드라면 엣지를 그냥 skip한다.
        if (visited[n] === -1) {
          //방문하지 않았던 노드라면 노드를 방문해준다.
          queue.push(n);
          visited[n] = visited[node] + 1;
        }
      });
    }
  }

  const maxNum = Math.max(...visited);
  return visited.filter((e) => e === maxNum).length;
};

// 깊이우선탐색 구현
const graphData = {
  A: ["B", "B-", "C"],
  B: ["A", "D"],
  "B-": ["A"],
  C: ["A", "E", "E-", "E--"],
  D: ["B", "E", "F"],
  E: ["C", "D", "F"],
  "E-": ["C"],
  "E--": ["C"],
  F: ["D", "E"],
};

const graph = new Graph();
Object.keys(graphData).forEach((key) => graph.addVertex(key));
Object.entries(graphData).forEach(([key, value]) =>
  value.forEach((adjacencyVertex) => graph.addEdge(key, adjacencyVertex))
);

// console.log(graph.depthFirstRecursive("A"));
// console.log(graph.depthFirstIterative("A"));
console.log(graph.breadthFirst("A"));
