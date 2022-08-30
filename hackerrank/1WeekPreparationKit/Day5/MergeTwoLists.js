const SinglyLinkedListNode = class {
	constructor(nodeData) {
		this.data = nodeData;
		this.next = null;
	}
};

const SinglyLinkedList = class {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	insertNode(nodeData) {
		const node = new SinglyLinkedListNode(nodeData);

		if (this.head === null) {
			this.head = node;
		} else {
			this.tail.next = node;
		}

		this.tail = node;
	}
};

function printSinglyLinkedList(node, sep, ws) {
	console.log({ node });
	while (node != null) {
		console.log(node.data);

		node = node.next;

		if (node != null) {
			console.log("");
		}
	}
}

// TODO: Retry and debug after 8/29 // Too difficult to debug in iPad....
// ListNode: Class {data: number, next: ListNode}

function mergeLists(head1, head2) {
	// console.log(head1, head2)
	// 0. make a new ListNode
	// 1. compare two heads
	// 2. add smaller node to a new ListNode
	// 3. if one head value is null, add rest of another one to a new ListNode

	const mergeList = new SinglyLinkedList();
	mergeList.mergeList = function (node) {
		if (this.head === null) {
			this.head = node;
		} else {
			this.tail.next = node;
		}

		this.tail = node;
	};

	let node1 = head1;
	let node2 = head2;

	while (node1 || node2) {
		if (node1 === null) {
			mergeList.mergeList(node2);
			node2 = null;
		} else if (node2 === null) {
			mergeList.mergeList(node1);
			node1 = null;
		}

		if (node1?.data < node2?.data) {
			mergeList.insertNode(node1.data);
			node1 = node1.next;
		} else if (node1?.data >= node2?.data) {
			mergeList.insertNode(node2.data);
			node2 = node2.next;
		}
	}

	const returnlist = new SinglyLinkedList();

	let node = mergeList.head;

	while (node) {
		returnlist.insertNode(node.data);
		node = node.next;
	}

	return returnlist.head;
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();

// [1, 3, 7].forEach((item) => list1.insertNode(item));
// [1, 2].forEach((item) => list2.insertNode(item));

[1, 2, 3].forEach((item) => list1.insertNode(item));
[3, 4].forEach((item) => list2.insertNode(item));

printSinglyLinkedList(mergeLists(list1.head, list2.head));
