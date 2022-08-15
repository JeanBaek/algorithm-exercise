const fs = require("fs");
const filePath = "./boj.15805.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

type Data = number | null;

class Tree {
  data: Data;
  parent: Data;
  children: Tree[];

  constructor(data: Data, parent: Data = null) {
    this.data = data;
    this.parent = parent;
    this.children = [];
  }

  insert(data: Data) {
    const childTree = new Tree(data, this.data);

    this.children.push(childTree);

    return childTree;
  }
}

function solving([len, data]: string[]) {
  const paths = data.split(" ").map(Number);

  let maxNum = paths[0];
  const tree = new Tree(maxNum);
  const map = new Map([[maxNum, tree]]);

  paths.forEach((n, i) => {
    if (i === +len - 1) return;

    const nextNum = paths[i + 1];
    const next = map.get(nextNum);
    const current = map.get(n);

    if (next?.data !== current.parent) {
      map.set(nextNum, current.insert(nextNum));
    }

    if (maxNum < n) maxNum = n;
  });

  const result: number[] = [];

  for (let i = 0; i <= maxNum; i++) {
    const tree = map.get(i);

    result.push(tree.parent ?? -1);
  }

  return `${maxNum + 1}\n${result.join(" ")}`;
}

console.log(solving(input));

export {};
