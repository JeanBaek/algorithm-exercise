class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex];
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push(v2);
    }

    if (!this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2].push(v1);
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);

    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  bfsIterative(v) {
    const result = [];
    const queue = [v];
    const visited = {};
    let current = null;

    while (queue.length) {
      current = queue.shift();

      if (visited[current]) continue;

      visited[current] = true;
      result.push(current);
      queue.push(...this.adjacencyList[current]);
    }

    return result;
  }

  dfsIterative(vertex) {
    const result = [];
    const stack = [vertex];
    const visited = {};
    let current = null;

    while (stack.length) {
      current = stack.pop();

      if (visited[current]) continue;

      visited[current] = true;
      result.push(current);
      stack.push(...this.adjacencyList[current]);
    }

    return result;
  }

  dfsRecursive(vertex, result = [], visited = {}) {
    if (vertex || !visited[vertex]) {
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((v) => {
        this.dfsRecursive(v, result, visited);
      });
    }

    return result;
  }
}

/****
 그래프 문제는 항상 비슷하게 출제.
 따라서 아래 3개 정도를 고려하면 준비 끝~
 1) Matrix/List 중 맵을 만들고
 2) Bfs/Dfs 중 결정하고
 3) 전체 배열에 대해 진행 or 특정 점에서 시작
 
 나타내는 방식은 2가지
 1) 인접행렬 Adjacency Matrix
 2) 인접리스트 Adjacency List
 ****/
