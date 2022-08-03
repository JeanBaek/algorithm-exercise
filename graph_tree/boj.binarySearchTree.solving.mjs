const fs = require("fs");
const filePath = "./boj.binarySearchTree.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this._root) {
      this._root = newNode;
      return this;
    }

    let current = this._root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  root() {
    return this._root;
  }
}

const postOrder = (node) => {
  node.left && postOrder(node.left);
  node.right && postOrder(node.right);

  console.log(node.value);
};

const solution = (preOrder) => {
  // 순서
  // 1. 전위 순회 결과로 BST 인스턴스 생성
  // 2. BST 인스턴스로 후위 순회 진행
  // 3. 결과 반환

  const tree = new BinarySearchTree();

  for (let i = 0; i < preOrder.length; i++) {
    tree.insert(+preOrder[i]);
  }

  postOrder(tree.root());
};

solution(input);
