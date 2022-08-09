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
var addTwoNumbers = function (l1, l2) {
  let n1 = "";
  let n2 = "";

  let node1 = l1;
  let node2 = l2;

  console.log(new ListNode(2, 1));

  while (true) {
    if (node1 === null && node2 === null) break;

    if (node1 && node1.val !== 0) n1 = node1.val + n1;
    if (node2 && node2.val !== 0) n2 = node2.val + n2;

    if (node1 !== null) node1 = node1.next;
    if (node2 !== null) node2 = node2.next;
  }

  const sumList = `${+n1 + +n2}`.split("");

  return sumList.reduce((p, n, i, arr) => {
    console.log({ p, n, i, arr });
    return new ListNode(+n, p);
  });
};
