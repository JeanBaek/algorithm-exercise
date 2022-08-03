export class Node {
  value = null;
  next = null;

  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

export class Queue {
  first = null;
  last = null;
  size = 0;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  shift() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;

    let node = this.first;
    this.first = this.first.next;
    this.size--;

    return node.value;
  }
}
