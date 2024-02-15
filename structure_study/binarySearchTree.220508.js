class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } 

                current = current.left;
            } 
            if (!current.right) {
                current.right = newNode;
                return this;
            } 

            current = current.right;   
        }
    }

    find(value) {
        if (!this.root) return undefined;

        let current = this.root;

        while(true) {
            if (value === current.value) {
                return current;
            }

            if (value <  current.value) {
                if (!current.left) return undefined;
                current = current.left;
            } else {
                if (!current.right) return undefined;
                current = current.right;
            }
        }
    }

    isContain(value) {
        if (!this.root) return false;

        let current = this.root;
        let found = false;

        while(current && !found) {
            if (value === current.value) {
                return true;
            } else if (value <  current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }
}

const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.left = new Node(7);
// tree.root.right = new Node(15);
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(17);
tree.insert(19);
tree.insert(16);
tree.insert(3);

// console.log({tree})
// console.log('is 1 there?', tree.findInLecture(1))
// console.log('is 5 there?', tree.findInLecture(5))


/**** Algorithm ****/
// TODO: 데이터 입력 어떻게 받을끼?
//  우선 숫자배열로 받는 것을 가정하고 풀어보자

const postOrder = (node) => {
    node?.left && postOrder(node.left);
    node?.right && postOrder(node.right);

    console.log(node?.value);
}

const solution = (preOrder) => {
    // 순서
    // 1. 전위 순회 결과로 BST 인스턴스 생성
    // 2. BST 인스턴스로 후위 순회 진행
    // 3. 결과 반환

    const tree = new BinarySearchTree();

    for (let i = 0; i < preOrder.length; i++) {
        tree.insert(preOrder[i])    
    }

    postOrder(tree.root);
}

const preOrder = [50, 30, 24, 5, 28, 45, 98, 52, 60]
solution(preOrder);

