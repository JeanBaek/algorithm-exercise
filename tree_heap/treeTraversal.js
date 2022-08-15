class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.left = null;
  }

  setValue(value) {
    this.value = value;
  }

  setLeft(node) {
    this.left = node;
  }

  setRight(node) {
    this.right = node;
  }

  preOrder(node, list = []) {
    list.push(node);
    if (node.left) this.preOrder(node.left, list);
    if (node.right) this.preOrder(node.right, list);

    return list;
  }

  inOrder(node, list = []) {
    if (node.left) this.inOrder(node.left, list);
    list.push(node);
    if (node.right) this.inOrder(node.right, list);

    return list;
  }

  postOrder(node, list = []) {
    if (node.left) this.postOrder(node.left, list);
    if (node.right) this.postOrder(node.right, list);
    list.push(node);

    return list;
  }

  levelOrder(node) {
    const list = [];
    const queue = [node];

    while (queue.length) {
      const current = queue.shift();
      list.push(current);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return list;
  }
}
