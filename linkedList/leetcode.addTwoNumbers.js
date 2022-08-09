/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let n1 = "";
  let n2 = "";

  let node1 = l1;
  let node2 = l2;

  while (true) {
    if (!node1 && !node2) break;

    if (node1) {
      n1 = node1.val + n1;
      node1 = node1.next;
    }
    if (node2) {
      n2 = node2.val + n2;
      node2 = node2.next;
    }
  }

  const sumList = `${BigInt(n1) + BigInt(n2)}`.split("");

  return sumList.reduce((p, n) => new ListNode(+n, p), undefined);
};

const inputParams = [
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
  ]
    .reverse()
    .reduce((p, n) => new ListNode(+n, p), undefined),
  [5, 6, 4].reverse().reduce((p, n) => new ListNode(+n, p), undefined),
];

console.log(addTwoNumbers(...inputParams));
