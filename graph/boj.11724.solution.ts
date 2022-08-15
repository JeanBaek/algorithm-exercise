const fs = require("fs");
const filePath = "boj.11724.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution([meta, ...connetions]: string[]) {
  const [vCount, eCount] = meta.split(" ");
  const graph: Map<string, string[]> = new Map();

  connetions.forEach((c) => {
    const [a, b] = c.split(" ");

    if (graph.has(a)) graph.get(a)?.push(b);
    else graph.set(a, [b]);

    if (graph.has(b)) graph.get(b)?.push(a);
    else graph.set(b, [a]);
  });

  const queue: string[] = [graph.keys().next().value];
  let connectedComponent = +vCount - graph.size + +!!graph.size;

  while (graph.size) {
    console.log({ graph, queue, connectedComponent });
    if (queue.length === 0) {
      connectedComponent++;
      queue.push(graph.keys().next().value);
    }

    const curr = queue.shift() as string;
    queue.push(...(graph.get(curr) || []).filter((v) => graph.has(v)));
    graph.delete(curr);
  }

  return connectedComponent;
}

console.log(solution(input));

export {};
