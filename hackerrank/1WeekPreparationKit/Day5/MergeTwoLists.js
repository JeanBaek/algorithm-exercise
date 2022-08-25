// TODO: Retry and debug after 8/29 // Too difficult to debug in iPad....
// ListNode: Class {data: number, next: ListNode}

function mergeLists(head1, head2) {
    // console.log(head1, head2)
    // 0. make a new ListNode
    // 1. compare two heads
    // 2. add smaller node to a new ListNode
    // 3. if one head value is null, add rest of another one to a new ListNode
    
    const mergeList = new SinglyLinkedList();
    
    let node1 = head1;
    let node2 = head2;
    
    while (node1 && node2) {
        console.log({node1, node2})
        if (node1.data < node2.data) {
            mergeList.insertNode(node1.data);
            node1 = node1.next;
        } else if (node1.data >= node2.data) {
            mergeList.insertNode(node2.data);
            node2 = node2.next;
        } 
        
        if (node1 === null) {
            mergeList.mergeList(node2);
            node2 = null;
        } else if (node2 === null) {
            mergeList.mergeList(node1);
            node1 = null;
        }
    }
    
    const returnlist = [];
    
    let node = mergeList.head;
    
    while(node) {
        returnlist.push(node.data);
        node = node.next;
    }
    
    console.log({returnlist});
    
    return mergeList;
}

class SinglyLinkedListNode {
    constructor(item) {
        this.data = item;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; // SinglyLinkedListNode
    }
    
    insertNode(item) {
        if (!this.head) {
            this.head = new SinglyLinkedListNode(item);
        } else {
            this.head.next = new SinglyLinkedListNode(item);
        }
    }
    
    mergeList(list) {
        if (!this.head) {
            this.head = list;
        } else {
            this.head.next = list;
        }
    }
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();

[1, 3, 7].forEach(item => list1.insertNode(item));
[1, 2].forEach(item => list2.insertNode(item));

console.log(mergeLists(list1.head, list2.head));
