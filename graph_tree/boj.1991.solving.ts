const fs = require("fs");
const filePath = "./boj.1991.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

type Value = string;

class Tree {
  value: Value;
  left: Tree | null;
  right: Tree | null;

  constructor(value: Value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  setValue(value: Value) {
    this.value = value;
  }

  setLeft(node: Tree) {
    this.left = node;
  }

  setRight(node: Tree) {
    this.right = node;
  }

  preOrder(node: Tree, list: Value[] = []) {
    list.push(node.value);
    if (node.left) this.preOrder(node.left, list);
    if (node.right) this.preOrder(node.right, list);

    return list;
  }

  inOrder(node: Tree, list: Value[] = []) {
    if (node.left) this.inOrder(node.left, list);
    list.push(node.value);
    if (node.right) this.inOrder(node.right, list);

    return list;
  }

  postOrder(node: Tree, list: Value[] = []) {
    if (node.left) this.postOrder(node.left, list);
    if (node.right) this.postOrder(node.right, list);
    list.push(node.value);

    return list;
  }

  levelOrder(node: Tree) {
    const list: Value[] = [];
    const queue = [node];

    while (queue.length) {
      const current = queue.shift();
      list.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return list;
  }
}

function solution([len, ...data]: string[]) {
  const nodeMap: Map<string, Tree> = new Map();

  data.forEach((d) => {
    const [c, l, r] = d.split(" ");

    if (!nodeMap.has(c)) {
      const node = new Tree(c);
      nodeMap.set(c, node);
    }

    const current = nodeMap.get(c);

    if (l !== ".") {
      const node = new Tree(l);
      current.setLeft(node);
      nodeMap.set(l, node);
    }
    if (r !== ".") {
      const node = new Tree(r);
      current.setRight(node);
      nodeMap.set(r, node);
    }
  });

  const root = nodeMap.get("A");

  return `${root.preOrder(root).join("")}
${root.inOrder(root).join("")}
${root.postOrder(root).join("")}`;
}

console.log(solution(input));

export {};
