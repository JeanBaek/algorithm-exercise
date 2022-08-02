class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data === this.data) return;

    data < this.data ? this.insertLeft(data) : this.insertRight(data);
  }

  insertLeft(data) {
    this.left ? this.left.insert(data) : (this.left = new Node(data));
  }

  insertRight(data) {
    this.right ? this.right.insert(data) : (this.right = new Node(data));
  }

  contains(data) {
    if (this.data === data) return true;

    return data < this.data
      ? this.containInLeft(data)
      : this.containsInRight(data);
  }

  containsInLeft(data) {
    return this.left ? this.left.contains(data) : false;
  }

  containsInRight(data) {
    return this.right ? this.right.contains(data) : false;
  }
}

function getBST(nums) {
  let bst = null;

  nums.forEach((n, i) => {
    if (i === 0) return (bst = new Node(n));

    bst.insert(n);
  });

  return bst;
}

console.log(JSON.stringify(getBST([7, 1, 3, 9, 5, 3, 7, 13, 76, 45, 98])));
